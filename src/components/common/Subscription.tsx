import React from 'react';

export default function Subscription() {
  const [email, setEmail] = React.useState<string>('');
  return (
    <form
      method="POST"
      action="https://appspot.us11.list-manage.com/subscribe/post?u=ca4401d693dd2c51f872ca449&amp;id=6171877bdf"
      id="mc-embedded-subscribe-form" 
      name="mc-embedded-subscribe-form" 
      target="_blank"
      className="w-11/12 sm:w-10/12 md:w-136 max-w-sm mx-auto validate"
      noValidate
    >
      <label
        htmlFor="EMAIL"
        className="block mb-8 mx-auto text-center text-base md:text-2base lg:text-lg text-primary-500 dark:text-primary-400 font-semibold p-0"
      >
        Recibe nuestras últimas noticias
      </label>
      <div className="flex items-center bg-medium-blue dark:bg-medium-gray rounded-full">
        <input
          name="EMAIL"
          id="mce-EMAIL"
          type="email"
          placeholder="Correo electrónico"
          className="px-4 py-2 w-full block bg-transparent text-font-black dark:text-font-white rounded-full text-sm md:text-2sm border-medium-blue dark:border-medium-gray focus:border-0 focus:ring-0 focus:outline-none"
          required
          maxLength={127}
        />
        <div className="clear">
        <input 
          type="submit" 
          value="Subscribirse" 
          name="subscribe" 
          id="mc-embedded-subscribe" 
          className="text-sm md:text-2sm py-2 text-font-white bg-primary-400 hover:bg-primary-300 py-1 px-6 rounded-full focus:outline-none active:bg-primary-500 disabled:opacity-50 disabled:bg-primary-500"/>
        </div>
      </div>
    </form>
  );
}

// <!-- Begin Mailchimp Signup Form -->
// <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
// <style type="text/css">
// 	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
// 	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
// 	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
// </style>
// <div id="mc_embed_signup">
// <form 
//     action="https://appspot.us11.list-manage.com/subscribe/post?u=ca4401d693dd2c51f872ca449&amp;id=6171877bdf" 
//     method="post" 
//     id="mc-embedded-subscribe-form" 
//     name="mc-embedded-subscribe-form" 
//     class="validate" 
//     target="_blank" 
//     novalidate>
//     <div id="mc_embed_signup_scroll">

// 	<input 
//     type="email" 
//     value="" 
//     name="EMAIL" 
//     class="email" 
//     id="mce-EMAIL" 
//     placeholder="email address" 
//     required
//  >
//     <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
//     <div style="position: absolute; left: -5000px;" aria-hidden="true">
//         <input type="text" name="b_ca4401d693dd2c51f872ca449_6171877bdf" tabindex="-1" value="">
//     </div>
//     <div class="clear">
//       <input 
//          type="submit" 
//          value="Subscribe" 
//          name="subscribe" 
//          id="mc-embedded-subscribe" 
//          class="button">
//     </div>
//     </div>
// </form>
// </div>

// <!--End mc_embed_signup-->
