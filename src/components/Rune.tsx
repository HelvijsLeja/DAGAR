interface RuneProps {
  className?: string;
  strokeWidth?: number;
  title?: string;
}

/**
 * DAGAR zīmola simbols — Dagaz (ᛞ) rūna, atveidota kā "bowtie" (⋈),
 * tāpat kā uzņēmuma vizītkartē: divi trīsstūri, kas satiekas centrā.
 */
export default function Rune({ className, strokeWidth = 7, title = "DAGAR rūna" }: RuneProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>{title}</title>
      {/* Kreisā mala */}
      <line x1="18" y1="18" x2="18" y2="82" />
      {/* Labā mala */}
      <line x1="82" y1="18" x2="82" y2="82" />
      {/* Krustojošās diagonāles → bowtie forma */}
      <line x1="18" y1="18" x2="82" y2="82" />
      <line x1="82" y1="18" x2="18" y2="82" />
    </svg>
  );
}
