export interface Prefecture {
  id: string
  name: string
  nameEn: string
  nameJa: string
  region: string
  regionEn: string
  regionJa: string
  capital: string
  capitalEn: string
  capitalJa: string
  population: number
  area: number
  description: string
  descriptionEn: string
  descriptionJa: string
}

export const prefectures: Prefecture[] = [
  {
    id: 'hokkaido',
    name: '北海道',
    nameEn: 'Hokkaido',
    nameJa: '北海道',
    region: '北海道',
    regionEn: 'Hokkaido',
    regionJa: '北海道',
    capital: '札幌市',
    capitalEn: 'Sapporo',
    capitalJa: '札幌市',
    population: 5224614,
    area: 83424,
    description: '日本最北端的都道府縣，以廣闊的自然景觀、美味的海鮮和雪祭聞名。',
    descriptionEn: 'The northernmost prefecture of Japan, famous for its vast natural landscapes, delicious seafood, and snow festivals.',
    descriptionJa: '日本最北端の都道府県で、広大な自然景観、美味しい海産物、雪祭りで有名。'
  },
  {
    id: 'aomori',
    name: '青森県',
    nameEn: 'Aomori',
    nameJa: '青森県',
    region: '東北',
    regionEn: 'Tohoku',
    regionJa: '東北',
    capital: '青森市',
    capitalEn: 'Aomori',
    capitalJa: '青森市',
    population: 1237984,
    area: 9646,
    description: '以蘋果產量日本第一和睡魔祭聞名，擁有豐富的自然資源。',
    descriptionEn: 'Famous for being the top apple producer in Japan and the Nebuta Festival, with abundant natural resources.',
    descriptionJa: 'りんごの生産量日本一とねぶた祭りで有名で、豊富な自然資源を有する。'
  },
  {
    id: 'iwate',
    name: '岩手県',
    nameEn: 'Iwate',
    region: '東北',
    capital: '盛岡市',
    population: 1210534,
    area: 15275,
    description: '日本面積第二大的縣，以平泉的世界遺產和三陸海岸聞名。'
  },
  {
    id: 'miyagi',
    name: '宮城県',
    nameEn: 'Miyagi',
    region: '東北',
    capital: '仙台市',
    population: 2301996,
    area: 7282,
    description: '東北地區的中心，以仙台七夕祭和松島的日本三景之一聞名。'
  },
  {
    id: 'akita',
    name: '秋田県',
    nameEn: 'Akita',
    region: '東北',
    capital: '秋田市',
    population: 959502,
    area: 11638,
    description: '以秋田犬、竿燈祭和優質的米酒聞名。'
  },
  {
    id: 'yamagata',
    name: '山形県',
    nameEn: 'Yamagata',
    region: '東北',
    capital: '山形市',
    population: 1068027,
    area: 9323,
    description: '以藏王溫泉、櫻桃產量日本第一和出羽三山聞名。'
  },
  {
    id: 'fukushima',
    name: '福島県',
    nameEn: 'Fukushima',
    region: '東北',
    capital: '福島市',
    population: 1833152,
    area: 13784,
    description: '擁有豐富的自然資源，以會津若松城和磐梯山聞名。'
  },
  {
    id: 'ibaraki',
    name: '茨城県',
    nameEn: 'Ibaraki',
    region: '關東',
    capital: '水戶市',
    population: 2867009,
    area: 6097,
    description: '以偕樂園、筑波山和納豆聞名，是重要的農業縣。'
  },
  {
    id: 'tochigi',
    name: '栃木県',
    nameEn: 'Tochigi',
    region: '關東',
    capital: '宇都宮市',
    population: 1933146,
    area: 6408,
    description: '以日光的世界遺產、那須高原和餃子聞名。'
  },
  {
    id: 'gunma',
    name: '群馬県',
    nameEn: 'Gunma',
    region: '關東',
    capital: '前橋市',
    population: 1939110,
    area: 6362,
    description: '以草津溫泉、伊香保溫泉等眾多溫泉地聞名。'
  },
  {
    id: 'saitama',
    name: '埼玉県',
    nameEn: 'Saitama',
    region: '關東',
    capital: '埼玉市',
    population: 7344765,
    area: 3798,
    description: '東京的臥城，以川越的小江戶和秩父的自然景觀聞名。'
  },
  {
    id: 'chiba',
    name: '千葉県',
    nameEn: 'Chiba',
    region: '關東',
    capital: '千葉市',
    population: 6284480,
    area: 5158,
    description: '擁有成田國際機場和東京迪士尼度假區，是重要的工商業縣。'
  },
  {
    id: 'tokyo',
    name: '東京都',
    nameEn: 'Tokyo',
    nameJa: '東京都',
    region: '關東',
    regionEn: 'Kanto',
    regionJa: '関東',
    capital: '新宿區',
    capitalEn: 'Shinjuku',
    capitalJa: '新宿区',
    population: 14047594,
    area: 2194,
    description: '日本首都，世界級大都市，政治、經濟、文化的中心。',
    descriptionEn: 'Japan\'s capital, a world-class metropolis and the center of politics, economy, and culture.',
    descriptionJa: '日本の首都であり、世界有数の大都市で、政治・経済・文化の中心。'
  },
  {
    id: 'kanagawa',
    name: '神奈川県',
    nameEn: 'Kanagawa',
    region: '關東',
    capital: '横濱市',
    population: 9237337,
    area: 2416,
    description: '以横濱、鎌倉、箱根等觀光地聞名，是人口第二多的縣。'
  },
  {
    id: 'niigata',
    name: '新潟県',
    nameEn: 'Niigata',
    region: '中部',
    capital: '新潟市',
    population: 2201272,
    area: 12584,
    description: '日本海側最大的縣，以優質稻米、清酒和滑雪場聞名。'
  },
  {
    id: 'toyama',
    name: '富山県',
    nameEn: 'Toyama',
    region: '中部',
    capital: '富山市',
    population: 1034814,
    area: 4248,
    description: '以立山黑部阿爾卑斯路線和富山灣的海鮮聞名。'
  },
  {
    id: 'ishikawa',
    name: '石川県',
    nameEn: 'Ishikawa',
    region: '中部',
    capital: '金澤市',
    population: 1132526,
    area: 4186,
    description: '以金澤的傳統工藝、兼六園和能登半島的自然景觀聞名。'
  },
  {
    id: 'fukui',
    name: '福井県',
    nameEn: 'Fukui',
    region: '中部',
    capital: '福井市',
    population: 766863,
    area: 4190,
    description: '以恐龍化石、越前蟹和東尋坊的斷崖絕壁聞名。'
  },
  {
    id: 'yamanashi',
    name: '山梨県',
    nameEn: 'Yamanashi',
    region: '中部',
    capital: '甲府市',
    population: 809974,
    area: 4465,
    description: '以富士山、富士五湖和葡萄酒產地聞名。'
  },
  {
    id: 'nagano',
    name: '長野県',
    nameEn: 'Nagano',
    region: '中部',
    capital: '長野市',
    population: 2048011,
    area: 13562,
    description: '日本的屋脊，以日本阿爾卑斯山脈、輕井澤和善光寺聞名。'
  },
  {
    id: 'gifu',
    name: '岐阜県',
    nameEn: 'Gifu',
    region: '中部',
    capital: '岐阜市',
    population: 1978742,
    area: 10621,
    description: '以白川鄉合掌村、高山古街和下呂溫泉聞名。'
  },
  {
    id: 'shizuoka',
    name: '静岡県',
    nameEn: 'Shizuoka',
    region: '中部',
    capital: '静岡市',
    population: 3633202,
    area: 7777,
    description: '以富士山、茶葉生產和伊豆半島的溫泉聞名。'
  },
  {
    id: 'aichi',
    name: '愛知県',
    nameEn: 'Aichi',
    region: '中部',
    capital: '名古屋市',
    population: 7542415,
    area: 5173,
    description: '日本工業的中心，豐田汽車的總部所在地，以名古屋城聞名。'
  },
  {
    id: 'mie',
    name: '三重県',
    nameEn: 'Mie',
    region: '近畿',
    capital: '津市',
    population: 1770254,
    area: 5774,
    description: '以伊勢神宮、松阪牛和伊賀忍者聞名。'
  },
  {
    id: 'shiga',
    name: '滋賀県',
    nameEn: 'Shiga',
    region: '近畿',
    capital: '大津市',
    population: 1413610,
    area: 4017,
    description: '以日本最大的湖泊琵琶湖和彥根城聞名。'
  },
  {
    id: 'kyoto',
    name: '京都府',
    nameEn: 'Kyoto',
    region: '近畿',
    capital: '京都市',
    population: 2578087,
    area: 4612,
    description: '日本的古都，擁有眾多世界遺產，是傳統文化的中心。'
  },
  {
    id: 'osaka',
    name: '大阪府',
    nameEn: 'Osaka',
    nameJa: '大阪府',
    region: '近畿',
    regionEn: 'Kinki',
    regionJa: '近畿',
    capital: '大阪市',
    capitalEn: 'Osaka',
    capitalJa: '大阪市',
    population: 8837685,
    area: 1905,
    description: '西日本的經濟中心，以美食文化、大阪城和環球影城聞名。',
    descriptionEn: 'The economic center of western Japan, famous for its food culture, Osaka Castle, and Universal Studios.',
    descriptionJa: '西日本の経済の中心地で、食文化、大阪城、ユニバーサル・スタジオで有名。'
  },
  {
    id: 'hyogo',
    name: '兵庫県',
    nameEn: 'Hyogo',
    region: '近畿',
    capital: '神戶市',
    population: 5465002,
    area: 8401,
    description: '以神戶港、姬路城世界遺產和有馬溫泉聞名。'
  },
  {
    id: 'nara',
    name: '奈良県',
    nameEn: 'Nara',
    region: '近畿',
    capital: '奈良市',
    population: 1324473,
    area: 3691,
    description: '日本最早的首都，以奈良公園的鹿和眾多古寺聞名。'
  },
  {
    id: 'wakayama',
    name: '和歌山県',
    nameEn: 'Wakayama',
    region: '近畿',
    capital: '和歌山市',
    population: 922584,
    area: 4725,
    description: '以高野山、熊野古道世界遺產和南紀白濱溫泉聞名。'
  },
  {
    id: 'tottori',
    name: '鳥取県',
    nameEn: 'Tottori',
    region: '中國',
    capital: '鳥取市',
    population: 553407,
    area: 3507,
    description: '日本人口最少的縣，以鳥取砂丘和二十世紀梨聞名。'
  },
  {
    id: 'shimane',
    name: '島根県',
    nameEn: 'Shimane',
    region: '中國',
    capital: '松江市',
    population: 671126,
    area: 6708,
    description: '以出雲大社、石見銀山世界遺產和宍道湖聞名。'
  },
  {
    id: 'okayama',
    name: '岡山県',
    nameEn: 'Okayama',
    region: '中國',
    capital: '岡山市',
    population: 1888432,
    area: 7114,
    description: '以岡山後樂園、倉敷美觀地區和桃太郎傳說聞名。'
  },
  {
    id: 'hiroshima',
    name: '広島県',
    nameEn: 'Hiroshima',
    region: '中國',
    capital: '広島市',
    population: 2799702,
    area: 8479,
    description: '以原爆圓頂館、嚴島神社世界遺產和廣島燒聞名。'
  },
  {
    id: 'yamaguchi',
    name: '山口県',
    nameEn: 'Yamaguchi',
    region: '中國',
    capital: '山口市',
    population: 1342059,
    area: 6113,
    description: '本州最西端的縣，以錦帶橋、秋吉台和下關的河豚料理聞名。'
  },
  {
    id: 'tokushima',
    name: '徳島県',
    nameEn: 'Tokushima',
    region: '四國',
    capital: '徳島市',
    population: 719559,
    area: 4147,
    description: '以阿波舞、鳴門漩渦和祖谷溪谷聞名。'
  },
  {
    id: 'kagawa',
    name: '香川県',
    nameEn: 'Kagawa',
    region: '四國',
    capital: '高松市',
    population: 950244,
    area: 1877,
    description: '日本面積最小的縣，以讚岐烏龍麵和栗林公園聞名。'
  },
  {
    id: 'ehime',
    name: '愛媛県',
    nameEn: 'Ehime',
    region: '四國',
    capital: '松山市',
    population: 1334841,
    area: 5676,
    description: '以道後溫泉、松山城和柑橘類生產聞名。'
  },
  {
    id: 'kochi',
    name: '高知県',
    nameEn: 'Kochi',
    region: '四國',
    capital: '高知市',
    population: 691527,
    area: 7104,
    description: '以四萬十川、桂濱和坂本龍馬的故鄉聞名。'
  },
  {
    id: 'fukuoka',
    name: '福岡県',
    nameEn: 'Fukuoka',
    region: '九州',
    capital: '福岡市',
    population: 5135214,
    area: 4987,
    description: '九州的門戶，以博多拉麵、太宰府天滿宮和屋台文化聞名。'
  },
  {
    id: 'saga',
    name: '佐賀県',
    nameEn: 'Saga',
    region: '九州',
    capital: '佐賀市',
    population: 811442,
    area: 2441,
    description: '以有田燒、伊萬里燒陶瓷和嬉野溫泉聞名。'
  },
  {
    id: 'nagasaki',
    name: '長崎県',
    nameEn: 'Nagasaki',
    region: '九州',
    capital: '長崎市',
    population: 1312317,
    area: 4131,
    description: '歷史上的國際貿易港，以原爆資料館、軍艦島和豪斯登堡聞名。'
  },
  {
    id: 'kumamoto',
    name: '熊本県',
    nameEn: 'Kumamoto',
    region: '九州',
    capital: '熊本市',
    population: 1738301,
    area: 7409,
    description: '以熊本城、阿蘇山火山和黑川溫泉聞名。'
  },
  {
    id: 'oita',
    name: '大分県',
    nameEn: 'Oita',
    region: '九州',
    capital: '大分市',
    population: 1123852,
    area: 6341,
    description: '日本第一的溫泉縣，以別府溫泉和由布院溫泉聞名。'
  },
  {
    id: 'miyazaki',
    name: '宮崎県',
    nameEn: 'Miyazaki',
    region: '九州',
    capital: '宮崎市',
    population: 1069576,
    area: 7735,
    description: '以高千穗峽、青島神社和宮崎牛聞名。'
  },
  {
    id: 'kagoshima',
    name: '鹿児島県',
    nameEn: 'Kagoshima',
    region: '九州',
    capital: '鹿児島市',
    population: 1588256,
    area: 9187,
    description: '以櫻島活火山、指宿砂浴溫泉和黑豬肉料理聞名。'
  },
  {
    id: 'okinawa',
    name: '沖縄県',
    nameEn: 'Okinawa',
    region: '沖縄',
    capital: '那覇市',
    population: 1467480,
    area: 2281,
    description: '日本最南端的縣，以美麗的海灘、琉球文化和長壽聞名。'
  }
]

