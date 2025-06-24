// src/app/page.tsx
import MapTabs from '@/components/MapTabs'
import MapCanvas from '@/components/MapCanvas'
import DataSelector from '@/components/DataSelector'
import AdSpace from '@/components/AdSpace'
import { MapProvider } from '@/context/MapContext'
import { CardProvider } from '@/context/CardContext'

export default function Home() {
  return (
    <>
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

      {/* SEO 內容區塊 - 隱藏但可被搜尋引擎讀取 */}
      <div className="sr-only">
        <h1>日本地圖標記工具 - 自訂主題地圖製作器</h1>
        <p>
          免費的日本地圖標記工具，支援47都道府縣的自訂顏色標記。
          可用於旅遊規劃、數據視覺化、區域評分、災害分析等多種用途。
        </p>

        <h2>功能特色</h2>
        <ul>
          <li>支援日本47都道府縣完整標記</li>
          <li>自訂顏色和等級設定</li>
          <li>拖放式資訊卡片編輯</li>
          <li>一鍵匯出為圖片（PNG/JPG）</li>
          <li>支援多種社群媒體格式（Instagram, TikTok, YouTube Shorts）</li>
          <li>即時預覽編輯結果</li>
        </ul>

        <h2>使用情境</h2>
        <ul>
          <li>日本旅遊規劃地圖</li>
          <li>美食地圖製作</li>
          <li>櫻花前線追蹤</li>
          <li>治安評分視覺化</li>
          <li>生活成本比較</li>
          <li>自然災害風險評估</li>
          <li>人口密度分布</li>
          <li>氣候數據展示</li>
        </ul>

        <h2>如何使用</h2>
        <ol>
          <li>從底部選擇或建立資訊卡片模板</li>
          <li>點擊卡片中的顏色選項</li>
          <li>在地圖上點擊想要標記的都道府縣</li>
          <li>調整卡片位置和內容</li>
          <li>選擇匯出格式並下載</li>
        </ol>

        <h2>支援的都道府縣</h2>
        <p>
          北海道、青森県、岩手県、宮城県、秋田県、山形県、福島県、
          茨城県、栃木県、群馬県、埼玉県、千葉県、東京都、神奈川県、
          新潟県、富山県、石川県、福井県、山梨県、長野県、岐阜県、
          静岡県、愛知県、三重県、滋賀県、京都府、大阪府、兵庫県、
          奈良県、和歌山県、鳥取県、島根県、岡山県、広島県、山口県、
          徳島県、香川県、愛媛県、高知県、福岡県、佐賀県、長崎県、
          熊本県、大分県、宮崎県、鹿児島県、沖縄県
        </p>
      </div>
    </>
  )
}