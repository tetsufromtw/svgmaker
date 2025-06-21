interface AdSpaceProps {
    position: 'left' | 'right'
}

export default function AdSpace({ position }: AdSpaceProps) {
    return (
        <div className="w-40 bg-gray-100 h-full flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
            <div className="text-center">
                <div className="text-sm">廣告區域</div>
                <div className="text-xs mt-1">({position})</div>
            </div>
        </div>
    )
}