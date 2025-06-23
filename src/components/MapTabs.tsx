'use client'

import { useState } from 'react'

const tabs = [
    { id: 'japan', label: '日本 🗾', available: true },
    { id: 'taiwan', label: '台灣 🏝️', available: false },
    { id: 'usa', label: '美國 🗽', available: false },
]

export default function MapTabs() {
    const [activeTab, setActiveTab] = useState('japan')

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