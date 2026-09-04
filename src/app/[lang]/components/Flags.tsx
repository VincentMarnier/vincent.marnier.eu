"use client"

export function FrCircleFlag({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      role="img"
      aria-hidden="true"
      focusable="false"
      style={{ borderRadius: '50%', flexShrink: 0, display: 'block' }}
    >
      <defs>
        <clipPath id="fr-circle-clip">
          <circle cx="16" cy="16" r="16" />
        </clipPath>
      </defs>
      <g clipPath="url(#fr-circle-clip)">
        <rect x="0" y="0" width="11" height="32" fill="#0055A4" />
        <rect x="11" y="0" width="10" height="32" fill="#FFFFFF" />
        <rect x="21" y="0" width="11" height="32" fill="#EF4135" />
      </g>
      <circle cx="16" cy="16" r="15.5" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
    </svg>
  )
}

export function GbCircleFlag({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      role="img"
      aria-hidden="true"
      focusable="false"
      style={{ borderRadius: '50%', flexShrink: 0, display: 'block' }}
    >
      <defs>
        <clipPath id="gb-circle-clip">
          <circle cx="16" cy="16" r="16" />
        </clipPath>
      </defs>
      <g clipPath="url(#gb-circle-clip)">
        <rect x="0" y="0" width="32" height="32" fill="#012169" />
        <path d="M0,0 L32,32 M32,0 L0,32" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M0,0 L32,32 M32,0 L0,32" stroke="#C8102E" strokeWidth="2" />
        <path d="M16,0 V32 M0,16 H32" stroke="#FFFFFF" strokeWidth="10" />
        <path d="M16,0 V32 M0,16 H32" stroke="#C8102E" strokeWidth="6" />
      </g>
      <circle cx="16" cy="16" r="15.5" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
    </svg>
  )
}

export function CircleFlag({ code, size = 16 }: { code: 'fr' | 'en', size?: number }) {
  if (code === 'fr') return <FrCircleFlag size={size} />
  return <GbCircleFlag size={size} />
}
