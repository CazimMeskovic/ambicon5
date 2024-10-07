
import React, { useEffect, useRef } from 'react';
import Link from 'next/link'; 
import { usePathname } from 'next/navigation'; 

const KIClient = ({ kicat = 11, art_cat_id = 0, rcat = "", ki_ts_id = 0, related = "", art_id = 0 }) => {
  const displayRef = useRef(null);
  
 
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'en'; 
  useEffect(() => {
    let KIURL = new URL("https://www.klienten-info.com/6287/klienten-info.php");
    KIURL.searchParams.append('kicat', kicat);
    KIURL.searchParams.append('art_cat_id', art_cat_id);

    console.log('Constructed URL:', KIURL.toString());  

    const loadContent = async () => {
      try {
        const response = await fetch(KIURL.toString());
        if (!response.ok) {
          console.error('Network response was not ok', response);
          return;
        }
        const htmlContent = await response.text();
        if (displayRef.current) {
          displayRef.current.innerHTML = htmlContent;
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    loadContent();

    console.log('useEffect triggered'); 
  }, [kicat, art_cat_id, rcat, ki_ts_id, related, art_id]); 

  return (
    <div>
       <Link href={`/${currentLocale}/nachrichten/kicat=1&navcat=1`}>
      <div id="ki_display_content" ref={displayRef}></div>

    
      </Link>
    </div>
  );
};

export default KIClient;
