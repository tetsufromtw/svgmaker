import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: '地圖模板庫 - 日本地圖標記工具',
    description: '瀏覽各種日本地圖模板，包括旅遊規劃、數據視覺化、主題地圖等。一鍵套用，快速製作專業地圖。',
    keywords: '地圖模板, 日本地圖模板, 旅遊地圖, 數據視覺化, 主題地圖',
}

interface Template {
    id: string
    title: string
    description: string
    category: string
    icon: string
    previewColors: string[]
    popularity: number
}

const templates: Template[] = [
    {
        id: 'travel-footprint',
        title: '旅遊足跡',
        description: '記錄您去過的日本縣市',
        category: '旅遊',
        icon: '👣',
        previewColors: ['#3B82F6', '#60A5FA', '#93C5FD'],
        popularity: 95,
    },
    {
        id: 'jr-pass-route',
        title: 'JR Pass 路線圖',
        description: '標記 JR Pass 可到達的地區',
        category: '旅遊',
        icon: '🚄',
        previewColors: ['#10B981', '#34D399', '#6EE7B7'],
        popularity: 88,
    },
    {
        id: 'cherry-blossom',
        title: '櫻花前線',
        description: '追蹤櫻花開花時期',
        category: '季節',
        icon: '🌸',
        previewColors: ['#FCA5A5', '#F87171', '#EF4444'],
        popularity: 92,
    },
    {
        id: 'autumn-leaves',
        title: '紅葉前線',
        description: '標記最佳賞楓時期',
        category: '季節',
        icon: '🍁',
        previewColors: ['#FB923C', '#F97316', '#EA580C'],
        popularity: 85,
    },
    {
        id: 'onsen-map',
        title: '溫泉地圖',
        description: '日本各地溫泉分布',
        category: '旅遊',
        icon: '♨️',
        previewColors: ['#60A5FA', '#3B82F6', '#2563EB'],
        popularity: 90,
    },
    {
        id: 'ramen-tour',
        title: '拉麵巡禮',
        description: '各地特色拉麵標記',
        category: '美食',
        icon: '🍜',
        previewColors: ['#FDE047', '#FACC15', '#EAB308'],
        popularity: 87,
    },
    {
        id: 'castle-tour',
        title: '日本城巡禮',
        description: '現存天守與百名城',
        category: '歷史',
        icon: '🏯',
        previewColors: ['#C084FC', '#A855F7', '#9333EA'],
        popularity: 82,
    },
    {
        id: 'world-heritage',
        title: '世界遺產',
        description: '日本世界遺產分布',
        category: '文化',
        icon: '🏛️',
        previewColors: ['#F472B6', '#EC4899', '#DB2777'],
        popularity: 89,
    },
    {
        id: 'earthquake-risk',
        title: '地震風險',
        description: '地震危險度分級',
        category: '防災',
        icon: '🔴',
        previewColors: ['#FEE2E2', '#FCA5A5', '#F87171', '#EF4444'],
        popularity: 75,
    },
    {
        id: 'population-density',
        title: '人口密度',
        description: '各縣市人口分布',
        category: '統計',
        icon: '👥',
        previewColors: ['#DBEAFE', '#93C5FD', '#3B82F6', '#1E40AF'],
        popularity: 70,
    },
    {
        id: 'cost-comparison',
        title: '生活成本',
        description: '物價與房租比較',
        category: '統計',
        icon: '💰',
        previewColors: ['#D9F99D', '#BEF264', '#84CC16', '#65A30D'],
        popularity: 78,
    },
    {
        id: 'ski-resorts',
        title: '滑雪場分布',
        description: '日本滑雪場地圖',
        category: '運動',
        icon: '⛷️',
        previewColors: ['#E0E7FF', '#C7D2FE', '#A5B4FC', '#818CF8'],
        popularity: 80,
    },
]

