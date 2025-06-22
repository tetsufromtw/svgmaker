// src/components/MapCanvas.tsx
'use client'

import { useEffect, useState, useRef } from 'react'
import InfoCard from './InfoCard'
import { useMapClick } from '@/hooks/useMapClick'
import { useCardContext } from '@/context/CardContext'

export default function MapCanvas() {
    const { cards, selectedCardId } = useCardContext()
    const [svgContent, setSvgContent] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [svgLoaded, setSvgLoaded] = useState<boolean>(false)
    const containerRef = useRef<HTMLDivElement>(null!)

    // 使用自定義 Hook 處理點擊
    useMapClick(containerRef, svgLoaded)

    const selectedCard = cards.find(card => card.id === selectedCardId)

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

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 h-full relative overflow-hidden">
            {/* InfoCard 疊加在地圖上 - 確保是絕對定位 */}
            {selectedCard && (
                <div className="absolute top-4 left-4 z-10">
                    <InfoCard config={selectedCard.config} enableColorPicker={true} />
                </div>
            )}

            {/* 地圖內容 */}
            {isLoading ? (
                <div className="h-full flex items-center justify-center">
                    <div className="text-gray-400">載入地圖中...</div>
                </div>
            ) : (
                <div
                    ref={containerRef}
                    className="w-full h-full flex items-center justify-center"
                    dangerouslySetInnerHTML={{ __html: svgContent }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                />
            )}
        </div>
    )
}