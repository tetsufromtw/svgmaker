// src/hooks/useMapClick.ts
'use client'

import { useEffect, RefObject, useState } from 'react'
import { useMapContext } from '@/context/MapContext'
import { 
  getPrefectureId, 
  findPrefectureElement, 
  updatePrefectureColor,
  initializePrefectureColors 
} from '@/lib/svgUtils'
import { getPrefectureById, getPrefectureName, getPrefectureDescription } from '@/data/prefectures'
import { useLocale, useTranslations } from 'next-intl'

export function useMapClick(
  containerRef: RefObject<HTMLDivElement>, 
  svgLoaded: boolean
) {
  const { prefectureColors, setPrefectureColor, selectedColor } = useMapContext()
  const locale = useLocale()
  const t = useTranslations('prefecture')
  const [tooltip, setTooltip] = useState<{
    show: boolean
    content: string
    x: number
    y: number
  }>({ show: false, content: '', x: 0, y: 0 })

  useEffect(() => {
    if (!svgLoaded || !containerRef.current) return

    const svg = containerRef.current.querySelector('svg')
    if (!svg) return

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

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as Element
      const prefectureElement = findPrefectureElement(target)
      
      if (prefectureElement) {
        const prefectureId = getPrefectureId(prefectureElement)
        if (prefectureId) {
          const prefecture = getPrefectureById(prefectureId)
          if (prefecture) {
            const name = getPrefectureName(prefecture, locale)
            const content = `${name}\n${t('population')}: ${prefecture.population.toLocaleString()}\n${t('area')}: ${prefecture.area.toLocaleString()} ${t('sqkm')}`
            
            setTooltip({
              show: true,
              content,
              x: e.clientX + 10,
              y: e.clientY - 10
            })
          }
        }
      }
    }

    const handleMouseLeave = () => {
      setTooltip(prev => ({ ...prev, show: false }))
    }

    const handleMouseMove = (e: MouseEvent) => {
      setTooltip(prev => ({
        ...prev,
        x: e.clientX + 10,
        y: e.clientY - 10
      }))
    }

    svg.addEventListener('click', handleClick)
    svg.addEventListener('mouseenter', handleMouseEnter, true)
    svg.addEventListener('mouseleave', handleMouseLeave, true)
    svg.addEventListener('mousemove', handleMouseMove)

    return () => {
      svg.removeEventListener('click', handleClick)
      svg.removeEventListener('mouseenter', handleMouseEnter, true)
      svg.removeEventListener('mouseleave', handleMouseLeave, true)
      svg.removeEventListener('mousemove', handleMouseMove)
    }
  }, [svgLoaded, prefectureColors, setPrefectureColor, selectedColor, locale, t])

  // 創建 tooltip DOM 元素
  useEffect(() => {
    if (tooltip.show && containerRef.current) {
      const tooltipElement = document.createElement('div')
      tooltipElement.id = 'prefecture-tooltip'
      tooltipElement.className = 'fixed bg-gray-800 text-white text-sm px-3 py-2 rounded shadow-lg z-50 pointer-events-none whitespace-pre-line'
      tooltipElement.style.left = `${tooltip.x}px`
      tooltipElement.style.top = `${tooltip.y}px`
      tooltipElement.textContent = tooltip.content
      
      // 移除舊的 tooltip
      const oldTooltip = document.getElementById('prefecture-tooltip')
      if (oldTooltip) {
        oldTooltip.remove()
      }
      
      document.body.appendChild(tooltipElement)
      
      return () => {
        const element = document.getElementById('prefecture-tooltip')
        if (element) {
          element.remove()
        }
      }
    } else {
      // 如果不顯示，移除現有的 tooltip
      const element = document.getElementById('prefecture-tooltip')
      if (element) {
        element.remove()
      }
    }
  }, [tooltip])
}