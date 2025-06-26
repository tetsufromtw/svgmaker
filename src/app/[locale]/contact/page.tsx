import { useTranslations } from 'next-intl'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us - Japan Map Marker Tool',
  description: 'Get in touch with us for support, feedback, or business inquiries about our Japan map marking tool.',
}

export default function ContactPage() {
  const t = useTranslations('legal.contact')
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

          {/* 電子郵件聯絡 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('email.title')}
            </h2>
            <p className="text-gray-700 mb-2">
              {t('email.description')}
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="text-lg font-mono text-gray-900">
                contact@example.com
              </p>
            </div>
            <p className="text-sm text-gray-600">
              {t('email.responseTime')}
            </p>
          </section>

          {/* 支援分類 */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* 技術支援 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {t('support.title')}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {t.raw('support.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* 意見反饋 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {t('feedback.title')}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {t.raw('feedback.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* 商務合作 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('business.title')}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {t.raw('business.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* 社群媒體 */}
          <section className="border-t pt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('socialMedia.title')}
            </h2>
            <p className="text-gray-700 mb-4">
              {t('socialMedia.description')}
            </p>
            
            {/* 社群媒體連結佔位符 */}
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-xs">FB</span>
              </div>
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-xs">IG</span>
              </div>
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-xs">TW</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}