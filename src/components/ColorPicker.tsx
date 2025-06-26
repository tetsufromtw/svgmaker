'use client'

import { useState, useEffect, useRef } from 'react'

interface ColorPickerProps {
    currentColor: string
    onColorSelect: (color: string) => void
    onClose: () => void
    position: { x: number; y: number }
}

// Tailwind CSS xxx-300 顏色定義
const TAILWIND_300_COLORS = [
    { name: 'slate-300', value: '#cbd5e1', class: 'bg-slate-300' },
    { name: 'gray-300', value: '#d1d5db', class: 'bg-gray-300' },
    { name: 'zinc-300', value: '#d4d4d8', class: 'bg-zinc-300' },
    { name: 'neutral-300', value: '#d4d4d4', class: 'bg-neutral-300' },
    { name: 'stone-300', value: '#d6d3d1', class: 'bg-stone-300' },
    
    { name: 'red-300', value: '#fca5a5', class: 'bg-red-300' },
    { name: 'orange-300', value: '#fdba74', class: 'bg-orange-300' },
    { name: 'amber-300', value: '#fcd34d', class: 'bg-amber-300' },
    { name: 'yellow-300', value: '#fde047', class: 'bg-yellow-300' },
    { name: 'lime-300', value: '#bef264', class: 'bg-lime-300' },
    { name: 'green-300', value: '#86efac', class: 'bg-green-300' },
    { name: 'emerald-300', value: '#6ee7b7', class: 'bg-emerald-300' },
    { name: 'teal-300', value: '#5eead4', class: 'bg-teal-300' },
    { name: 'cyan-300', value: '#67e8f9', class: 'bg-cyan-300' },
    { name: 'sky-300', value: '#7dd3fc', class: 'bg-sky-300' },
    { name: 'blue-300', value: '#93c5fd', class: 'bg-blue-300' },
    { name: 'indigo-300', value: '#a5b4fc', class: 'bg-indigo-300' },
    { name: 'violet-300', value: '#c4b5fd', class: 'bg-violet-300' },
    { name: 'purple-300', value: '#d8b4fe', class: 'bg-purple-300' },
    { name: 'fuchsia-300', value: '#f0abfc', class: 'bg-fuchsia-300' },
    { name: 'pink-300', value: '#f9a8d4', class: 'bg-pink-300' },
    { name: 'rose-300', value: '#fda4af', class: 'bg-rose-300' },
]

export default function ColorPicker({ currentColor, onColorSelect, onClose, position }: ColorPickerProps) {
    const pickerRef = useRef<HTMLDivElement>(null)
    
    // 找到當前選中的顏色
    const getCurrentColorInfo = () => {
        return TAILWIND_300_COLORS.find(color => 
            color.value === currentColor || 
            color.value.toLowerCase() === currentColor.toLowerCase()
        )
    }

    const currentColorInfo = getCurrentColorInfo()

    // 點擊外部關閉
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
                onClose()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [onClose])

    // 計算調色盤位置，避免超出視窗邊界
    const getPickerStyle = () => {
        const pickerWidth = 320
        const pickerHeight = 280
        const padding = 16

        let left = position.x
        let top = position.y + 40

        // 檢查右邊界
        if (left + pickerWidth > window.innerWidth - padding) {
            left = window.innerWidth - pickerWidth - padding
        }

        // 檢查左邊界
        if (left < padding) {
            left = padding
        }

        // 檢查下邊界
        if (top + pickerHeight > window.innerHeight - padding) {
            top = position.y - pickerHeight - 8 // 顯示在色塊上方
        }

        return {
            position: 'fixed' as const,
            left: `${left}px`,
            top: `${top}px`,
            zIndex: 1000,
        }
    }

    const handleColorClick = (color: typeof TAILWIND_300_COLORS[0]) => {
        onColorSelect(color.value)
        onClose()
    }

    return (
        <div
            ref={pickerRef}
            style={getPickerStyle()}
            className="bg-white rounded-xl shadow-2xl border border-gray-200 p-4 w-80"
        >
            {/* 標題 */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-800">選擇顏色</h3>
                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* 當前選中顏色顯示 */}
            {currentColorInfo && (
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                        <div 
                            className="w-6 h-6 rounded-md border-2 border-white shadow-sm"
                            style={{ backgroundColor: currentColorInfo.value }}
                        />
                        <div>
                            <div className="text-sm font-medium text-gray-800">{currentColorInfo.name}</div>
                            <div className="text-xs text-gray-500">{currentColorInfo.value}</div>
                        </div>
                    </div>
                </div>
            )}

            {/* 顏色網格 */}
            <div className="grid grid-cols-6 gap-2 max-h-40 overflow-y-auto">
                {TAILWIND_300_COLORS.map((color) => {
                    const isSelected = currentColorInfo?.name === color.name
                    
                    return (
                        <button
                            key={color.name}
                            onClick={() => handleColorClick(color)}
                            className={`
                                relative w-10 h-10 rounded-lg border-2 transition-all duration-200
                                hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                                ${isSelected 
                                    ? 'border-blue-500 ring-2 ring-blue-200 scale-105' 
                                    : 'border-gray-200 hover:border-gray-300'
                                }
                            `}
                            style={{ backgroundColor: color.value }}
                            title={color.name}
                        >
                            {/* 選中狀態的勾選標記 */}
                            {isSelected && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg 
                                        className="w-4 h-4 text-white drop-shadow-sm" 
                                        fill="currentColor" 
                                        viewBox="0 0 20 20"
                                    >
                                        <path 
                                            fillRule="evenodd" 
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                                            clipRule="evenodd" 
                                        />
                                    </svg>
                                </div>
                            )}
                        </button>
                    )
                })}
            </div>

            {/* 底部提示 */}
            <div className="mt-4 text-xs text-gray-500 text-center">
                點擊顏色即可選擇
            </div>
        </div>
    )
}