import { useTranslations } from 'next-intl'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - Japan Map Marker Tool',
  description: 'Learn about our Japan map marking tool, its features, and how it can help you create beautiful themed maps.',
}

export default function AboutPage() {
  const t = useTranslations('legal.about')
  const tCommon = useTranslations('common')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 簡單導航 */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← {tCommon('backToHome')}
          </Link>
        </div>
      </nav>

      {/* 主要內容 */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            {t('introduction')}
          </p>

          {/* 我們的使命 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('mission.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t('mission.content')}
            </p>
          </section>

          {/* 主要功能 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('features.title')}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {t.raw('features.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* 適用場景 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('useCases.title')}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {t.raw('useCases.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* 技術特色 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('technology.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t('technology.content')}
            </p>
          </section>

          {/* 聯絡資訊 */}
          <section className="border-t pt-6">
            <p className="text-gray-700">
              {t('contact')}
            </p>
            <div className="mt-4">
              <Link 
                href="/contact" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {tCommon('contactUs')}
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}