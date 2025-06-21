// src/components/CardCarousel.tsx
'use client'

import { useState, useRef } from 'react'
import { useCardContext } from '@/context/CardContext'
import DraggableCard from './DraggableCard'
import { CardData } from '@/types/card.types'

export default function CardCarousel() {
    const { cards, reorderCards } = useCardContext()
    const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const handleDragStart = (index: number) => {
        setDraggedIndex(index)
    }

    const handleDragOver = (index: number) => {
        if (draggedIndex === null || draggedIndex === index) return

        const newCards = [...cards]
        const draggedCard = newCards[draggedIndex]

        // 移除拖拽的卡片
        newCards.splice(draggedIndex, 1)
        // 插入到新位置
        newCards.splice(index, 0, draggedCard)

        // 更新順序
        newCards.forEach((card, idx) => {
            card.order = idx
        })

        reorderCards(newCards)
        setDraggedIndex(index)
    }

    const handleDragEnd = () => {
        setDraggedIndex(null)
    }

    // 滾動控制
    const scroll = (direction: 'left' | 'right') => {
        if (!scrollContainerRef.current) return

        const scrollAmount = 220 // 卡片寬度 + 間距
        const currentScroll = scrollContainerRef.current.scrollLeft

        scrollContainerRef.current.scrollTo({
            left: direction === 'left'
                ? currentScroll - scrollAmount
                : currentScroll + scrollAmount,
            behavior: 'smooth'
        })
    }

    return (
        <div className="relative group">
            {/* 左箭頭 */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
                   bg-white/90 hover:bg-white rounded-full p-2 shadow-md
                   opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="向左滾動"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* 卡片容器 */}
            <div
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide py-2 px-8"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    ['WebkitScrollbar' as any]: { display: 'none' }
                }}
            >
                {cards.map((card, index) => (
                    <DraggableCard
                        key={card.id}
                        card={card}
                        index={index}
                        onDragStart={handleDragStart}
                        onDragOver={handleDragOver}
                        onDragEnd={handleDragEnd}
                    />
                ))}
            </div>

            {/* 右箭頭 */}
            <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
                   bg-white/90 hover:bg-white rounded-full p-2 shadow-md
                   opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="向右滾動"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    )
}