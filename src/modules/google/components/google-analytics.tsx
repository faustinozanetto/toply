/* eslint-disable @next/next/inline-script-id */
import Script from 'next/script';
import React from 'react';

interface IGoogleAnalyticsProps {}

const GoogleAnalytics: React.FC<IGoogleAnalyticsProps> = (props) => {
  const {} = props;

  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-Z61YWCGW02`} />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '$G-Z61YWCGW02', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
