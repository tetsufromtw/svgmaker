// src/app/page.tsx
import MapTabs from '@/components/MapTabs'
import MapCanvas from '@/components/MapCanvas'
import DataSelector from '@/components/DataSelector'
import AdSpace from '@/components/AdSpace'
import { MapProvider } from '@/context/MapContext'
import { CardProvider } from '@/context/CardContext'

export default function Home() {
  return (
    <MapProvider>
      <CardProvider>
        <div className="h-screen bg-gray-50 flex overflow-hidden">
          {/* 左側廣告 - 貼齊視窗左邊 */}
          <AdSpace position="left" />

          {/* 中央內容區 */}
          <div className="flex-1 flex flex-col h-full overflow-hidden">
            <div className="max-w-7xl mx-auto w-full px-4 flex flex-col h-full">
              {/* Chrome風格標籤 - 固定高度 */}
              <div className="pt-4 flex-shrink-0">
                <MapTabs />
              </div>

              {/* 地圖區 - 使用 flex-1 自動填充剩餘空間 */}
              <div className="flex-1 min-h-0 my-4 overflow-hidden">
                <MapCanvas />
              </div>

              {/* 底部控制區 - 固定高度 */}
              <div className="flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4" style={{ minHeight: '280px', maxHeight: '280px' }}>
                <DataSelector />
              </div>
            </div>
          </div>

          {/* 右側廣告 - 貼齊視窗右邊 */}
          <AdSpace position="right" />
        </div>
      </CardProvider>
    </MapProvider>
  )
}