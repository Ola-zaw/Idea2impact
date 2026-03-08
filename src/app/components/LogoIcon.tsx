export function LogoIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 270 50"
      className={className}
    >
      <g fill="currentColor">
        {/* Lewa część tekstu */}
        <text
          x="0"
          y="38"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontWeight="300"
          fontSize="36"
          letterSpacing="2"
        >
          ŁEBSKI L
        </text>

        {/* Ikona "O" - mocno przysunięta do "L" (z 162 na 142) */}
        <g
          transform="translate(142, 9)"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <circle cx="16" cy="16" r="15" />
          <path
            d="M 2 22 L 11 10 L 19 20 L 24 14 L 30 21"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <circle
            cx="11"
            cy="16"
            r="2.5"
            fill="currentColor"
            stroke="none"
          />
        </g>

        {/* Prawa część tekstu "KALS" - przysunięta do ikony (z 202 na 178) */}
        <text
          x="178"
          y="38"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontWeight="300"
          fontSize="36"
          letterSpacing="2"
        >
          KALS
        </text>
      </g>
    </svg>
  );
}