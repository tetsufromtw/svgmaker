// src/components/DataSelector.tsx
'use client'

import { useState } from 'react'
import { useMapContext } from '@/context/MapContext'

const dataTypes = [
    { id: 'travel', label: '制縣等級' },
    { id: 'safety', label: '安全指數' },
    { id: 'population', label: '人口密度' },
    { id: 'custom', label: '自訂數據' },
]

const colorThemes = [
    { id: 'red', label: '紅色系', colors: ['#FEE5D9', '#FCAE91', '#FB6A4A', '#DE2D26', '#A50F15'] },
    { id: 'blue', label: '藍色系', colors: ['#EFF3FF', '#BDD7E7', '#6BAED6', '#3182BD', '#08519C'] },
    { id: 'green', label: '綠色系', colors: ['#EDF8E9', '#BAE4B3', '#74C476', '#31A354', '#006D2C'] },
]

export default function DataSelector() {
    const [selectedData, setSelectedData] = useState('travel')
    const [selectedTheme, setSelectedTheme] = useState('red')
    const [selectedColorIndex, setSelectedColorIndex] = useState(2) // 預設選中間的顏色

    const { setCurrentColor } = useMapContext()

    // 當選擇顏色主題或色階時更新當前顏色
    const handleThemeChange = (themeId: string) => {
        setSelectedTheme(themeId)
        const theme = colorThemes.find(t => t.id === themeId)
        if (theme) {
            setCurrentColor(theme.colors[selectedColorIndex])
        }
    }

    const handleColorIndexChange = (index: number) => {
        setSelectedColorIndex(index)
        const theme = colorThemes.find(t => t.id === selectedTheme)
        if (theme) {
            setCurrentColor(theme.colors[index])
        }
    }

    return (
        <div className="space-y-4">
            {/* 數據類型選擇 */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    選擇數據類型
                </label>
                <div className="grid grid-cols-2 gap-2">
                    {dataTypes.map((type) => (
                        <button
                            key={type.id}
                            onClick={() => setSelectedData(type.id)}
                            className={`
                                px-4 py-2 rounded-md text-sm font-medium transition-all
                                ${selectedData === type.id
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }
                            `}
                        >
                            {type.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* 顏色主題選擇 */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    顏色主題
                </label>
                <div className="flex gap-2">
                    {colorThemes.map((theme) => (
                        <button
                            key={theme.id}
                            onClick={() => handleThemeChange(theme.id)}
                            className={`
                                px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2
                                ${selectedTheme === theme.id
                                    ? 'ring-2 ring-blue-600 bg-gray-50'
                                    : 'bg-gray-100 hover:bg-gray-200'
                                }
                            `}
                        >
                            <span>{theme.label}</span>
                            <div className="flex gap-1">
                                {theme.colors.slice(0, 3).map((color, i) => (
                                    <div
                                        key={i}
                                        className="w-3 h-3 rounded-sm"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* 色階選擇 */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    選擇色階
                </label>
                <div className="flex gap-2">
                    {colorThemes.find(t => t.id === selectedTheme)?.colors.map((color, index) => (
                        <button
                            key={index}
                            onClick={() => handleColorIndexChange(index)}
                            className={`
                                w-10 h-10 rounded-md transition-all
                                ${selectedColorIndex === index
                                    ? 'ring-2 ring-blue-600 scale-110'
                                    : 'hover:scale-105'
                                }
                            `}
                            style={{ backgroundColor: color }}
                            title={`等級 ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* 顯示選項 */}
            <div className="flex gap-4 text-sm">
                <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span>顯示數值</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span>顯示排名</span>
                </label>
            </div>
        </div>
    )
}