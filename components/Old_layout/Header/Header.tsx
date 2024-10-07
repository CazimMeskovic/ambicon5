"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import PerfectScrollbar from "react-perfect-scrollbar";
import { CalendlyModalWrapper } from "../../../components/elements/CalendlyModalWrapper";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import Logo from "../../../public/imgs/logo.svg"
import "./Header.css";
import "react-perfect-scrollbar/dist/css/styles.css";



interface HeaderProps {
  handleOpen: () => void;
  headerStyle?: string;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ handleOpen, headerStyle, isMenuOpen }) => {
  const [sticky, setSticky] = useState(false);
  const t = useTranslations('AllPage');
  const router = useRouter();
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <header className={`header  ${sticky ? 'sticky-bar stick z-50 ' : ''} ${headerStyle}`}>

      <div className="container mx-auto lg:px-4 lg:p-6 py-4 ">
        <div className="flex items-center  ">
          <div className="flex items-center">
            {/*  <div className=" mr-6 xl:w-[50%] w-[50%] border-2 border-red-800 "> */}
            <div className=" mr-6 xl:w-[30%] w-[50%] ">
              <Link href={`/${currentLocale}/`}>
                <Image
                  alt="ambicon - Digitale Buchhaltung"
                  src={Logo}
                  width={250}
                  height={90}
                />
              </Link>
            </div>

            <nav className=" hidden xl:flex ml-10 mr-10 space-x-8 ">
              <ul className=" flex space-x-8 text-nowrap text-[#171717]  cursor-pointer font-Tittle text-[1.2rem] ">

                <li>
                  <Link className=" hover:text-[#006d77]" href={`/${currentLocale}/`}>{t("top_nav_index")}</Link>
                </li>

                <li className=" relative group">
                  <Link href={`/${currentLocale}/ueber-uns`} className="flex items-center">
                    <span className="hover:text-[#006d77]">{t("top_nav_about_us")}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-6 w-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M12 14l-4-4h8l-4 4z" />
                    </svg>
                  </Link>
                  <ul className="scroll-smooth absolute left-0 mt-6 w-48 p-4  bg-white  rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-10">
                    <li className="p-2 hover-effect">
                      <Link className="active text-[1rem]  " href={`/${currentLocale}/ueber-uns#philosophy`}>{t("top_nav_about_us_nav_1")}</Link>
                    </li>
                    <li className="p-2 hover-effect">
                      <Link className="active text-[1rem]" href={`/${currentLocale}/ueber-uns#team`}>{t("top_nav_about_us_nav_2")}</Link>
                    </li>
                    <li className="p-2 hover-effect">
                      <Link className="active text-[1rem]" href={`/${currentLocale}/karriere`}>{t("top_nav_about_us_nav_3")}</Link>
                    </li>
                  </ul>
                </li>

                <li className="relative group">
                  <Link href={`/${currentLocale}/#`} className="flex items-center">
                    <span className="hover:text-[#006d77]">{t("top_nav_services")}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-6 w-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M12 14l-4-4h8l-4 4z" />
                    </svg>
                  </Link>
                  <ul className="absolute  left-0 mt-2 p-4  w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-10">
                    <li className="p-2 hover-effect">
                      <Link className="active text-[1rem]" href={`/${currentLocale}/digitale-buchhaltung`} >{t("top_nav_services_nav_1")}</Link>
                    </li>
                    <li className="p-2  hover-effect">
                      <Link className="active text-[1rem] text-wrap " href={`/${currentLocale}/unternehmensberatung`} >{t("top_nav_services_nav_2")}</Link>
                    </li>
                    <li className="p-2 hover-effect">
                      <Link className="active text-[1rem]" href={`/${currentLocale}/personalverrechnung`} >{t("top_nav_services_nav_3")}</Link>
                    </li>
                    <li className="p-2 hover-effect">
                      <Link className="active text-[1rem] text-wrap " href={`/${currentLocale}/jahresabschluss`}  >{t("top_nav_services_nav_4")}</Link>
                    </li>
                  </ul>
                </li>




                <li className="relative group">
                  <a onClick={() => (window.location.href = `/${currentLocale}/news`)} className="flex items-center text-gray-700 hover:text-gray-900">
                    <span className="hover:text-[#006d77]"> {t("top_nav_news")}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-6 w-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M12 14l-4-4h8l-4 4z" />
                    </svg>
                  </a>
                  <ul className="absolute left-0 mt-2 w-48  p-4 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-10">
                    <li className="p-2  hover-effect">
                      <a onClick={() => (window.location.href = `/${currentLocale}/Newsletter`)} className="block px-4 py-2 text-gray-700 active text-[1rem] text-wrap">
                        Newsletter
                      </a>
                    </li>
                  </ul>
                </li>


                <li>
                  <Link className="hover:text-[#006d77]" href={`/${currentLocale}/kontakt`} >{t("top_nav_contact")}</Link>
                </li>

                <li className="relative group">
                  <a className="flex items-center text-gray-700 hover:text-gray-900">
                    <span className="hover:text-[#006d77]"> {t("current_language")}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-6 w-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M12 14l-4-4h8l-4 4z" />
                    </svg>
                  </a>
                  <ul className="absolute left-0 mt-2 w-48  p-4 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-10">
                    <li className="p-2 hover-effect">
                      <a onClick={handleChange('de')} className="block px-4 py-2 text-gray-700 active text-[1rem] text-wrap">
                        Deutsch
                      </a>
                    </li>
                    <li className="p-2 hover-effect">
                      <a onClick={handleChange('en')} className="block px-4 py-2 text-gray-700 active text-[1rem] text-wrap">
                        English
                      </a>
                    </li>
                    <li className="p-2 hover-effect">
                      <a onClick={handleChange('bs')} className="block px-4 py-2 text-gray-700 active text-[1rem] text-wrap">
                        Bosanski
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            {/* ... */}



            <div className="flex ">
              <button className="burger-icon burger-icon-white  mt-[-20px] lg:mt-0 " onClick={handleOpen}>
                <span className="burger-icon-top bg-[#677084]" />
                <span className="burger-icon-mid bg-[#677084]" />
                <span className="mt-1 bg-[#677084] " />
              </button>
            </div>
          </div>

          <div className="w-[40%] xl:w-0 md:ml-[20%] lg:ml-[40%] xl:ml-0  hidden md:flex items-center space-x-4  ">
            <CalendlyModalWrapper url="https://calendly.com/ambicon/">
              <a className="w-full  xl:hidden  md:block  btn btn-default hover-up icon-arrow-right
                 bg-gray-700 text-white py-5 px-6 rounded-md flex items-center justify-between">
                {t("index_header_meeting_button")}
                <span className="ml-2 font-bold"> ➜ </span>
              </a>
            </CalendlyModalWrapper>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
