// src/lib/svgUtils.ts

export function getPrefectureId(element: Element): string | null {
    // 從 class name 取得縣市 ID
    const classList = element.classList

    // 找出不是 'prefecture' 的 class name
    for (let i = 0; i < classList.length; i++) {
        const className = classList[i]
        if (className !== 'prefecture' && className !== 'svg-map' && className !== 'prefectures') {
            return className.split(' ')[0] // 取第一個 class name
        }
    }

    return null
}

export function findPrefectureElement(element: Element): SVGGElement | null {
    // 如果點擊的是 path，往上找到 g.prefecture
    if (element.tagName === 'path' || element.tagName === 'text') {
        const parent = element.closest('g.prefecture')
        return parent as SVGGElement | null
    }

    // 如果直接點擊 g.prefecture
    if (element.classList.contains('prefecture')) {
        return element as SVGGElement
    }

    return null
}

export function updatePrefectureColor(
    prefectureGroup: SVGGElement,
    color: string
): void {
    const paths = prefectureGroup.querySelectorAll('path')
    paths.forEach(path => {
        if (color === '') {
            // 清除顏色，恢復預設
            path.removeAttribute('style')
            // 或者設定回預設顏色
            // path.setAttribute('style', 'fill: #f3f4f6')
        } else {
            path.setAttribute('style', `fill: ${color}`)
        }
    })
}

export function initializePrefectureColors(
    svg: SVGElement,
    existingColors: Record<string, string>
): void {
    // 初始化已存在的顏色
    const prefectures = svg.querySelectorAll('g.prefecture')

    prefectures.forEach(prefecture => {
        const id = getPrefectureId(prefecture)
        if (id && existingColors[id]) {
            updatePrefectureColor(prefecture as SVGGElement, existingColors[id])
        }
    })
}