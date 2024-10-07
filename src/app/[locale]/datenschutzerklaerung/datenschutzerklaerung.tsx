
'use client';  

import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Layout from "../../../../components/layout/Layout";
import { useRouter } from "next/router";
import PrivacyContentDEComponent from "../../../../components/privacy-content-de";
import PrivacyContentEnComponent from "../../../../components/privacy-content-en";
import "../karriere/[slug]/slugpage.css"


export default function Datenschutzerklärung({ params }: { params: { locale: string } }) {
    const { locale } = params;
	let ContentComponent: React.FC;
	switch (locale) {
		case "de":
			ContentComponent = PrivacyContentDEComponent;
			break;
		case "en":
		default:
			ContentComponent = PrivacyContentEnComponent;
			break;
	}

	return (
		<>
			<Layout headerStyle="privacy-policy">
				<section className="section-box">
					<div className="banner-hero banner-breadcrums">
						<div className="container text-center">
							<div className="flex justify-center">
								<div className="w-full">
									<h1 className="text-heading-2  text-4xl font-bold text-gray-900 mb-6">Datenschutzerklärung</h1>
									<div className="breadcrumbs">
										<ul className=" text-body-text">
											<li className="inline-block mr-2">
												<Link href="/"
													 className="text-gray-900 hover:underline">Startseite
												</Link>
											</li>

											<li className="inline-block text-gray-500">/ Datenschutzerklärung</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="section-box mt-12 mb-12">
					<div className="container mx-auto">
						<div className="content-detail">
							<div className="flex justify-center">
								<div className="w-full lg:w-2/3">
									<ContentComponent />
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};


