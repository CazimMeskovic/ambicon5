"use client"

import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';
import Link from "next/link";
import Image from "next/image";
import { CalendlyModalWrapper } from "../../../components/elements/CalendlyModalWrapper";
import Layout from "../../../components/layout/Layout";
import Newsletter from "../../../components/Old_layout/Newsletter/Newsletter";
import { News } from "@/types/News";
import KIClient from "../../../components/KIClient";
import GoogleRating from "../../../components/elements/google-rating/GoogleRating";
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import "./page.css"


const fetchPosts = async () => {
    const response = await fetch("/api/posts");
    const data = await response.json();
    return data;
};

interface ComponentProps {
    params: {
        locale: string;
    };
}


export default function AllPage({ params }: { params: { locale: string } }) {
    const t = useTranslations('AllPage');
    const [posts, setPosts] = useState<{ edges: News[] }>({ edges: [] });
    const pathname = usePathname();
    const currentLocale = pathname.split('/')[1] || 'en';
    /*  */
    const reviewUrl =
        "https://www.google.com/search?hl=de-DE&gl=ba&q=ambiCON+GmbH,+Dresdner+Str.+47/3.OG,+1200+Wien,+Austria&ludocid=10578292722483083144&lsig=AB86z5X-yvxXFCSJZTrrDuxeY0uJ#ip=1";

    useEffect(() => {
        fetchPosts().then(setPosts);
    }, []);

    const getFirstBoxIcon = (language: string) => {
        switch (language) {
            case "Deutsch":
                return "/imgs/icons/digital-accounting.svg";
            case "BHS":
                return "/imgs/icons/digital-accounting.svg";
            case "English":
                return "/imgs/icons/digital-accounting.svg";
        }
    };

    const getSecondBoxIcon = (language: string) => {
        switch (language) {
            case "Deutsch":
                return "/imgs/icons/digital-pay-check.svg";
            case "BHS":
                return "/imgs/icons/digital-pay-check.svg";
            case "English":
                return "/imgs/icons/digital-pay-check.svg";
        }
    };

    const getThirdBoxIcon = (language: string) => {
        switch (language) {
            case "Deutsch":
                return "/imgs/icons/digital-tax.svg";
            case "BHS":
                return "/imgs/icons/digital-tax.svg";
            case "English":
                return "/imgs/icons/digital-tax.svg";
        }
    };



    return (
        <>

            <Layout>
                <section className="section-box ">
                    <div className="banner-hero banner-4">
                        <div className="container">
                            <div className="grid grid-cols-1 lg:grid-cols-12">
                                <div className="lg:col-span-7">
                                    <h1 className="font-Tittle  text-[3.14rem] sm:text-[3rem] lg:text-[3.2rem]
                         leading-[3.75rem] lg:leading-[3.8rem] font-bold text-white mb-6">
                                        {t("index_header_h1")}
                                    </h1>
                                    <p className="text-xl font-Paragra  text-white mb-8 pr-8">{t("index_header_text_part_1")}</p>
                                    <GoogleRating rating={5.0} reviewCount={75} url={reviewUrl} />
                                    <div className="flex flex-col mt-10 sm:flex-row lg:items-center pr-4 sm:pr-0 sm:gap-2">

                                        <CalendlyModalWrapper url="https://calendly.com/ambicon/"    >

                                            {/* <a className=" py-3  sm:py-6 lg:py-[20px] lg:text-nowrap px-9 rounded-[40px] bg-[#ee7100] font-bold text-white cursor-pointer font-Paragra
                                   text-[1.1rem] leading-[1.3rem] flex flex-col justify-between items-center 
                                    btn btn-black  icon-arrow-right-white  hover-up mb-4 lg:mb-0 lg:mr-4"> */}
                                            <a className=" py-3  sm:py-6 lg:py-[20px] lg:text-nowrap px-9 rounded-[40px] bg-[#ee7100] font-bold text-white cursor-pointer font-Paragra
                                   text-[1.1rem] leading-[1.3rem] flex flex-col justify-between items-center 
                                    btn btn-black  orenge_button  hover-up mb-4 lg:mb-0 lg:mr-4">
                                                <span className="flex-1 flex items-center justify-center text-center">
                                                    {t("index_header_meeting_button")} <span className="text-lg ml-3">➜</span>
                                                </span>

                                            </a>
                                        </CalendlyModalWrapper>

                                        <Link
                                            href="https://bmdcom.ambicon.at/bmdcom/"

                                            className="py-3  sm:py-6 lg:py-[20px] lg:text-nowrap  px-9 rounded-[40px] font-Paragra text-[1.1rem] leading-[1.3rem] cursor-pointer font-bold
                                flex flex-col justify-between items-center  text-center btn btn-white  hover-up
                                mb-4 lg:mb-0 lg:mr-4"
                                            target="_blank"
                                        >
                                            <span className="flex-1 flex items-center justify-center text-nowrap text-center">
                                                {t("index_header_second_cta")}<span className="text-lg ml-3">➜</span>
                                            </span>

                                        </Link>
                                    </div>
                                    <div className="mt-12 grid  grid-cols-3 gap-8">
                                        <div className="text-center">
                                            <h3 className="font-Tittle text-[1.5rem] sm:text-[1.8rem] leading-[2rem]  font-bold text-white mb-2">699+</h3>
                                            <p className="font-Paragra text-start text-[0.7rem] sm:text-[1.3rem] leading-[1.4rem] text-gray-300">{t("index_hero_clients")}</p>
                                        </div>
                                        <div className="text-center">
                                            <h3 className="font-Tittle text-[1.5rem] sm:text-[1.8rem] leading-[2rem]  font-bold text-white mb-2">756+</h3>
                                            <p className="font-Paragra text-start text-[0.7rem] sm:text-[1.3rem] leading-[1.4rem] text-gray-300">{t("index_hero_projects")}</p>
                                        </div>
                                        <div className="text-center mr-2 sm:mr-0 ">
                                            <h3 className="font-Tittle text-[1.5rem] sm:text-[1.8rem] leading-[2rem]  font-bold text-white mb-2">100%</h3>
                                            <p className="font-Paragra text-nowrap sm:text-wrap text-start text-[0.7rem] sm:text-[1.3rem] leading-[1.4rem] text-gray-300">{t("index_hero_satisfaction")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box">

                    <div className="container mx-auto">
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-2/12 sm:w-1/12" />
                            <div className="w-full lg:w-8/12 sm:w-10/12 text-center mt-24">
                                <h2 className="font-[300] text-[35px] leading-[42px] sm:text-[50px] sm:leading-[62px] lg:text-[64px] lg:leading-[72px] font-Tittle text-[rgb(16,24,40)]">
                                    {t("index_section_one_header")}
                                    <br className="hidden lg:block" />
                                </h2>
                                <p className="font-normal pt-5 font-Paragra text-[21px] leading-[32px] text-[rgb(71,84,103)]" >{t("index_section_one_subtitle")}</p>
                            </div>
                            <div className="w-full lg:w-2/12 sm:w-1/12" />
                        </div>
                    </div>

                    <div className="container ">
                        <div className=" pt-20 pb-20  grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className=" col-span-1 ">
                                {/*    <div className="rounded-xl card-grid-1 bg-5 bg-business hover-up card-main-page"> */}
                                <div className="rounded-xl card-grid-1 bg-5 bg-business hover-up card-carrer-page">
                                    <div className="grid-1-img  pt-[55px] pb-[35px] flex justify-center ">
                                        <Image
                                            src={getFirstBoxIcon(t("current_language")) ?? " "}
                                            alt="ambicon - digital buchhaltung"
                                            width={80}
                                            height={80}
                                        />
                                    </div>
                                    <h3 className="Cart_title ">{t("index_section_one_box_one_title")}</h3>
                                    <p className="Card_subtitle px-7 ">{t("index_section_one_box_one_text")}</p>
                                    <div className="pb-[130px]  flex  justify-center ">
                                        <Link

                                            href={`/${currentLocale}/digitale-buchhaltung`}
                                            /*     className=" py-5 px-8 btn btn-default btn-white icon-arrow-right" */
                                            className=" py-5 px-8 btn btn-default btn-white "

                                        > <span className="flex flex-row ">
                                                <span> {t("index_section_one_cta")}</span>
                                                <span className=" pt-[1px] ml-3 "> ➜ </span> </span>
                                        </Link>

                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#d1ecfd] rounded-xl col-span-1  bg-9 hover-up card-carrer-page">
                                <div className=" card-grid-1 grid-1-img bg-9  bg-local px-10 max-w-[100%] ">
                                    <div className="grid-1-img pt-[55px] pb-[35px] flex justify-center">
                                        <Image
                                            src={getSecondBoxIcon(t("current_language")) ?? ""}
                                            alt="ambicon - digital buchhaltung"
                                            width={80}
                                            height={80}
                                        />
                                    </div>
                                    <h3 className="Cart_title">
                                        {t("index_section_one_box_two_title")}
                                    </h3>
                                    <p className="Card_subtitle">
                                        {t("index_section_one_box_two_text")}
                                    </p>

                                    <div className="pb-[130px]  flex  justify-center ">
                                        <Link

                                            href={`/${currentLocale}/personalverrechnung`}
                                            className=" py-5 px-8 btn btn-default btn-white "
                                        > <span className="flex flex-row ">
                                                <span> {t("index_section_one_cta")}</span>
                                                <span className=" pt-[1px] ml-3 "> ➜ </span> </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-thirtCard rounded-xl col-span-1 hover-up card-carrer-page ">
                                <div className=" card-grid-1 grid-1-img bg-2 bg-social px-10 max-w-[100%] ">
                                    <div className="grid-1-img pt-[55px] pb-[35px] flex justify-center">
                                        <Image
                                            src={getThirdBoxIcon(t("current_language")) ?? ""}
                                            alt="ambicon - digitale personalverrechnung"
                                            width={80}
                                            height={80}
                                        />
                                    </div>
                                    <h3 className="Cart_title">
                                        {t("index_section_one_box_three_title")}
                                    </h3>
                                    <p className="Card_subtitle ">
                                        {t("index_section_one_box_three_text")}
                                    </p>

                                    <div className="pb-[130px]  flex  justify-center ">
                                        <Link
                                            href={`/${currentLocale}/jahresabschluss`}
                                            className=" py-5 px-8 btn btn-default btn-white "
                                        > <span className="flex flex-row ">
                                                <span> {t("index_section_one_cta")}</span>
                                                <span className=" pt-[1px] ml-3 "> ➜ </span> </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>
                <section className="section-box">
                    <div className="container mt-10 ">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                            <div className="col-span-1 block-img-we-do">
                                <Image className="rounded-lg" src="/imgs/team/ambicon-index.webp" alt="ambicon" height={828} width={695} />
                            </div>
                            <div className="col-span-1 block-we-do">
                                <span className="tag-1 text-[0.9rem] text-[#E29578] text-Tittle bg-[#fff3ea] rounded-[40px] py-3 px-6 ">{t("index_section_two_theaser")}</span>
                                <h3 className=" font-Tittle text-[#101828] text-[2.2rem] sm:text-[2.6rem] lg:text-[4rem] leading-[2.63rem] lg:leading-[4.5rem] font-light mt-8">{t("index_section_two_title")}</h3>
                                <p className=" text-xl font-Paragra leading-[2rem] text-gray-600 mt-8">{t("index_section_two_text")}</p>
                                <div className="line-bd-green mt-10"></div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-5 lg:mt-12">
                                    <div className="col-span-1 mt-8 lg:mt-0">
                                        <h4 className="font-Tittle text-[1.13rem] leading-[1.4rem]  font-semibold flex items-center">
                                            <span className="icon-leaf   ">&nbsp;</span>
                                            {t("index_section_two_point_one_title")}
                                        </h4>
                                        <p className="smale_text_after-card  mt-4">{t("index_section_two_point_one_text")}</p>
                                    </div>
                                    <div className="col-span-1 mt-8 lg:mt-0">
                                        <h4 className="font-Tittle text-[1.13rem] leading-[1.4rem]  font-semibold flex items-center">
                                            <span className="icon-leaf " >&nbsp;</span>
                                            {t("index_section_two_point_two_title")}
                                        </h4>
                                        <p className="smale_text_after-card  mt-4">{t("index_section_two_point_two_text")}</p>
                                    </div>
                                    <div className="col-span-1 mt-8 lg:mt-0">
                                        <h4 className="font-Tittle text-[1.13rem] leading-[1.4rem]  font-semibold flex items-center">
                                            <span className="icon-leaf ">&nbsp;</span>
                                            {t("index_section_two_point_three_title")}
                                        </h4>
                                        <p className="smale_text_after-card  mt-4">{t("index_section_two_point_three_text")}</p>
                                    </div>
                                    <div className="col-span-1 mt-8 lg:mt-0">
                                        <h4 className="font-Tittle text-[1.13rem] leading-[1.4rem]  font-semibold flex items-center">
                                            <span className="icon-leaf ">&nbsp;</span>
                                            {t("index_section_two_point_four_title")}
                                        </h4>
                                        <p className="smale_text_after-card  mt-4">{t("index_section_two_point_four_text")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box ">
                    <div className="container mt-20 lg:mt-32">

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 lg:gap-8">
                            <div className="lg:col-span-2 ">
                                {/*  <h3 className=" text-[2.19rem] lg:text-[4rem] leading-[2.628rem] lg:leading-[4.5rem]  font-normal mb-4">{t("index_section_three_title")}</h3> */}
                                <h3 className="Tittle_text_allPages font-[300px] mb-4">{t("index_section_three_title")}</h3>
                                <p className="  paragraf-text-small lg:text-[1.5rem] lg:paragraf-text mb-8">{t("index_section_three_text")}</p>
                            </div>
                            <div className="lg:col-span-1 flex justify-start lg:justify-end lg:pt-0 ">

                                <a onClick={() => (window.location.href = `/${currentLocale}/nachrichten/kicat=1&navcat=2`)} className="BTN_orange   flex items-center justify-center ">{t("index_section_three_cta")}<span className="ml-3">➜ </span> </a>
                            </div>
                        </div>
                    </div>
                    <a onClick={() => (window.location.href = `/${currentLocale}/Newsletter`)} >
                        <div className="container mt-20 lg:mt-16">
                            <div className="grid grid-cols-1">

                                <KIClient kicat={11} />

                            </div>
                        </div>
                    </a>
                </section>
                <Newsletter />
            </Layout>

        </>
    );
};