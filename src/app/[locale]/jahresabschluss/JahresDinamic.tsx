
"use client"

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../../../components/layout/Layout';
import Newsletter from '../../../../components/Old_layout/Newsletter/Newsletter';
import { CalendlyModalWrapper } from '../../../../components/elements/CalendlyModalWrapper';
import MarkdownRendererForJahr from '../../../../components/MarkdownRendererForJahr';
import { NextPage, NextPageContext } from "next";
import { NextSeo } from "next-seo";
import CustomHoverCard from '../../../../components/elements/Hover/Hover';
import { usePathname } from 'next/navigation';
import React from "react";
import "../digitale-buchhaltung/digitale-buchhaltung.css"



const renderTextWithTrigger = (text: string, triggerPhrase: string, triggerContent: string) => {
    const parts = text.split(triggerPhrase);
    return (
        <p className="All_Catd_paragraf mt-5 ">
            {parts[0]}
            {triggerPhrase && triggerContent && (
                /*  <CustomHoverCard trigger={<span className="text-gray-700 text-sm mt-1">{triggerPhrase}</span>} text={triggerContent} /> */
                <CustomHoverCard trigger={<span className="text-gray-700 text-sm mt-1">{triggerPhrase}</span>} text={triggerContent} />
            )}
            {parts[1]}
        </p>
    );
};

const renderTitleWithTrigger = (title: string, triggerPhrase: string, triggerContent: string) => {
    const parts = title.split(triggerPhrase);
    return (
        <h3 className="All_Catd_title mt-5 break-words">
            {parts[0]}
            {triggerPhrase && triggerContent && (
                <CustomHoverCard trigger={<h3 className="text-lg font-semibold">{triggerPhrase}</h3>} text={triggerContent} />
            )}
            {parts[1]}
        </h3>
    );
};

const renderTextWithTriggerMiddle = (text: string, triggerPhrase: string, triggerContent: string) => {
    const parts = text.split(triggerPhrase);
    return (
        /*   <p className="All_Catd_paragraf mt-5"> */
        <p className="smoolTextServices mt-5">
            {parts[0]}
            {triggerPhrase && triggerContent && (
                <>
                    <CustomHoverCard trigger={<span className="text-lg text-gray-600">{triggerPhrase}</span>} text={triggerContent} />
                    {parts[1]}
                </>
            )}
        </p>
    );
};

interface ComponentProps {
    params: {
        locale: string;
    };
}


