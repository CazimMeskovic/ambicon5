
"use client";
import { NextPage, NextPageContext } from "next";
import { useTranslations } from "next-intl"; 
import { NextSeo } from "next-seo";
import Link from "next/link";
import Layout from "../../../../components/layout/Layout";
import "../karriere/[slug]/slugpage.css"


const Imprint: NextPage = () => {
  const  t  = useTranslations('AllPage');
  return (
    <>
  
      <Layout >
        <section className="section-box">
          <div className="banner-hero banner-breadcrums">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Impressum</h1>
              <div className="breadcrumbs text-sm text-gray-500">
                <ul className="flex justify-center space-x-4">
                  <li>
                    <Link href="/"
                       className="text-gray-900 hover:text-blue-600">Startseite
                    </Link>
                  </li>
                  <li>
                    <span className="text-gray-500">Impressum</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box py-12">
          <div className="container mx-auto">
            <div className="content-detail">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-1" />
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-body-text ">
                    Angaben gemäß Informationspflicht laut §5 E-Commerce Gesetz, §14
                    Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz.
                  </p>
                  <p className="text-body-text">
                    ambiCON GmbH, <br />
                    Dresdner Straße 47/3. OG
                    <br />
                    A-1200 Wien
                    <br />
                    Österreich
                  </p>
                  <p className="text-body-text">
                    <strong>Unternehmensgegenstand: </strong>Bilanzbuchhalter und Unternehmensberater
                    <br />
                    <strong>UID-Nummer: </strong>ATU77493204
                    <br />
                    <strong>GLN: </strong>9110031347232
                    <br />
                    <strong>GISA: </strong>34337936
                    <br />
                    <strong>Firmenbuchnummer: </strong>568311b
                    <br />
                    <strong>Firmenbuchgericht: </strong>Handelsgericht Wien
                    <br />
                    <strong>Firmensitz: </strong> A-1200 Wien
                  </p>
                  <p className="text-body-text">
                    <strong>Tel: </strong>
                    <a href="tel:4319081999" className="text-blue-600 hover:underline">+43 1 908 19 99</a>
                    <br />
                    <strong>E-Mail: </strong>
                    <a href="mailto:office@ambicon.at" className="text-blue-600 hover:underline">office@ambicon.at</a>
                  </p>
                  <p className="text-body-text">
                    <strong>Mitglied bei: </strong>WKO
                    <br />
                    <strong>Berufsrecht: </strong>Präsident der Wirtschaftskammer Österreich gemäß § 63
                    Bilanzbuchhaltungsgesetz 2014
                  </p>
                  <p className="text-body-text">
                    <strong>Aufsichtsbehörde/Gewerbebehörde: </strong>Magistratisches Bezirksamt des XX. Bezirkes
                    <br />
                    <strong>Verleihungsstaat: </strong> Österreich
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12">
                <div className="lg:col-span-1" />
                <div className="lg:col-span-2 space-y-6">
                  <h2 className="text-heading-4">EU-Streitschlichtung</h2>
                  <p className="text-body-text">
                    Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die
                    Online-Streitbeilegungsplattform (OS-Plattform) informieren. Verbraucher haben die Möglichkeit, Beschwerden an die Online
                    Streitbeilegungsplattform der Europäischen Kommission unter{" "}
                    <a
                      href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE
                    </a>{" "}
                    zu richten.
                  </p>

                  <h2 className="text-heading-4">Haftung für Inhalte dieser Website</h2>
                  <p className="text-body-text">
                    Wir entwickeln die Inhalte dieser Website ständig weiter und bemühen uns korrekte und aktuelle Informationen bereitzustellen.
                    Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Website übernehmen.
                  </p>

                  <h2 className="text-heading-4">Urheberrechtshinweis</h2>
                  <p className="text-body-text">
                    Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Bitte fragen Sie uns bevor Sie die Inhalte
                    dieser Website verbreiten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};


export default Imprint;
