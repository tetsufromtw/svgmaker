// src/components/ControlPanel.tsx
'use client'

export default function ControlPanel() {
    return (
        <div className="h-full bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-4 overflow-hidden flex flex-col">
            {/* 標題區 */}
            <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-800">輸出設定</h2>
                <p className="text-sm text-gray-600">調整地圖輸出選項</p>
            </div>

            {/* 內容區 - 暫時放置佔位符 */}
            <div className="flex-1 flex items-center justify-center text-gray-400">
                <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-sm">控制面板功能</p>
                    <p className="text-xs mt-1">即將推出</p>
                </div>
            </div>
        </div>
    )
}