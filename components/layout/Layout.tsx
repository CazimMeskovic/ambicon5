
'use client';

import { motion } from "framer-motion";
import { ReactNode, useState,Suspense } from "react";

import Footer from "../Old_layout/Footer/Footer";
import Header from "../Old_layout/Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import CookieBanner from "../cookie-banner/cookie-banner";
import BackToTop from "../elements/BackToTop";


interface LayoutProps {
  children: React.ReactNode;
  headerStyle?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, headerStyle = "" }: LayoutProps) => {
  const [openClass, setOpenClass] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleRemove = () => {
    if (openClass === "sidebar-visible") {
      setOpenClass("");
      document.body.classList.remove("mobile-menu-active");
      setIsMenuOpen(false);
    }
  };

  const handleStateChangeSidebar = () => {
    if (openClass === "") {
      document.body.classList.add("mobile-menu-active");
      setOpenClass("sidebar-visible");
      setIsMenuOpen(true);
    } else {
      handleRemove();
    }
  };

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate" className={`app-container ${headerStyle}`}>
      	<CookieBanner />
      <div className={openClass && "body-overlay-1"} onClick={handleRemove} />
	  <Suspense fallback={<div></div>}>
      <Header handleOpen={handleStateChangeSidebar} headerStyle={headerStyle} isMenuOpen={isMenuOpen} />
      <Sidebar handleStateChangeSidebar={handleStateChangeSidebar} openClass={openClass} />
	  </Suspense>
      <main className="main">{children}</main>
      <Footer />
      <BackToTop />
    </motion.div>  
  );
};

export default Layout;
 