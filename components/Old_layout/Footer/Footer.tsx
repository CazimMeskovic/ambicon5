
'use client';

import Image from "next/image";
import { useTranslations } from 'next-intl';
import Link from "next/link";
import Logo from "../../../public/imgs/logo.svg";
import { usePathname } from 'next/navigation';
import "./Footer.css"

const Footer = () => {
    const t = useTranslations('AllPage');
    const pathname = usePathname();

    const currentLocale = pathname.split('/')[1] || 'en';


    return (
        <>
            <footer className="footer pt-20 mt-10 pb-16 px-0 lg:px-0 xl:px-24 bg-homBG">
                <div className="container1 px-0 md:px-4">
                    <div className="footer-top flex flex-col sm:flex-row lg:flex-row items-center gap-0 md:gap-24 lg:gap-0
                     justify-between">
                        <div className=" md:w-1/3 text-center md:text-left  md:mb-0 pb-2 md:pb-12">
                            <Link href="/" className="w-[30%]">
                                <Image
                                    alt="ambicon - Digitale Buchhaltung"
                                    src={Logo}
                                    width={250}
                                    height={65}
                                />
                            </Link>
                        </div>


                        <div className="flex flex-col lg:flex-row justify-end gap-0 md:gap-5 lg:gap-0  md:w-2/3 text-center md:mx-4 lg:mx-0 md:text-start 
                        mb-10 md:mb-0 pb-5 md:pb-0">
                            <div className="" >
                                <span className="text-gray-900 w-[400px] text-nowrap text-lg lg:mr-10  md:mb-0 mr-4 font-bold">
                                    {t("footer_title")}
                                </span>
                            </div>
                            <div className="mt-10 md:mt-0 md:mb-8 lg:mb-0 md:w-[15.5em]">
                                <Link href={`/${currentLocale}/kontakt`} className="btn btn-primary  text-white rounded-lg font-bold  bg-black p-5">
                                    {t("footer_cta")}
                                </Link>
                            </div>

                        </div>
                    </div>


                    <div className="flex flex-col sm:flex-col  md:flex-row md:flex-wrap lg:flex-row  border-t bg font-Paragra font-normal text-[#475467] text-[0.9rem] md:text-[1rem] leading-[28px] pt-10">
                        <div className="w-full sm:w-full md:w-1/2 lg:w-[25%] mb-8 md:mb-0" >
                            <h4 className="font-custom font-semibold text-black text-[1rem] md:text-[1.375rem] leading-6 mb-4">
                                {t("footer_col_1_title")}
                            </h4>
                            <div className="text-[#475467] mb-4">
                                <p>Dresdner Strasse 47/3. OG</p>
                                <p>A-1200 Wien</p>
                                <p>Österreich</p>
                            </div>
                            <div className="text-[#475467]">
                                <p className="text-[#006d77] hover:text-[#006d777e] cursor-pointer pt-5">t: +43 (1) 908 19 99</p>
                                <p className="text-[#006d77] hover:text-[#006d777e] cursor-pointer pt-5">e: office@ambicon.at</p>
                            </div>
                        </div>
                        <div className="w-full sm:w-full md:w-1/2 lg:lg:w-[17%] mb-8 md:mb-0 ">
                            <h4 className="font-custom font-semibold text-black text-[1rem] md:text-[1.375rem] leading-6 mb-4">
                                {t("footer_col_2_title")}
                            </h4>

                            <ul className="text-[#475467]">
                                <Link href={`/${currentLocale}/ueber-uns#philosophy`}  >
                                    <li className="pb-2 pt-2 footer_Hover">{t("footer_col_2_nav_1")}</li>
                                </Link>
                                <Link href={`/${currentLocale}/ueber-uns#team`}  >
                                    <li className="pb-2 pt-2 footer_Hover">{t("footer_col_2_nav_2")}</li>
                                </Link>
                                <Link href={`/${currentLocale}/karriere`}  >
                                    <li className="pb-2 pt-2 footer_Hover">{t("footer_col_2_nav_3")}</li>
                                </Link>

                            </ul>

                        </div>
                        <div className="w-full sm:w-full md:w-1/2 lg:lg:w-[18%] mb-8 md:mb-0">
                            <h4 className="font-custom font-semibold text-black text-[1rem] md:text-[1.375rem] leading-6 mb-4">
                                {t("footer_col_3_title")}
                            </h4>
                            <ul className="text-[#475467]">
                                <Link href={`/${currentLocale}/digitale-buchhaltung`}  >
                                    <li className="pb-2 pt-2 footer_Hover">{t("footer_col_3_nav_1")}</li>
                                </Link>
                                <Link href={`/${currentLocale}/unternehmensberatung`}  >
                                    <li className="pb-2 pt-2 footer_Hover">{t("footer_col_3_nav_2")}</li>
                                </Link>
                                <Link href={`/${currentLocale}/personalverrechnung`}  >
                                    <li className="pb-2 pt-2 footer_Hover">{t("footer_col_3_nav_3")}</li>
                                </Link>
                                <Link href={`/${currentLocale}/jahresabschluss`}  >
                                    <li className="pb-2 pt-2 footer_Hover">{t("footer_col_3_nav_4")}</li>
                                </Link>

                            </ul>
                        </div>
                        <div className="w-full sm:w-full md:w-1/2 lg:lg:w-[19%] mb-8 md:mb-0">
                            <h4 className="font-custom font-semibold text-black text-[1rem] md:text-[1.375rem] leading-6 mb-4">
                                {t("footer_col_4_title")}
                            </h4>
                            <Link href={`/${currentLocale}/personalverrechnung`}  >
                                <ul className="text-[#475467]">
                                    <li className="pb-2 pt-2 footer_Hover">{t("footer_col_4_nav_1")}</li>
                                    <li className="pb-2 pt-2 footer_Hover">{t("footer_col_4_nav_2")}</li>
                                    <li className="pb-2 pt-2 footer_Hover">{t("footer_col_4_nav_3")}</li>
                                    <li className="pb-2 pt-2 footer_Hover">{t("footer_col_4_nav_4")}</li>
                                </ul>
                            </Link>
                        </div>
                        <div className="w-full sm:w-full md:w-1/2 lg:lg:w-[20%] mb-8 md:mb-0">
                            <h4 className="font-custom font-semibold   text-black text-[1rem] md:text-[1.375rem] leading-6 mb-4">
                                {t("footer_col_5_title")}
                            </h4>
                            <Link href={`/${currentLocale}/unternehmensberatung`}  >
                                <ul className="text-[#475467]">
                                    <li className="pb-2 pt-2 footer_Hover">{t("footer_col_5_nav_1")}</li>
                                    <li className="pb-2 pt-2 footer_Hover">{t("footer_col_5_nav_2")}</li>
                                    <li className="pb-2 pt-2 footer_Hover">{t("footer_col_5_nav_3")}</li>
                                    <li className="pb-2 pt-2 footer_Hover ">
                                        {t("footer_col_5_nav_4")}
                                    </li>
                                </ul>
                            </Link>
                        </div>
                    </div>


                    <div className="footer-bottom border-t pt-4 md:pt-8  ">
                        <div className=" flex flex-col md:flex-row items-center  md:justify-between">
                            <div className="flex flex-col sm:flex-row md:w-1/2 text-center text-gray-400  md:text-sm">
                                <span className="flex flex-col sm:flex-row mr-4   font-['Noto_Sans'] 
                                 font-bold text-[rgb(152,162,179)] text-[1rem] leading-[16px] sm:leading-[24px]">© ambiCON GmbH 2023</span>
                                <div>
                                    <Link href={`/${currentLocale}/impressum`} className="ml-4 font-['Noto_Sans'] font-normal  text-[rgb(152,162,179)] text-[1rem] leading-[16px] sm:leading-[28px]">
                                        {t("footer_bottom_nav_1")}
                                    </Link>
                                </div>
                                <div >
                                    <Link href={`/${currentLocale}/datenschutzerklaerung`} className="ml-4 text-nowrap font-['Noto_Sans'] font-normal  text-[rgb(152,162,179)]  text-[1rem] leading-[16px] sm:leading-[28px]">
                                        {t("footer_bottom_nav_2")}
                                    </Link>
                                </div>

                            </div>
                            <div className="md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
                                <div className="flex space-x-4">
                                    <Link href="https://www.linkedin.com/company/ambicondigital/" className="icon-socials icon-linkedin"></Link>
                                    <Link href="https://www.facebook.com/ambicon.at" className="icon-socials icon-facebook"></Link>
                                    <Link href="https://www.instagram.com/ambicon.digital/" className="icon-socials icon-instagram"></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
