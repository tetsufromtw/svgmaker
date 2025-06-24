import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { prefectures, getPrefectureById, regions } from '@/data/prefectures'

interface Props {
    params: { id: string }
}

// 生成靜態路徑
export async function generateStaticParams() {
    return prefectures.map((prefecture) => ({
        id: prefecture.id,
    }))
}

// 生成 SEO metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const prefecture = getPrefectureById(params.id)

    if (!prefecture) {
        return {
            title: '找不到頁面',
        }
    }

    return {
        title: `${prefecture.name} - 日本地圖標記工具`,
        description: `在地圖上標記${prefecture.name}。${prefecture.description}人口：${prefecture.population.toLocaleString()}人，面積：${prefecture.area.toLocaleString()}km²。`,
        keywords: `${prefecture.name}, ${prefecture.nameEn}, 日本地圖, ${prefecture.capital}, ${prefecture.region}地方`,
        openGraph: {
            title: `${prefecture.name} - 日本地圖標記工具`,
            description: prefecture.description,
            images: [`/prefecture-images/${prefecture.id}.jpg`],
        },
    }
}

export default function PrefecturePage({ params }: Props) {
    const prefecture = getPrefectureById(params.id)

    if (!prefecture) {
        notFound()
    }

    // 找出所屬地區
    const region = regions.find(r => r.prefectures.includes(prefecture.id))

    // 找出同地區的其他縣市
    const neighborPrefectures = region
        ? prefectures.filter(p => region.prefectures.includes(p.id) && p.id !== prefecture.id)
        : []

    // 結構化資料
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Place',
        name: prefecture.name,
        alternateName: prefecture.nameEn,
        description: prefecture.description,
        geo: {
            '@type': 'GeoCoordinates',
            // 這裡可以加入實際的經緯度
        },
        containedInPlace: {
            '@type': 'Country',
            name: '日本',
        },
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="min-h-screen bg-gray-50">
                {/* 導航列 */}
                <nav className="bg-white shadow-sm border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16 items-center">
                            <div className="flex items-center space-x-4">
                                <Link href="/" className="text-lg font-semibold text-gray-900 hover:text-gray-700">
                                    日本地圖標記工具
                                </Link>
                                <span className="text-gray-400">/</span>
                                <span className="text-gray-600">{prefecture.name}</span>
                            </div>
                            <Link
                                href="/"
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                開始使用地圖工具
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* 主要內容 */}
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* 標題區 */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            {prefecture.name} ({prefecture.nameEn})
                        </h1>
                        <p className="text-lg text-gray-600 mb-4">{prefecture.description}</p>

                        {/* 基本資訊 */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                            <div className="bg-gray-50 p-4 rounded">
                                <p className="text-sm text-gray-500">所屬地區</p>
                                <p className="text-lg font-semibold">{region?.name}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded">
                                <p className="text-sm text-gray-500">縣廳所在地</p>
                                <p className="text-lg font-semibold">{prefecture.capital}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded">
                                <p className="text-sm text-gray-500">人口</p>
                                <p className="text-lg font-semibold">{prefecture.population.toLocaleString()}人</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded">
                                <p className="text-sm text-gray-500">面積</p>
                                <p className="text-lg font-semibold">{prefecture.area.toLocaleString()}km²</p>
                            </div>
                        </div>
                    </div>

                    {/* 使用範例 */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            在地圖上標記{prefecture.name}
                        </h2>
                        <p className="text-gray-600 mb-4">
                            使用我們的地圖標記工具，您可以：
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                            <li>標記{prefecture.name}為您的旅遊目的地</li>
                            <li>在數據視覺化中突顯{prefecture.name}的特定指標</li>
                            <li>製作包含{prefecture.name}的主題地圖（如美食地圖、觀光地圖等）</li>
                            <li>與其他{region?.name}地區的縣市進行比較分析</li>
                        </ul>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href={`/?prefecture=${prefecture.id}`}
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-flex items-center"
                            >
                                在地圖上標記{prefecture.name}
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>

                            <Link
                                href="/templates"
                                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
                            >
                                查看地圖模板
                            </Link>
                        </div>
                    </div>

                    {/* 同地區其他縣市 */}
                    {neighborPrefectures.length > 0 && (
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {region?.name}地區的其他縣市
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {neighborPrefectures.map((neighbor) => (
                                    <Link
                                        key={neighbor.id}
                                        href={`/prefecture/${neighbor.id}`}
                                        className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                                    >
                                        <p className="font-semibold text-gray-900">{neighbor.name}</p>
                                        <p className="text-sm text-gray-500">{neighbor.capital}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </main>

                {/* 頁尾 */}
                <footer className="bg-gray-100 mt-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="text-center text-gray-600">
                            <p>使用日本地圖標記工具，輕鬆製作各種主題的日本地圖</p>
                            <div className="mt-4 space-x-4">
                                <Link href="/" className="hover:text-blue-600">首頁</Link>
                                <Link href="/templates" className="hover:text-blue-600">模板</Link>
                                <Link href="/about" className="hover:text-blue-600">關於</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}