// src/components/CardDisplay.tsx
'use client'

import EditableInfoCard from './EditableInfoCard'

export default function CardDisplay() {
    return (
        <div className="h-full flex items-center justify-center">
            <EditableInfoCard />
        </div>
    )
}