import Script from 'next/script';
import React from 'react';

interface IGoogleAnalyticsProps {}

const GoogleAnalytics: React.FC<IGoogleAnalyticsProps> = (props) => {
  const {} = props;

  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Z61YWCGW02" />
      <Script
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z61YWCGW02', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
