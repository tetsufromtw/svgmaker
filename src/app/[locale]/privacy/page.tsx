import { useTranslations } from 'next-intl'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - Japan Map Marker Tool',
  description: 'Our privacy policy explains how we collect, use, and protect your information when using our Japan map marking tool.',
}

export default function PrivacyPage() {
  const t = useTranslations('legal.privacy')
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
          
          <p className="text-sm text-gray-600 mb-6">
            {t('lastUpdated')}
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            {t('introduction')}
          </p>

          {/* 資料收集 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('dataCollection.title')}
            </h2>
            <p className="text-gray-700 mb-4">
              {t('dataCollection.content')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {t.raw('dataCollection.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* 資料使用 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('dataUsage.title')}
            </h2>
            <p className="text-gray-700 mb-4">
              {t('dataUsage.content')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {t.raw('dataUsage.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* 資料保護 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('dataProtection.title')}
            </h2>
            <p className="text-gray-700 mb-4">
              {t('dataProtection.content')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {t.raw('dataProtection.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* 聯絡資訊 */}
          <section className="border-t pt-6">
            <p className="text-gray-700">
              {t('contact')}
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}