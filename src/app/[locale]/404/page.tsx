
import type { Metadata } from 'next';
 import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';  
import PageDinamic from "./PageDinamic"
import { Suspense } from 'react';

const locales = ['en', 'de', 'bs'];

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

 export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({locale, namespace:"AllPage"});

  return {
    title: t('error_404_seo_title') || '',
  
  };
}
  
export default function AllPageServer({ params }: { params: { locale: string } }) {
  const { locale } = params;

  unstable_setRequestLocale(locale);

  return (
      
    <PageDinamic  />
              
      )
     
}
