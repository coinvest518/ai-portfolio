export const defaultLocale = 'en';
export const locales = ['en', 'id'] as const;
export type Locale = (typeof locales)[number];