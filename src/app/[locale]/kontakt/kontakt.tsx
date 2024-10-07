
'use client'
import { NextPage, NextPageContext } from "next";
import { useTranslations } from 'next-intl';
import Layout from "../../../../components/layout/Layout";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import "./kontakt.css"


interface ComponentProps {
	params: {
		locale: string;
	};
}


export default function Contact({ params: { locale } }: ComponentProps) {
	const t = useTranslations('AllPage');
	const [messageSend, setMessageSend] = useState(false);
	const [error, setError] = useState(false);

	const formik = useFormik({
		initialValues: {
			name: "",
			company: "",
			email: "",
			telefon: "",
			message: "",
			subject: "",
		},
		validationSchema: yup.object({
			name: yup.string().required("Name ist erforderlich"),
			company: yup.string(),
			email: yup.string().email("Ungültige E-Mail-Adresse").required("E-Mail ist erforderlich"),
			telefon: yup.string().required("Telefon ist erforderlich"),
			message: yup.string().required("Nachricht ist erforderlich"),
			subject: yup.string().required("Betreff ist erforderlich"),
		}),
		onSubmit: async (values) => {
			try {
				const response = await fetch("/api/contact", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(values),
				});
				if (response.ok) {

					setMessageSend(true);
					setError(false);
					formik.resetForm();
					console.log('radi mail')
				} else {
					setError(true);
					setMessageSend(false);
					console.log('ne radi  mail')
				}
			} catch (e) {
				setError(true);
			}
		},
	});

	const getErrorMessage = (field: "name" | "company" | "email" | "telefon" | "message" | "subject") => {
		return formik.touched[field] && Boolean(formik.errors[field]) ? (
			<div className="text-danger">{formik.errors[field]}</div>
		) : null;
	};

	return (
		<>

			<Layout >
				<section className="section-box bg-[#fff3ea] my-auto  pt-4 pb-4">
					<div className="banner-hero banner-breadcrumbs">
						<div className="container text-center py-2 lg:py-6">
							<h1 className=" Tittle_text_allPages mb-8">{t("contact_title")}</h1>
							{/* 	<h1 className="chivo-t mb-8">{t("contact_title")}</h1> */}
							<p className="text-[#74808d] text-center leading-7 
							font-Paragra text-[1rem]  ">{t("contact_subtitle")}</p>
							{/* 							<p className="text-[#74808d] text-center font-Paragra text-[1rem] sm:text-[1.3rem] leading-[1.77rem]  ">{t("contact_subtitle")}</p>
 */}						</div>
					</div>
				</section>

				<section className="section-box">
					<div className="container mx-auto mb-20 mt-36">
						<div className="rounded-[50px] bg-gray-100 p-10 lg:p-16 icon-wave">
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8">
								<div className="lg:col-span-1 mb-16 ">
									<span className="text-uppercase font-normal text-[#101828] text-[14px] leading-[19px]">{t("contact_theaserd")}</span>
									{/* 	<h2 className=" font-bold text-center sm:text-end text-[25px] lg:text-[28px] leading-[30px] lg:leading-[32px] text-[#101828]
									  mr-0 md:mr-[30%]  lg:mr-[-100%]  xl:mr-[-105%]  2xl:mr-[-85%]  mt-4">{t("contact_form_title")}</h2> */}
									<h2 className=" font-bold text-center sm:text-end text-[25px] lg:text-[28px] leading-[30px] lg:leading-[32px] text-[#101828]
									  mr-0 md:mr-[30%]  lg:mr-[-130%]  xl:mr-[-135%]  2xl:mr-[-107%]  mt-4">{t("contact_form_title")}</h2>
									<p className=" text-base text-gray-600 lg:mt-4 mt-6 mb-16">
										{t("contact_form_subtitle")}
									</p>
									<br className="hidden lg:block w-10 h-8 bg-slate-900" />


									<div className="lg:col-span-1 mb-0 lg:mb-10 font-Paragra ">
										<h4 className="icon-home font-bold text-[1rem] lg:text-[1.125rem] leading-[18px] lg:leading-[22px] text-[#101828]  mb-4 mt-4">ambiCON GmbH</h4>
										<p className="text-base  text-gray-600">
											Dresdner Strasse 47/3. OG
											<br />
											A-1200 Wien
											<br />
											Österreich
										</p>
										<p className="text-base text-gray-600">Tel: +43 1 908 19 99</p>
										<p className="text-base mb-10 lg:mb-4 text-gray-600">Email: office@ambicon.at</p>
										<h4 className="font-bold text-[1rem] lg:text-[1.125rem] leading-[18px] lg:leading-[22px]
           text-[#101828] mb-4  mt-4">{t("contact_form_working_time_title")}</h4>
										<p className="text-base text-gray-600">{t("contact_form_working_time_m_d")}</p>
										<p className="text-base text-gray-600">{t("contact_form_working_time_f")}</p>
										<p className="text-base text-gray-600">{t("contact_form_working_time_s_s")}</p>
									</div>
								</div>

								<div className="lg:col-span-2  lg:mt-36 ">
									<form className="space-y-6" onSubmit={formik.handleSubmit}>
										<div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
											<div className="col-span-2 lg:col-span-1">
												<div className="relative">
													<input
														className="form-input w-full p-4 font-Tittle font-normal text-[0.9rem] leading-[20px] text-[#212529] "
														placeholder={t("contact_form_name_input_placeholder") || ""}
														{...formik.getFieldProps("name")}
													/>
													{getErrorMessage("name")}
												</div>
											</div>
											<div className="col-span-2 lg:col-span-1">
												<div className="relative">
													<input
														className="form-input w-full p-4 font-Tittle font-normal text-[0.9rem] leading-[20px] text-[#212529]"
														placeholder={t("contact_form_company_input_placeholder") || ""}
														{...formik.getFieldProps("company")}
													/>
													{getErrorMessage("company")}
												</div>
											</div>
											<div className="col-span-2 lg:col-span-1">
												<div className="relative">
													<input
														className="form-input w-full p-4 font-Tittle font-normal text-[0.9rem] leading-[20px] text-[#212529]"
														placeholder={t("contact_form_email_input_placeholder") || ""}
														{...formik.getFieldProps("email")}
													/>
													{getErrorMessage("email")}
												</div>
											</div>
											<div className="col-span-2 lg:col-span-1">
												<div className="relative">
													<input
														className="form-input w-full p-4 font-Tittle font-normal text-[0.9rem] leading-[20px] text-[#212529]"
														placeholder={t("contact_form_telefon_input_placeholer") || ""}
														{...formik.getFieldProps("telefon")}
													/>
													{getErrorMessage("telefon")}
												</div>
											</div>
											<div className="col-span-2  ">

												<div className="form-group">
													<div style={{ backgroundColor: "white", paddingRight: 24 }}>
														<select
															className=" font-Tittle font-normal text-[0.9rem] leading-[20px]
                             text-[#212529] form-control fa fa-angle-double-right"
															{...formik.getFieldProps("subject")}
														>
															<option value="" disabled >
																{t("contact_form_theme_title")}
															</option>

															<option>{t("contact_form_theme_one")}</option>
															<option>{t("contact_form_theme_two")}</option>
															<option>{t("contact_form_theme_three")}</option>
															<option>{t("contact_form_theme_four")}</option>
															<option>{t("contact_form_theme_five")}</option>
														</select>
													</div>
													{getErrorMessage("subject")}
												</div>
											</div>
											<div className="col-span-2">

												<div className="form-group">
													<textarea
														className="font-Tittle font-normal text-[0.9rem] leading-[20px]
                             text-[#212529]  form-control"
														placeholder={t("contact_form_message_input_placeholder") || ""}
														{...formik.getFieldProps("message")}
													/>
													{getErrorMessage("message")}
												</div>
											</div>
										</div>

										<div className="flex flex-col gap-0 ">
											<div className="max-w-sm">
												<button
													className="  btn btn-black text-nowrap orenge_button py-4 
				lg:py-5 px-8 mb-0 lg:mb-8 contact-send-message-btn"
													type="submit"
													disabled={messageSend || formik.isSubmitting}

												>
													{t("contact_form_cta")} <span className="text-lg ml-3">➜</span>
												</button>


											</div>
											{error && <div className="text-red-600">{t("contact_form_error")}</div>}
											{messageSend && <div className="text-green-600">{t("contact_form_success")}</div>}
											<br className="lg:hidden block" />
											{!error && !messageSend && (
												<span className=" text-[0.9rem] leading-[1.2rem] text-[#667085] font-Paragra mb-5">{t("contact_form_gdpr")}</span>
											)}
										</div>

									</form>
								</div>
							</div>
						</div>
					</div>
				</section>

			</Layout>
		</>
	);
};

