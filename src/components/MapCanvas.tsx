// src/components/MapCanvas.tsx
'use client'

import { useEffect, useState, useRef } from 'react'
import InfoCard from './InfoCard'

export default function MapCanvas() {
    const [svgContent, setSvgContent] = useState<string>('')
    const [isLoading, setIsLoading] = useState(true)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // 載入 SVG
        fetch('/map/japan.svg')
            .then(res => res.text())
            .then(svg => {
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
                        // 如果沒有 viewBox，嘗試從原始寬高創建
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
                    const prefectureGroups = doc.querySelectorAll('g.prefecture')
                    prefectureGroups.forEach((group) => {
                        const titleElement = group.querySelector('title')
                        const name = titleElement?.textContent?.split('/')[0].trim() || '未知'

                        const path = group.querySelector('path')
                        if (!path) {
                            console.warn('❌ skipping group: no path found')
                            return
                        }

                        const bbox = path.getBBox()

                        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
                        text.setAttribute('x', (bbox.x + bbox.width / 2).toString())
                        text.setAttribute('y', (bbox.y + bbox.height / 2).toString())
                        text.setAttribute('text-anchor', 'middle')
                        text.setAttribute('alignment-baseline', 'middle')
                        text.setAttribute('font-size', '10')
                        text.setAttribute('fill', '#ff0000') // 你看得到的紅色
                        text.textContent = name

                        group.appendChild(text)  // ⬅️ 這裡改成加到 group 裡面
                    })

                    setSvgContent(svgElement.outerHTML)
                }

                setIsLoading(false)
            })
            .catch(err => {
                console.error('Failed to load SVG:', err)
                setIsLoading(false)
            })
    }, [])

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 h-full relative">
            {/* InfoCard 疊加在地圖上 */}
            <InfoCard />

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
                        // 確保 SVG 容器不會溢出
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                />
            )}
        </div>
    )
}