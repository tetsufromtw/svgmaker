// src/components/ControlPanel.tsx
'use client'

import { useMapContext } from '@/context/MapContext'
import { useState } from 'react'

export default function ControlPanel() {
    const {
        showInfoCard,
        setShowInfoCard,
        backgroundMode,
        setBackgroundMode,
        exportFormat,
        setExportFormat
    } = useMapContext()

    return (
        <div className="h-full bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-4 overflow-hidden flex flex-col">
            {/* 標題區 */}
            <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-800">輸出設定</h2>
                <p className="text-sm text-gray-600">調整地圖輸出選項</p>
            </div>

            {/* 設定區 */}
            <div className="flex-1 space-y-6 overflow-y-auto">
                {/* 顯示控制 */}
                <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">顯示選項</h3>
                    <label className="flex items-center justify-between cursor-pointer">
                        <span className="text-sm text-gray-600">顯示資訊卡片</span>
                        <div className="relative">
                            <input
                                type="checkbox"
                                checked={showInfoCard}
                                onChange={(e) => setShowInfoCard(e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </div>
                    </label>
                </div>

                {/* 背景模式 */}
                <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">背景模式</h3>
                    <div className="space-y-2">
                        <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                            <input
                                type="radio"
                                name="background"
                                value="white"
                                checked={backgroundMode === 'white'}
                                onChange={(e) => setBackgroundMode(e.target.value as 'white' | 'transparent' | 'crop')}
                                className="mr-3 text-blue-600"
                            />
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-700">白色背景</p>
                                <p className="text-xs text-gray-500">標準白色背景</p>
                            </div>
                        </label>

                        <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                            <input
                                type="radio"
                                name="background"
                                value="transparent"
                                checked={backgroundMode === 'transparent'}
                                onChange={(e) => setBackgroundMode(e.target.value as 'white' | 'transparent' | 'crop')}
                                className="mr-3 text-blue-600"
                            />
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-700">透明背景</p>
                                <p className="text-xs text-gray-500">適合疊加使用</p>
                            </div>
                        </label>

                        <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                            <input
                                type="radio"
                                name="background"
                                value="crop"
                                checked={backgroundMode === 'crop'}
                                onChange={(e) => setBackgroundMode(e.target.value as 'white' | 'transparent' | 'crop')}
                                className="mr-3 text-blue-600"
                            />
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-700">智能裁切</p>
                                <p className="text-xs text-gray-500">自動裁切空白區域</p>
                            </div>
                        </label>
                    </div>
                </div>

                {/* 匯出格式 */}
                <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">匯出格式</h3>
                    <div className="space-y-2">
                        <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                            <input
                                type="radio"
                                name="format"
                                value="png"
                                checked={exportFormat === 'png'}
                                onChange={(e) => setExportFormat(e.target.value as 'png' | 'jpg')}
                                className="mr-3 text-blue-600"
                            />
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-700">PNG</p>
                                <p className="text-xs text-gray-500">支援透明背景</p>
                            </div>
                        </label>

                        <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                            <input
                                type="radio"
                                name="format"
                                value="jpg"
                                checked={exportFormat === 'jpg'}
                                onChange={(e) => setExportFormat(e.target.value as 'png' | 'jpg')}
                                className="mr-3 text-blue-600"
                            />
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-700">JPG</p>
                                <p className="text-xs text-gray-500">檔案較小</p>
                            </div>
                        </label>
                    </div>
                </div>

                {/* 預覽區 */}
                <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">目前設定預覽</h3>
                    <div className="bg-white border rounded-lg p-3 text-xs text-gray-600 space-y-1">
                        <p>• 資訊卡片：{showInfoCard ? '顯示' : '隱藏'}</p>
                        <p>• 背景：{
                            backgroundMode === 'white' ? '白色' :
                                backgroundMode === 'transparent' ? '透明' :
                                    '智能裁切'
                        }</p>
                        <p>• 格式：{exportFormat.toUpperCase()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}