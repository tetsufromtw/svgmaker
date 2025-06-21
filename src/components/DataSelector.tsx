// src/components/DataSelector.tsx
'use client'

import CardDisplay from './CardDisplay'
import CardCarousel from './CardCarousel'

export default function DataSelector() {
    // return (
    //     <div className="flex gap-4 h-[200px]">
    //         {/* 左側 - 卡片顯示區 */}
    //         <div className="w-1/3 bg-gray-50 rounded-lg p-4">
    //             <CardDisplay />
    //         </div>

    //         {/* 右側 - 卡片輪播區 */}
    //         <div className="flex-1 bg-gray-50 rounded-lg p-4">
    //             <CardCarousel />
    //         </div>
    //     </div>
    // )
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto">
            {/* 手機上下排列，桌面左右排列 */}
            <div className="md:col-span-1 bg-gray-50 rounded-lg p-4">
                <CardDisplay />
            </div>
            <div className="md:col-span-2 bg-gray-50 rounded-lg p-4">
                <CardCarousel />
            </div>
        </div>
    )
}