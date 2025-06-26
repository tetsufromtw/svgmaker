export const locales = ['zh-TW', 'ja', 'en'] as const;
export const defaultLocale = 'zh-TW' as const;

export type Locale = typeof locales[number];