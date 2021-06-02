import React from "react";

interface IconProps {
  className?: string;
}

export default function TwitterIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 30 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M9.599 18.667a4.826 4.826 0 01-1.132-.15 7.072 7.072 0 01-1.684-.669 9.512 9.512 0 01-2.866-2.369c-.42-.5-.75-1.068-.977-1.68-.012-.033-.022-.068-.035-.11.856.17 1.742.126 2.577-.129a5.7 5.7 0 01-3.335-2A5.578 5.578 0 01.86 7.873a8.765 8.765 0 002.617.689c-.174-.135-.337-.253-.491-.382A5.667 5.667 0 01.943 4.726a5.284 5.284 0 01.433-3.287c.088-.18.2-.348.314-.538l.23.27a22.451 22.451 0 003.6 3.451 15.933 15.933 0 005.433 2.715c1.29.35 2.622.53 3.959.533.027 0 .054 0 .09-.006a4.838 4.838 0 01-.106-1.432 5.387 5.387 0 011.213-3.295A5.751 5.751 0 0119.877.978a6.121 6.121 0 014.778 1.305c.173.134.33.288.5.426a.19.19 0 00.134.037 11.013 11.013 0 003.523-1.31l.073-.038a.182.182 0 01.037-.006 6.349 6.349 0 01-2.585 3.1 11.354 11.354 0 003.288-.882c-.088.119-.175.239-.265.356a11.738 11.738 0 01-2.652 2.59.145.145 0 00-.062.137c-.011.552-.006 1.1-.04 1.655a15.309 15.309 0 01-.76 3.849c-.845 2.626-2.336 4.999-4.336 6.9a15.636 15.636 0 01-5.06 3.233c-1.117.442-2.28.764-3.465.961a20.287 20.287 0 01-4.006.241 26.565 26.565 0 01-2.408-.173 14.74 14.74 0 01-4.7-1.318c-.334-.163-.658-.347-.987-.522l.009-.028h.105c.66-.014 1.324 0 1.984-.045a9.98 9.98 0 004.717-1.468c.63-.391 1.23-.833 1.843-1.252.005-.019.017-.031.057-.059z"
      ></path>
    </svg>
  );
}