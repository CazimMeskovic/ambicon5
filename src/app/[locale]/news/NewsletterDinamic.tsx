
'use client'
import { useEffect } from "react";
import { NextPage } from "next";
import { useTranslations } from "next-intl";
import Newsletter from "../../../../components/Old_layout/Newsletter/Newsletter";
import Layout from "../../../../components/layout/Layout";
import "./NewsletterDinamic.css";


export default function NewsDinamic({ params }: { params: { locale: string } }) {
  const t = useTranslations("AllPage");

  useEffect(() => {
    function loadHTML(url: string, targetElement: HTMLElement) {
      fetch(url)
        .then(response => response.text())
        .then(data => {
          targetElement.innerHTML = data;
        })
        .catch(error => console.error("Error fetching the content:", error));
    }

    function loadki(url: string) {
      const displayElement = document.getElementById("ki_display_content");
      if (displayElement) {
        loadHTML(url, displayElement);
      }
    }

    let KIURL = "https://www.klienten-info.com/6287/klienten-info.php";
    if (window.location.search && window.location.search.indexOf("_vl_backlink") === -1) {
      let searchStr = window.location.search.replace("url=&", "");
      searchStr = searchStr.replace(/%3A/g, ":").replace(/%2F/g, "/").replace(/%3F/g, "?");
      KIURL += searchStr;
    }

    loadki(KIURL);
  }, []); 

  return (
    <Layout>
      <div className="section-box">
        <section className="bg-[#f2f4f7] banner-hero banner-breadcrums py-8 px-4">
          <div className="container mx-auto text-center">
            <div className="flex flex-col items-center">
              <h1 className="font-normal Tittle_text_allPages mb-5">{t("news_title")}</h1>
              <p className="text-[#475467] text-[1rem] mb-5">{t("seo_news_description")}</p>
            </div>
          </div>
        </section>
        <section className="lg:w-screen 2xl:w-[80%] max-w-[1400px] mx-auto overflow-auto py-8 px-4">
          <div id="ki_display_content"></div>
        </section>
      </div>
      <Newsletter />
    </Layout>
  );
};

