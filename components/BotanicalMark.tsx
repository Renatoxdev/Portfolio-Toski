export function BotanicalMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`botanical ${className}`}
      width="54"
      height="36"
      viewBox="0 0 64 42"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 36C22 27 35 20 55 6"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <g fill="currentColor">
        <path d="M21 28C13 23 17 14 24 12C26 18 25 24 21 28Z" />
        <path d="M29 23C24 17 29 8 35 7C36 14 33 20 29 23Z" />
        <path d="M39 17C36 10 42 3 48 2C48 9 44 14 39 17Z" />
        <path d="M47 12C48 5 55 2 61 2C58 8 54 11 47 12Z" />
        <path d="M21 28C26 26 33 29 37 34C30 36 24 33 21 28Z" />
        <path d="M31 22C36 20 43 22 47 27C40 30 34 26 31 22Z" />
        <path d="M41 16C47 14 53 15 57 19C52 22 45 21 41 16Z" />
      </g>
    </svg>
  );
}