export default function JahresDinamic({ params: { locale } }: ComponentProps) {
    const t = useTranslations('AllPage');
    const pathname = usePathname();
    const currentLocale = pathname.split('/')[1] || 'en'


    const colors = ['#eae4e9', '#fff3ea', '#fde2e4', '#fad2e1', '#dbece5', '#bee1e6'];
    const girdArray: any = [
        {
            headline: "tax_consultant_section_one_title_box_1",
            message: "tax_consultant_section_one_text_box_1",
            image: "/imgs/tax/icons/001-steuer-berechnen.svg",
            triggerPhraseBody: "gemäß § 2 BiBuG",
            triggerContentBody: "tax_consultant_section_one_text_box_1_legal",
        },
        {
            headline: "tax_consultant_section_one_title_box_2",
            message: "tax_consultant_section_one_text_box_2",
            image: "/imgs/personal/icons/004-rechnung.svg",
        },
        {
            headline: "tax_consultant_section_one_title_box_3",
            message: "tax_consultant_section_one_text_box_3",
            image: "/imgs/tax/icons/bilanz.svg",
        },
        {
            headline: "tax_consultant_section_one_title_box_4",
            message: "tax_consultant_section_one_text_box_4",
            image: "/imgs/tax/icons/004-test-bestehen.svg",
        },
        {
            headline: "tax_consultant_section_one_title_box_5",
            message: "tax_consultant_section_one_text_box_5",
            image: "/imgs/tax/icons/005-rechnung-1.svg",
        },
        {
            headline: "tax_consultant_section_one_title_box_6",
            message: "tax_consultant_section_one_text_box_6",
            image: "/imgs/tax/icons/002-stempel.svg",
            triggerPhraseTitle: "§ 2 BiBuG genannten Behörden*",
            triggerContentTitle: "tax_consultant_section_one_text_box_1_legal",
        },
    ];
    const bottomTextTooltip = {
        text: "tax_consultant_section_one_text_part_2",
        triggerPhrase: "§ 2 BiBuG",
        triggerContent: "tax_consultant_section_one_text_box_1_legal",
    };

    const topTextTooltip = {
        text: "tax_consultant_subtitle",
        triggerPhrase: "des § 2 Abs 2 Z 2 BiBuG iVm § 221 UGB",
        triggerContent: "tax_consultant_section_one_text_box_1_legal",
    }

    return (
        <>

            <Layout>
                <section className="section-box">
                    <div className="banner-hero bg-service-2">
                        <div className="container">

                            <div className="flex flex-wrap mx-1 lg:mx-4 items-center">
                                <div className="w-full text-center">
                                    <h1 className=" Tittle_text_allPages">
                                        <MarkdownRendererForJahr content={t("tax_consultant_title_part_1")} />
                                    </h1>
                                    <div>
                                        {/*  <p className="smoolTextServices mt-[-35px] lg:mt-[-10px]"> */}
                                        {/*   <p className="text-[#74808d]  smoolTextServices "> */}
                                        <p className="text-[#74808d]  smoolTextServices ">
                                            {renderTextWithTriggerMiddle(t(topTextTooltip.text), topTextTooltip.triggerPhrase, t(topTextTooltip.triggerContent))}

                                        </p>
                                    </div>


                                    <div className="mt-16  flex flex-wrap text-center justify-center gap-10 ">
                                        <CalendlyModalWrapper url="https://calendly.com/ambicon/">
                                            <a className="btn btn-black icon-arrow-right-white px-8 py-5 lg:py-6 mb-4 md:mb-0">
                                                {t("tax_consultant_termin_cta")}
                                            </a>
                                        </CalendlyModalWrapper>
                                        {/*  <CalendlyModalWrapper url="https://calendly.com/ambicon/">
                                            <a className="btn btn-black orenge_button_1 orenge_button px-12 py-6">{t("tax_consultant_termin_cta")}</a>
                                        </CalendlyModalWrapper> */}
                                        <Link href={`/${currentLocale}/kontakt`}
                                            className="btn btn-link icon-triangle text-gray-900 ">
                                            {t("tax_consultant_contact_cta")}

                                        </Link>
                                    </div>
                                </div>

                                {/* animacije section */}
                                <div className="hidden lg:block lg:w-full mt-[15%]  relative">
                                    <div className="flex flex-wrap mx-4">
                                        <div className="w-1/6 lg:w-1/6" />
                                        <div className="w-full lg:w-2/3 relative">
                                            <div className="relative">
                                                <Image
                                                    className=" rounded-xl  "
                                                    src="/imgs/tax/tax-banner.webp"
                                                    alt="ambicon"
                                                    layout="responsive"
                                                    height={619}
                                                    width={902}
                                                />


                                                <div className="absolute top-4 left-4 z-10 animate-slide">
                                                    <div className="block rounded-lg ml-[-50%] mt-[-25%] ">
                                                        <Image className='rounded-xl' src="/imgs/digital/bilaz-banner.webp" alt="ambicon" width={212} height={250} />
                                                    </div>
                                                </div>

                                                <div className="absolute bottom-4 left-4 flex flex-col gap-2 z-10 animate-slide">
                                                    <div className='flex lg:gap-[15%] xl:gap-[300px] 2xl:gap-[500px] '>
                                                        <div className="block rounded-md mt-10 ml-[-25%] ">
                                                            <Image className='rounded-xl' src="/imgs/digital/new-budget-plan.webp" alt="ambicon" width={310} height={105} />
                                                        </div>
                                                        <div className="block mb-10   lg:mr-[-25%] ">
                                                            <Image className='rounded-xl ' src="/imgs/digital/banner-3.webp" alt="ambicon" width={400} height={203} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-1/6" />
                                    </div>
                                </div>

                                <style jsx>{`
  .animate-slide {
    animation: slide 5s infinite alternate;
  }

  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(35px);
    }
  }
`}</style>


                                {/* end animacion sectinon */}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-90">
                    <div className="container">
                        <div className="flex flex-wrap mx-2">
                            <div className="w-full lg:w-1/6" />
                            <div className="w-full lg:w-2/3 text-center mt-10">
                                <h2 className="font-normal font-chivo Tittle_text_allPages">
                                    {t("tax_consultant_section_one_title")}
                                </h2>
                                <p className="smoolTextServices text-gray-600 mt-5">
                                    <MarkdownRendererForJahr content={t("tax_consultant_section_one_subtitle")} />
                                </p>
                            </div>
                            <div className="w-full sm:w-1/12 lg:w-1/6" />
                        </div>
                    </div>
                    <div className="container mt-24 mb-24">
                        <div className="flex flex-wrap mx-2   ">

                            <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 lg:grid-cols-3">
                                {girdArray.map((item: any, index: number) => (
                                    <div className="w-full" key={index}>
                                        <div
                                            className="card-grid-1 hover-up card-carrer-page"
                                            style={{ backgroundColor: colors[index % colors.length] }}
                                        >
                                            <div className="grid-1-img">
                                                <Image className='mx-auto' src={item.image} alt="icon" height={80} width={80} />
                                            </div>

                                            {renderTitleWithTrigger(t(item.headline), item.triggerPhraseTitle, t(item.triggerContentTitle))}

                                            {renderTextWithTrigger(t(item.message), item.triggerPhraseBody, t(item.triggerContentBody))}

                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="w-full sm:w-1/12 lg:w-1/6 mt-10" />
                            <div className="w-full sm:w-5/6 lg:w-2/3 text-center mt-10">

                                <p className="smoolTextServices">
                                    {t("tax_consultant_section_one_text_part_1")}
                                </p>
                                <p className="smoolTextServices mt-5">
                                    {renderTextWithTriggerMiddle(t(bottomTextTooltip.text), bottomTextTooltip.triggerPhrase, t(bottomTextTooltip.triggerContent))}
                                </p>

                                <div className="mt-16 mb-24 flex flex-wrap text-center justify-center gap-10 ">
                                    <CalendlyModalWrapper url="https://calendly.com/ambicon/">
                                        <a className="btn btn-black icon-arrow-right-white px-8 py-6">{t("tax_consultant_termin_cta")}</a>
                                    </CalendlyModalWrapper>
                                    <Link href={`/${currentLocale}/kontakt`}
                                        className="btn btn-link icon-triangle text-gray-900 ">
                                        {t("tax_consultant_contact_cta")}

                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='mb-20'>
                    <Newsletter />
                </div>
            </Layout>
        </>
    );
};
