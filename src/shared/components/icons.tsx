// Hand-drawn inline SVG icons — no icon-library glyphs (per design conventions).
// All stroke-based, inherit currentColor, 24x24 viewBox. Render-only.

type IconProps = { className?: string; strokeWidth?: number };

const base = (strokeWidth = 1.5) => ({
  viewBox: "0 0 24 24",
  fill: "none" as const,
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
  strokeWidth,
});

export function IconHeart({ className, strokeWidth }: IconProps) {
  return (
    <svg className={className} {...base(strokeWidth)}>
      <path
        d="M12 20.5C12 20.5 3.5 15.2 3.5 9.2C3.5 6.5 5.6 4.5 8.2 4.5C9.9 4.5 11.3 5.4 12 6.7C12.7 5.4 14.1 4.5 15.8 4.5C18.4 4.5 20.5 6.5 20.5 9.2C20.5 15.2 12 20.5 12 20.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconArrow({ className, strokeWidth }: IconProps) {
  return (
    <svg className={className} {...base(strokeWidth)}>
      <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowDown({ className, strokeWidth }: IconProps) {
  return (
    <svg className={className} {...base(strokeWidth)}>
      <path d="M12 4V20M12 20L6 14M12 20L18 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPlus({ className, strokeWidth }: IconProps) {
  return (
    <svg className={className} {...base(strokeWidth)}>
      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

// Two interlinked rings — trust / nikkah motif
export function IconRings({ className, strokeWidth }: IconProps) {
  return (
    <svg className={className} {...base(strokeWidth)}>
      <circle cx="9" cy="14" r="5.2" stroke="currentColor" />
      <circle cx="15" cy="10" r="5.2" stroke="currentColor" />
    </svg>
  );
}

// Shield — privacy
export function IconShield({ className, strokeWidth }: IconProps) {
  return (
    <svg className={className} {...base(strokeWidth)}>
      <path d="M12 3L19 5.6V11C19 15.4 16 18.9 12 20.6C8 18.9 5 15.4 5 11V5.6L12 3Z" stroke="currentColor" strokeLinejoin="round" />
      <path d="M9.2 11.8L11.2 13.8L15 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Two people in conversation — consultation
export function IconConsult({ className, strokeWidth }: IconProps) {
  return (
    <svg className={className} {...base(strokeWidth)}>
      <circle cx="8.5" cy="8" r="2.8" stroke="currentColor" />
      <circle cx="16" cy="9.5" r="2.4" stroke="currentColor" />
      <path d="M3.5 19.5C3.5 16.7 5.7 14.8 8.5 14.8C10.1 14.8 11.5 15.4 12.4 16.4" stroke="currentColor" strokeLinecap="round" />
      <path d="M13.5 19.5C13.5 17.2 14.9 15.6 16.9 15.6C18.9 15.6 20.5 17.1 20.5 19.5" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

// Handshake / mutual consent
export function IconConsent({ className, strokeWidth }: IconProps) {
  return (
    <svg className={className} {...base(strokeWidth)}>
      <path d="M3 9L7 6L12 8L17 6L21 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 6V15L12 18L17 15V6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8V18" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

export function IconMail({ className, strokeWidth }: IconProps) {
  return (
    <svg className={className} {...base(strokeWidth)}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" />
      <path d="M4 7L12 12.5L20 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconWhatsapp({ className, strokeWidth }: IconProps) {
  return (
    <svg className={className} {...base(strokeWidth)}>
      <path d="M4 20L5.4 15.9C4.5 14.6 4 13 4 11.4C4 7.3 7.4 4 11.5 4C15.6 4 19 7.3 19 11.4C19 15.5 15.6 18.8 11.5 18.8C10 18.8 8.6 18.4 7.4 17.6L4 20Z" stroke="currentColor" strokeLinejoin="round" />
      <path d="M9 8.5C9 8.5 9.5 8.4 9.8 9C10 9.4 10.4 10.3 10.4 10.5C10.5 10.7 10.4 10.9 10.3 11.1C10.1 11.3 10 11.5 9.9 11.6C9.8 11.7 9.6 11.9 9.8 12.2C10 12.5 10.6 13.4 11.5 14C12.5 14.6 13 14.7 13.2 14.5C13.4 14.3 13.7 13.9 13.9 13.6C14.1 13.4 14.3 13.4 14.5 13.5C14.8 13.6 15.9 14.1 15.9 14.1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconInstagram({ className, strokeWidth }: IconProps) {
  return (
    <svg className={className} {...base(strokeWidth)}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" />
      <circle cx="16.4" cy="7.6" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function IconUpload({ className, strokeWidth }: IconProps) {
  return (
    <svg className={className} {...base(strokeWidth)}>
      <path d="M12 15V4M12 4L8 8M12 4L16 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 15V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

export function IconCheck({ className, strokeWidth }: IconProps) {
  return (
    <svg className={className} {...base(strokeWidth)}>
      <path d="M5 12.5L10 17.5L19 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Crescent — faith motif for section dividers / dua step
export function IconCrescent({ className, strokeWidth }: IconProps) {
  return (
    <svg className={className} {...base(strokeWidth)}>
      <path d="M16.5 4.5C13 4.8 10.2 7.8 10.2 11.5C10.2 15.2 13 18.2 16.5 18.5C14.9 19.6 12.9 20.2 10.8 20C6.6 19.6 3.4 16 3.6 11.7C3.8 7.6 7 4.4 11 4.2C12.9 4.1 14.8 4.6 16.5 4.5Z" stroke="currentColor" strokeLinejoin="round" />
    </svg>
  );
}
