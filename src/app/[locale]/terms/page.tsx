import { useTranslations } from 'next-intl'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service - Japan Map Marker Tool',
  description: 'Terms of service for using our Japan map marking tool. Read our usage guidelines and policies.',
}

export default function TermsPage() {
  const t = useTranslations('legal.terms')
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
            {t('acceptance')}
          </p>

          {/* 服務說明 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('serviceDescription.title')}
            </h2>
            <p className="text-gray-700 mb-4">
              {t('serviceDescription.content')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {t.raw('serviceDescription.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* 使用者責任 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('userResponsibilities.title')}
            </h2>
            <p className="text-gray-700 mb-4">
              {t('userResponsibilities.content')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {t.raw('userResponsibilities.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* 免責聲明 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('disclaimer.title')}
            </h2>
            <p className="text-gray-700 mb-4">
              {t('disclaimer.content')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {t.raw('disclaimer.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* 智慧財產權 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('intellectualProperty.title')}
            </h2>
            <p className="text-gray-700 mb-4">
              {t('intellectualProperty.content')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {t.raw('intellectualProperty.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}