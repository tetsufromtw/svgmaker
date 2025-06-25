// src/components/LeftPanel.tsx
'use client'

import EditableInfoCard from './EditableInfoCard'

export default function LeftPanel() {
    return (
        <div className="h-full bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-4 overflow-hidden flex flex-col">
            {/* 標題區 */}
            <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-800 text-center">卡片編輯器</h2>
                <p className="text-sm text-gray-600 text-center">編輯選中的資訊卡片內容</p>
            </div>

            {/* 編輯區 */}
            <div className="flex-1 overflow-hidden">
                <EditableInfoCard />
            </div>
        </div>
    )
}