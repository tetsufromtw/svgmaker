import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { SiCoffeescript } from 'react-icons/si'
import { BiCoffee } from 'react-icons/bi'
import { HiSparkles, HiCode, HiGlobeAlt, HiHeart } from 'react-icons/hi'

export default function ProfileCard() {
    return (
        <div className="h-full bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 rounded-xl shadow-lg border border-gray-100 p-[2vw] overflow-hidden relative">
            {/* 背景裝飾 */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10vw] -right-[10vw] w-[20vw] h-[20vw] bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-[10vw] -left-[10vw] w-[20vw] h-[20vw] bg-gradient-to-tr from-pink-100/30 to-yellow-100/30 rounded-full blur-3xl"></div>
            </div>
            {/* 主要內容容器 */}
            <div className="max-w-4xl mx-auto h-full flex flex-col relative z-10">
                {/* 英雄區塊 - 緊湊設計 */}
                <div className="mb-[1.5vw] relative">
                    {/* 主標題區 */}
                    <div className="text-center mb-[1vw]">
                        <div className="inline-flex items-center gap-[0.75vw] mb-[0.5vw]">
                            <div className="w-[2vw] h-[2vw] bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                <HiSparkles className="text-white text-[1vw]" />
                            </div>
                            <h1 className="text-[2.2vw] font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Hello, I'm Tetsu
                            </h1>
                            <div className="w-[2vw] h-[2vw] bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center">
                                <HiGlobeAlt className="text-white text-[1vw]" />
                            </div>
                        </div>
                        <p className="text-[1vw] text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            創造美麗地圖視覺化工具的開發者
                        </p>
                    </div>

                    {/* 技能標籤 - 緊湊排列 */}
                    <div className="flex flex-wrap justify-center gap-[0.5vw] mb-[0.75vw]">
                        {['Next.js', 'TypeScript', 'React', 'Tailwind'].map((skill, index) => (
                            <span key={skill} className="inline-flex items-center gap-[0.3vw] px-[0.6vw] py-[0.3vw] bg-white/80 backdrop-blur-sm rounded-full text-[0.7vw] font-medium text-gray-700 shadow-sm border border-gray-200/50">
                                <HiCode className="text-blue-500 text-[0.6vw]" />
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* 主要內容區 - 現代化卡片設計 */}
                <div className="flex-1 grid lg:grid-cols-3 gap-[1.2vw] mb-[1vw]">
                    {/* 專案介紹卡片 */}
                    <div className="lg:col-span-2 space-y-[1vw]">
                        {/* 關於專案 */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-[1.2vw] border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-[0.75vw] mb-[0.75vw]">
                                <div className="w-[2vw] h-[2vw] bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                                    <HiGlobeAlt className="text-white text-[1vw]" />
                                </div>
                                <h2 className="text-[1.2vw] font-bold text-gray-800">關於這個專案</h2>
                            </div>
                            <p className="text-[0.9vw] text-gray-600 leading-relaxed">
                                創新的互動式日本地圖生成器，讓您輕鬆創建自訂顏色地圖並加上個人化資訊卡片。
                                適合旅遊規劃、數據視覺化、社群媒體分享等用途。
                            </p>
                        </div>

                        {/* 技術特色 */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-[1.2vw] border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-[0.75vw] mb-[0.75vw]">
                                <div className="w-[2vw] h-[2vw] bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                    <HiCode className="text-white text-[1vw]" />
                                </div>
                                <h2 className="text-[1.2vw] font-bold text-gray-800">技術特色</h2>
                            </div>
                            <div className="grid grid-cols-3 gap-[0.6vw]">
                                {[
                                    { icon: '🚀', text: 'Next.js 15' },
                                    { icon: '📱', text: '響應式' },
                                    { icon: '🎨', text: '自訂色彩' },
                                    { icon: '📤', text: 'PNG匯出' },
                                    { icon: '⚡', text: '即時預覽' },
                                    { icon: '🎯', text: '直覺操作' }
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center gap-[0.5vw] p-[0.6vw] bg-gray-50/50 rounded-lg">
                                        <span className="text-[0.9vw]">{feature.icon}</span>
                                        <span className="text-[0.8vw] text-gray-700 font-medium">{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 側邊欄 - 社群和統計 */}
                    <div className="space-y-[1vw]">
                        {/* 社群連結 */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-[1.2vw] border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-[0.5vw] mb-[0.75vw]">
                                <div className="w-[1.5vw] h-[1.5vw] bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                                    <HiGlobeAlt className="text-white text-[0.8vw]" />
                                </div>
                                <h3 className="text-[1.1vw] font-bold text-gray-800">找到我</h3>
                            </div>
                            <div className="space-y-[0.5vw]">
                                <a href="https://github.com/tetsu8888" target="_blank" rel="noopener noreferrer" 
                                   className="flex items-center gap-[0.6vw] w-full bg-gray-50/80 hover:bg-white rounded-lg px-[0.8vw] py-[0.5vw] transition-all duration-200 hover:shadow-md group">
                                    <FaGithub className="text-[1vw] text-gray-700 group-hover:text-black transition-colors" />
                                    <span className="text-[0.8vw] font-medium text-gray-700 group-hover:text-black">GitHub</span>
                                </a>
                                <a href="#" className="flex items-center gap-[0.6vw] w-full bg-gray-50/80 hover:bg-white rounded-lg px-[0.8vw] py-[0.5vw] transition-all duration-200 hover:shadow-md group">
                                    <FaTwitter className="text-[1vw] text-blue-400 group-hover:text-blue-500 transition-colors" />
                                    <span className="text-[0.8vw] font-medium text-gray-700 group-hover:text-black">Twitter</span>
                                </a>
                                <a href="#" className="flex items-center gap-[0.6vw] w-full bg-gray-50/80 hover:bg-white rounded-lg px-[0.8vw] py-[0.5vw] transition-all duration-200 hover:shadow-md group">
                                    <FaLinkedin className="text-[1vw] text-blue-600 group-hover:text-blue-700 transition-colors" />
                                    <span className="text-[0.8vw] font-medium text-gray-700 group-hover:text-black">LinkedIn</span>
                                </a>
                                <a href="#" className="flex items-center gap-[0.6vw] w-full bg-gray-50/80 hover:bg-white rounded-lg px-[0.8vw] py-[0.5vw] transition-all duration-200 hover:shadow-md group">
                                    <FaInstagram className="text-[1vw] text-pink-500 group-hover:text-pink-600 transition-colors" />
                                    <span className="text-[0.8vw] font-medium text-gray-700 group-hover:text-black">Instagram</span>
                                </a>
                            </div>
                        </div>

                        {/* 支持區塊 */}
                        <div className="bg-gradient-to-br from-yellow-100/80 to-orange-100/80 backdrop-blur-sm rounded-xl p-[1.2vw] border border-yellow-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-[0.5vw] mb-[0.75vw]">
                                <div className="w-[1.5vw] h-[1.5vw] bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                                    <BiCoffee className="text-white text-[0.8vw]" />
                                </div>
                                <h3 className="text-[1.1vw] font-bold text-gray-800">支持專案</h3>
                            </div>
                            <p className="text-[0.8vw] text-gray-700 mb-[0.75vw] leading-relaxed">
                                喜歡這個工具嗎？請我喝杯咖啡吧！
                            </p>
                            <a href="#" className="inline-flex items-center gap-[0.5vw] bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold px-[1vw] py-[0.6vw] rounded-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105">
                                <BiCoffee className="text-[1vw]" />
                                <span className="text-[0.8vw]">Buy Me a Coffee</span>
                            </a>
                        </div>

                        {/* 統計資訊 */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-[1.2vw] border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-[0.5vw] mb-[0.75vw]">
                                <div className="w-[1.5vw] h-[1.5vw] bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-[0.8vw] font-bold">📊</span>
                                </div>
                                <h3 className="text-[1.1vw] font-bold text-gray-800">專案統計</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-[0.6vw]">
                                {[
                                    { value: '47', label: '都道府縣', color: 'from-blue-500 to-cyan-500' },
                                    { value: '22+', label: '顏色選擇', color: 'from-green-500 to-emerald-500' },
                                    { value: '3', label: '匯出格式', color: 'from-purple-500 to-pink-500' },
                                    { value: '∞', label: '創意可能', color: 'from-orange-500 to-red-500' }
                                ].map((stat, index) => (
                                    <div key={index} className="text-center p-[0.6vw] bg-gray-50/50 rounded-lg">
                                        <div className={`text-[1.2vw] font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                            {stat.value}
                                        </div>
                                        <div className="text-[0.7vw] text-gray-600 font-medium">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 底部訊息 */}
                <div className="text-center pt-[0.75vw] border-t border-gray-200/60">
                    <div className="flex items-center justify-center gap-[0.4vw] text-[0.8vw] text-gray-600">
                        <span>Made with</span>
                        <HiHeart className="text-red-500 text-[0.9vw] animate-pulse" />
                        <span>using Next.js 15</span>
                        <span className="mx-[0.4vw] text-gray-400">|</span>
                        <span>© 2024</span>
                    </div>
                </div>
            </div>
        </div>
    )
}