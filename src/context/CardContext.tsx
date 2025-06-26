// src/context/CardContext.tsx
'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { CardData, CardContextType, InfoCardConfig } from '@/types/card.types'
import { useTranslations } from 'next-intl'

// 生成多語系卡片資料的函數
function createDefaultCards(t: any): CardData[] {
    return [
        {
            id: 'travel-level',
            order: 0,
            config: {
                title: t('travelLevel.title'),
                subtitle: t('travelLevel.subtitle'),
                legendItems: [
                    { label: t('travelLevel.levels.residence'), color: '#fca5a5', level: 5, description: '' },
                    { label: t('travelLevel.levels.lodging'), color: '#fdba74', level: 4, description: '' },
                    { label: t('travelLevel.levels.visit'), color: '#fde68a', level: 3, description: '' },
                    { label: t('travelLevel.levels.transit'), color: '#86efac', level: 2, description: '' },
                    { label: t('travelLevel.levels.pass'), color: '#93c5fd', level: 1, description: '' },
                    { label: t('travelLevel.levels.unvisited'), color: '#e5e7eb', level: 0, description: '' }
                ]
            }
        },
        {
            id: 'safety-index',
            order: 1,
            config: {
                title: t('safetyIndex.title'),
                subtitle: t('safetyIndex.subtitle'),
                legendItems: [
                    { label: t('safetyIndex.levels.verySafe'), color: '#6ee7b7', level: '90-100', description: '' },
                    { label: t('safetyIndex.levels.safe'), color: '#a7f3d0', level: '75-89', description: '' },
                    { label: t('safetyIndex.levels.normal'), color: '#fde68a', level: '60-74', description: '' },
                    { label: t('safetyIndex.levels.caution'), color: '#fdba74', level: '45-59', description: '' },
                    { label: t('safetyIndex.levels.dangerous'), color: '#fca5a5', level: '0-44', description: '' }
                ]
            }
        },
        {
            id: 'population-density',
            order: 2,
            config: {
                title: t('populationDensity.title'),
                subtitle: t('populationDensity.subtitle'),
                legendItems: [
                    { label: t('populationDensity.levels.categoryA'), color: '#7dd3fc', level: '等級 5', description: '' },
                    { label: t('populationDensity.levels.categoryB'), color: '#93c5fd', level: '等級 4', description: '' },
                    { label: t('populationDensity.levels.categoryC'), color: '#a5b4fc', level: '等級 3', description: '' },
                    { label: t('populationDensity.levels.categoryD'), color: '#c4b5fd', level: '等級 2', description: '' },
                    { label: t('populationDensity.levels.categoryE'), color: '#d8b4fe', level: '等級 1', description: '' }
                ]
            }
        },
        {
            id: 'custom-data',
            order: 3,
            config: {
                title: t('customData.title'),
                subtitle: t('customData.subtitle'),
                legendItems: [
                    { label: t('customData.levels.categoryA'), color: '#06b6d4', level: '等級 5', description: '' },
                    { label: t('customData.levels.categoryB'), color: '#0ea5e9', level: '等級 4', description: '' },
                    { label: t('customData.levels.categoryC'), color: '#3b82f6', level: '等級 3', description: '' },
                    { label: t('customData.levels.categoryD'), color: '#6366f1', level: '等級 2', description: '' },
                    { label: t('customData.levels.categoryE'), color: '#8b5cf6', level: '等級 1', description: '' }
                ]
            }
        }
    ]
}

const CardContext = createContext<CardContextType | undefined>(undefined)

export function CardProvider({ children }: { children: ReactNode }) {
    const t = useTranslations('cardTemplates')
    const [cards, setCards] = useState<CardData[]>([])
    const [selectedCardId, setSelectedCardId] = useState<string | null>(null)
    const [activeCardConfig, setActiveCardConfig] = useState<InfoCardConfig | null>(null)

    // 初始化卡片資料
    useEffect(() => {
        const defaultCards = createDefaultCards(t)
        setCards(defaultCards)
        if (!selectedCardId && defaultCards.length > 0) {
            setSelectedCardId(defaultCards[0].id)
        }
    }, [t, selectedCardId])

    // 當選擇卡片時，複製模板資料到 activeCardConfig
    useEffect(() => {
        if (selectedCardId && cards.length > 0) {
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