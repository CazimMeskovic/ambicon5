
"use client";
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import i18n from "../../../i18n";
import Newsletter from '../../../../components/Old_layout/Newsletter/Newsletter';
import Image from 'next/image';
import TeamCard from '../../../../components/elements/TeamCard';
import MarkdownRenderer from '../../../../components/MarkdownRender';
import TeamMembers from '../../../../components/Old_layout/Team/Team';
import "./ueber-uns.css"
import { usePathname, useRouter } from 'next/navigation';
import Layout from '../../../../components/layout/Layout';



interface ComponentProps {
	params: {
		locale: string;
	};
}



export default function UeberUnsDinamic({ params }: { params: { locale: string } }) {
	const t = useTranslations('AllPage');
	const [openClass, setOpenClass] = useState("");
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleRemove = () => {
		if (openClass === "sidebar-visible") {
			setOpenClass("");
			document.body.classList.remove("mobile-menu-active");
			setIsMenuOpen(false);
		}
	};

	const handleStateChangeSidebar = () => {
		if (openClass === "") {
			document.body.classList.add("mobile-menu-active");
			setOpenClass("sidebar-visible");
			setIsMenuOpen(true);
		} else {
			handleRemove();
		}
	};

	return (
		<>

			<Layout >

				<section className="section-box">
					<div className="banner-hero bg-about-3">
						<div className="container">
							<div className="grid grid-cols-1">
								<h3 className="Tittle_text_aboutPage  ">{t("about_us_title")}</h3>
								<p className="paragraf_text mt-5 lg:mt-10 text-center">
									<MarkdownRenderer content={t("about_us_subtitle")} />


								</p>
							</div>
						</div>
					</div>
				</section>
				<div className="mt-10">
					<div className="container mx-auto">
						<div className="flex justify-center">
							<div className="hidden lg:block lg:w-1/12"></div>
							<div className="w-full lg:w-10/12">
								<div className="box-image md:px-10">
									<Image className="rounded-lg" src="/imgs/team/banner-top-team.webp" alt="" width={1134} height={427} />
								</div>
							</div>
							<div className="hidden lg:block lg:w-1/12"></div>
						</div>
					</div>
				</div>


				<section className="section-box mt-10 md:mt-20 py-20 bg-[#bee1e6]">
					<div className="container">
						<div className="grid grid-cols-1">
							<h2 className="sm:max-w-[70%] mx-auto Tittle_text text-center mb-5">{t("about_us_section_one_title")}</h2>
							<p className="sm:max-w-[75%] mx-auto paragraf_text mt-5 text-center">{t("about_us_section_one_subtitle")}</p>
						</div>
						<div className="grid grid-cols-1 p-0 lg:p-4 lg:grid-cols-3 gap-5 lg:gap-8 mt-10">
							<div className="item-icon">
								<h4 className="mb-[-15px] lg:mb-0 Sub_paragraf_Tittle">{t("about_us_section_one_point_one_title")}</h4>
								<p className="Sub_paragraf_text mt-3">{t("about_us_section_one_point_one_text")}</p>
							</div>
							<div className="item-icon">
								<h4 className=" mb-[-15px] lg:mb-0 Sub_paragraf_Tittle">{t("about_us_section_one_point_two_title")}</h4>
								<p className="Sub_paragraf_text mt-3">{t("about_us_section_one_point_two_text")}</p>
							</div>
							<div className="item-icon">
								<h4 className=" mb-[-15px] lg:mb-0 Sub_paragraf_Tittle">{t("about_us_section_one_point_three_title")}</h4>
								<p className="Sub_paragraf_text  mt-3">{t("about_us_section_one_point_three_text")}</p>
							</div>
						</div>
					</div>
				</section>

				<section className="section-box" id="philosophy">
					<div className="container mt-28">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
							<div className="sm:px-5 block-img-we-do">
								<Image
									priority
									width={600}
									height={695}
									className="rounded-xl img-responsive"
									src="/imgs/team/suad-big-about-us.webp"
									alt="Suad Ferhatbegovic - ambicon"
									layout="responsive"
								/>
							</div>
							<div className="block-we-do p-0 sm:p-4 lg:p-1">
								<span className="bg-[#bee1e6] text-green-900 px-8 py-3 rounded-full">{t("about_us_section_three_theaser")}</span>
								<h3 className=" text-start Tittle_text  mt-5">{t("about_us_section_three_title")}</h3>
								<p className="lg:w-[95%] paragraf_text mt-5">{t("about_us_section_three_subtitle")}</p>
								<hr className="border-dashed border-[1.5px] border-green-900 my-10" />
								<div className="grid grid-cols-1  gap-5 ">
									<div className="mt-5 ">
										<Image className='' width={310} height={90} src="/imgs/unterschrift.png" alt="Suad Ferhatbegovic" />
										<h4 className="mt-[-10px] font-Tittle text-[1.38rem] leading-[1.5rem] text-[#101828] font-bold paragraf_text">{t("about_us_section_three_name")}</h4>
										<p className=" text-[1.13rem] leading-[1.63rem] paragraf_text mt-0">{t("about_us_section_three_position")}</p>
									</div>
									<div className=''>
										<div className="mt-[-1.3em] ml-[-0.6em] social-bottom">
											<Link href="https://www.linkedin.com/in/suad-ferhatbegovi%C4%87-71104219/"
												className="icon-socials icon-linkedin" target="_blank" rel="noopener noreferrer">
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="section-box" id="team">
					<div className="container mt-20">
						<div className="grid grid-cols-1 md:grid-cols-2">
							<div className="md:col-span-2">
								<h3 className=" text-start Tittle_text  mt-5">{t("about_us_section_four_title")}</h3>
								<p className="paragraf_text mb-8">{t("about_us_section_four_subtitle")}</p>
							</div>
						</div>
					</div>
					<div className="container mt-10 mb-36">
						<TeamMembers />
					</div>
				</section>

				<Newsletter imageName="/imgs/team/img-newsletter-team.webp" />

			</Layout>
		</>
	);
};


