import { Head } from "vite-react-ssg";

const ORIGIN = "https://dagar.lv";

/** Katras lapas canonical, hreflang (tikai lv; EN nav sava URL) un og:url. */
export default function PageUrl({ path }: { path: string }) {
  const url = ORIGIN + path;
  return (
    <Head>
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="lv" href={url} />
      <meta property="og:url" content={url} />
    </Head>
  );
}
