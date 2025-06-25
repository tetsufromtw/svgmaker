'use client'

import { useEffect, useState } from 'react'

export default function TestPage() {
    const [svgContent, setSvgContent] = useState<string>('')
    const [method, setMethod] = useState<'innerHTML' | 'object' | 'iframe' | 'img'>('innerHTML')

    useEffect(() => {
        // 載入 SVG
        fetch('/map/japan.svg')
            .then(res => res.text())
            .then(svg => {
                setSvgContent(svg)
            })
            .catch(err => console.error('Failed to load SVG:', err))
    }, [])

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-2xl font-bold mb-4">SVG 顯示測試</h1>

            {/* 切換顯示方法 */}
            <div className="mb-4 space-x-2">
                <button
                    onClick={() => setMethod('innerHTML')}
                    className={`px-4 py-2 rounded ${method === 'innerHTML' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    innerHTML
                </button>
                <button
                    onClick={() => setMethod('object')}
                    className={`px-4 py-2 rounded ${method === 'object' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Object Tag
                </button>
                <button
                    onClick={() => setMethod('iframe')}
                    className={`px-4 py-2 rounded ${method === 'iframe' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    iFrame
                </button>
                <button
                    onClick={() => setMethod('img')}
                    className={`px-4 py-2 rounded ${method === 'img' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    IMG Tag
                </button>
            </div>

            {/* 顯示區域 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-2">方法: {method}</h2>

                <div className="border-2 border-gray-300 rounded p-4" style={{ height: '600px' }}>
                    {method === 'innerHTML' && svgContent && (
                        <div
                            className="w-full h-full"
                            ref={(el) => {
                                if (!el) return

                                el.innerHTML = svgContent

                                const svgEl = el.querySelector('svg')
                                if (!svgEl) return

                                // 🔧 修正大小讓 SVG 填滿容器
                                svgEl.setAttribute('width', '100%')
                                svgEl.setAttribute('height', '100%')
                                svgEl.setAttribute('preserveAspectRatio', 'xMidYMid meet')
                                if (!svgEl.hasAttribute('viewBox')) {
                                    svgEl.setAttribute('viewBox', '0 0 1000 1000') // 根據你的 SVG 實際大小調整
                                }

                                // 🔧 修正 <text> 樣式
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
                        />
                    )}



                    {method === 'object' && (
                        <object
                            data="/map/japan.svg"
                            type="image/svg+xml"
                            className="w-full h-full"
                        >
                            Your browser does not support SVG
                        </object>
                    )}

                    {method === 'iframe' && (
                        <iframe
                            src="/map/japan.svg"
                            className="w-full h-full border-0"
                            title="Japan Map"
                        />
                    )}

                    {method === 'img' && (
                        <img
                            src="/map/japan.svg"
                            alt="Japan Map"
                            className="w-full h-full object-contain"
                        />
                    )}
                </div>
            </div>

            {/* 原始 SVG 內容預覽 */}
            <div className="mt-8 bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-2">原始 SVG 內容（前 500 字元）</h2>
                <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-xs">
                    {svgContent.substring(0, 500)}...
                </pre>
            </div>
        </div>
    )
}