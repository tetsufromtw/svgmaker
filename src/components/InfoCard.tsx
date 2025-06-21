// src/components/InfoCard.tsx
'use client'

export default function InfoCard() {
    return (
        <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 w-80">
            {/* 標題 */}
            <h2 className="text-xl font-bold mb-3">制縣等級 5</h2>

            {/* 圖例 */}
            <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="flex-1">住居（居住過）</span>
                    <span className="text-red-600">等級：5</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-orange-500 rounded"></div>
                    <span className="flex-1">宿泊（住宿過）</span>
                    <span className="text-gray-600">等級：4</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                    <span className="flex-1">訪問（遊玩過）</span>
                    <span className="text-gray-600">等級：3</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="flex-1">接地（休息、換車等）</span>
                    <span className="text-gray-600">等級：2</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span className="flex-1">通過（路過）</span>
                    <span className="text-gray-600">等級：1</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    <span className="flex-1">有去過</span>
                    <span className="text-gray-600">等級：0</span>
                </div>
            </div>
        </div>
    )
}