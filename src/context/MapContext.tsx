// src/context/MapContext.tsx
'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface MapContextType {
    currentMap: string
    setCurrentMap: (map: string) => void
    activeTab: string
    setActiveTab: (tab: string) => void
    prefectureColors: Record<string, string>
    setPrefectureColor: (prefectureId: string, color: string) => void
    selectedColor: string
    setSelectedColor: (color: string) => void
    selectedLevel: number | string
    setSelectedLevel: (level: number | string) => void
    showInfoCard: boolean
    setShowInfoCard: (show: boolean) => void
    backgroundMode: 'white' | 'transparent' | 'crop'
    setBackgroundMode: (mode: 'white' | 'transparent' | 'crop') => void
    exportFormat: 'png' | 'jpg'
    setExportFormat: (format: 'png' | 'jpg') => void
    cardSize: { width: number; height: number }
    setCardSize: (size: { width: number; height: number }) => void
}

const MapContext = createContext<MapContextType | undefined>(undefined)

export function MapProvider({ children }: { children: ReactNode }) {
    const [currentMap, setCurrentMap] = useState('japan')
    const [activeTab, setActiveTab] = useState('japan')
    const [prefectureColors, setPrefectureColors] = useState<Record<string, string>>({})
    const [selectedColor, setSelectedColor] = useState<string>('#fca5a5') // 預設為第一個卡片第一個項目的顏色
    const [selectedLevel, setSelectedLevel] = useState<number | string>(5) // 預設等級5
    const [showInfoCard, setShowInfoCard] = useState<boolean>(true)
    const [backgroundMode, setBackgroundMode] = useState<'white' | 'transparent' | 'crop'>('white')
    const [exportFormat, setExportFormat] = useState<'png' | 'jpg'>('png')
    const [cardSize, setCardSize] = useState<{ width: number; height: number }>({ width: 200, height: 240 })

    const setPrefectureColor = (prefectureId: string, color: string) => {
        setPrefectureColors(prev => ({
            ...prev,
            [prefectureId]: color
        }))
    }

    // 提供一個重置選中顏色的方法
    const resetSelectedColor = () => {
        setSelectedColor('#fca5a5')
        setSelectedLevel(5)
    }

    return (
        <MapContext.Provider
            value={{
                currentMap,
                setCurrentMap,
                activeTab,
                setActiveTab,
                prefectureColors,
                setPrefectureColor,
                selectedColor,
                setSelectedColor,
                selectedLevel,
                setSelectedLevel,
                showInfoCard,
                setShowInfoCard,
                backgroundMode,
                setBackgroundMode,
                exportFormat,
                setExportFormat,
                cardSize,
                setCardSize
            }}
        >
            {children}
        </MapContext.Provider>
    )
}

export const useMapContext = () => {
    const context = useContext(MapContext)
    if (!context) {
        throw new Error('useMapContext must be used within a MapProvider')
    }
    return context
}