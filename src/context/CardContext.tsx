// src/context/CardContext.tsx
'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { CardData, CardContextType, InfoCardConfig } from '@/types/card.types'

// 預設卡片資料（模板）
const defaultCards: CardData[] = [
    {
        id: 'travel-level',
        order: 0,
        config: {
            title: '制縣等級',
            subtitle: '顯示您在日本各都道府縣的旅遊經歷等級',
            legendItems: [
                { label: '住居（居住過）', color: '#fca5a5', level: 5, description: '' },     // red-300
                { label: '宿泊（住宿過）', color: '#fdba74', level: 4, description: '' },     // orange-300
                { label: '訪問（遊玩過）', color: '#fde68a', level: 3, description: '' },     // yellow-300
                { label: '接地（休息、換車等）', color: '#86efac', level: 2, description: '' }, // green-300
                { label: '通過（路過）', color: '#93c5fd', level: 1, description: '' },       // blue-300
                { label: '未到訪', color: '#e5e7eb', level: 0, description: '' }              // gray-200
            ]

        }
    },
    {
        id: 'safety-index',
        order: 1,
        config: {
            title: '安全指數',
            subtitle: '各都道府縣的安全評級',
            legendItems: [
                { label: '非常安全', color: '#6ee7b7', level: '90-100', description: '' },     // emerald-300
                { label: '安全', color: '#a7f3d0', level: '75-89', description: '' },          // green-200
                { label: '普通', color: '#fde68a', level: '60-74', description: '' },          // yellow-300
                { label: '需注意', color: '#fdba74', level: '45-59', description: '' },        // orange-300
                { label: '危險', color: '#fca5a5', level: '0-44', description: '' }            // red-300
            ]

        }
    },
    {
        id: 'population-density',
        order: 2,
        config: {
            title: '人口密度',
            subtitle: '每平方公里人口數',
            legendItems: [
                { label: '類別 A', color: '#7dd3fc', level: '等級 5', description: '' },      // sky-300
                { label: '類別 B', color: '#93c5fd', level: '等級 4', description: '' },      // blue-300
                { label: '類別 C', color: '#a5b4fc', level: '等級 3', description: '' },      // indigo-300
                { label: '類別 D', color: '#c4b5fd', level: '等級 2', description: '' },      // violet-300
                { label: '類別 E', color: '#d8b4fe', level: '等級 1', description: '' }       // purple-300
            ]


        }
    },
    {
        id: 'custom-data',
        order: 3,
        config: {
            title: '自訂數據',
            subtitle: '您可以自訂想要顯示的數據類型',
            legendItems: [
                { label: '類別 A', color: '#06b6d4', level: '等級 5', description: '' },
                { label: '類別 B', color: '#0ea5e9', level: '等級 4', description: '' },
                { label: '類別 C', color: '#3b82f6', level: '等級 3', description: '' },
                { label: '類別 D', color: '#6366f1', level: '等級 2', description: '' },
                { label: '類別 E', color: '#8b5cf6', level: '等級 1', description: '' }
            ]
        }
    }
]

const CardContext = createContext<CardContextType | undefined>(undefined)

export function CardProvider({ children }: { children: ReactNode }) {
    const [cards, setCards] = useState<CardData[]>(defaultCards)
    const [selectedCardId, setSelectedCardId] = useState<string | null>(defaultCards[0].id)
    const [activeCardConfig, setActiveCardConfig] = useState<InfoCardConfig | null>(null)

    // 當選擇卡片時，複製模板資料到 activeCardConfig
    useEffect(() => {
        if (selectedCardId) {
            const selectedCard = cards.find(card => card.id === selectedCardId)
            if (selectedCard) {
                // 深拷貝配置，避免修改到原始模板
                setActiveCardConfig(JSON.parse(JSON.stringify(selectedCard.config)))
            }
        }
    }, [selectedCardId, cards])

    const selectCard = (cardId: string) => {
        setSelectedCardId(cardId)
    }

    const reorderCards = (newCards: CardData[]) => {
        setCards(newCards)
    }

    const updateActiveCardConfig = (newConfig: InfoCardConfig) => {
        setActiveCardConfig(newConfig)
    }

    return (
        <CardContext.Provider
            value={{
                cards,
                selectedCardId,
                activeCardConfig,
                selectCard,
                reorderCards,
                updateActiveCardConfig
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