// 地區分類
export const regions = [
  { id: 'hokkaido', name: '北海道', nameEn: 'Hokkaido', nameJa: '北海道', prefectures: ['hokkaido'] },
  { id: 'tohoku', name: '東北', nameEn: 'Tohoku', nameJa: '東北', prefectures: ['aomori', 'iwate', 'miyagi', 'akita', 'yamagata', 'fukushima'] },
  { id: 'kanto', name: '關東', nameEn: 'Kanto', nameJa: '関東', prefectures: ['ibaraki', 'tochigi', 'gunma', 'saitama', 'chiba', 'tokyo', 'kanagawa'] },
  { id: 'chubu', name: '中部', nameEn: 'Chubu', nameJa: '中部', prefectures: ['niigata', 'toyama', 'ishikawa', 'fukui', 'yamanashi', 'nagano', 'gifu', 'shizuoka', 'aichi'] },
  { id: 'kinki', name: '近畿', nameEn: 'Kinki', nameJa: '近畿', prefectures: ['mie', 'shiga', 'kyoto', 'osaka', 'hyogo', 'nara', 'wakayama'] },
  { id: 'chugoku', name: '中國', nameEn: 'Chugoku', nameJa: '中国', prefectures: ['tottori', 'shimane', 'okayama', 'hiroshima', 'yamaguchi'] },
  { id: 'shikoku', name: '四國', nameEn: 'Shikoku', nameJa: '四国', prefectures: ['tokushima', 'kagawa', 'ehime', 'kochi'] },
  { id: 'kyushu', name: '九州', nameEn: 'Kyushu', nameJa: '九州', prefectures: ['fukuoka', 'saga', 'nagasaki', 'kumamoto', 'oita', 'miyazaki', 'kagoshima'] },
  { id: 'okinawa', name: '沖縄', nameEn: 'Okinawa', nameJa: '沖縄', prefectures: ['okinawa'] }
]

