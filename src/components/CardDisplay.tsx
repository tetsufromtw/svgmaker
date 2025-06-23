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

    // 統一使用 InfoCard 顯示
    return (
        <div className="h-full flex items-center justify-center">
            <InfoCard config={selectedCard.config} />
        </div>
    )
}