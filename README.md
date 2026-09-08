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
