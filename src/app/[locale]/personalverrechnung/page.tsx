
import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import UeberUnsDinamic from '../ueber-uns/ueberUnsDinamic';
import { Suspense } from 'react';
import PersonalDinamic from './PersonalDinamic';

const locales = ['en', 'de', 'bs'];

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({locale, namespace:"AllPage"});

 
  return {
    title: t('seo_payroll_accountig_title') || '',
    description: t('seo_payroll_accountig_description') || ''
  };
}

export default function AllPageServer({ params }: { params: { locale: string } }) {
  const { locale } = params;

  unstable_setRequestLocale(locale);

  return (
      
    <PersonalDinamic params={params} />
              
      )
     
}
