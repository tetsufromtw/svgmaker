// src/components/DraggableCard.tsx
'use client'

import { useState } from 'react'
import { CardData } from '@/types/card.types'
import { useCardContext } from '@/context/CardContext'
import InfoCard from './InfoCard'

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
        cursor-move transition-all duration-200 select-none
        ${isDragging ? 'opacity-50' : ''}
        ${isSelected ? 'scale-105 ring-4 ring-blue-400 ring-offset-2 rounded-lg' : ''}
      `}
        >
            <InfoCard
                config={card.config}
                className={isSelected ? 'shadow-xl' : 'hover:shadow-lg'}
            />
        </div>
    )
}