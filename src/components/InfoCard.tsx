// src/components/InfoCard.tsx
'use client'

import { InfoCardConfig } from '@/types/card.types'
import { useMapContext } from '@/context/MapContext'

interface InfoCardProps {
    config: InfoCardConfig
}

export default function InfoCard({ config }: InfoCardProps) {
    const { selectedColor, selectedLevel, setSelectedColor, setSelectedLevel } = useMapContext()
    return (
        <div className="bg-white rounded-lg shadow-md p-4 max-w-sm">
            <h3 className="text-lg font-bold mb-1">{config.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{config.subtitle}</p>

            <div className="space-y-2">
                {config.legendItems.map((item, index) => (
                    <div
                        key={index}
                        className={`flex items-center gap-2 text-sm p-1 rounded cursor-pointer transition-colors
        ${selectedColor === item.color && selectedLevel === item.level
                                ? 'bg-blue-100 ring-2 ring-blue-400'
                                : 'hover:bg-gray-100'
                            }
    `}
                        onClick={() => {
                            setSelectedColor(item.color)
                            setSelectedLevel(item.level)
                        }}
                    >
                        <div
                            className="w-5 h-5 rounded flex-shrink-0"
                            style={{ backgroundColor: item.color }}
                        />
                        <span className="flex-1">{item.label}</span>
                        {!item.hideLevel && (
                            <span className="text-gray-500">
                                {typeof item.level === 'number' ? `等級 ${item.level}` : item.level}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}