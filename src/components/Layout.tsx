import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-light dark:bg-dark text-font-black dark:text-font-white transition-all ease-in-out duration-300">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

// <script type="text/javascript">
//           (function(d, s) {
//           window.$crisp=[];
//           window.CRISP_WEBSITE_ID="0540c02c-b342-4bef-a11b-e8669fd3a28f";
//           d = document;
//           s = d.createElement("script");
//           s.src = "https://client.crisp.chat/l.js";
//           s.async = 1;
//           d.getElementsByTagName("head")[0].appendChild(s);
//         }(document, 'script'));
//         </script>

  /* <script type="text/javascript">
        window.$crisp=[];
        window.CRISP_WEBSITE_ID="0540c02c-b342-4bef-a11b-e8669fd3a28f";
        (function(d, s){
          var d = document;
          var s = d.createElement("script");
          s.src="https://client.crisp.chat/l.js";
          s.async=1;d.getElementsByTagName("head")[0].appendChild(s);
        })(document, 'script');
        </script> */

