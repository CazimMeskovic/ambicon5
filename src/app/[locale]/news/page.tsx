
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { formatDate} from '../../../../util/utils';
import { Suspense } from 'react';
import NewsletterDinamic from './NewsletterDinamic';

const locales = ['en', 'de', 'bs'];

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
    const { locale } = params;
    const t = await getTranslations({ locale, namespace: "AllPage" });

    return {
        title: t('seo_news_title') || '',
        description: t('seo_news_description') || '',
        openGraph: {
            title: t('seo_news_title') || 'News',
            description: t('seo_news_description') || 'Latest news',
            url: ` https://www.ambicon.at/nachrichten/`,
            type: 'article', 
            publishedTime: formatDate(new Date()), 
            modifiedTime: formatDate(new Date()),  
            section: t('news_section') || 'News',  
            tags: t('news_tags')?.split(',') || [],
            images: [
                {
                    url: '/path-to-your-image.jpg',
                    width: 850,
                    height: 650,
                    alt: t('seo_news_title') || 'News Image',
                },
            ],
        },
    };
}

export default function AllPageServer({ params }: { params: { locale: string } }) {
    const { locale } = params;

    unstable_setRequestLocale(locale);

    return (
        <>
          
                <NewsletterDinamic params={params} />
           
        </>
    );
}
