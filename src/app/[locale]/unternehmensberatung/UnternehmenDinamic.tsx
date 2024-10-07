

"use client"

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../../../components/layout/Layout';
import Newsletter from '../../../../components/Old_layout/Newsletter/Newsletter';
import { CalendlyModalWrapper } from '../../../../components/elements/CalendlyModalWrapper';
import MarkdownRenderer from '../../../../components/MarkdownRender';
import { NextPage, NextPageContext } from "next";

import { usePathname } from 'next/navigation';
import React from 'react';
import "../digitale-buchhaltung/digitale-buchhaltung.css"


interface ComponentProps {
    params: {
        locale: string;
    };
}


export default function UnternehmenDinamic({ params }: { params: { locale: string } }) {

    const t = useTranslations('AllPage');
    const pathname = usePathname();
    const currentLocale = pathname.split('/')[1] || 'en';

    const colors = ['#eae4e9', '#fff3ea', '#fde2e4', '#fad2e1', '#dbece5', '#bee1e6'];
    const girdArray: any = [
        {
            headline: "company_consulting_section_one_box_1_title",
            message: "company_consulting_section_one_box_1_text",
            image: "/imgs/personal/icons/001-employee.svg",
        },
        {
            headline: "company_consulting_section_one_box_2_title",
            message: "company_consulting_section_one_box_2_text",
            image: "/imgs/personal/icons/verfahren.svg",
        },
        {
            headline: "company_consulting_section_one_box_3_title",
            message: "company_consulting_section_one_box_3_text",
            image: "/imgs/personal/icons/004-rechnung.svg",
        },
        {
            headline: "company_consulting_section_one_box_4_title",
            message: "company_consulting_section_one_box_4_text",
            image: "/imgs/personal/icons/umstrukturierung.svg",
        },
        {
            headline: "company_consulting_section_one_box_5_title",
            message: "company_consulting_section_one_box_5_text",
            image: "/imgs/personal/icons/bewertung.svg",
        },
        {
            headline: "company_consulting_section_one_box_6_title",
            message: "company_consulting_section_one_box_6_text",
            image: "/imgs/personal/icons/002-contract.svg",
        },
    ];
    return (
        <>

            <Layout>
                <section className="section-box">
                    <div className="banner-hero bg-service-2">
                        <div className="container">

                            <div className="flex flex-wrap mx-1 lg:mx-4 items-center">
                                <div className="w-full text-center">
                                    <h1 className=" Tittle_text_allPages mt-10">
                                        <MarkdownRenderer content={t("company_consulting_title")} />
                                    </h1>
                                    <p className="smoolTextServices mt-10">
                                        {t("company_consulting_section_one_subtitle_part_1")}
                                        <br className="hidden lg:block" />
                                        {t("company_consulting_section_one_subtitle_part_2")}
                                    </p>

                                    <div className="mt-10  flex flex-wrap text-center justify-center gap-10 ">
                                        <CalendlyModalWrapper url="https://calendly.com/ambicon/">
                                            <a className="btn btn-black icon-arrow-right-white px-8 py-5 lg:py-6">{t("company_consulting_termin_cta")}</a>
                                        </CalendlyModalWrapper>
                                        <Link href={`/${currentLocale}/kontakt`}
                                            className="btn btn-link icon-triangle text-gray-900 ">
                                            {t("company_consulting_contact_cta")}

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
                                                    src="/imgs/personal/banner-consulting.webp"
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
                                <h2 className="font-normal Tittle_text_allPages mt-10">
                                    {t("company_consulting_section_one_title")}
                                </h2>

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
                                            <h3 className="All_Catd_title mt-5">{t(item.headline)}</h3>
                                            <p className="All_Catd_paragraf mt-5">{t(item.message)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="w-full sm:w-1/12 lg:w-1/6 mt-10" />
                            <div className="w-full sm:w-5/6 lg:w-2/3 text-center mt-10">

                                <p className="smoolTextServices">
                                    {t("company_consulting_section_one_text_part_1")}
                                </p>
                                <p className="smoolTextServices mt-5">
                                    {t("company_consulting_section_one_text_part_2")}
                                </p>

                                <div className="mt-14 mb-24  flex flex-wrap text-center justify-center gap-10 ">
                                    <CalendlyModalWrapper url="https://calendly.com/ambicon/">
                                        <a className="btn btn-black icon-arrow-right-white px-8 py-6">{t("digitalaccountancy_termin_cta")}</a>
                                    </CalendlyModalWrapper>
                                    <Link href={`/${currentLocale}/kontakt`}
                                        className="btn btn-link icon-triangle text-gray-900 ">
                                        {t("digitalaccountancy_contact_cta")}

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
