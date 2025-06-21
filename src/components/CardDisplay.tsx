// src/components/CardDisplay.tsx
'use client'

import { useCardContext } from '@/context/CardContext'
import InfoCard from './InfoCard'

export default function CardDisplay() {
    const { cards, selectedCardId } = useCardContext()

    const selectedCard = cards.find(card => card.id === selectedCardId)

    if (!selectedCard) {
        return (
            <div className="h-full flex items-center justify-center text-gray-400">
                請選擇一個卡片
            </div>
        )
    }

    // 根據卡片類型顯示不同內容
    switch (selectedCard.type) {
        case 'info':
            // 使用現有的 InfoCard 組件
            return <InfoCard />

        case 'stats':
            return (
                <div className="h-full flex flex-col items-center justify-center p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        {selectedCard.title}
                    </h2>
                    <div className="text-center">
                        <div className="text-5xl font-bold text-blue-600">
                            {selectedCard.content.mainValue}
                        </div>
                        <div className="text-lg text-gray-600 mt-2">
                            {selectedCard.content.subValue}
                        </div>
                        {selectedCard.content.trend && (
                            <div className={`
                mt-4 inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm
                ${selectedCard.content.trend === 'up'
                                    ? 'bg-green-100 text-green-700'
                                    : selectedCard.content.trend === 'down'
                                        ? 'bg-red-100 text-red-700'
                                        : 'bg-gray-100 text-gray-700'
                                }
              `}>
                                {selectedCard.content.trend === 'up' && '↑'}
                                {selectedCard.content.trend === 'down' && '↓'}
                                {selectedCard.content.trendValue}
                            </div>
                        )}
                    </div>
                </div>
            )
    }
}