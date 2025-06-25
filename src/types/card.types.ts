// src/types/card.types.ts
export interface LegendItem {
    label: string
    color: string
    level: number | string
    description: string
    hideLevel?: boolean  // 隱藏等級顯示
}

export interface InfoCardConfig {
    title: string
    subtitle: string
    legendItems: LegendItem[]
}

export interface CardData {
    id: string
    order: number
    config: InfoCardConfig
}

export interface CardContextType {
    cards: CardData[]
    selectedCardId: string | null
    activeCardConfig: InfoCardConfig | null
    selectCard: (cardId: string) => void
    reorderCards: (cards: CardData[]) => void
    updateActiveCardConfig: (config: InfoCardConfig) => void
}