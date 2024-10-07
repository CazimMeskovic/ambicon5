
import React, { useState, useEffect, Fragment } from "react";
import styles from "./cookie-banner.module.scss";
import { useTranslations } from "next-intl";
import { initGA } from "../../util/ga-utils";
import { useRouter } from "next/navigation";
import { LOCALSTORAGE_COOKIE_KEY } from "../../util/localstorage";
import TextSwitch from "./../elements/text-switch/text-switch";
import Link from "next/link";
import "./cookie-banner.css"

const CookieBanner = () => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [allowedCookies, setAllowedCookies] = useState([1]);
  const [alreadySelected, setAlreadySelected] = useState(true);
 const t = useTranslations('AllPage');
  const router = useRouter(); 

  const initGAIfProduction = (value: boolean, currentUrl: string) => {
    if (value && process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
      initGA(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, process.env.NODE_ENV === "production", currentUrl);
    }
  };

  useEffect(() => {
    const stringifiedCookies = localStorage.getItem(LOCALSTORAGE_COOKIE_KEY);
    if (!stringifiedCookies) {
      setAlreadySelected(false);
      return;
    }
    const parsedCookies = JSON.parse(stringifiedCookies) as number[];
    setAllowedCookies(parsedCookies);
    if (parsedCookies.find((x) => x === 3)) {
     const url = window.location.pathname;

      initGAIfProduction(true, url);
    }

    setAlreadySelected(true);  
   
  }, [router]);

  const toggleCookie = (cookieId: number) => {
    const index = allowedCookies.indexOf(cookieId);
    if (index === -1) {
      setAllowedCookies([...allowedCookies, cookieId]);
      return;
    }
    const newCookies = [...allowedCookies];
    newCookies.splice(index, 1);
    setAllowedCookies(newCookies);
  };

  const storeCookieSelection = (all: boolean) => {
    let cookiesForStorage = [];
    if (all) {
      cookiesForStorage = [1, 2, 3, 4];
    } else {
      cookiesForStorage = allowedCookies;
    }

    if (cookiesForStorage.find((x) => x === 3)) {
      const url = window.location.pathname;
console.log(url)
      initGAIfProduction(true, url);
    }

    const stringifiedSelection = JSON.stringify(cookiesForStorage.sort());
    localStorage.setItem(LOCALSTORAGE_COOKIE_KEY, stringifiedSelection);
    setAlreadySelected(true);
  };

  const allowAllCookies = () => {
    storeCookieSelection(true);
  };
  const storeCookieSelectionHelper = () => {
    storeCookieSelection(false);
  };

  return (
    <Fragment>
      {!alreadySelected && (
        <div className={styles.container + " bg-2"}>
          <h3>{t("banner_header")}</h3>
          <p>{t("banner_text_top")}</p>
          <p>
            {t("banner_text_middle1")}
            <Link href={"/datenschutzerklaerung"}>{t("banner_text_middle2")}</Link> {t("banner_text_middle3")}
          </p>

          <p>{t("banner_text_bottom")}</p>
          <div className={styles.buttonRow}>
            <a className="btn btn-square" onClick={allowAllCookies}>
              {t("allow_all_button")}
            </a>
            <a className="btn btn-square" onClick={storeCookieSelectionHelper}>
              {t("allow_selected_button")}
            </a>
            <a className="btn btn-square" onClick={() => setDetailsOpen(!detailsOpen)}>
              {detailsOpen ? t("hide_details_button") : t("show_details_button")}
            </a>
          </div>
          {detailsOpen && (
            <Fragment>
              <div className={styles.switchContainer}>
                <TextSwitch
                  onChange={() => {
                  }}
                  initialChecked={true}
                  header={t("necessary_header")}
                  text={t("necessary_text")}
                  locked
                />
                <TextSwitch
                  onChange={() => toggleCookie(3)}
                  initialChecked={allowedCookies.indexOf(3) !== -1}
                  header={t("statistics_header")}
                  text={t("statistics_text")}
                />
              </div>
              <h4>{t("about_cookies_header")}</h4>
              <p className="display-3">{t("about_cookies_text")}</p>
            </Fragment>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default CookieBanner;
