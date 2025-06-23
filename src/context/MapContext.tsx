// src/context/MapContext.tsx
'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface MapContextType {
    currentMap: string
    setCurrentMap: (map: string) => void
    prefectureColors: Record<string, string>
    setPrefectureColor: (prefectureId: string, color: string) => void
    selectedColor: string
    setSelectedColor: (color: string) => void
    selectedLevel: number | string
    setSelectedLevel: (level: number | string) => void
}

const MapContext = createContext<MapContextType | undefined>(undefined)

export function MapProvider({ children }: { children: ReactNode }) {
    const [currentMap, setCurrentMap] = useState('japan')
    const [prefectureColors, setPrefectureColors] = useState<Record<string, string>>({})
    const [selectedColor, setSelectedColor] = useState<string>('#ef4444') // 預設紅色
    const [selectedLevel, setSelectedLevel] = useState<number | string>(5) // 預設等級5

    const setPrefectureColor = (prefectureId: string, color: string) => {
        setPrefectureColors(prev => ({
            ...prev,
            [prefectureId]: color
        }))
    }

    // 提供一個重置選中顏色的方法
    const resetSelectedColor = () => {
        setSelectedColor('#ef4444')
        setSelectedLevel(5)
    }

    return (
        <MapContext.Provider
            value={{
                currentMap,
                setCurrentMap,
                prefectureColors,
                setPrefectureColor,
                selectedColor,
                setSelectedColor,
                selectedLevel,
                setSelectedLevel
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