const categories = [
    { id: 'all', name: '全部', icon: '🗾' },
    { id: '旅遊', name: '旅遊', icon: '✈️' },
    { id: '美食', name: '美食', icon: '🍱' },
    { id: '季節', name: '季節', icon: '🌸' },
    { id: '文化', name: '文化', icon: '⛩️' },
    { id: '歷史', name: '歷史', icon: '🏯' },
    { id: '統計', name: '統計', icon: '📊' },
    { id: '防災', name: '防災', icon: '⚠️' },
    { id: '運動', name: '運動', icon: '⚽' },
]

export default function TemplatesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* 導航列 */}
            <nav className="bg-white shadow-sm border-b sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center space-x-4">
                            <Link href="/" className="text-lg font-semibold text-gray-900 hover:text-gray-700">
                                日本地圖標記工具
                            </Link>
                            <span className="text-gray-400">/</span>
                            <span className="text-gray-600">模板庫</span>
                        </div>
                        <Link
                            href="/"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            自訂地圖
                        </Link>
                    </div>
                </div>
            </nav>

            {/* 主要內容 */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* 標題區 */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">地圖模板庫</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        選擇預設模板快速開始，或從零開始創建您的專屬地圖
                    </p>
                </div>

                {/* 分類標籤 */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition flex items-center space-x-2"
                        >
                            <span>{category.icon}</span>
                            <span className="font-medium">{category.name}</span>
                        </button>
                    ))}
                </div>

                {/* 模板網格 */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {templates.map((template) => (
                        <div
                            key={template.id}
                            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
                        >
                            {/* 預覽區 */}
                            <div className="h-48 bg-gray-100 relative overflow-hidden">
                                {/* 簡單的地圖預覽效果 */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="grid grid-cols-3 gap-2 p-4">
                                        {template.previewColors.map((color, index) => (
                                            <div
                                                key={index}
                                                className="w-16 h-16 rounded"
                                                style={{ backgroundColor: color }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* 人氣標籤 */}
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-sm">
                                    🔥 {template.popularity}%
                                </div>
                            </div>

                            {/* 內容區 */}
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                        <span className="text-2xl mr-2">{template.icon}</span>
                                        {template.title}
                                    </h3>
                                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                        {template.category}
                                    </span>
                                </div>

                                <p className="text-gray-600 mb-4">{template.description}</p>

                                <div className="flex gap-2">
                                    <Link
                                        href={`/?template=${template.id}`}
                                        className="flex-1 bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition"
                                    >
                                        使用模板
                                    </Link>
                                    <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50 transition">
                                        預覽
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 自訂地圖 CTA */}
                <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        找不到適合的模板？
                    </h2>
                    <p className="text-gray-600 mb-6">
                        使用我們的地圖編輯器，從零開始創建您的專屬地圖
                    </p>
                    <Link
                        href="/"
                        className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition inline-flex items-center"
                    >
                        開始自訂地圖
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </main>

            {/* 頁尾 */}
            <footer className="bg-gray-100 mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-3">熱門模板</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><Link href="/?template=travel-footprint" className="hover:text-blue-600">旅遊足跡</Link></li>
                                <li><Link href="/?template=cherry-blossom" className="hover:text-blue-600">櫻花前線</Link></li>
                                <li><Link href="/?template=onsen-map" className="hover:text-blue-600">溫泉地圖</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-3">使用案例</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><Link href="/use-cases/travel-planning" className="hover:text-blue-600">旅遊規劃</Link></li>
                                <li><Link href="/use-cases/safety-rating" className="hover:text-blue-600">治安評分</Link></li>
                                <li><Link href="/use-cases/food-map" className="hover:text-blue-600">美食地圖</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-3">資源</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><Link href="/about" className="hover:text-blue-600">關於我們</Link></li>
                                <li><Link href="/tutorial" className="hover:text-blue-600">使用教學</Link></li>
                                <li><Link href="/faq" className="hover:text-blue-600">常見問題</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-3">聯絡我們</h4>
                            <p className="text-sm text-gray-600">
                                有任何問題或建議？<br />
                                歡迎與我們聯繫
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
                        © 2024 日本地圖標記工具. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}