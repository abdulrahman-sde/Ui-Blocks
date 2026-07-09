export function ChevronDown({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUp({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M9 15V3M9 3L4 8M9 3L14 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Star({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M7 0L9.09 4.69L14 5.18L10.5 8.59L11.18 14L7 11.69L2.82 14L3.5 8.59L0 5.18L4.91 4.69L7 0Z" fill="currentColor" />
    </svg>
  );
}

export function AISparkle({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M7 0C7 0 8.5 3.5 10.5 5.5C12.5 7.5 14 9 14 9C14 9 10.5 10.5 8.5 12.5C6.5 14.5 7 14 7 14C7 14 5.5 10.5 3.5 8.5C1.5 6.5 0 5 0 5C0 5 3.5 3.5 5.5 1.5C7.5 -0.5 7 0 7 0Z" fill="currentColor" />
    </svg>
  );
}

export function Paperclip({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M7.5 4L3.5 8C2.67 8.83 2.67 10.17 3.5 11C4.33 11.83 5.67 11.83 6.5 11L11 6.5C12.33 5.17 12.33 3.17 11 1.84C9.67 0.505 7.67 0.505 6.34 1.84L2.34 5.84" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Microphone({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <rect x="5" y="0.5" width="4" height="7" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2.5 6.5C2.5 9 4.5 11 7 11C9.5 11 11.5 9 11.5 6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M7 11V13.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function SearchIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9.5 9.5L12.5 12.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
