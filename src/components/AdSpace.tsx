// src/components/AdSpace.tsx
interface AdSpaceProps {
    position: 'left' | 'right' | 'top'
}

export default function AdSpace({ position }: AdSpaceProps) {
    // 手機版頂部廣告
    if (position === 'top') {
        return (
            <div className="w-full h-[60px] bg-gray-100 flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300 md:hidden">
                <div className="text-center">
                    <div className="text-sm">廣告區域</div>
                    <div className="text-xs mt-1">(mobile)</div>
                </div>
            </div>
        )
    }

    // 桌面版側邊廣告
    return (
        <div className={`
            w-40 bg-gray-100 h-full items-center justify-center text-gray-400 
            border-2 border-dashed border-gray-300
            ${position === 'left' ? 'hidden lg:flex' : 'hidden md:flex'}
        `}>
            <div className="text-center">
                <div className="text-sm">廣告區域</div>
                <div className="text-xs mt-1">({position})</div>
            </div>
        </div>
    )
}