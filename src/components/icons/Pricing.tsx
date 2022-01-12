import React from 'react';

interface IconProps {
  className?: string;
}

function Pricing({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="60"
      fill="currentColor"
      viewBox="0 0 50 60"
      className={className}
    >
      <path d="M50 35c0-1.654-1.346-3-3-3h-1V1a1 1 0 00-1-1H1a1 1 0 00-1 1v48a1 1 0 001 1h9v9a1 1 0 001 1h28a1 1 0 001-1v-1h7c1.654 0 3-1.346 3-3v-2c0-.771-.3-1.468-.78-2 .48-.532.78-1.229.78-2v-2c0-.771-.3-1.468-.78-2 .48-.532.78-1.229.78-2v-2c0-.771-.3-1.468-.78-2 .48-.532.78-1.229.78-2v-2zm-2 0v2a1 1 0 01-1 1h-7v-4h7a1 1 0 011 1zm0 6v2a1 1 0 01-1 1h-7v-4h7a1 1 0 011 1zm0 6v2a1 1 0 01-1 1h-7v-4h7a1 1 0 011 1zM44 2v10H2V2h42zM2 48V14h42v18h-4v-1a1 1 0 00-1-1H11a1 1 0 00-1 1v17H2zm36 10H12V32h26v26zm10-3a1 1 0 01-1 1h-7v-4h7a1 1 0 011 1v2z" />
      <path d="M16 37h16a1 1 0 100-2H16a1 1 0 100 2zM28 41H16a1 1 0 100 2h12a1 1 0 100-2zM26 47H16a1 1 0 100 2h10a1 1 0 100-2zM26 53H16a1 1 0 100 2h10a1 1 0 100-2zM32 48a1 1 0 11.666-1.746 1 1 0 101.335-1.488A2.98 2.98 0 0033 44.177V43a1 1 0 10-2 0v1.184A2.995 2.995 0 0029 47c0 1.654 1.346 3 3 3a1 1 0 11-.666 1.746.999.999 0 10-1.335 1.488 2.98 2.98 0 001.001.589V55a1 1 0 102 0v-1.184A2.995 2.995 0 0035 51c0-1.654-1.346-3-3-3zM21 26v-8a1 1 0 00-1-1H6a1 1 0 00-1 1v8a1 1 0 001 1h14a1 1 0 001-1zm-2-1H7v-6h12v6zM28 26h12a1 1 0 001-1v-6a1 1 0 00-1-1H28a1 1 0 00-1 1v6a1 1 0 001 1zm1-6h10v4H29v-4zM7 10c1.654 0 3-1.346 3-3S8.654 4 7 4 4 5.346 4 7s1.346 3 3 3zm0-4c.551 0 1 .449 1 1 0 .551-.449 1-1 1-.551 0-1-.449-1-1 0-.551.449-1 1-1zM13 8h12a1 1 0 000-2H13a1 1 0 000 2zM28.08 7.38c.02.06.05.12.09.18l.12.15c.19.18.45.29.71.29a1 1 0 00.38-.08c.13-.05.23-.12.33-.21.04-.05.09-.1.12-.15a.76.76 0 00.09-.18c.03-.06.05-.12.06-.18.01-.07.02-.13.02-.2a1 1 0 00-.08-.38c-.05-.12-.12-.23-.21-.33-.1-.09-.2-.16-.33-.21-.36-.16-.81-.07-1.09.21-.09.1-.16.21-.21.33A1 1 0 0028 7c0 .07.01.13.02.2.01.06.03.12.06.18zM32.08 7.38c.02.06.05.12.09.18l.12.15c.19.18.45.29.71.29a1 1 0 00.38-.08c.13-.05.23-.12.33-.21.04-.05.09-.1.12-.15a.76.76 0 00.09-.18c.03-.06.05-.12.06-.18.01-.07.02-.13.02-.2a1 1 0 00-.08-.38c-.05-.12-.12-.23-.21-.33-.1-.09-.2-.16-.33-.21a.999.999 0 00-1.09.21c-.09.1-.16.21-.21.33A1 1 0 0032 7c0 .07.01.13.02.2.01.06.03.12.06.18zM36.08 7.38c.02.06.05.12.09.18l.12.15.15.12c.06.04.12.07.18.09.06.03.12.05.18.06.07.01.13.02.2.02a1 1 0 00.38-.08c.12-.05.23-.12.33-.21l.12-.15a.76.76 0 00.09-.18c.03-.06.05-.12.06-.18.01-.07.02-.13.02-.2a1 1 0 00-.08-.38c-.05-.12-.12-.23-.21-.33-.1-.09-.21-.16-.33-.21a.96.96 0 00-.58-.06c-.06.01-.12.03-.18.06-.06.02-.12.05-.18.09l-.15.12c-.09.1-.16.21-.21.33A1 1 0 0036 7c0 .07.01.13.02.2.01.06.03.12.06.18z" />
    </svg>
  );
}

export default Pricing;