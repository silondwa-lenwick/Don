interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

// A tiny, dependency-free icon set drawn as inline SVG. Inline paths keep the
// bundle small and work offline with no icon-font download.
const PATHS: Record<string, JSX.Element> = {
  home: <path d="M3 11.5 12 4l9 7.5M5 10v10h5v-6h4v6h5V10" />,
  learn: (
    <>
      <path d="M4 5h16v13H4z" />
      <path d="M12 5v13M8 9h1M8 12h1M15 9h1M15 12h1" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v11H8l-4 4z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
  connect: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M7.7 7.7 10.5 16M16.3 7.7 13.5 16M8 6h8" />
    </>
  ),
  progress: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </>
  ),
  spark: (
    <path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />
  ),
  phone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  rise: (
    <>
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M21 7v5M21 7h-5" />
    </>
  ),
  brain: (
    <>
      <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5 3 3 0 0 0 2 4 3 3 0 0 0 5 1V4.5A2 2 0 0 0 9 4Z" />
      <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5 3 3 0 0 1-2 4 3 3 0 0 1-5 1" />
    </>
  ),
  flame: (
    <path d="M12 3c1 3-2 4-2 7a4 4 0 0 0 8 0c0-2-1-3-2-4 0 2-1 3-2 3 .5-2-1-5-0-6Z" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </>
  ),
  check: <path d="M4 12l5 5L20 6" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  book: (
    <>
      <path d="M4 5a2 2 0 0 1 2-2h6v18H6a2 2 0 0 1-2-2z" />
      <path d="M20 5a2 2 0 0 0-2-2h-6v18h6a2 2 0 0 0 2-2z" />
    </>
  ),
  wifi: (
    <>
      <path d="M2 8.5a15 15 0 0 1 20 0M5 12a10 10 0 0 1 14 0M8 15.5a5 5 0 0 1 8 0" />
      <circle cx="12" cy="19" r="1" />
    </>
  ),
  shield: <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z" />,
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 6a3 3 0 0 1 0 6M15 20a6 6 0 0 1 6-6" />
    </>
  ),
  offline: (
    <>
      <path d="M2 8.5a15 15 0 0 1 20 0M5 12a10 10 0 0 1 14 0M8 15.5a5 5 0 0 1 8 0" />
      <path d="M3 3l18 18" />
    </>
  ),
};

export default function Icon({ name, size = 24, className }: IconProps) {
  const content = PATHS[name] ?? PATHS.spark;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}
