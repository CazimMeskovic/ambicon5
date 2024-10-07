/* 

import DigitaleDinamic from './DigitaleDinamic';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';


// Dinamičko generisanje metapodataka za stranicu
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  // Kreiraj funkciju za prevode koristeći lokalizaciju
  const t = await getTranslations(params.locale);

  return {
   title: t('seo_digitalaccountancy_title') || '',
    description: t('seo_digitalaccountancy_description') || ''
  };
}



// Server-side komponenta koja prosleđuje params klijentskoj komponenti
export default function AllPageServer({ params }: { params: { locale: string } }) {
  return <DigitaleDinamic params={params} />;
}

  */
 
import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import DigitaleDinamic from './DigitaleDinamic';
import { Suspense } from 'react';

// Definirajte sve moguće `locale` vrijednosti
const locales = ['en', 'de', 'bs'];

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Dinamičko generisanje metapodataka za stranicu
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({locale, namespace:"AllPage"});

  return {
    title: t('seo_digitalaccountancy_title') || '',
     description: t('seo_digitalaccountancy_description') || ''
   };
}

// Glavna funkcija koja renderuje stranicu
export default function AllPageServer({ params }: { params: { locale: string } }) {
  const { locale } = params;

  // Postavljanje lokalnog jezika za zahtev
  unstable_setRequestLocale(locale);

  return (
      
    <DigitaleDinamic params={params} />
              
      )
     
}
