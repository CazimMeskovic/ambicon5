import { NextPageContext } from "next";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import {useTranslations} from 'next-intl';
import Layout from "../../../../components/layout/Layout";
import "./error.css"

const PageDinamic = () => {
	const  t  = useTranslations('AllPage');
	return (
		<>
			<Layout headerStyle="error-404">
				<section className="section-box mt-100">
					<div className="container">
					
								<div className="flex flex-col items-center mt-10">
  <div className="w-full text-center mt-10">
    <Image 
      src="/imgs/template/404.png" 
      alt="ambicon" 
      width={565} 
      height={261} 
      className="mx-auto" 
    />
    <h2 className="text-4xl font-bold text-gray-900 mb-5 mt-12">
      {t("error_404_title")}
    </h2>
    <p className="text-xl text-gray-600 mt-7 mb-16">
      {t("error_404_subtitle")}
    </p>
    <div className="text-center mb-12">
    

									<Link href="/"
										 className=" btn btn-black icon-arrow-left px-10 py-5">{t("error_404_cta")}
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};

export default PageDinamic;
