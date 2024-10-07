'use client';
import React, { useEffect, useState } from 'react';
import { getAllJobs } from '../../../../util/api';
import JobCard from '../../../../components/elements/JobCard';
import { useTranslations } from 'next-intl';
import { NextPage } from 'next';
import Image from "next/image";
import Link from "next/link";
import Newsletter from '../../../../components/Old_layout/Newsletter/Newsletter';
import ApplicationDialog from '../../../../components/dialogs/ApplicationDialog';
import MarkdownRenderer from "../../../../components/MarkdownRender";
import "./karriere.css"
import { usePathname, useParams, useRouter } from 'next/navigation';
import { JobPostingJsonLd, NextSeo } from "next-seo";
import Layout from '../../../../components/layout/Layout';


interface Job {
	id: number;
	title: string;
	excerpt: string;
	slug: string;
	date: string;
	jobSpecifications: {
		summary: string;
	};
	featuredImage: {
		node: {
			sourceUrl: string;
		};
	};
	categories: {
		nodes: {
			name: string;
		}[];
	};
	tags: {
		nodes: {
			name: string;
		}[];
	};
}


interface ComponentProps {
	params: {
		locale: string;
	};
}



export default function GlavnaPageDinamik({ params }: { params: { locale: string } }) {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const t = useTranslations('AllPage');
	const [jobs, setJobs] = useState<Job[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const pathname = usePathname();
	const router = useRouter();


	const locale = params.locale ?? 'de';

	useEffect(() => {

		const fetchJobs = async () => {
			try {
				const fetchedJobs = await getAllJobs();
				setJobs(fetchedJobs.edges.map((edge: any) => edge.node));
			} catch (err) {
				setError('Failed to fetch jobs');
			} finally {
				setLoading(false);
			}
		};

		fetchJobs();
	}, []);

	if (loading) return <p></p>;
	if (error) return <p>{error}</p>;

	console.log(JobCard)
	const colors = ['#dbece5', '#d1ecfd', '#fff3ea ', '#eae4e9', '#fad2e1', '#fde2e4', '#fff3ea', '#f0efeb', '#ddd3fa'];
	const careerGrid = [
		{
			headline: "career_box_one_title",
			messages: "career_box_one_text",
			images: "/imgs/icons/career/001-salary.svg",
			color: "bg-5",
		},
		{
			headline: "career_box_two_title",
			messages: "career_box_two_text",
			images: "/imgs/icons/career/002-online-learning.svg",
			color: "bg-9",
		},
		{
			headline: "career_box_three_title",
			messages: "career_box_tree_text",
			images: "/imgs/icons/career/003-clock.svg",
			color: "bg-2",
		},
		{
			headline: "career_box_four_title",
			messages: "career_box_four_text",
			images: "/imgs/icons/career/004-unity.svg",
			color: "bg-1",
		},
		{
			headline: "career_box_five_title",
			messages: "career_box_five_text",
			images: "/imgs/icons/career/005-fruit.svg",
			color: "bg-4",
		},
		{
			headline: "career_box_six_title",
			messages: "career_box_six_text",
			images: "/imgs/icons/career/006-confetti.svg",
			color: "bg-3",
		},
		{
			headline: "career_box_seven_title",
			messages: "career_box_seven_text",
			images: "/imgs/icons/career/007-healthcare.svg",
			color: "bg-2",
		},
		{
			headline: "career_box_eight_title",
			messages: "career_box_eight_text",
			images: "/imgs/icons/career/008-responsibility.svg",
			color: "bg-7",
		},
		{
			headline: "career_box_nine_title",
			messages: "career_box_nine_text",
			images: "/imgs/icons/career/009-heart.svg",
			color: "bg-10",
		},
	];


	return (
		<>

			<ApplicationDialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} subject={''} />
			<Layout >
				<section className="section-box">
					<div className="banner-hero banner-3">
						<div className="container ">
							<div className="text-center">
								<span className="bg-[#bee1e6] text-green-900 px-8 py-3 rounded-full">{t("career_teaser")}</span>
								<h1 className="Tittle_text_allPages mt-8">
									<MarkdownRenderer content={t("career_title")} />
								</h1>
								<div className=" text-[#74808d] text-center leading-8 Paragraf_text_allPages mt-12">{t("career_subtitle")}</div>
								<div className="mt-12  ">
									<div className='flex flex-wrap text-center items-center justify-center  '>
										<Link href="#jobs"
											className="btn btn-black orenge_button orenge_button_1 tracking-wider py-4 lg:py-6 pl-6 pr-12 mb-4 mr-5">{t("career_cta_one")}
										</Link>

										<Link href="#benefits"
											className="btn btn-default icon-arrow-right tracking-wider color-gray-900 btn-mb py-6 pl-6 pr-12   mb-4">
											{t("career_cta_two")}

										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className="lg:mx-20 mt-24">
					<div className="">
						<div className="flex">
							<div className="w-1/12" />
							<div className="lg:mx-auto w-12/12">
								<div className=" box-image">
									<Image
										src="/imgs/team/carrer-top-ambicon.webp"
										alt="ambicon team"
										layout="responsive"
										width={1920}
										height={1149}
									/>
								</div>
							</div>
							<div className="w-1/12" />
						</div>
					</div>
				</div>
				<section className="section-box" id="benefits">
					<div className="container">

						<div className="flex flex-wrap">
							<div className="w-full sm:w-1/12 lg:w-2/12"></div>
							<div className="w-full sm:w-10/12 lg:w-8/12 text-center mt-24">
								<h2 className="Tittle_text_allPages">
									<MarkdownRenderer content={t("career_section_one_title")} />
								</h2>
								<p className="w-[90%] text-[#74808d] text-center leading-8 Paragraf_text_allPages mt-5">{t("career_section_one_subtitle")}</p>
							</div>
							<div className="w-full sm:w-1/12 lg:w-2/12" />
						</div>
					</div >
					<div className="container mt-16">

						<div className="grid gap-4 grid-cols-1  sm:grid-cols-1 lg:grid-cols-3">
							{careerGrid.map((item: any, index: number) => (
								<div className="w-[95%] " key={index}>
									<div
										className="card-grid-1 py-20 hover-up card-carrer-page"
										style={{ backgroundColor: colors[index % colors.length] }}
									>
										<div className="grid-1-img">
											<Image className='mx-auto' src={item.images} alt="icon" height={80} width={80} />
										</div>
										<h3 className=" text-center font-bold text-[#101828] text-[28px] leading-8 mt-5 break-words">{t(item.headline)}</h3>
										<p className=" font-light text-[#101828] text-[18px] leading-[26px] mt-5">{t(item.messages)}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section >
				<section className="section-box mt-20" id="jobs">
					<div className="container">

						<div className="flex flex-wrap">
							<div className="lg:w-1/12 sm:w-1/12 w-full"></div>
							<div className="lg:w-10/12 sm:w-10/12 w-full text-center">
								<h2 className="Tittle_text_allPages mb-2.5">
									<MarkdownRenderer content={t("career_section_two_title")} />
								</h2>
								<p className="text-[#74808d] text-center leading-8 Paragraf_text_allPages mt-5">{t("career_section_two_subtitle")}</p>
							</div>
							<div className="lg:w-1/12 sm:w-1/12 w-full" />
						</div>
					</div>
					<div className="container mt-[3rem]  lg:mt-[10rem]  ">
						<div className="flex flex-wrap  ">

							{jobs?.map((job) => (
								<JobCard
									id={job.id}
									key={job.id}
									name={job.title}
									description={job.jobSpecifications?.summary ?? job.excerpt}

									url={`/${locale}/karriere/${job.slug}`}
								/>
							))}
							<JobCard
								id={0}
								name={t("career_job_default_title")}
								description={t("career_job_default_text")}
								buttonText={t("career_job_apply_cta") || "Jetzt bewerben"}
								callBack={() => setIsDialogOpen(!isDialogOpen)}
							/>


						</div>
					</div>
				</section>



				<section className="section-box  pt-24 pb-20 mb-20  bg-[#faede3]">
					<div className="container mx-auto px-3 lg:px-6">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
							<div className="lg:mb-7.5">
								<span className="bg-[#bee1e6] text-green-900 px-8 py-3 rounded-full">{t("career_section_three_theaser")}</span>
								<h3 className="w-[90%] font-bold Tittle_text_allPages mt-7">{t("career_section_three_title")}</h3>
								<p className="w-[80%] text-[#74808d]  text-start leading-8 Paragraf_text_allPages mt-7">{t("career_section_three_text")}</p>
							</div>
							<div>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="mb-5">
										<div className="bg-white p-4 rounded-lg shadow-md card-square hover-up transition-transform">
											<p className="font-normal text-[#475467] text-[1rem] leading-[28px] mb-8">Weil Arbeit auch Spaß machen kann.</p>
											<div className="flex items-center mt-4">
												<div className="w-20 h-20 rounded-full overflow-hidden mb-6">
													<Image height={80} width={80} src="/imgs/team/edina.webp" alt="Edina Ajdarpasic - ambiCON GmbH" />
												</div>
												<div className="ml-4">
													<h4 className=" font-bold text-[#101828] text-[1rem] leading-[24px] mb-2">Edina Ajdarpasic</h4>
													<p className="w-full lg:w-[60%]  font-normal text-start text-[#101828] text-[14px] leading-[19px]">management assistant</p>
												</div>
											</div>
										</div>
									</div>

									<div className="mb-5">
										<div className="bg-white p-4 rounded-lg shadow-md card-square hover-up transition-transform">
											<p className="font-normal text-[#475467] text-[1rem] leading-[28px] mb-8">Weil Hilfsbereitschaft bei uns selbstverständlich ist</p>
											<div className="flex items-center mt-4">
												<div className="w-20 h-20 rounded-full overflow-hidden mb-6">
													<Image height={80} width={80} src="/imgs/team/azemina.jpeg" alt="Azemina Dulic - ambiCON GmbH" />
												</div>
												<div className="ml-4">
													<h4 className=" font-bold text-[#101828] text-[1rem] leading-[24px] mb-2">Azemina Dulic</h4>
													<p className=" font-normal text-start text-[#101828] text-[14px] leading-[19px]">payroll team lead</p>
												</div>
											</div>
										</div>
									</div>

									<div className="mb-5">
										<div className="bg-white p-4 rounded-lg shadow-md card-square hover-up transition-transform">
											<p className="font-normal text-[#475467] text-[1rem] leading-[28px] mb-8">Weil bei uns Work-Life Balance nicht nur ein Wort ist!</p>
											<div className="flex items-center mt-4">
												<div className="w-20 h-20 rounded-full overflow-hidden mb-6">
													<Image height={80} width={80} src="/imgs/team/edin.jpeg" alt="Edin Dulic - ambiCON GmbH" />
												</div>
												<div className="ml-4">
													<h4 className=" font-bold text-[#101828] text-[1rem] leading-[24px] mb-2">Edin Dulic</h4>
													<p className=" font-normal text-start text-[#101828] text-[14px] leading-[19px]">accounting team lead</p>
												</div>
											</div>
										</div>
									</div>

									<div className="mb-5">
										<div className="bg-white p-4 rounded-lg shadow-md card-square hover-up transition-transform">
											<p className="font-normal text-[#475467] text-[1rem] leading-[28px] mb-8">Weil du hier in deine Zukunft investierst und von vielfältigen Karrieremöglichkeiten profitierst!</p>
											<div className="flex items-center mt-4">
												<div className="w-20 h-20 rounded-full overflow-hidden mb-6">
													<Image height={80} width={80} src="/imgs/team/muhammed.webp" alt="Muhammed Ceyran - ambiCON GmbH" />
												</div>
												<div className="ml-4">
													<h4 className="w-[60%] font-bold text-[#101828] text-[1rem] leading-[24px] mb-2">Muhammed Ceyran</h4>
													<p className=" font-normal text-start text-[#101828] text-[14px] leading-[19px]">accounting specialist</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Newsletter />
			</Layout >
		</>
	);
};


