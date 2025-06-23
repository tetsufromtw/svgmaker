'use client'

import { useEffect, useState, useRef } from 'react'
import { useCardContext } from '@/context/CardContext'
import InfoCard from './InfoCard'
import { useMapClick } from '@/hooks/useMapClick'
import html2canvas from 'html2canvas-pro'
import { BsCameraReels } from "react-icons/bs"
import { AiFillTikTok } from "react-icons/ai"
import { SiYoutubeshorts } from "react-icons/si"

export default function MapCanvas() {
    const { activeCardConfig } = useCardContext()
    const [svgContent, setSvgContent] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [svgLoaded, setSvgLoaded] = useState<boolean>(false)
    const [showDownloadMenu, setShowDownloadMenu] = useState<boolean>(false)
    const containerRef = useRef<HTMLDivElement>(null!)
    const mapContainerRef = useRef<HTMLDivElement>(null!)

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
            {/* InfoCard 疊加在地圖上 - 確保是絕對定位 */}
            {activeCardConfig && (
                <div className="absolute top-4 left-4 z-10">
                    <InfoCard config={activeCardConfig} enableColorPicker={true} />
                </div>
            )}

            {/* 下載按鈕群組 */}
            <div className="absolute bottom-4 right-4 z-10">
                {/* 主下載按鈕 */}
                <button
                    onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                    className="bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg transition-all hover:shadow-xl"
                    title="下載地圖"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
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
                        {/* TikTok 音符圖標 */}
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
                        {/* Instagram 相機圖標 */}
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
                        {/* YouTube 播放按鈕 */}
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
                    ref={containerRef}
                    className="w-full h-full flex items-center justify-center relative"
                    dangerouslySetInnerHTML={{ __html: svgContent }}
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