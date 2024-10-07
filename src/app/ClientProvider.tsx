// src/components/ClientProvider.tsx
"use client";

import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { pageView } from "../../util/ga-utils";
import { LOCALSTORAGE_COOKIE_KEY } from "../../util/localstorage";

interface ClientProviderProps {
  children: ReactNode;
}

export default function ClientProvider({ children }: ClientProviderProps) {
  const t = useTranslations('AllPage');  
  const production = process.env.NODE_ENV === "production";
  const pathname = usePathname();

   

  if (production) {
    console.log = function () {};
    console.error = function () {};
  }

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const stringifiedCookies = localStorage.getItem(LOCALSTORAGE_COOKIE_KEY);
       if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && production && stringifiedCookies) { 
        const parsedCookies = JSON.parse(stringifiedCookies) as number[];
        if (parsedCookies.find((x) => x === 3)) {
          pageView(url);
        }
      }
    };

    window.addEventListener("popstate", () => handleRouteChange(pathname));

    return () => {
      window.removeEventListener("popstate", () => handleRouteChange(pathname));
    };
  }, [pathname, production]);

   return <>{children}</>; 
 
}
