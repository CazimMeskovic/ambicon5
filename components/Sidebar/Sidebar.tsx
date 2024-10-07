

'use client';

import React, { useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import "./Sidebar.css"
import { CalendlyModalWrapper } from '../elements/CalendlyModalWrapper';



interface Props {
    openClass: string;
    handleStateChangeSidebar: () => void;
}


const Sidebar = ({ openClass, handleStateChangeSidebar }: Props) => {
    const t = useTranslations('AllPage');
    const router = useRouter();
    const onToggleLanguageClick = (newLocale: string) => {

    };
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });
    const [sticky, setSticky] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentLocale = pathname.split('/')[1] || 'en';



    const handleChange = useCallback(
        (newLocale: string) => () => {
            const days = 30;
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            const expires = '; expires=' + date.toUTCString();
            document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

            if (currentLocale === newLocale) {
                return;
            }

            const basePath = pathname.replace(/^\/[a-z]{2}/, '');
            const newPath = `/${newLocale}${basePath}`;

            router.push(newPath);
        },
        [currentLocale, pathname, router]
    );


    const handleToggle = (key: string) => {
        setIsActive((prevState) => ({
            status: prevState.key !== key ? true : !prevState.status,
            key: prevState.key === key && prevState.status ? "" : key,
        }));
    };


    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style ${openClass} `}>
                <PerfectScrollbar className="mobile-header-wrapper-inner">
                    <div className=" mobile-header-top p-8   ">
                        <div className="user-account  " style={{ minHeight: 34 }}>
                            <div className="content flex flex-row gap-16">

                                <CalendlyModalWrapper url="https://calendly.com/ambicon/">
                                    <a className=" bg-[#101828]  text-white font-Tittle text-[1.1rem] leading-[1.11rem] font-bold
                                     text-sm py-5 px-5 rounded-lg">
                                        {t("index_header_meeting_button")}
                                    </a>
                                </CalendlyModalWrapper>

                                <div className="burger-icon burger-icon-white" onClick={handleStateChangeSidebar}>
                                    <span className="burger-icon-top bg-[#677084]" style={{ transform: "rotate(45deg)", marginTop: "7px" }} />
                                    <span className="burger-icon-bottom bg-[#677084]" style={{ transform: "rotate(-45deg)", marginBottom: "10px" }} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="mobile-menu-wrap  border-gray-200">
                            <nav>

                                <ul className="text-[1rem] leading-[1rem] mobile-menu font-heading">
                                    <li className="hover-effect">
                                        <Link href="/" className="active font-Tittle text-[0.97rem]">{t("top_nav_index")}</Link>
                                    </li>

                                    <li className={` ${isActive.key === "2" ? "has-children font-Tittle text-[0.97rem]" : " has-children"}`}>
                                        <span onClick={() => handleToggle("2")} className="menu-expand cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className={`fi-rr-angle-small-down text-[#677084] h-4 w-4 ${isActive.key === "2" ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                        <div className="hover-effect">
                                            <Link href={`/${currentLocale}/ueber-uns`} className=" font-Tittle text-[0.97rem]">
                                                <span className="  active" >{t("top_nav_about_us")}</span>
                                            </Link></div>
                                        <ul className={isActive.key === "2" ? " sub-menu block" : "sub-menu hidden"}>
                                            <li className="hover-effect "><Link className="text-[0.89rem] leading-[0.875rem]  ml-4 active " href={`/${currentLocale}/ueber-uns#philosophy`} >{t("top_nav_about_us_nav_1")}</Link></li>
                                            <li className="hover-effect "><Link className="text-[0.89rem] leading-[0.875rem] ml-4 active " href={`/${currentLocale}/ueber-uns#team`} >{t("top_nav_about_us_nav_2")}</Link></li>
                                            <li className="hover-effect "><Link className="text-[0.89rem] leading-[0.875rem] ml-4 active " href={`/${currentLocale}/karriere`} >{t("top_nav_about_us_nav_3")}</Link></li>
                                        </ul>
                                    </li>

                                    <li className={` ${isActive.key === "3" ? "has-children " : "has-children"}`}>
                                        <span onClick={() => handleToggle("3")} className="menu-expand cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className={`fi-rr-angle-small-down text-[#677084] h-4 w-4 ${isActive.key === "3" ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                        <div >
                                            <Link href="#" className="font-Tittle text-[0.97rem]">
                                                <div className="hover-effect">
                                                    <span className="  active" > {t("top_nav_services")}</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <ul className={isActive.key === "3" ? "sub-menu block" : "sub-menu hidden"}>
                                            <li className="hover-effect "><Link className="text-[0.89rem] leading-[0.875rem] ml-4 active " href={`/${currentLocale}/digitale-buchhaltung`} >{t("top_nav_services_nav_1")}</Link></li>
                                            <li className="hover-effect "><Link className="text-[0.89rem] leading-[0.875rem] ml-4 active " href={`/${currentLocale}/unternehmensberatung`} >{t("top_nav_services_nav_2")}</Link></li>
                                            <li className="hover-effect "><Link className="text-[0.89rem] leading-[0.875rem] ml-4 active " href={`/${currentLocale}/personalverrechnung`} >{t("top_nav_services_nav_3")}</Link></li>
                                            <li className="hover-effect "><Link className="text-[0.89rem] leading-[0.875rem] ml-4 active " href={`/${currentLocale}/jahresabschluss`} >{t("top_nav_services_nav_4")}</Link></li>
                                        </ul>
                                    </li>

                                    <li className=" has-children">
                                        <div className="hover-effect">
                                            <a className=" font-Tittle text-[0.97rem]" onClick={() => { (window.location.href = `/${currentLocale}/news`) }}>
                                                <span className="  active" >  {t("top_nav_news")} </span>
                                            </a>
                                        </div>
                                        <ul className="sub-menu">
                                            <li className="hover-effect"><a className="active ml-4 font-Tittle text-[0.97rem]" onClick={() => { (window.location.href = `/${currentLocale}/Newsletter`) }}>Newsletter</a></li>
                                        </ul>
                                    </li>

                                    <li className="hover-effect">
                                        <Link href={`/${currentLocale}/kontakt`} className="font-Tittle text-[0.97rem]">{t("top_nav_contact")}</Link>
                                    </li>

                                    <li className={` ${isActive.key === "4" ? "has-children " : "has-children"}`}>
                                        <span onClick={() => handleToggle("4")} className="menu-expand cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className={`fi-rr-angle-small-down text-[#677084] h-4 w-4 ${isActive.key === "4" ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                        <div className="hover-effect">
                                            <a className="active font-Tittle text-[0.97rem]">{t("current_language")}</a>
                                        </div>
                                        <ul className={isActive.key === "4" ? "sub-menu block" : "sub-menu hidden"}>
                                            <li className="hover-effect"><a className="pl-4 text-[0.89rem] leading-[0.875rem] active" onClick={handleChange('de')}>Deutsch</a></li>
                                            <li className="hover-effect"><a className="pl-4 text-[0.89rem] leading-[0.875rem] active" onClick={handleChange('en')}>English</a></li>
                                            <li className="hover-effect"><a className="pl-4 text-[0.89rem] leading-[0.875rem] active" onClick={handleChange('bs')}>BHS</a></li>
                                        </ul>
                                    </li>
                                </ul>



                            </nav>
                        </div>

                        <div className="w-[90%] mt-6 pt-6">
                            <Link href="https://bmdcom.ambicon.at/bmdcom/"
                                className="w-full btn btn-dark orenge_button orenge_button_1 hover-up text-white 
         px-8 py-4 rounded-[40px] flex items-center justify-between" target="_blank">
                                <span className="flex-1 px-2 text-center break-words">
                                    {t("index_header_second_cta")}
                                </span>
                                {/*  <span className="text-lg ml-5">➜</span> */}
                            </Link>
                        </div>


                        <div className="mb-6 pb-5 border-b border-gray-200"></div>
                        <div className="site-copyright text-xs text-gray-400">Alle Rechte vorbehalten 2023 © ambiCON GmbH</div>
                    </div>
                </PerfectScrollbar>
            </div>

        </>
    );
};

export default Sidebar;