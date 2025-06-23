// src/components/EditableInfoCard.tsx
'use client'

import { useState, useEffect } from 'react'
import { InfoCardConfig } from '@/types/card.types'
import { useCardContext } from '@/context/CardContext'

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

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-sm">
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

            {/* 圖例編輯 */}
            <div className="space-y-2">
                <label className="block text-xs text-gray-500 mb-1">圖例項目</label>
                {localConfig.legendItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
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
            </div>
        </div>
    )
}