// 輔助函數
export function getPrefectureById(id: string): Prefecture | undefined {
  return prefectures.find(p => p.id === id)
}

export function getPrefecturesByRegion(regionId: string): Prefecture[] {
  const region = regions.find(r => r.id === regionId)
  if (!region) return []
  return prefectures.filter(p => region.prefectures.includes(p.id))
}

// 根據語言取得都道府縣名稱
export function getPrefectureName(prefecture: Prefecture, locale: string): string {
  switch (locale) {
    case 'en':
      return prefecture.nameEn
    case 'ja':
      return prefecture.nameJa || prefecture.name
    default:
      return prefecture.name
  }
}

// 根據語言取得地區名稱
export function getRegionName(regionId: string, locale: string): string {
  const region = regions.find(r => r.id === regionId)
  if (!region) return ''
  
  switch (locale) {
    case 'en':
      return region.nameEn
    case 'ja':
      return region.nameJa
    default:
      return region.name
  }
}

// 根據語言取得都道府縣描述
export function getPrefectureDescription(prefecture: Prefecture, locale: string): string {
  switch (locale) {
    case 'en':
      return prefecture.descriptionEn || prefecture.description
    case 'ja':
      return prefecture.descriptionJa || prefecture.description
    default:
      return prefecture.description
  }
}