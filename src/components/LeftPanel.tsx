// src/components/LeftPanel.tsx
'use client'

import EditableInfoCard from './EditableInfoCard'
import { useTranslations } from 'next-intl'

export default function LeftPanel() {
    const t = useTranslations('leftPanel')
    
    return (
        <div className="h-full bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-4 overflow-hidden flex flex-col">
            {/* 標題區 */}
            <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-800 text-center">{t('title')}</h2>
                <p className="text-sm text-gray-600 text-center">{t('description')}</p>
            </div>

            {/* 編輯區 */}
            <div className="flex-1 overflow-hidden">
                <EditableInfoCard />
            </div>
        </div>
    )
}