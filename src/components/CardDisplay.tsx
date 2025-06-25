// src/components/CardDisplay.tsx
'use client'

import EditableInfoCard from './EditableInfoCard'

export default function CardDisplay() {
    return (
        <div className="h-full overflow-hidden">
            <EditableInfoCard />
        </div>
    )
}