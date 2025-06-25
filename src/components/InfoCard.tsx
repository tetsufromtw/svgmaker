// src/components/InfoCard.tsx
'use client'

import { InfoCardConfig } from '@/types/card.types'
import { useMapContext } from '@/context/MapContext'

interface InfoCardProps {
    config: InfoCardConfig
    className?: string
    enableColorPicker?: boolean
}

export default function InfoCard({ config, className = '', enableColorPicker = false }: InfoCardProps) {
    const mapContext = enableColorPicker ? useMapContext() : null

    const handleItemClick = (color: string, level: string | number) => {
        if (enableColorPicker && mapContext) {
            mapContext.setSelectedColor(color)
            mapContext.setSelectedLevel(level)
        }
    }

    return (
        <div className={`bg-white rounded-lg shadow-lg p-4 w-80 max-h-full overflow-hidden ${className}`}>
            {/* 標題 */}
            <h2 className="text-xl font-bold mb-3">{config.title}</h2>
            {config.subtitle && (
                <p className="text-sm text-gray-600 mb-3">{config.subtitle}</p>
            )}

            {/* 圖例 */}
            <div className="space-y-1 text-sm">
                {config.legendItems.map((item, index) => {
                    const isSelected = enableColorPicker &&
                        mapContext?.selectedColor === item.color &&
                        mapContext?.selectedLevel === item.level

                    return (
                        <div
                            key={index}
                            className={`
                flex items-center gap-2 rounded px-2 py-1 transition-all
                ${enableColorPicker ? 'cursor-pointer hover:bg-gray-50' : ''}
                ${isSelected ? 'bg-blue-50 ring-2 ring-blue-400' : ''}
              `}
                            onClick={() => handleItemClick(item.color, item.level)}
                        >
                            <div
                                className={`
                  w-4 h-4 rounded transition-all
                  ${isSelected ? 'ring-2 ring-blue-400 ring-offset-1' : ''}
                `}
                                style={{ backgroundColor: item.color }}
                            />
                            <span className="flex-1">{item.label}</span>
                            <span className={`
                ${isSelected ? 'text-blue-600 font-semibold' : 'text-gray-600'}
              `}>
                                {typeof item.level === 'number' ? `等級：${item.level}` : item.level}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}