import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

export default function Footer() {
  const locale = useLocale()
  const t = useTranslations('legal')

  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* 左側 - 版權 */}
          <div className="text-sm text-gray-600">
            © 2024 Japan Map Marker Tool. All rights reserved.
          </div>

          {/* 右側 - 法律頁面連結 */}
          <div className="flex flex-wrap gap-4 text-sm">
            <Link 
              href={`/${locale}/privacy`}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t('privacy.title')}
            </Link>
            <span className="text-gray-400">|</span>
            <Link 
              href={`/${locale}/terms`}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t('terms.title')}
            </Link>
            <span className="text-gray-400">|</span>
            <Link 
              href={`/${locale}/about`}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t('about.title')}
            </Link>
            <span className="text-gray-400">|</span>
            <Link 
              href={`/${locale}/contact`}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t('contact.title')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}