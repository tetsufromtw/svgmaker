// src/app/page.tsx
import MapTabs from '@/components/MapTabs'
import MapCanvas from '@/components/MapCanvas'
import DataSelector from '@/components/DataSelector'
import AdSpace from '@/components/AdSpace'
import LeftPanel from '@/components/LeftPanel'
import ControlPanel from '@/components/ControlPanel'
import { MapProvider } from '@/context/MapContext'
import { CardProvider } from '@/context/CardContext'

export default function Home() {
  return (
    <>
      <MapProvider>
        <CardProvider>
          <div className="h-screen bg-gray-50 flex flex-col">
            {/* 手機版頂部廣告 */}
            <AdSpace position="top" />

            {/* 主要內容區 */}
            <div className="flex-1 flex overflow-hidden">
              {/* 左側廣告 - 只在大螢幕顯示 */}
              <AdSpace position="left" />

              {/* 中央內容區 */}
              <div className="flex-1 flex flex-col overflow-hidden">
                {/* 上方主要區域 - 70% 高度 */}
                <div className="flex-[7] flex flex-col md:flex-row gap-4 p-4 overflow-hidden">
                  {/* 左側面板 - 編輯區 */}
                  <div className="hidden md:block md:w-1/4 lg:w-1/5">
                    <LeftPanel />
                  </div>

                  {/* 中間地圖區 */}
                  <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Chrome風格標籤 */}
                    <div className="flex-shrink-0 mb-2">
                      <MapTabs />
                    </div>

                    {/* 地圖畫布 */}
                    <div className="flex-1 min-h-0">
                      <MapCanvas />
                    </div>
                  </div>

                  {/* 右側控制面板 */}
                  <div className="hidden md:block md:w-1/4 lg:w-1/5">
                    <ControlPanel />
                  </div>
                </div>

                {/* 下方卡片選擇區 - 30% 高度 */}
                <div className="flex-[3] p-4 pt-0 overflow-hidden">
                  <DataSelector />
                </div>
              </div>

              {/* 右側廣告 - 平板和桌面顯示 */}
              <AdSpace position="right" />
            </div>

            {/* 手機版浮動編輯按鈕 */}
            <button className="md:hidden fixed bottom-20 right-4 w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center z-20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
          </div>

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
        </CardProvider>
      </MapProvider>
    </>
  )
}