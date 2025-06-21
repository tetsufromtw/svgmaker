export interface RankingData {
    [regionId: string]: number
}

export interface RankingType {
    id: string
    name: string
    data: RankingData
}

export const rankings: Record<string, RankingType> = {
    travel: {
        id: 'travel',
        name: '制縣等級',
        data: {
            'hokkaido': 5,
            'aomori': 3,
            'iwate': 2,
            'miyagi': 4,
            'akita': 2,
            'yamagata': 3,
            'fukushima': 3,
            'ibaraki': 4,
            'tochigi': 3,
            'gunma': 3,
            'saitama': 4,
            'chiba': 4,
            'tokyo': 5,
            'kanagawa': 5,
            'niigata': 3,
            'toyama': 2,
            'ishikawa': 3,
            'fukui': 2,
            'yamanashi': 3,
            'nagano': 4,
            'gifu': 3,
            'shizuoka': 4,
            'aichi': 4,
            'mie': 3,
            'shiga': 3,
            'kyoto': 5,
            'osaka': 5,
            'hyogo': 4,
            'nara': 4,
            'wakayama': 3,
            'tottori': 2,
            'shimane': 2,
            'okayama': 3,
            'hiroshima': 4,
            'yamaguchi': 3,
            'tokushima': 2,
            'kagawa': 3,
            'ehime': 3,
            'kochi': 2,
            'fukuoka': 4,
            'saga': 2,
            'nagasaki': 3,
            'kumamoto': 3,
            'oita': 3,
            'miyazaki': 2,
            'kagoshima': 3,
            'okinawa': 5,
        }
    },
    safety: {
        id: 'safety',
        name: '安全指數',
        data: {
            // 可以之後再填入
        }
    }
}