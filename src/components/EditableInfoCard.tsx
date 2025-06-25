// src/components/EditableInfoCard.tsx
'use client'

import { useCardContext } from '@/context/CardContext'
import { useState } from 'react'

export default function EditableInfoCard() {
    const { activeCardConfig, updateActiveCardConfig } = useCardContext()
    const [isEditingTitle, setIsEditingTitle] = useState(false)
    const [isEditingSubtitle, setIsEditingSubtitle] = useState(false)
    const [editingItemIndex, setEditingItemIndex] = useState<number | null>(null)
    const [editingLevelIndex, setEditingLevelIndex] = useState<number | null>(null)

    if (!activeCardConfig) {
        return (
            <div className="text-center text-gray-400 py-8">
                <p>請先選擇一張卡片</p>
            </div>
        )
    }

    const handleTitleChange = (value: string) => {
        updateActiveCardConfig({
            ...activeCardConfig,
            title: value
        })
    }

    const handleSubtitleChange = (value: string) => {
        updateActiveCardConfig({
            ...activeCardConfig,
            subtitle: value
        })
    }

    const handleLegendItemChange = (index: number, field: 'label' | 'level' | 'description', value: string | number) => {
        const newLegendItems = [...activeCardConfig.legendItems]
        newLegendItems[index] = {
            ...newLegendItems[index],
            [field]: value
        }
        updateActiveCardConfig({
            ...activeCardConfig,
            legendItems: newLegendItems
        })
    }

    const handleRemoveLegendItem = (index: number) => {
        const newLegendItems = activeCardConfig.legendItems.filter((_, i) => i !== index)
        updateActiveCardConfig({
            ...activeCardConfig,
            legendItems: newLegendItems
        })
    }

    const toggleLevelVisibility = (index: number) => {
        const newLegendItems = [...activeCardConfig.legendItems]
        newLegendItems[index] = {
            ...newLegendItems[index],
            hideLevel: !newLegendItems[index].hideLevel
        }
        updateActiveCardConfig({
            ...activeCardConfig,
            legendItems: newLegendItems
        })
    }

    return (
        <div className="h-full flex flex-col overflow-hidden">
            {/* 卡片預覽區 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
                <div className="max-w-sm mx-auto">
                    {/* 標題編輯 */}
                    <div className="mb-2">
                        {isEditingTitle ? (
                            <input
                                type="text"
                                value={activeCardConfig.title}
                                onChange={(e) => handleTitleChange(e.target.value)}
                                onBlur={() => setIsEditingTitle(false)}
                                onKeyDown={(e) => e.key === 'Enter' && setIsEditingTitle(false)}
                                className="w-full text-lg font-bold px-2 py-1 border border-blue-400 rounded"
                                autoFocus
                            />
                        ) : (
                            <h3
                                className="text-lg font-bold cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
                                onClick={() => setIsEditingTitle(true)}
                            >
                                {activeCardConfig.title}
                            </h3>
                        )}
                    </div>

                    {/* 副標題編輯 */}
                    <div className="mb-4">
                        {isEditingSubtitle ? (
                            <input
                                type="text"
                                value={activeCardConfig.subtitle}
                                onChange={(e) => handleSubtitleChange(e.target.value)}
                                onBlur={() => setIsEditingSubtitle(false)}
                                onKeyDown={(e) => e.key === 'Enter' && setIsEditingSubtitle(false)}
                                className="w-full text-sm text-gray-600 px-2 py-1 border border-blue-400 rounded"
                                autoFocus
                            />
                        ) : (
                            <p
                                className="text-sm text-gray-600 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
                                onClick={() => setIsEditingSubtitle(true)}
                            >
                                {activeCardConfig.subtitle}
                            </p>
                        )}
                    </div>

                    {/* 圖例項目列表 */}
                    <div className="space-y-1">
                        {activeCardConfig.legendItems.map((item, index) => (
                            <div
                                key={index}
                                className="group flex items-center gap-2 rounded-lg p-2 hover:bg-gray-50"
                            >
                                {/* 移除按鈕 */}
                                <button
                                    onClick={() => handleRemoveLegendItem(index)}
                                    className="rounded p-1 text-red-500 hover:bg-red-50 flex-shrink-0"
                                    title="移除此項目"
                                >
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                                    </svg>
                                </button>

                                {/* 色塊 */}
                                <div
                                    className="h-6 w-6 rounded flex-shrink-0"
                                    style={{ backgroundColor: item.color }}
                                />

                                {/* 標籤名稱 */}
                                {editingItemIndex === index ? (
                                    <input
                                        type="text"
                                        value={item.label}
                                        onChange={(e) => handleLegendItemChange(index, 'label', e.target.value)}
                                        onBlur={() => setEditingItemIndex(null)}
                                        onKeyDown={(e) => e.key === 'Enter' && setEditingItemIndex(null)}
                                        className="flex-[3] text-sm px-2 py-1 border border-blue-400 rounded"
                                        autoFocus
                                    />
                                ) : (
                                    <span
                                        className="flex-[3] text-sm cursor-pointer hover:bg-gray-100 px-1 rounded"
                                        onClick={() => setEditingItemIndex(index)}
                                    >
                                        {item.label}
                                    </span>
                                )}

                                {/* 等級/分數 */}
                                {!item.hideLevel && (
                                    editingLevelIndex === index ? (
                                        <input
                                            type="text"
                                            value={item.level}
                                            onChange={(e) => handleLegendItemChange(index, 'level', e.target.value)}
                                            onBlur={() => setEditingLevelIndex(null)}
                                            onKeyDown={(e) => e.key === 'Enter' && setEditingLevelIndex(null)}
                                            className="flex-[1] text-sm text-gray-500 px-2 py-1 border border-blue-400 rounded"
                                            autoFocus
                                        />
                                    ) : (
                                        <span
                                            className="flex-[1] text-sm text-gray-500 cursor-pointer hover:bg-gray-100 px-1 rounded"
                                            onClick={() => setEditingLevelIndex(index)}
                                        >
                                            {typeof item.level === 'number' ? `等級 ${item.level}` : item.level}
                                        </span>
                                    )
                                )}

                                {/* 操作按鈕 - hover 時顯示 */}
                                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={() => toggleLevelVisibility(index)}
                                        className="rounded p-1 hover:bg-gray-200"
                                        title={item.hideLevel ? "顯示等級" : "隱藏等級"}
                                    >
                                        <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {item.hideLevel ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            ) : (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                            )}
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 編輯提示 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-700">
                <p className="font-semibold mb-1">編輯提示：</p>
                <ul className="space-y-1 text-xs">
                    <li>• 點擊文字可直接編輯</li>
                    <li>• 標籤名稱和等級可分別編輯</li>
                    <li>• 點擊眼睛圖示可隱藏等級顯示</li>
                    <li>• 點擊減號可移除整個項目</li>
                </ul>
            </div>
        </div>
    )
}