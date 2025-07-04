'use client'

import { useEffect, useState, useRef } from 'react'
import { useCardContext } from '@/context/CardContext'
import InfoCard from './InfoCard'
import { useMapClick } from '@/hooks/useMapClick'
import html2canvas from 'html2canvas-pro'
import { BsCameraReels } from "react-icons/bs"
import { AiFillTikTok } from "react-icons/ai"
import { SiYoutubeshorts } from "react-icons/si"
import { LuDownload, LuUpload } from "react-icons/lu";

export default function MapCanvas() {
    const { activeCardConfig } = useCardContext()
    const [svgContent, setSvgContent] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [svgLoaded, setSvgLoaded] = useState<boolean>(false)
    const [showDownloadMenu, setShowDownloadMenu] = useState<boolean>(false)
    const containerRef = useRef<HTMLDivElement>(null!)
    const mapContainerRef = useRef<HTMLDivElement>(null!)

    // 拖移相關的狀態
    const [isEditMode, setIsEditMode] = useState(false) // 編輯模式
    const [isDragging, setIsDragging] = useState(false)
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
    const [position, setPosition] = useState({ x: 16, y: 16 }) // 初始位置 (對應 top-4 left-4)
    const infoCardRef = useRef<HTMLDivElement>(null!)
    const longPressTimer = useRef<NodeJS.Timeout | null>(null)
    const startPos = useRef({ x: 0, y: 0 })

    // 使用自定義 Hook 處理點擊
    useMapClick(containerRef, svgLoaded)

    useEffect(() => {
        console.log('MapCanvas useEffect triggered')

        // 載入 SVG
        fetch('/map/japan.svg')
            .then(res => res.text())
            .then(svg => {
                console.log('SVG loaded')

                // 處理 SVG，確保它有正確的屬性
                const parser = new DOMParser()
                const doc = parser.parseFromString(svg, 'image/svg+xml')
                const svgElement = doc.querySelector('svg')

                if (svgElement) {
                    svgElement.classList.add('geolonia-svg-map')
                    // 移除固定的寬高，讓 SVG 可以自適應
                    svgElement.removeAttribute('width')
                    svgElement.removeAttribute('height')

                    // 確保有 viewBox
                    if (!svgElement.hasAttribute('viewBox')) {
                        const width = svgElement.getAttribute('width') || '800'
                        const height = svgElement.getAttribute('height') || '600'
                        svgElement.setAttribute('viewBox', `0 0 ${width} ${height}`)
                    }

                    // 設定 preserveAspectRatio 保持比例
                    svgElement.setAttribute('preserveAspectRatio', 'xMidYMid meet')

                    // 設定樣式讓 SVG 填滿容器
                    svgElement.style.width = '100%'
                    svgElement.style.height = '100%'
                    svgElement.style.maxWidth = '100%'
                    svgElement.style.maxHeight = '100%'

                    setSvgContent(svgElement.outerHTML)
                    setIsLoading(false)

                    // 通知 SVG 已載入
                    setTimeout(() => setSvgLoaded(true), 0)
                }
            })
            .catch(err => {
                console.error('Failed to load SVG:', err)
                setIsLoading(false)
            })
    }, [])

    // 處理長按開始
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        // 如果已經在編輯模式，直接開始拖動
        if (isEditMode) {
            if (!infoCardRef.current || !mapContainerRef.current) return

            const rect = infoCardRef.current.getBoundingClientRect()

            // 計算滑鼠點擊位置相對於 InfoCard 的偏移
            setDragOffset({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            })

            setIsDragging(true)
            e.preventDefault()
            return
        }

        // 記錄開始位置
        startPos.current = { x: e.clientX, y: e.clientY }

        // 設定長按計時器（500ms）
        longPressTimer.current = setTimeout(() => {
            // 進入編輯模式
            setIsEditMode(true)
            // 可以加入震動效果（如果瀏覽器支援）
            if ('vibrate' in navigator) {
                navigator.vibrate(50)
            }
        }, 500) // 500ms 長按時間
    }

    // 處理滑鼠放開或移動（取消長按）
    const handleMouseUp = () => {
        // 清除長按計時器
        if (longPressTimer.current) {
            clearTimeout(longPressTimer.current)
            longPressTimer.current = null
        }

        // 如果在拖動中，結束拖動
        if (isDragging) {
            setIsDragging(false)
        }
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        // 如果滑鼠移動超過 5px，取消長按（避免誤觸）
        if (longPressTimer.current) {
            const moveDistance = Math.sqrt(
                Math.pow(e.clientX - startPos.current.x, 2) +
                Math.pow(e.clientY - startPos.current.y, 2)
            )
            if (moveDistance > 5) {
                clearTimeout(longPressTimer.current)
                longPressTimer.current = null
            }
        }
    }

    // 處理拖動
    useEffect(() => {
        if (!isDragging || !isEditMode) return

        const handleGlobalMouseMove = (e: MouseEvent) => {
            if (!mapContainerRef.current || !infoCardRef.current) return

            const containerRect = mapContainerRef.current.getBoundingClientRect()
            const cardRect = infoCardRef.current.getBoundingClientRect()

            // 計算新位置
            let newX = e.clientX - containerRect.left - dragOffset.x
            let newY = e.clientY - containerRect.top - dragOffset.y

            // 邊界限制 - 確保 InfoCard 不會超出 MapCanvas
            const maxX = containerRect.width - cardRect.width
            const maxY = containerRect.height - cardRect.height
            newX = Math.max(0, Math.min(newX, maxX))
            newY = Math.max(0, Math.min(newY, maxY))

            setPosition({ x: newX, y: newY })
        }

        const handleGlobalMouseUp = () => {
            setIsDragging(false)
        }

        document.addEventListener('mousemove', handleGlobalMouseMove)
        document.addEventListener('mouseup', handleGlobalMouseUp)

        return () => {
            document.removeEventListener('mousemove', handleGlobalMouseMove)
            document.removeEventListener('mouseup', handleGlobalMouseUp)
        }
    }, [isDragging, isEditMode, dragOffset])

    // 退出編輯模式
    const exitEditMode = (e: React.MouseEvent) => {
        e.stopPropagation() // 防止觸發拖動
        setIsEditMode(false)
        setIsDragging(false)
    }

    // 下載功能
    const handleDownload = async (platform: 'tiktok' | 'reels' | 'shorts') => {
        if (!mapContainerRef.current) return

        // 關閉選單
        setShowDownloadMenu(false)

        try {
            // 動態引入 html2canvas
            const html2canvas = (await import('html2canvas-pro')).default

            // 設定 html2canvas 選項
            const canvas = await html2canvas(mapContainerRef.current, {
                backgroundColor: '#ffffff',
                scale: 2, // 提高解析度
                logging: false,
                useCORS: true,
                allowTaint: true
            })

            // 轉換為 JPG 並下載
            canvas.toBlob((blob) => {
                if (blob) {
                    const url = URL.createObjectURL(blob)
                    const link = document.createElement('a')
                    link.download = `map-${platform}-${new Date().getTime()}.jpg`
                    link.href = url
                    link.click()
                    URL.revokeObjectURL(url)
                }
            }, 'image/jpeg', 0.95)
        } catch (error) {
            console.error('下載失敗:', error)
            alert('下載失敗，請稍後再試')
        }
    }

    return (
        <div ref={mapContainerRef} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 h-full relative overflow-hidden">
            {/* 加入晃動動畫的 CSS */}
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes wiggle {
                        0% { transform: rotate(0deg); }
                        25% { transform: rotate(-1deg); }
                        75% { transform: rotate(1deg); }
                        100% { transform: rotate(0deg); }
                    }
                    
                    .wiggle-animation {
                        animation: wiggle 0.3s ease-in-out infinite;
                        transform-origin: center center;
                    }
                `
            }} />

            {/* InfoCard 疊加在地圖上 - 現在可以拖動 */}
            {activeCardConfig && (
                <div
                    ref={infoCardRef}
                    className={`absolute z-10 ${isEditMode ? 'wiggle-animation' : ''}`}
                    style={{
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                        cursor: isEditMode ? (isDragging ? 'grabbing' : 'grab') : 'default',
                        userSelect: 'none',
                        // 編輯模式時的視覺效果
                        filter: isEditMode
                            ? 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))'
                            : 'none',
                        transition: isEditMode ? 'none' : 'filter 0.3s'
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseUp} // 滑鼠離開時也要清除計時器
                >
                    <InfoCard config={activeCardConfig} enableColorPicker={true} />

                    {/* iOS 風格的關閉按鈕 */}
                    {isEditMode && (
                        <button
                            onClick={exitEditMode}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 
                                     rounded-full flex items-center justify-center text-white
                                     shadow-md transition-colors"
                            style={{
                                animation: 'fadeIn 0.2s ease-out'
                            }}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>
            )}
            {/*upload background image*/}
            <div className="absolute bottom-4 right-64 z-10">
                <button

                    className="bg-white hover:bg-gray-50 text-gray-700 p-2.5 rounded-full shadow-lg transition-all hover:shadow-xl"
                    title="上傳背景圖片"
                >
                    <LuUpload className="w-5 h-5" />
                </button>
            </div>

            {/* 下載按鈕群組 */}
            <div className="absolute bottom-4 right-4 z-10">
                {/* 主下載按鈕 */}
                <button
                    onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                    className="bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg transition-all hover:shadow-xl"
                    title="下載地圖"
                >
                    <LuDownload className="w-5 h-5" />
                </button>

                {/* 扇形展開的選項 */}
                <div className={`absolute bottom-0 right-0 transition-all duration-300 ${showDownloadMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    {/* TikTok */}
                    <button
                        onClick={() => handleDownload('tiktok')}
                        className="absolute bottom-16 right-0 bg-white hover:bg-gray-50 text-gray-700 p-2.5 rounded-full shadow-lg transition-all hover:shadow-xl group"
                        style={{
                            transform: showDownloadMenu ? 'translate(0, 0)' : 'translate(0, 60px)',
                            transitionDelay: '0ms'
                        }}
                    >
                        <AiFillTikTok className="w-5 h-5" />
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                            TikTok
                        </span>
                    </button>

                    {/* Instagram Reels */}
                    <button
                        onClick={() => handleDownload('reels')}
                        className="absolute bottom-12 right-12 bg-white hover:bg-gray-50 text-gray-700 p-2.5 rounded-full shadow-lg transition-all hover:shadow-xl group"
                        style={{
                            transform: showDownloadMenu ? 'translate(0, 0)' : 'translate(42px, 42px)',
                            transitionDelay: '50ms'
                        }}
                    >
                        <BsCameraReels className="w-5 h-5" />
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                            Instagram Reels
                        </span>
                    </button>

                    {/* YouTube Shorts */}
                    <button
                        onClick={() => handleDownload('shorts')}
                        className="absolute bottom-0 right-16 bg-white hover:bg-gray-50 text-gray-700 p-2.5 rounded-full shadow-lg transition-all hover:shadow-xl group"
                        style={{
                            transform: showDownloadMenu ? 'translate(0, 0)' : 'translate(60px, 0)',
                            transitionDelay: '100ms'
                        }}
                    >
                        <SiYoutubeshorts className="w-5 h-5" />
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                            YouTube Shorts
                        </span>
                    </button>
                </div>
            </div>

            {/* 地圖內容 */}
            {isLoading ? (
                <div className="h-full flex items-center justify-center">
                    <div className="text-gray-400">載入地圖中...</div>
                </div>
            ) : (
                <div
                    ref={(el) => {
                        if (!el) return
                        containerRef.current = el
                        if (el.querySelector('svg')) return
                        el.innerHTML = svgContent

                        const svgEl = el.querySelector('svg')
                        if (!svgEl) return

                        svgEl.setAttribute('width', '100%')
                        svgEl.setAttribute('height', '100%')
                        svgEl.setAttribute('preserveAspectRatio', 'xMidYMid meet')
                        if (!svgEl.hasAttribute('viewBox')) {
                            svgEl.setAttribute('viewBox', '0 0 1000 1000') // 根據你的 SVG 調整
                        }

                        svgEl.querySelectorAll('text').forEach(textEl => {
                            textEl.setAttribute('font-family', 'Yomogi, sans-serif')
                            textEl.setAttribute('font-size', '24px')
                            textEl.setAttribute('text-anchor', 'middle')
                            textEl.setAttribute('dominant-baseline', 'central')
                            textEl.setAttribute('paint-order', 'stroke')
                            textEl.setAttribute('stroke-width', '0')
                            textEl.setAttribute('stroke', 'none')
                        })
                    }}
                    className="w-full h-full flex items-center justify-center relative"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                />
            )}

        </div>
    )
}