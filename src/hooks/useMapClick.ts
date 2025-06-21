// src/hooks/useMapClick.ts
'use client'

import { useEffect, RefObject } from 'react'
import { useMapContext } from '@/context/MapContext'
import {
    getPrefectureId,
    findPrefectureElement,
    updatePrefectureColor as updatePrefectureColorDOM,
    initializePrefectureColors
} from '@/lib/svgUtils'

export function useMapClick(
    containerRef: RefObject<HTMLDivElement>,
    svgLoaded: boolean
) {
    const { prefectureColors, currentColor, updatePrefectureColor } = useMapContext()

    useEffect(() => {
        if (!containerRef.current || !svgLoaded) return

        const svg = containerRef.current.querySelector('svg')
        if (!svg) return

        // 初始化已有的顏色
        initializePrefectureColors(svg, prefectureColors)

        // 點擊事件處理
        const handleClick = (event: MouseEvent) => {
            const target = event.target as Element
            const prefectureElement = findPrefectureElement(target)

            if (!prefectureElement) return

            const prefectureId = getPrefectureId(prefectureElement)
            if (!prefectureId) return

            // 更新顏色
            updatePrefectureColor(prefectureId, currentColor)
            updatePrefectureColorDOM(prefectureElement, currentColor)

            // 防止事件冒泡
            event.stopPropagation()
        }

        // 雙點擊事件處理
        const handleDoubleClick = (event: MouseEvent) => {
            const target = event.target as Element
            const prefectureElement = findPrefectureElement(target)
            if (!prefectureElement) return
            const prefectureId = getPrefectureId(prefectureElement)
            if (!prefectureId) return
            // 清除顏色
            updatePrefectureColor(prefectureId, '')
            updatePrefectureColorDOM(prefectureElement, '')
            // 防止事件冒泡
            event.stopPropagation()
        }

        // 綁定事件
        svg.addEventListener('click', handleClick)
        svg.addEventListener('dblclick', handleDoubleClick)

        // 清理函式
        return () => {
            svg.removeEventListener('click', handleClick)
            svg.removeEventListener('dblclick', handleDoubleClick)
        }
    }, [containerRef, svgLoaded, currentColor, prefectureColors, updatePrefectureColor])
}