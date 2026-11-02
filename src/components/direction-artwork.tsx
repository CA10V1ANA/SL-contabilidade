export function DirectionArtwork() {
  return <div className="direction-art" aria-hidden="true"><svg viewBox="0 0 1100 850" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ribbon-top" x1="170" y1="760" x2="850" y2="320" gradientUnits="userSpaceOnUse"><stop stopColor="#164CFA" /><stop offset=".5" stopColor="#254FE8" /><stop offset="1" stopColor="#0634C5" /></linearGradient>
      <linearGradient id="ribbon-side" x1="350" y1="500" x2="550" y2="810" gradientUnits="userSpaceOnUse"><stop stopColor="#1034A6" /><stop offset=".5" stopColor="#062478" /><stop offset="1" stopColor="#0B38C9" /></linearGradient>
      <linearGradient id="ribbon-inner" x1="600" y1="400" x2="720" y2="500" gradientUnits="userSpaceOnUse"><stop stopColor="#051D68" /><stop offset="1" stopColor="#103CCA" /></linearGradient>
      <linearGradient id="portal-front" x1="740" y1="120" x2="1050" y2="470" gradientUnits="userSpaceOnUse"><stop stopColor="#F4F4F5" /><stop offset="1" stopColor="#DBDDE3" /></linearGradient>
      <linearGradient id="portal-inner" x1="760" y1="180" x2="860" y2="240" gradientUnits="userSpaceOnUse"><stop stopColor="#B0B2BE" /><stop offset="1" stopColor="#F6F6F8" /></linearGradient>
      <linearGradient id="yellow" x1="660" y1="200" x2="800" y2="330" gradientUnits="userSpaceOnUse"><stop stopColor="#FFE450" /><stop offset="1" stopColor="#FFC600" /></linearGradient>
      <linearGradient id="fold" x1="590" y1="510" x2="720" y2="590" gradientUnits="userSpaceOnUse"><stop stopColor="#FFDE32" /><stop offset="1" stopColor="#E6AE00" /></linearGradient>
      <filter id="shadow" x="-30%" y="-100%" width="160%" height="300%"><feGaussianBlur stdDeviation="18" /></filter>
      <filter id="soft-shadow"><feGaussianBlur stdDeviation="9" /></filter>
    </defs>
    <text x="228" y="385" fill="none" stroke="#123FE0" strokeWidth="1" fontFamily="Arial,sans-serif" fontSize="420" fontWeight="700" letterSpacing="-34" opacity=".58">SL</text>
    <ellipse cx="740" cy="485" rx="280" ry="28" fill="#10152B" opacity=".12" filter="url(#shadow)" />
    <circle cx="835" cy="267" r="83" fill="url(#yellow)" />
    <path d="M710 153L964 82L1072 139L809 216Z" fill="#F4F4F7" />
    <path d="M964 82L1072 139V465L964 444Z" fill="#D2D5DE" />
    <path d="M710 153L964 82V444L906 453V166L768 204V463L710 476Z" fill="url(#portal-front)" />
    <path d="M768 204L814 228V454L768 463Z" fill="url(#portal-inner)" />
    <path d="M768 204L906 166V211L814 237Z" fill="#B5B5C1" />
    <path d="M814 335L912 322L943 338L850 358Z" fill="#1C4BDD" />
    <path d="M850 358L943 338V384L850 405Z" fill="#092A91" />
    <path d="M814 335L850 358V405L814 380Z" fill="#1038AD" />
    <path d="M0 836L541 627Q617 597 561 570L468 526Q430 503 479 484L845 390" stroke="#0A2676" strokeWidth="110" opacity=".12" filter="url(#soft-shadow)" />
    <path d="M0 803L585 585Q662 556 624 528L478 463Q451 451 489 439L844 353V416L489 505Q466 513 478 527L624 590Q662 619 585 649L0 876Z" fill="url(#ribbon-side)" />
    <path d="M588 505L682 549L682 612L588 568Z" fill="url(#fold)" />
    <path d="M614 441L912 362V410L614 491Z" fill="url(#ribbon-inner)" />
    <path d="M-20 801L546 579Q584 565 547 550L453 507Q404 485 456 463L844 353L912 362L614 441Q581 451 614 465L682 495Q746 526 682 549L90 850Z" fill="url(#ribbon-top)" />
    <path d="M-20 801L546 579Q584 565 547 550L453 507Q404 485 456 463L844 353" stroke="#6084FF" strokeWidth="1.5" opacity=".7" />
    <path d="M90 850L682 549V612L90 914Z" fill="url(#ribbon-side)" />
    <path d="M682 549L635 567V630L682 612Z" fill="url(#fold)" />
  </svg></div>;
}
