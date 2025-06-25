// src/components/EditableInfoCard.tsx
'use client'

import { useState, useEffect } from 'react'
import { InfoCardConfig, LegendItem } from '@/types/card.types'
import { useCardContext } from '@/context/CardContext'

// 生成隨機顏色（確保顏色夠鮮明）
function generateRandomColor(): string {
    const hue = Math.floor(Math.random() * 360)
    const saturation = 50 + Math.floor(Math.random() * 50) // 50-100%
    const lightness = 40 + Math.floor(Math.random() * 30) // 40-70%
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

// 轉換 HSL 到 HEX
function hslToHex(hsl: string): string {
    const match = hsl.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/)
    if (!match) return '#808080'

    const h = parseInt(match[1]) / 360
    const s = parseInt(match[2]) / 100
    const l = parseInt(match[3]) / 100

    const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1
        if (t > 1) t -= 1
        if (t < 1 / 6) return p + (q - p) * 6 * t
        if (t < 1 / 2) return q
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
        return p
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q

    const r = Math.round(hue2rgb(p, q, h + 1 / 3) * 255)
    const g = Math.round(hue2rgb(p, q, h) * 255)
    const b = Math.round(hue2rgb(p, q, h - 1 / 3) * 255)

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
}

export default function EditableInfoCard() {
    const { activeCardConfig, updateActiveCardConfig } = useCardContext()
    const [localConfig, setLocalConfig] = useState<InfoCardConfig | null>(null)

    useEffect(() => {
        setLocalConfig(activeCardConfig)
    }, [activeCardConfig])

    if (!localConfig) {
        return (
            <div className="h-full flex items-center justify-center text-gray-400">
                請選擇一個卡片來編輯
            </div>
        )
    }

    const handleTitleChange = (value: string) => {
        const newConfig = { ...localConfig, title: value }
        setLocalConfig(newConfig)
        updateActiveCardConfig(newConfig)
    }

    const handleSubtitleChange = (value: string) => {
        const newConfig = { ...localConfig, subtitle: value }
        setLocalConfig(newConfig)
        updateActiveCardConfig(newConfig)
    }

    const handleLegendLabelChange = (index: number, value: string) => {
        const newConfig = {
            ...localConfig,
            legendItems: localConfig.legendItems.map((item, i) =>
                i === index ? { ...item, label: value } : item
            )
        }
        setLocalConfig(newConfig)
        updateActiveCardConfig(newConfig)
    }

    const handleDeleteItem = (index: number) => {
        // 至少保留一個項目
        if (localConfig.legendItems.length <= 1) return

        const newConfig = {
            ...localConfig,
            legendItems: localConfig.legendItems.filter((_, i) => i !== index)
        }
        setLocalConfig(newConfig)
        updateActiveCardConfig(newConfig)
    }

    const handleAddItem = () => {
        // 最多6個項目
        if (localConfig.legendItems.length >= 6) return

        // 生成新項目
        const newLevel = localConfig.legendItems.length > 0
            ? Math.max(0, (localConfig.legendItems[localConfig.legendItems.length - 1].level as number || 0) - 1)
            : 0

        const newItem: LegendItem = {
            label: '新項目',
            color: hslToHex(generateRandomColor()),
            level: newLevel,
            description: ''
        }

        const newConfig = {
            ...localConfig,
            legendItems: [...localConfig.legendItems, newItem]
        }
        setLocalConfig(newConfig)
        updateActiveCardConfig(newConfig)
    }

    return (
        <div className="h-full flex flex-col bg-white rounded-lg shadow-lg overflow-y-auto">
            {/* 固定的標題區 */}
            <div className="p-4 pb-0">
                {/* 標題編輯 */}
                <div className="mb-3">
                    <label className="block text-xs text-gray-500 mb-1">標題</label>
                    <input
                        type="text"
                        value={localConfig.title}
                        onChange={(e) => handleTitleChange(e.target.value)}
                        className="w-full px-2 py-1 text-lg font-bold border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* 副標題編輯 */}
                <div className="mb-4">
                    <label className="block text-xs text-gray-500 mb-1">副標題</label>
                    <input
                        type="text"
                        value={localConfig.subtitle || ''}
                        onChange={(e) => handleSubtitleChange(e.target.value)}
                        className="w-full px-2 py-1 text-sm text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="選填"
                    />
                </div>
            </div>

            {/* 可滾動的圖例區 */}
            {/* <div className="flex-1 px-4 pb-4 overflow-y-auto min-h-0"> */}
            <div className="space-y-2">
                <label className="block text-xs text-gray-500 mb-1">圖例項目</label>
                {localConfig.legendItems.map((item, index) => (
                    <div key={index} className="grid grid-cols-[auto_auto_1fr_auto] items-center gap-2">
                        {/* 刪除按鈕 */}
                        <button
                            onClick={() => handleDeleteItem(index)}
                            className="w-6 h-6 flex items-center justify-center text-red-500 hover:bg-red-50 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            disabled={localConfig.legendItems.length <= 1}
                            title={localConfig.legendItems.length <= 1 ? "至少需要保留一個項目" : "刪除此項目"}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                        </button>

                        <div
                            className="w-4 h-4 rounded flex-shrink-0"
                            style={{ backgroundColor: item.color }}
                        />
                        <input
                            type="text"
                            value={item.label}
                            onChange={(e) => handleLegendLabelChange(index, e.target.value)}
                            className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <span className="text-sm text-gray-600 flex-shrink-0">
                            {typeof item.level === 'number' ? `等級：${item.level}` : item.level}
                        </span>
                    </div>
                ))}

                {/* 新增按鈕 */}
                {localConfig.legendItems.length < 6 && (
                    <button
                        onClick={handleAddItem}
                        className="w-full py-2 flex items-center justify-center gap-2 text-blue-600 hover:bg-blue-50 rounded border border-dashed border-blue-300 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span className="text-sm">新增項目</span>
                    </button>
                )}
            </div>
        </div>
        // </div>
    )
}