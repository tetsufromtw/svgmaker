// src/context/CardContext.tsx
'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { CardData, CardContextType } from '@/types/card.types'

// 預設卡片資料
const defaultCards: CardData[] = [
    {
        id: 'card-1',
        title: '制縣等級',
        type: 'info',
        order: 0,
        content: {
            description: '顯示您在日本各都道府縣的旅遊經歷等級',
            stats: [
                { label: '已訪問', value: '12 個縣' },
                { label: '完成度', value: '25.5%' }
            ]
        }
    },
    {
        id: 'card-2',
        title: '安全指數',
        type: 'stats',
        order: 1,
        content: {
            mainValue: '85',
            subValue: '安全指數',
            trend: 'up',
            trendValue: '+2.3%'
        }
    },
    {
        id: 'card-3',
        title: '人口密度',
        type: 'info',
        order: 2,
        content: {
            description: '各都道府縣人口密度分布',
            stats: [
                { label: '最高', value: '東京都' },
                { label: '最低', value: '北海道' }
            ]
        }
    },
    {
        id: 'card-4',
        title: '自訂數據',
        type: 'info',
        order: 3,
        content: {
            description: '您可以自訂想要顯示的數據類型'
        }
    }
]

const CardContext = createContext<CardContextType | undefined>(undefined)

export function CardProvider({ children }: { children: ReactNode }) {
    const [cards, setCards] = useState<CardData[]>(defaultCards)
    const [selectedCardId, setSelectedCardId] = useState<string | null>(defaultCards[0].id)

    const selectCard = (cardId: string) => {
        setSelectedCardId(cardId)
    }

    const reorderCards = (newCards: CardData[]) => {
        setCards(newCards)
    }

    return (
        <CardContext.Provider
            value={{
                cards,
                selectedCardId,
                selectCard,
                reorderCards
            }}
        >
            {children}
        </CardContext.Provider>
    )
}

export const useCardContext = () => {
    const context = useContext(CardContext)
    if (!context) {
        throw new Error('useCardContext must be used within a CardProvider')
    }
    return context
}