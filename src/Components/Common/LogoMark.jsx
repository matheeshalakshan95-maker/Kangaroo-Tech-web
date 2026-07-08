import { useId } from 'react';

const LogoMark = ({ size = 40, animated = false }) => {
  const uid = useId();
  const gradId = `kt-mark-grad-${uid}`;
  const glowId = `kt-mark-glow-${uid}`;

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
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="55%" stopColor="#3b6dff" />
          <stop offset="100%" stopColor="#0b5fff" />
        </linearGradient>
        <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect x="4" y="4" width="92" height="92" rx="22" fill={`url(#${gradId})`} />

      <g
        stroke="#ffffff"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M32 22 L32 78" />
        <path d="M32 50 L70 22" />
        <path d="M32 50 L70 78" />
      </g>

      <path
        className="kt-logomark-swoosh"
        d="M14 66 C 40 74, 54 40, 92 18"
        stroke="#ffffff"
        strokeOpacity="0.92"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
        filter={`url(#${glowId})`}
      />
    </svg>
  );
};

export default LogoMark;
