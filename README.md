# SIA DAGAR — mājas lapa

Uzņēmuma mājas lapa (React + Vite + Tailwind CSS).

## Palaišana lokāli

```bash
npm install
npm run dev
```

Atver `http://localhost:5173`.

## Būvēšana produkcijai

```bash
npm run build      # rezultāts nonāk dist/ mapē
npm run preview    # priekšskatījums lokāli
```

## Satura rediģēšana

Viss teksts un kontaktinformācija atrodas vienā failā: [`src/siteConfig.ts`](src/siteConfig.ts).
Rindas ar `TODO` jāaizstāj ar īstajiem uzņēmuma datiem (apraksts, e-pasts, telefons, reģ. nr., adrese).

## Struktūra

- `src/components/Navbar.tsx` — augšējā navigācija
- `src/components/Hero.tsx` — sākuma sekcija
- `src/components/About.tsx` — "Par mums" sekcija
- `src/components/Footer.tsx` — kājene ar kontaktiem
- `src/siteConfig.ts` — viss teksts un dati vienuviet

## Fonti

Inter un Cormorant Garamond tiek mitināti pašā vietnē (`public/fonts/`, `@font-face` failā `src/index.css`), bez Google Fonts pieprasījumiem.
Tie ir mainīga svara woff2 faili (400–700) ar apakškopām latin un latin-ext. Avots: Google Fonts. Abiem fontiem licence ir SIL Open Font License 1.1, teksts failos `public/fonts/OFL-Inter.txt` un `public/fonts/OFL-CormorantGaramond.txt`.
Ja vietnē parādīsies kirilica (RU), jāpievieno arī apakškopas `cyrillic` un `cyrillic-ext`.
