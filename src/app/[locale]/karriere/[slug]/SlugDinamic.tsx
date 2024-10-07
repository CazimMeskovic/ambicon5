
'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import ApplicationDialog from '../../../../../components/dialogs/ApplicationDialog';
import Newsletter from '../../../../../components/Old_layout/Newsletter/Newsletter';
import MarkdownRenderer from '../../../../../components/MarkdownRender';
import { useParams } from 'next/navigation';
import { getJobBySlug } from '../../../../../util/api';
import { JobPostingJsonLd, NextSeo } from "next-seo";
import Layout from '../../../../../components/layout/Layout';
import { usePathname } from 'next/navigation';
import "./slugpage.css"

interface Job {
  id: number;
  title: string;
  content: string;
  slug: string;
  date: string;
  jobSpecifications: {
    summary: string;
    salary: number;
    salaryTypeNew: string;
    employmentTypeNew: string;
    validThrough: string;
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
}

export default function JobSinglePage({ params }: { params: { locale: string } }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [job, setJob] = useState<Job | null>(null);
  const { slug } = useParams();
  const t = useTranslations('AllPage');

  const pathname = usePathname();

  const currentLocale = pathname.split('/')[1] || 'en';

  useEffect(() => {
    const fetchJob = async () => {
      if (typeof slug === 'string') {
        const fetchedJob = await getJobBySlug(slug);
        setJob(fetchedJob);
      }
    };
    fetchJob();
  }, [slug]);

  if (!job) {
    return <p></p>;
  }

  const publishedDate = new Date(job.date);

  return (
    <>

      <Layout  >
        <ApplicationDialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} subject={job.title} />

        <section className="section-box  ">
          <div className="banner-hero banner-breadcrums">
            <div className="container mx-auto text-center">
              <div className="flex justify-center">
                <div className="w-full">
                  <h1 className="text-heading-2 text-4xl font-bold text-gray-900 mb-5">{job.title}</h1>
                  <div className="breadcrumbs">
                    <ul className="text-base">
                      <li className="inline">
                        <Link href="/" className="text-body-text">Startseite</Link>
                      </li>
                      <li className="inline mx-2">
                        <Link href={`/${currentLocale}/karriere`} className="text-body-text">Karriere</Link>
                      </li>
                      <li className="inline">
                        <span className="text-body-text  ">{job.title}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box mt-12 mb-36">
          <div className="container mx-auto">
            <div className="content-detail">
              <div className="flex">
                <div className="hidden lg:block lg:w-1/6" />
                <div className="w-full lg:w-5/6">
                  <div dangerouslySetInnerHTML={{ __html: job.content ?? "" }} />
                  <div className="border-b mt-12 mb-12" />
                  <div className=" media-block">
                    <button
                      onClick={() => setIsDialogOpen(!isDialogOpen)}
                      className="btn btn-green-900 mb-4 sm:mb-0  text-white text-lg orenge_button_1 orenge_button rounded-[50px] px-14  py-4 lg:py-5 mr-5"
                    >
                      Jetzt bewerben
                    </button>

                    <Link href={`/${currentLocale}/kontakt`}
                      className="btn btn-default text-nowrap icon-arrow-right rounded-[50px] px-14  py-4 lg:py-5">
                      Kontaktiere uns
                    </Link>

                    <div
                      className="float-start float-lg-end align-middle mt-5"
                    >
                      <Link
                        href="https://www.facebook.com/sharer.php?u=www.ambicon.at/karriere/bilanzbuchhalterin"
                        className="btn btn-media  mr-2"
                        target="_blank"
                      >
                        <img src="/imgs/icons/social/facebook-share.svg" alt="ambicon" className="inline-block" /> Teilen
                      </Link>
                      <Link
                        href="http://twitter.com/share?text=text%20goes%20here&url=www.ambicon.at/karriere/bilanzbuchhalterin"
                        className="btn btn-media mr-2"
                        target="_blank"
                      >
                        <img src="/imgs/icons/social/twitter-share.svg" alt="ambicon" className="inline-block" /> Tweet
                      </Link>
                      <Link
                        href="https://www.linkedin.com/sharing/share-offsite/?url=www.ambicon.at/karriere/bilanzbuchhalterin"
                        className="btn btn-media mr-2"
                        target="_blank"
                      >
                        <img
                          width={18}
                          height={18}
                          src="/imgs/icons/social/linkedin-share.svg"
                          alt="ambicon"
                          className="inline-block"
                        />{" "}
                        Teilen
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <Newsletter />
      </Layout>
    </>
  );
};


