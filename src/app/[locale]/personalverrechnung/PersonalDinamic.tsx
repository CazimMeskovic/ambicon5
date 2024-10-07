
"use client"

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../../../components/layout/Layout';
import Newsletter from '../../../../components/Old_layout/Newsletter/Newsletter';
import { CalendlyModalWrapper } from '../../../../components/elements/CalendlyModalWrapper';
import MarkdownRenderer from '../../../../components/MarkdownRender';
import { NextPage, NextPageContext } from "next";
import { NextSeo } from "next-seo";
import Accordion from '../../../../components/elements/Accordion';
import { usePathname } from 'next/navigation';
import "../digitale-buchhaltung/digitale-buchhaltung.css"


interface ComponentProps {
    params: {
        locale: string;
    };
}


export default function PersonalDinamic({ params }: { params: { locale: string } }) {
    const t = useTranslations('AllPage');
    const pathname = usePathname();


    const currentLocale = pathname.split('/')[1] || 'en';
    const colors = ['#eae4e9', '#fff3ea', '#fde2e4', '#fad2e1', '#dbece5', '#bee1e6'];
    const girdArray: any = [
        {
            headline: "payroll_accounting_section_one_title_box_1",
            message: "payroll_accounting_section_one_text_box_1",
            image: "/imgs/personal/icons/001-employee.svg",
        },
        {
            headline: "payroll_accounting_section_one_title_box_2",
            message: "payroll_accounting_section_one_text_box_2",
            image: "/imgs/personal/icons/002-contract.svg",
        },
        {
            headline: "payroll_accounting_section_one_title_box_3",
            message: "payroll_accounting_section_one_text_box_3",
            image: "/imgs/personal/icons/003-signature.svg",
        },
        {
            headline: "payroll_accounting_section_one_title_box_4",
            message: "payroll_accounting_section_one_text_box_4",
            image: "/imgs/personal/icons/004-rechnung.svg",
        },
        {
            headline: "payroll_accounting_section_one_title_box_5",
            message: "payroll_accounting_section_one_text_box_5",
            image: "/imgs/personal/icons/005-rechnung-1.svg",
        },
        {
            headline: "payroll_accounting_section_one_title_box_6",
            message: "payroll_accounting_section_one_text_box_6",
            image: "/imgs/personal/icons/006-die-pension.svg",
        },
    ];

    const accordionData: any = {
        Deutsch: [
            {
                title: "Wie kann ich eine/n MitarbeiterIn anmelden bzw. abmelden und gibt es Fristen?",
                content:
                    "Die Anmeldung der Mitarbeiter erfolgt mittels Datenfernübertragung und muss vor Arbeitsbeginn erstattet werden. Eine rückwirkende Abmeldung kann spätestens bis zu 7 Tage nach dem Abmeldedatum erfolgen.",
            },
            {
                title: "Kann ich im Notfall eine/n MitarbeiterIn telefonisch anmelden?",
                content:
                    "Eine Vor-Ort-Anmeldung per Telefax unter der Nummer 05 0766-1461 oder per Telefon unter der Nummer 05 0766-1460 ist nach den Richtlinien über Ausnahmen von der Meldungserstattung mittels Datenfernübertragung (RMDFÜ) möglich. Innerhalb von 7 Tagen muss allerdings die richtige Anmeldung erfolgen.",
            },
            {
                title: "Welche Dokumente sind für die Anmeldung notwendig?",
                content: "Um eine Anmeldung ordnungsgemäß durchführen zu können benötigen wir folgende Dokumente:",
                listData: [
                    "Info über Lohn/Gehalt und Arbeitszeitausmaß",
                    "Ausweis und ggf. gültige Beschäftigungsbewilligung für Drittstaatsangehörige",
                    "Meldezettel",
                    "Ecard",
                ],
            },
            {
                title: "Wie viel kostet mich ein/e MitarbeiterIn monatlich?",
                content: (
                    <div>
                        Die Gesamtkosten eines Mitarbeiters hängen von dessen Bruttolohn ab. Der Bruttolohn sowie die
                        Lohnnebenkosten, welche der Dienstgeber zu tragen hat, ergeben die monatlichen Gesamtkosten. Einen Überblick
                        bzw. einen Rechner der Kosten verschafft Ihnen der Haude-Brutto-Netto-Rechner. <br />
                        Link:
                        <Link href="https://onlinerechner.haude.at/Brutto-Netto-Rechner/"
                            style={{ paddingLeft: 4 }}>Brutto-Netto-Rechner (haude.at)
                        </Link>

                    </div>
                ),
            },
        ],
        English: [
            {
                title: "How can I register or deregister an employee and are there any deadlines",
                content:
                    "Employees are registered by means of remote data transmission and must be returned before the start of work. A retrospective deregistration can be made up to 7 days after the deregistration date at the latest.",
            },
            {
                title: "Can I register an employee by telephone in an emergency?",
                content:
                    "On-site registration, by fax on 05 0766-1461 or by telephone on 05 0766-1460 are all possible according to the Guidelines on Exceptions to Reporting by Remote Data Transmission (RMDFÜ). However, the correct notification must be made within 7 days.",
            },
            {
                title: "Which documents are necessary in registration?",
                content: "In order to be able to register properly, we need the following documents:",
                listData: [
                    "Information about wages/salaries and the extent of working hours",
                    "ID card and, if applicable, valid work permit for third-country nationals",
                    "Meldezettel",
                    "Ecard",
                ],
            },
            {
                title: "How much does it cost me to register an employee?",
                content: (
                    <div>
                        The total costs of an employee depend on his gross salary. The gross wage and the ancillary wage costs,
                        which the employer has to bear, result in the total monthly costs. The Haude Gross Net Calculator provides
                        you with an overview or calculator of the costs. <br />
                        Link:
                        <Link href="https://onlinerechner.haude.at/Brutto-Netto-Rechner/"
                            style={{ paddingLeft: 4 }}>Gross-Net Calculator (haude.at)
                        </Link>
                    </div>
                ),
            },
        ],
        BHS: [
            {
                title: "Kako mogu prijaviti odnosno odjaviti uposlenika i da li postoje određeni rokovi?",
                content:
                    "Uposlenici se prijavljuju daljinskim transferom i taj proces mora biti završen prije početka rada. Retroaktivna odjava se može uraditi najkasnije sedam dana unazad od datuma odjave.",
            },
            {
                title: "Da li u vanrednim okolnostima radnika mogu prijaviti telefonski?",
                content:
                    "Prijava na licu mjesta, faksom na 05 0766-1461 ili telefonom na 05 0766-1460 je moguća u skladu sa Smjernicama o izuzecima od izvještavanja putem daljinskog prijenosa podataka (RMDFÜ). Ipak, redovna prijava mora biti završena u roku od sedam dana.",
            },
            {
                title: "Koji dokumenti su neophodni za prijavu?",
                content: "Da bi prijava bila uredna potrebno je dostaviti sljedeće dokumente:",
                listData: [
                    "Informaciju o plati i radnom vremenu",
                    "Ličnu ispravu i ukoliko je dostupna ili radnu dozvolu za radnike iz trećih zemalja",
                    "Meldezettel",
                    "Ecard",
                ],
            },
            {
                title: "Koliko košta prijava novog radnika?",
                content: (
                    <div>
                        Ukupan iznos opterećanja za novog radnika ovisi o visini bruto plate. Bruto plata i ostala primanja i
                        troškovi koje poslodavac mora isplatiti rezultiraju ukupnim mjesečnim troškovima. Haude Gross Net Calculator
                        će vam pomoći da steknete bolji uvid u ovo pitanje <br />
                        Link:
                        <Link href="https://onlinerechner.haude.at/Brutto-Netto-Rechner/"
                            style={{ paddingLeft: 4 }}>Gross-Net Calculator (haude.at)
                        </Link>
                    </div>
                ),
            },
        ],
    };


    const getCurrentLanguage = () => {
        return t("current_language");
    };

    const getAccordionData = () => {
        return accordionData[getCurrentLanguage()];
    };

    return (
        <>

            <Layout>
                <section className="section-box">
                    <div className="banner-hero bg-service-2">
                        <div className="container">

                            <div className="flex flex-wrap mx-1 lg:mx-4 items-center">
                                <div className="w-full text-center">
                                    <h1 className="Tittle_text_allPages ">
                                        <MarkdownRenderer content={t("payroll_accounting_title")} />
                                    </h1>
                                    <p className="smoolTextServices mt-10">
                                        {t("payroll_accounting_subtitle_part_1")}
                                        <br className="hidden lg:block" />
                                        {t("payroll_accounting_subtitle_part_2")}
                                    </p>

                                    <div className="mt-10 mt-10 flex flex-wrap text-center justify-center gap-10 ">
                                        <CalendlyModalWrapper url="https://calendly.com/ambicon/">
                                            <a className="btn btn-black icon-arrow-right-white px-8 py-6">{t("payroll_accounting_termin_cta")}</a>
                                        </CalendlyModalWrapper>
                                        <Link href={`/${currentLocale}/kontakt`}
                                            className="btn btn-link icon-triangle text-gray-900 ">
                                            {t("payroll_accounting_contact_cta")}

                                        </Link>
                                    </div>

                                </div>

                                <div className="hidden lg:block lg:w-full mt-[15%]  relative">
                                    <div className="flex flex-wrap mx-4">
                                        <div className="w-1/6 lg:w-1/6" />
                                        <div className="w-full lg:w-2/3 relative">
                                            <div className="relative">
                                                <Image
                                                    className=" rounded-xl  "
                                                    src="/imgs/personal/banner-payroll.webp"
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
                                    {t("payroll_accounting_section_one_title")}
                                </h2>

                                <p className="smoolTextServices mt-5">
                                    {t("payroll_accounting_section_one_subtitle")}
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
                                            <h3 className=" All_Catd_title mt-5">{t(item.headline)}</h3>
                                            <p className="All_Catd_paragraf mt-5">{t(item.message)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className=" w-full sm:w-1/12 lg:w-1/6 mt-10" />
                            <div className="w-full sm:w-5/6 lg:w-2/3 text-center mt-10">

                                <p className=" text-center Paragraf_text_allPages smoolTextServices">
                                    {t("payroll_acounting_section_one_text")}
                                </p>


                                <div className="mt-14 mb-8 lg:mb-24  flex flex-wrap text-center justify-center gap-10 ">
                                    <CalendlyModalWrapper url="https://calendly.com/ambicon/">
                                        <a className="btn btn-black icon-arrow-right-white px-8 py-6">{t("payroll_accounting_termin_cta")}</a>
                                    </CalendlyModalWrapper>
                                    <Link href={`/${currentLocale}/kontakt`}
                                        className="btn btn-link icon-triangle text-gray-900 ">
                                        {t("payroll_accounting_contact_cta")}

                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className=" section-box pb-50">
                    <div className="container">
                        <div className="flex flex-wrap mx-2">
                            <div className="lg:w-5/12 mb-10">
                                <h3 className=" font-semibold text-[2.1rem]  leading-[2.77rem] sm:text-[2.879rem]  sm:leading-[3.255rem] lg:text-[3.5rem]  lg:leading-[4rem] Tittle_text_allPages">{t("payroll_accounting_faq_title")}</h3>
                                <p className="smoolTextServices mt-5 lg:mt-10 mb-10 ">{t("payroll_accounting_faq_subtitle")}</p>

                                <div className="mt-14 mb-24 flex flex-wrap text-center justify-center gap-10 ">
                                    <CalendlyModalWrapper url="https://calendly.com/ambicon/">
                                        <a className="btn btn-black icon-arrow-right-white px-8 py-6">{t("payroll_accounting_termin_cta")}</a>
                                    </CalendlyModalWrapper>
                                    <Link href={`/${currentLocale}/kontakt`}
                                        className="btn btn-link icon-triangle text-gray-900 ">
                                        {t("payroll_accounting_contact_cta")}

                                    </Link>
                                </div>
                            </div>
                            <div className=" lg:w-7/12">
                                <Accordion data={getAccordionData()} />
                            </div>
                        </div>
                    </div>
                </section>
                <Newsletter />
            </Layout>
        </>
    );
};

