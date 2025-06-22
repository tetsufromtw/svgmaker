// src/hooks/useMapClick.ts
'use client'

import { useEffect, RefObject } from 'react'
import { useMapContext } from '@/context/MapContext'
import {
    getPrefectureId,
    findPrefectureElement,
    updatePrefectureColor,
    initializePrefectureColors
} from '@/lib/svgUtils'

export function useMapClick(
    containerRef: RefObject<HTMLDivElement>,
    svgLoaded: boolean
) {
    const { prefectureColors, setPrefectureColor, selectedColor } = useMapContext()

    useEffect(() => {
        if (!svgLoaded || !containerRef.current) return

        console.log('useMapClick effect triggered')

        const svg = containerRef.current.querySelector('svg')
        if (!svg) {
            console.log('No SVG found in useMapClick')
            return
        }

        // 初始化已存在的顏色
        initializePrefectureColors(svg, prefectureColors)

        const handleClick = (e: MouseEvent) => {
            const target = e.target as Element
            const prefectureElement = findPrefectureElement(target)

            if (prefectureElement) {
                const prefectureId = getPrefectureId(prefectureElement)

                if (prefectureId) {
                    // 使用當前選中的顏色
                    updatePrefectureColor(prefectureElement, selectedColor)
                    setPrefectureColor(prefectureId, selectedColor)

                    console.log(`設定 ${prefectureId} 顏色為:`, selectedColor)
                }
            }
        }

        svg.addEventListener('click', handleClick)

        return () => {
            svg.removeEventListener('click', handleClick)
        }
    }, [svgLoaded, prefectureColors, setPrefectureColor, selectedColor])
}