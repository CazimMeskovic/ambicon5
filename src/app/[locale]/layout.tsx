
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next'; 


const locales = ['en', 'de', 'bs'];


export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
 icons:{
  icon:[
    '/imgs/browser-icon.webp'
  ]
 } 
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
       
       
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
