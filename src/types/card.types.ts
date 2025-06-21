// src/types/card.types.ts

export interface BaseCard {
    id: string
    title: string
    type: 'info' | 'stats' | 'chart' | 'custom'
    order: number
}

export interface InfoCardData extends BaseCard {
    type: 'info'
    content: {
        description?: string
        stats?: Array<{
            label: string
            value: string | number
        }>
    }
}

export interface StatsCardData extends BaseCard {
    type: 'stats'
    content: {
        mainValue: string | number
        subValue?: string
        trend?: 'up' | 'down' | 'neutral'
        trendValue?: string
    }
}

export type CardData = InfoCardData | StatsCardData

export interface CardContextType {
    cards: CardData[]
    selectedCardId: string | null
    selectCard: (cardId: string) => void
    reorderCards: (newCards: CardData[]) => void
}