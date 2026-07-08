import { useId } from 'react';

const LogoMark = ({ size = 40, animated = false }) => {
  const uid = useId();
  const gradId = `kt-mark-grad-${uid}`;
  const glowId = `kt-mark-glow-${uid}`;
  const shadowId = `kt-mark-shadow-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`kt-logomark ${animated ? 'animated' : ''}`}
      role="img"
      aria-label="KANGARO TECH"
    >
      <defs>
        <linearGradient id={gradId} gradientUnits="userSpaceOnUse" x1="30" y1="0" x2="70" y2="100">
          <stop offset="0%" stopColor="#9b3ffb" />
          <stop offset="45%" stopColor="#6d4bf5" />
          <stop offset="100%" stopColor="#1470ff" />
        </linearGradient>
        <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={shadowId} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#3b1f8c" floodOpacity="0.28" />
        </filter>
      </defs>

      <g filter={`url(#${shadowId})`}>
        <g
          stroke={`url(#${gradId})`}
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <path d="M30 12 L30 88" />
          <path d="M30 51 L76 12" />
          <path d="M30 51 L76 90" />
        </g>
      </g>

      <path
        className="kt-logomark-swoosh-shadow"
        d="M12 70 C 38 79, 52 44, 90 22"
        stroke="#2c46d6"
        strokeOpacity="0.35"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        className="kt-logomark-swoosh"
        d="M10 64 C 38 73, 52 38, 92 16"
        stroke="#ffffff"
        strokeOpacity="0.96"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
        filter={`url(#${glowId})`}
      />
    </svg>
  );
};

export default LogoMark;
