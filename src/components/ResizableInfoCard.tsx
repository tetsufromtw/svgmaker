// src/components/ResizableInfoCard.tsx
'use client'

import { InfoCardConfig } from '@/types/card.types'
import { useMapContext } from '@/context/MapContext'
import { useEffect, useState, useRef } from 'react'
import { useTranslations } from 'next-intl'

interface ResizableInfoCardProps {
    config: InfoCardConfig
}

type ResizeDirection = 'se' | 'sw' | 'ne' | 'nw' | null

export default function ResizableInfoCard({ config }: ResizableInfoCardProps) {
    const {
        selectedColor,
        selectedLevel,
        setSelectedColor,
        setSelectedLevel,
        cardSize,
        setCardSize
    } = useMapContext()
    const tCommon = useTranslations('common')

    const [isResizing, setIsResizing] = useState(false)
    const [resizeDirection, setResizeDirection] = useState<ResizeDirection>(null)
    const cardRef = useRef<HTMLDivElement>(null)
    const startPos = useRef({ x: 0, y: 0 })
    const startSize = useRef({ width: 0, height: 0 })

    // 計算內容所需的最小尺寸
    const calculateMinSize = () => {
        if (!config || !config.legendItems) return { width: 180, height: 200 }

        const itemCount = config.legendItems.length
        const headerHeight = 68 // 標題 + 副標題的實際高度
        const itemHeight = 28 // 每個圖例項目的高度（含間距）
        const padding = 32 // 卡片的 padding (16px * 2)
        const extraSpace = 8 // 一些緩衝空間

        const minHeight = headerHeight + (itemCount * itemHeight) + padding + extraSpace
        const minWidth = 180 // 基本最小寬度，確保文字可讀

        return { width: minWidth, height: Math.max(200, minHeight) }
    }

    const minSize = calculateMinSize()

    // 當 config 改變時，檢查是否需要設定預設選中項並調整卡片大小
    useEffect(() => {
        if (config && config.legendItems.length > 0) {
            const firstItem = config.legendItems[0]

            // 檢查當前選中的顏色是否在這個卡片的項目中
            const isCurrentSelectionValid = config.legendItems.some(
                item => item.color === selectedColor && item.level === selectedLevel
            )

            // 如果當前選中無效，則選中第一個項目
            if (!isCurrentSelectionValid) {
                setSelectedColor(firstItem.color)
                setSelectedLevel(firstItem.level)
            }

            // 如果當前卡片大小小於新的最小尺寸，自動調整
            const newMinSize = calculateMinSize()
            if (cardSize.width < newMinSize.width || cardSize.height < newMinSize.height) {
                setCardSize({
                    width: Math.max(cardSize.width, newMinSize.width),
                    height: Math.max(cardSize.height, newMinSize.height)
                })
            }
        }
    }, [config, selectedColor, selectedLevel, setSelectedColor, setSelectedLevel, cardSize, setCardSize])

    // 處理調整大小開始
    const handleResizeStart = (e: React.MouseEvent, direction: ResizeDirection) => {
        e.preventDefault()
        e.stopPropagation()

        setIsResizing(true)
        setResizeDirection(direction)

        startPos.current = { x: e.clientX, y: e.clientY }
        startSize.current = { ...cardSize }
    }

    // 處理全域滑鼠事件
    useEffect(() => {
        if (!isResizing || !resizeDirection) return

        const handleMouseMove = (e: MouseEvent) => {
            const deltaX = e.clientX - startPos.current.x
            const deltaY = e.clientY - startPos.current.y

            let newWidth = startSize.current.width
            let newHeight = startSize.current.height

            // 根據調整方向計算新尺寸
            switch (resizeDirection) {
                case 'se': // 右下角
                    newWidth = startSize.current.width + deltaX
                    newHeight = startSize.current.height + deltaY
                    break
                case 'sw': // 左下角
                    newWidth = startSize.current.width - deltaX
                    newHeight = startSize.current.height + deltaY
                    break
                case 'ne': // 右上角
                    newWidth = startSize.current.width + deltaX
                    newHeight = startSize.current.height - deltaY
                    break
                case 'nw': // 左上角
                    newWidth = startSize.current.width - deltaX
                    newHeight = startSize.current.height - deltaY
                    break
            }

            // 限制最小和最大尺寸
            newWidth = Math.max(minSize.width, Math.min(400, newWidth))
            newHeight = Math.max(minSize.height, Math.min(500, newHeight))

            setCardSize({ width: newWidth, height: newHeight })
        }

        const handleMouseUp = () => {
            setIsResizing(false)
            setResizeDirection(null)
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    }, [isResizing, resizeDirection, setCardSize])

    // 根據寬度調整字體大小和佈局
    const getTextClasses = () => {
        if (cardSize.width < 160) {
            return {
                title: 'text-sm font-bold',
                subtitle: 'text-xs',
                itemText: 'text-xs',
                levelText: 'text-xs'
            }
        } else if (cardSize.width < 240) {
            return {
                title: 'text-base font-bold',
                subtitle: 'text-sm',
                itemText: 'text-sm',
                levelText: 'text-xs'
            }
        } else {
            return {
                title: 'text-lg font-bold',
                subtitle: 'text-sm',
                itemText: 'text-sm',
                levelText: 'text-xs'
            }
        }
    }

    const textClasses = getTextClasses()
    const isCompact = cardSize.width < 180
    const showDescription = cardSize.width > 240

    return (
        <div
            ref={cardRef}
            className={`bg-white rounded-lg shadow-md p-4 relative overflow-hidden border-4 border-dashed border-indigo-400 ${isResizing ? 'select-none border-blue-500' : ''}`}
            style={{
                width: `${cardSize.width}px`,
                height: `${cardSize.height}px`,
                minWidth: `${minSize.width}px`,
                minHeight: `${minSize.height}px`,
                boxShadow: isResizing ? '0 0 0 4px rgba(59, 130, 246, 0.1)' : undefined
            }}
        >
            {/* 調整大小控制點 */}
            {/* 右下角 - 主要調整點 */}
            <div
                className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize hover:bg-blue-100 hover:bg-opacity-30 transition-all"
                style={{
                    zIndex: 10,
                    borderTopLeftRadius: '4px'
                }}
                onMouseDown={(e) => handleResizeStart(e, 'se')}
                title="調整大小"
            />

            {/* 左上角 */}
            <div
                className="absolute top-0 left-0 w-4 h-4 cursor-nw-resize hover:bg-blue-100 hover:bg-opacity-30 transition-all"
                style={{
                    zIndex: 10,
                    borderBottomRightRadius: '4px'
                }}
                onMouseDown={(e) => handleResizeStart(e, 'nw')}
            />

            {/* 右上角 */}
            <div
                className="absolute top-0 right-0 w-4 h-4 cursor-ne-resize hover:bg-blue-100 hover:bg-opacity-30 transition-all"
                style={{
                    zIndex: 10,
                    borderBottomLeftRadius: '4px'
                }}
                onMouseDown={(e) => handleResizeStart(e, 'ne')}
            />

            {/* 左下角 */}
            <div
                className="absolute bottom-0 left-0 w-4 h-4 cursor-sw-resize hover:bg-blue-100 hover:bg-opacity-30 transition-all"
                style={{
                    zIndex: 10,
                    borderTopRightRadius: '4px'
                }}
                onMouseDown={(e) => handleResizeStart(e, 'sw')}
            />

            {/* 卡片內容 */}
            <div className="h-full flex flex-col">
                <h3 className={`${textClasses.title} mb-1`}>{config.title}</h3>
                <p className={`${textClasses.subtitle} text-gray-600 mb-4`}>
                    {config.subtitle}
                </p>

                <div className="flex-1 overflow-y-auto">
                    <div className="space-y-1">
                        {config.legendItems.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-2 ${textClasses.itemText} p-1 rounded cursor-pointer transition-colors
                                    ${selectedColor === item.color && selectedLevel === item.level
                                        ? 'bg-blue-100 ring-2 ring-blue-400'
                                        : 'hover:bg-gray-100'
                                    }
                                `}
                                onClick={() => {
                                    setSelectedColor(item.color)
                                    setSelectedLevel(item.level)
                                }}
                            >
                                <div
                                    className="w-4 h-4 rounded flex-shrink-0"
                                    style={{ backgroundColor: item.color }}
                                />
                                <span className="flex-1 truncate">{item.label}</span>
                                {!item.hideLevel && !isCompact && (
                                    <span className={`${textClasses.levelText} text-gray-500 flex-shrink-0`}>
                                        {typeof item.level === 'number' ? `${tCommon('level')} ${item.level}` : item.level}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}