import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // List your supported locales
  locales: ['en', 'id'],
  
  // Default locale
  defaultLocale: 'en',
  
  // Optional: Specify if paths should start with locale prefix
  localePrefix: 'always'
});

export const config = {
  matcher: [
   '/((?!api|_next/data|_next/static|.*\\..*).*)', // Match all routes except API and static files
  ]
};