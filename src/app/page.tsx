import MapTabs from '@/components/MapTabs'
import MapCanvas from '@/components/MapCanvas'
import DataSelector from '@/components/DataSelector'
import AdSpace from '@/components/AdSpace'

export default function Home() {
  return (
    <div className="h-screen bg-gray-50 flex">
      {/* 左側廣告 - 貼齊視窗左邊 */}
      <AdSpace position="left" />

      {/* 中央內容區 */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-4 flex flex-col h-full">
          {/* Chrome風格標籤 */}
          <div className="pt-4">
            <MapTabs />
          </div>

          {/* 地圖區 - 自動填滿剩餘空間 */}
          <div className="flex-1 overflow-hidden pb-4">
            <MapCanvas />
          </div>

          {/* 底部控制區 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
            <DataSelector />
          </div>
        </div>
      </div>

      {/* 右側廣告 - 貼齊視窗右邊 */}
      <AdSpace position="right" />
    </div>
  )
}