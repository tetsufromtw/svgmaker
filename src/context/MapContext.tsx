// src/context/MapContext.tsx
'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { PrefectureColors, MapContextType } from '@/types/map.types'

const MapContext = createContext<MapContextType | undefined>(undefined)

export function MapProvider({ children }: { children: ReactNode }) {
    const [prefectureColors, setPrefectureColors] = useState<PrefectureColors>({})
    const [currentColor, setCurrentColor] = useState('#FF0000')

    const updatePrefectureColor = (prefectureId: string, color: string) => {
        setPrefectureColors(prev => ({
            ...prev,
            [prefectureId]: color
        }))
    }

    return (
        <MapContext.Provider
            value={{
                prefectureColors,
                currentColor,
                updatePrefectureColor,
                setCurrentColor
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