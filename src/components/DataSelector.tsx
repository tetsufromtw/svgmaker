// src/components/DataSelector.tsx
'use client'

import CardDisplay from './CardDisplay'
import CardCarousel from './CardCarousel'

export default function DataSelector() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[250px]">
            {/* 手機上下排列，桌面左右排列 */}
            <div className="md:col-span-1 bg-gray-50 rounded-lg p-4 overflow-auto">
                <CardDisplay />
            </div>
            <div className="md:col-span-2 bg-gray-50 rounded-lg p-4 overflow-hidden">
                <CardCarousel />
            </div>
        </div>
    )
}