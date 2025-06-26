'use client'

import { useMapContext } from '@/context/MapContext'
import { useTranslations } from 'next-intl'

const tabIds = [
    { id: 'japan', available: true },
    { id: 'taiwan', available: false },
    { id: 'usa', available: false },
    { id: 'profile', available: true },
]

export default function MapTabs() {
    const { activeTab, setActiveTab } = useMapContext()
    const t = useTranslations('mapTabs')

    const tabs = tabIds.map(tab => ({
        ...tab,
        label: tab.id === 'profile' ? t('introduce') : t(tab.id)
    }))

    return (
        <div className="flex items-end mb-0">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => tab.available && setActiveTab(tab.id)}
                    className={`
            px-6 py-2 rounded-t-lg border border-b-0 transition-all
            ${activeTab === tab.id
                            ? 'bg-white border-gray-200 z-10 shadow-sm'
                            : 'bg-gray-100 border-transparent hover:bg-gray-200'
                        }
            ${!tab.available ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          `}
                    disabled={!tab.available}
                >
                    <span className="text-sm font-medium">
                        {tab.label}
                    </span>
                </button>
            ))}
        </div>
    )
}