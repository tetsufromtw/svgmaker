// src/components/OutlineCard.tsx
'use client'

import { InfoCardConfig } from '@/types/card.types'

interface OutlineCardProps {
    config: InfoCardConfig
    className?: string
}

export default function OutlineCard({ config, className = '' }: OutlineCardProps) {
    return (
        <div className={`bg-white rounded-lg shadow-lg p-4 w-80 h-[200px] flex flex-col ${className}`}>
            {/* 標題區 */}
            <div className="flex-[3] flex items-center justify-center">
                <h1 className="text-xl font-bold mb-2 text-center">{config.title}</h1>
                {/* {config.subtitle && (
                    <p className="text-sm text-gray-600 text-center">{config.subtitle}</p>
                )} */}
            </div>
            <div className="flex-[1] flex items-center justify-center">
                <p className="text-sm text-gray-600 text-center">{config.subtitle}</p>
            </div>

            {/* 色塊網格 - 自動填充剩餘空間 */}
            <div className="flex-[1] grid grid-cols-[repeat(auto-fit,_minmax(10%,_1fr))] gap-0.5 content-start">
                {config.legendItems.map((item, index) => (
                    <div
                        key={index}
                        className="aspect-square rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        style={{ backgroundColor: item.color }}
                        title={item.label} // 滑鼠懸停時顯示標籤
                    />
                ))}
            </div>
        </div>
    )
}