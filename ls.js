
//$(document).ready( function(){
  // Create the script element for Google Tag Manager
  var gtmScript = document.createElement('script');
  gtmScript.src = "https://www.googletagmanager.com/gtag/js?id=G-46Y6M1RE55";
  gtmScript.async = true;

  // Create the script element for configuring Google Analytics
  var gaScript = document.createElement('script');
  gaScript.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-46Y6M1RE55');
  `;

  // Append the scripts to the head of the document
  document.head.appendChild(gtmScript);
  document.head.appendChild(gaScript);
//});

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-THB36TN5');


!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '979672027311988');
fbq('track', 'PageView');

