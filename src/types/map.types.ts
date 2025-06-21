// src/types/map.types.ts

export interface PrefectureColors {
    [prefectureId: string]: string
}

export interface MapContextType {
    prefectureColors: PrefectureColors
    currentColor: string
    updatePrefectureColor: (prefectureId: string, color: string) => void
    setCurrentColor: (color: string) => void
}

export interface Prefecture {
    id: string
    name: string
    code: string
}