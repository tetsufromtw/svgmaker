import React from 'react'

export default function ProfileCard() {
    return (
        <div className="h-full bg-white rounded-lg shadow-sm border border-gray-200 p-8 overflow-hidden">
            {/* 主要內容容器 */}
            <div className="max-w-3xl mx-auto h-full flex flex-col">
                {/* 頂部裝飾 - 模擬地圖風格 */}
                <div className="mb-8 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-50 rounded-full blur-3xl"></div>

                    {/* 標題區 */}
                    <div className="relative z-10 text-center">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">
                            Hello, I'm <span className="text-blue-600">Your Name</span> 👋
                        </h1>
                        <p className="text-lg text-gray-600">
                            創造美麗地圖視覺化的開發者
                        </p>
                    </div>
                </div>

                {/* 中間內容 - 使用地圖圖釘風格 */}
                <div className="flex-1 grid md:grid-cols-2 gap-8 mb-8">
                    {/* 左側 - 關於我 */}
                    <div className="space-y-6">
                        <div className="relative">
                            {/* 模擬地圖圖釘 */}
                            <div className="absolute -left-4 top-0 w-8 h-8 bg-red-500 rounded-full shadow-lg flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>

                            <div className="pl-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-3">關於這個專案</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    這是一個互動式日本地圖生成器，讓您可以輕鬆創建自訂顏色的地圖，
                                    並加上個人化的資訊卡片。適合用於旅遊規劃、數據視覺化或社群媒體分享。
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-500 rounded-full shadow-lg flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>

                            <div className="pl-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-3">技術特色</h2>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">✓</span>
                                        使用 Next.js 14 和 TypeScript 開發
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">✓</span>
                                        響應式設計，支援各種裝置
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">✓</span>
                                        可自訂顏色和資訊卡片內容
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">✓</span>
                                        支援 PNG/JPG 格式匯出
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 右側 - 連結和支持 */}
                    <div className="space-y-6">
                        {/* 社群連結 */}
                        <div className="bg-gray-50 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">找到我 🌏</h3>
                            <div className="grid grid-cols-2 gap-3">
                                <a href="#" className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 hover:shadow-md transition-shadow">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span className="text-sm font-medium">GitHub</span>
                                </a>

                                <a href="#" className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 hover:shadow-md transition-shadow">
                                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                    <span className="text-sm font-medium">Twitter</span>
                                </a>

                                <a href="#" className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 hover:shadow-md transition-shadow">
                                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    <span className="text-sm font-medium">LinkedIn</span>
                                </a>

                                <a href="#" className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 hover:shadow-md transition-shadow">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                    <span className="text-sm font-medium">Instagram</span>
                                </a>
                            </div>
                        </div>

                        {/* 支持區塊 */}
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">支持這個專案 ☕</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                如果您喜歡這個工具，可以請我喝杯咖啡！
                            </p>
                            <a href="#" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium px-6 py-3 rounded-lg transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z" />
                                </svg>
                                Buy Me a Coffee
                            </a>
                        </div>

                        {/* 統計資訊 */}
                        <div className="bg-blue-50 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">專案統計 📊</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-600">47</div>
                                    <div className="text-sm text-gray-600">都道府縣</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-green-600">10+</div>
                                    <div className="text-sm text-gray-600">顏色選擇</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-purple-600">3</div>
                                    <div className="text-sm text-gray-600">匯出格式</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-orange-600">∞</div>
                                    <div className="text-sm text-gray-600">創意可能</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 底部訊息 */}
                <div className="text-center text-sm text-gray-500 pt-4 border-t border-gray-200">
                    Made with ❤️ using Next.js and TypeScript | © 2024
                </div>
            </div>
        </div>
    )
}