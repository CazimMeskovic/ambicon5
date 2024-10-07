
"use client";

import React, { FC, useState, useEffect } from "react";
import dynamic from 'next/dynamic';

const PopupModal = dynamic(() =>
  import('react-calendly').then((mod) => mod.PopupModal),
  { ssr: false }
);

interface CalendlyModalWrapperProps {
  url: string;
  children: React.ReactNode;
  className?: string;
}

export const CalendlyModalWrapper: FC<CalendlyModalWrapperProps> = ({
  url,
  children,
  className,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = () => {
    console.log("Opening modal...");
    setShowModal(true);
  };

  return (
    <>
      {isClient && (
        <PopupModal
          url={url}
          rootElement={document.body}
          onModalClose={() => setShowModal(false)}
          open={showModal}
        />
      )}
      <span className={className} onClick={handleClick}>
        {children}
      </span>
    </>
  );
};

export default CalendlyModalWrapper;


