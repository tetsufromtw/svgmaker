// src/components/ControlPanel.tsx
'use client'

import { useMapContext } from '@/context/MapContext'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function ControlPanel() {
    const {
        showInfoCard,
        setShowInfoCard,
        backgroundMode,
        setBackgroundMode,
        exportFormat,
        setExportFormat
    } = useMapContext()
    const t = useTranslations('controlPanel')

    return (
        <div className="h-full bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-4 overflow-hidden flex flex-col">
            {/* 標題區 */}
            <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-800">{t('title')}</h2>
                <p className="text-sm text-gray-600">{t('description')}</p>
            </div>

            {/* 設定區 */}
            <div className="flex-1 space-y-6 overflow-y-auto">
                {/* 顯示控制 */}
                <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">{t('sections.display')}</h3>
                    <label className="flex items-center justify-between cursor-pointer">
                        <span className="text-sm text-gray-600">{t('options.showInfoCard')}</span>
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
                    <h3 className="text-sm font-medium text-gray-700 mb-3">{t('sections.background')}</h3>
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
                                <p className="text-sm font-medium text-gray-700">{t('options.backgroundWhite')}</p>
                                <p className="text-xs text-gray-500">{t('options.backgroundWhiteDesc')}</p>
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
                                <p className="text-sm font-medium text-gray-700">{t('options.backgroundTransparent')}</p>
                                <p className="text-xs text-gray-500">{t('options.backgroundTransparentDesc')}</p>
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
                                <p className="text-sm font-medium text-gray-700">{t('options.backgroundCrop')}</p>
                                <p className="text-xs text-gray-500">{t('options.backgroundCropDesc')}</p>
                            </div>
                        </label>
                    </div>
                </div>

                {/* 匯出格式 */}
                <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">{t('sections.format')}</h3>
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
                                <p className="text-sm font-medium text-gray-700">{t('options.formatPng')}</p>
                                <p className="text-xs text-gray-500">{t('options.formatPngDesc')}</p>
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
                                <p className="text-sm font-medium text-gray-700">{t('options.formatJpg')}</p>
                                <p className="text-xs text-gray-500">{t('options.formatJpgDesc')}</p>
                            </div>
                        </label>
                    </div>
                </div>

                {/* 預覽區 */}
                <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">{t('sections.preview')}</h3>
                    <div className="bg-white border rounded-lg p-3 text-xs text-gray-600 space-y-1">
                        <p>• {t('preview.infoCard')}{showInfoCard ? t('preview.show') : t('preview.hide')}</p>
                        <p>• {t('preview.background')}{
                            backgroundMode === 'white' ? t('preview.white') :
                                backgroundMode === 'transparent' ? t('preview.transparent') :
                                    t('preview.crop')
                        }</p>
                        <p>• {t('preview.format')}{exportFormat.toUpperCase()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}