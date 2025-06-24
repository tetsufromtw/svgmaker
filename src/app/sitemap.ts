import { MetadataRoute } from 'next'

// 日本都道府縣列表
const prefectures = [
  { id: 'hokkaido', name: '北海道' },
  { id: 'aomori', name: '青森県' },
  { id: 'iwate', name: '岩手県' },
  { id: 'miyagi', name: '宮城県' },
  { id: 'akita', name: '秋田県' },
  { id: 'yamagata', name: '山形県' },
  { id: 'fukushima', name: '福島県' },
  { id: 'ibaraki', name: '茨城県' },
  { id: 'tochigi', name: '栃木県' },
  { id: 'gunma', name: '群馬県' },
  { id: 'saitama', name: '埼玉県' },
  { id: 'chiba', name: '千葉県' },
  { id: 'tokyo', name: '東京都' },
  { id: 'kanagawa', name: '神奈川県' },
  { id: 'niigata', name: '新潟県' },
  { id: 'toyama', name: '富山県' },
  { id: 'ishikawa', name: '石川県' },
  { id: 'fukui', name: '福井県' },
  { id: 'yamanashi', name: '山梨県' },
  { id: 'nagano', name: '長野県' },
  { id: 'gifu', name: '岐阜県' },
  { id: 'shizuoka', name: '静岡県' },
  { id: 'aichi', name: '愛知県' },
  { id: 'mie', name: '三重県' },
  { id: 'shiga', name: '滋賀県' },
  { id: 'kyoto', name: '京都府' },
  { id: 'osaka', name: '大阪府' },
  { id: 'hyogo', name: '兵庫県' },
  { id: 'nara', name: '奈良県' },
  { id: 'wakayama', name: '和歌山県' },
  { id: 'tottori', name: '鳥取県' },
  { id: 'shimane', name: '島根県' },
  { id: 'okayama', name: '岡山県' },
  { id: 'hiroshima', name: '広島県' },
  { id: 'yamaguchi', name: '山口県' },
  { id: 'tokushima', name: '徳島県' },
  { id: 'kagawa', name: '香川県' },
  { id: 'ehime', name: '愛媛県' },
  { id: 'kochi', name: '高知県' },
  { id: 'fukuoka', name: '福岡県' },
  { id: 'saga', name: '佐賀県' },
  { id: 'nagasaki', name: '長崎県' },
  { id: 'kumamoto', name: '熊本県' },
  { id: 'oita', name: '大分県' },
  { id: 'miyazaki', name: '宮崎県' },
  { id: 'kagoshima', name: '鹿児島県' },
  { id: 'okinawa', name: '沖縄県' },
]

// 使用案例
const useCases = [
  { slug: 'travel-planning', name: '旅遊規劃' },
  { slug: 'safety-rating', name: '治安評分' },
  { slug: 'food-map', name: '美食地圖' },
  { slug: 'disaster-risk', name: '災害風險' },
  { slug: 'cost-of-living', name: '生活成本' },
  { slug: 'weather-patterns', name: '氣候分布' },
  { slug: 'population-density', name: '人口密度' },
  { slug: 'tourist-spots', name: '觀光熱點' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://your-domain.com'
  
  // 主要頁面
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/templates`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]
  
  // 都道府縣頁面
  const prefecturePages = prefectures.map((pref) => ({
    url: `${baseUrl}/prefecture/${pref.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  
  // 使用案例頁面
  const useCasePages = useCases.map((useCase) => ({
    url: `${baseUrl}/use-cases/${useCase.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))
  
  return [...mainPages, ...prefecturePages, ...useCasePages]
}