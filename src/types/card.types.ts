// src/types/card.types.ts

// InfoCard 的圖例項目
export interface LegendItem {
  label: string
  description: string
  color: string
  level: string | number
}

// InfoCard 的配置
export interface InfoCardConfig {
  title: string
  subtitle?: string
  legendItems: LegendItem[]
}

// 卡片資料
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
  reorderCards: (newCards: CardData[]) => void
  updateActiveCardConfig: (config: InfoCardConfig) => void
}