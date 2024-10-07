import Image from 'next/image';
/* import Link from 'next-intl/link'; */
import Link from 'next/link';
import { useState } from 'react';
import { Job } from '../../../types/job';
import { getAllJobs } from '../../../../util/api';
/* import MarkdownRenderer from '../../../components/MarkdownRender'; */
import { useTranslations } from 'next-intl';



    interface Params {
        locale: string;
      }
      
      export async function generateStaticParams({ locale }: Params) {
        console.log(locale);
        return [{ locale }];
      }


export async function getData(locale: string) {
  try {
    const jobs = await getAllJobs(); // Make sure this returns a valid JSON
    return { jobs, locale };
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw new Error('Failed to fetch jobs data.');
  }
}

