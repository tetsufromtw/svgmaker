// src/components/DraggableCard.tsx
'use client'

import { useState } from 'react'
import { CardData } from '@/types/card.types'
import { useCardContext } from '@/context/CardContext'

interface DraggableCardProps {
    card: CardData
    index: number
    onDragStart: (index: number) => void
    onDragOver: (index: number) => void
    onDragEnd: () => void
}

export default function DraggableCard({
    card,
    index,
    onDragStart,
    onDragOver,
    onDragEnd
}: DraggableCardProps) {
    const { selectedCardId, selectCard } = useCardContext()
    const [isDragging, setIsDragging] = useState(false)
    const isSelected = selectedCardId === card.id

    const handleDragStart = (e: React.DragEvent) => {
        setIsDragging(true)
        onDragStart(index)
        // 設定拖拽數據
        e.dataTransfer.effectAllowed = 'move'
    }

    const handleDragEnd = () => {
        setIsDragging(false)
        onDragEnd()
    }

    const handleClick = () => {
        selectCard(card.id)
    }

    return (
        <div
            draggable
            onDragStart={handleDragStart}
            onDragOver={(e) => {
                e.preventDefault()
                onDragOver(index)
            }}
            onDragEnd={handleDragEnd}
            onClick={handleClick}
            className={`
        min-w-[200px] h-[120px] p-4 rounded-lg cursor-move
        transition-all duration-200 select-none
        ${isDragging ? 'opacity-50' : ''}
        ${isSelected
                    ? 'bg-blue-500 text-white shadow-lg scale-105'
                    : 'bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md'
                }
      `}
        >
            <h3 className={`font-semibold text-sm mb-2 ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                {card.title}
            </h3>

            {card.type === 'info' && (
                <p className={`text-xs ${isSelected ? 'text-blue-100' : 'text-gray-600'}`}>
                    {card.content.description}
                </p>
            )}

            {card.type === 'stats' && (
                <div>
                    <div className={`text-2xl font-bold ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                        {card.content.mainValue}
                    </div>
                    <div className={`text-xs ${isSelected ? 'text-blue-100' : 'text-gray-500'}`}>
                        {card.content.subValue}
                    </div>
                </div>
            )}
        </div>
    )
}