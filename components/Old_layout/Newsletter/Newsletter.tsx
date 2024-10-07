
'use client'
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import Team from '../../../public/imgs/newsletter-team.webp';
import Chart from '../../../public/imgs/chart.png';
import "./Newsletter.css";

interface NewsletterProps {
  imageName?: string;
}

const Newsletter = ({ imageName }: NewsletterProps) => {
  const t = useTranslations('AllPage');
  const router = useRouter(); 

  const currentLocale = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] || 'en' : 'en';

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Ungültige E-Mail-Adresse").required("E-Mail ist erforderlich"),
    }),
    onSubmit: (values) => {
      const url = `/nachrichten?kicat=12&navcat=1&kd_email=${encodeURIComponent(values.email)}`;
      router.push(url); 
    },
  });

  const handleNewsletterClick = () => {
    router.push(`/${currentLocale}/Newsletter`); 
  };

  const handleDatenschutzClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(`/${currentLocale}/datenschutzerklaerung`); 
  };

  return (
    <div className=" bg-bigDawnCardBG flex flex-wrap w-[95%] rounded-2xl sm:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto lg:pb-14 sm:p-4 lg:p-10 p-2">
      <div className=" w-full md:w-[50%]  pt-10 sm:pt-5 p-4">
        <span className="font-sans font-normal text-[#667085] text-[14px] leading-[19px]  text-uppercase">{t("newsletter_theaser")}</span>
        <h4 className="sm:w-[140%] md:max-w-[110%]  lg:max-w-[70%] xl:max-w-[80%] font-Tittle  text-wrap
                   font-bold text-[#101828] text-[32px] sm:text-[42px] leading-[34px] sm:leading-[44px] mb-2 mt-2">{t("newsletter_title")}</h4>
        <p className="max-w-[90%] sm:max-w-[120%] lg:max-w-[75%]  font-sans font-normal text-[#667085] text-[16px] leading-[28px] pb-5">
          {t("newsletter_text_1")}
          <Link href="#" onClick={handleDatenschutzClick} className="text-[#006d77]">
            {t("newsletter_text_2")}
          </Link>
          {t("newsletter_text_3")}
        </p>

        <div className="box-form-newsletter  w-[100%]   lg:w-[90%] xl:w-[80%]  mt-30">
          <form className="form-newsletter flex justify-between " onSubmit={formik.handleSubmit}>
            <input
              className="input-newsletter"
              placeholder={t("newsletter_input_place_holder") ?? "E-Mail-Adresse"}
              {...formik.getFieldProps("email")}
            />

            <button
              type="submit"
              onClick={handleNewsletterClick}
              className=" bg-[#006d77] p-4  w-14  lg:ml-[-15px] xl:ml-0 rounded-full"
            >
              <span className="w-5 h-5 font-semibold text-white ">➜</span>
            </button>
          </form>
        </div>
        {formik.touched.email && Boolean(formik.errors.email) && (
          <div className="text-danger">{formik.errors.email}</div>
        )}
      </div>
      <div className="w-full md:w-[50%] md:p-4 p-2 relative">
        <div className="relative">
          <Image
            style={{ boxShadow: '0px 47px 65px rgba(21, 28, 38, 0.1)' }}
            src={Team}
            alt="Large Image"
            className="w-[90%] lg:w-[80%] rounded-xl ml-8 sm:mr-0"
          />
          <Image
            style={{ boxShadow: '0px 47px 65px rgba(21, 28, 38, 0.1)' }}
            src={Chart}
            alt="Small Image"
            className="absolute rounded-xl bottom-0 left-[-2%] transform md:left-[5%] w-[60%] md:w-[60%] lg:left-[5%] lg:w-[65%]
            lg:mb-[-20%] xl:mb-0 xl:left-[-20%] xl:w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
