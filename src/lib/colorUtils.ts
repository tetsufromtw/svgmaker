export function getColorByValue(value: number, max: number, colorScale: string[]): string {
    const index = Math.floor((value - 1) / max * colorScale.length)
    return colorScale[Math.min(index, colorScale.length - 1)]
}

export const colorScales = {
    red: ['#FEE5D9', '#FCAE91', '#FB6A4A', '#DE2D26', '#A50F15'],
    blue: ['#EFF3FF', '#BDD7E7', '#6BAED6', '#3182BD', '#08519C'],
    green: ['#EDF8E9', '#BAE4B3', '#74C476', '#31A354', '#006D2C'],
}