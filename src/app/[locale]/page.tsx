
import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import AllPage from './AllPageClient';

const locales = ['en', 'de', 'bs'];

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "AllPage" });

  return {
    title: t('seo_root_title') || '',
    description: t('seo_root_description') || '',
    openGraph: {
      type: 'website',
      url: 'https://www.ambicon.at',
      title: t('seo_root_title') || '',
      description: t('seo_root_description') || '',
      images: [
        {
          url: '/imgs/template/logox.png',
          width: 800,
          height: 600,
          alt: 'Logo ambiCON GmbH',
        },
      ],
    },
    other: {
      'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://www.ambicon.at',
        name: 'ambiCON GmbH',
        legalName: 'ambiCON GmbH',
        logo: 'https://www.ambicon.at/imgs/template/logox.png',
        url: 'https://www.ambicon.at',
        address: {
          streetAddress: 'Dresdner Strasse 47/3. OG',
          addressLocality: 'Wien',
          addressRegion: 'Wien',
          postalCode: 'A-1200',
          addressCountry: 'AT',
        },
        contactPoint: [
          {
            telephone: '+43 (1) 90819 99',
            contactType: 'Kundendienst',
            areaServed: 'AT',
            availableLanguage: ['English', 'Deutsch', 'Bosanski'],
          },
        ],
        sameAs: ['https://www.ambicon.at'],
      }),
    },
  };
}

export default function AllPageServer({ params }: { params: { locale: string } }) {
  const { locale } = params;

  unstable_setRequestLocale(locale);

  return (

    <AllPage params={params} />

  )

}
