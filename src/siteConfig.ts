// ─────────────────────────────────────────────────────────────
//  SIA DAGAR — saturs divās valodās (LV / EN)
//  Rediģējiet tekstu abās valodās zemāk.
// ─────────────────────────────────────────────────────────────

export type Lang = "lv" | "en";

// Valodas neatkarīgi dati (kopīgi abām valodām)
export const common = {
  companyName: "DAGAR",
  marketsCode: "LV · PL · UA · LT · EE",
  contact: {
    person: "Helvijs Leja",
    phone: "+371 29185303",
    email: "dagar@dagar.lv",
  },
};

export interface Content {
  companyLegal: string;
  tagline: string;
  heroLead: string;
  nav: { home: string; about: string; services: string; contact: string };
  hero: { contact: string; services: string };
  about: {
    lead: string;
    heading: string;
    intro: string;
    body: string;
    marketsLabel: string;
    markets: string[];
  };
  services: {
    eyebrow: string;
    heading: string;
    lead: string;
    items: { title: string; text: string }[];
  };
  footer: {
    contact: string;
    phone: string;
    email: string;
    rights: string;
  };
}

export const translations: Record<Lang, Content> = {
  lv: {
    companyLegal: "SIA DAGAR",
    tagline: "Projektu vadība un konsultācijas",
    heroLead:
      "Pilna cikla ekspertīze projektu vadībā, biznesa attīstībā un enerģētikā — no idejas līdz rezultātam.",
    nav: { home: "Sākums", about: "Par mums", services: "Pakalpojumi", contact: "Kontakti" },
    hero: { contact: "Sazināties", services: "Pakalpojumi" },
    about: {
      lead: "Kopš 2012. gada",
      heading: "Par mums",
      intro:
        "DAGAR SIA ar mītni Rīgā, Latvijā, sniedz projektu vadības un konsultāciju pakalpojumus dažādās nozarēs un starptautiskos tirgos.",
      body: "Mēs nodrošinām pilna cikla ekspertīzi, palīdzot klientiem īstenot projektus droši, savlaicīgi un ar mērķtiecīgu pieeju katrā nozarē. Īpaša uzmanība tiek pievērsta enerģētikas nozarei, tostarp atjaunojamai un zaļajai enerģijai.",
      marketsLabel: "Tirgi",
      markets: ["Latvija", "Polija", "Ukraina", "Lietuva", "Igaunija"],
    },
    services: {
      eyebrow: "Ko mēs darām",
      heading: "Pakalpojumi",
      lead: "Pilna cikla ekspertīze šādās jomās:",
      items: [
        {
          title: "Projektu vadība",
          text: "Nekustamais īpašums, mazumtirdzniecība, būvniecība, atjaunojamā un zaļā enerģija, ražošana.",
        },
        {
          title: "Biznesa attīstība",
          text: "Nekustamais īpašums, mazumtirdzniecība, atjaunojamā enerģija, ražošana, rūpnieciskās gāzes.",
        },
        {
          title: "Produktu attīstība",
          text: "Mazumtirdzniecība un ražošana — no koncepcijas līdz tirgum.",
        },
        {
          title: "Tirgus izpēte",
          text: "Primārā un sekundārā tirgus izpēte lēmumu pieņemšanas atbalstam.",
        },
        {
          title: "Enerģētika",
          text: "Atjaunojamā un zaļā enerģija — projektu izstrāde, attīstība un vadība enerģētikas nozarē.",
        },
      ],
    },
    footer: {
      contact: "Kontakti",
      phone: "Tālr.",
      email: "E-pasts",
      rights: "Visas tiesības aizsargātas.",
    },
  },

  en: {
    companyLegal: "DAGAR Ltd",
    tagline: "Project management & consulting",
    heroLead:
      "Full-cycle expertise in project management, business development and energy — from idea to result.",
    nav: { home: "Home", about: "About", services: "Services", contact: "Contact" },
    hero: { contact: "Get in touch", services: "Services" },
    about: {
      lead: "Since 2012",
      heading: "About us",
      intro:
        "DAGAR Ltd, headquartered in Riga, Latvia, provides project management and consulting services across diverse industries and international markets.",
      body: "We deliver full-cycle expertise, helping clients realise projects reliably, on time and with a focused approach in every industry. Special attention is given to the energy sector, including renewable and green energy.",
      marketsLabel: "Markets",
      markets: ["Latvia", "Poland", "Ukraine", "Lithuania", "Estonia"],
    },
    services: {
      eyebrow: "What we do",
      heading: "Services",
      lead: "Full-cycle expertise in the following areas:",
      items: [
        {
          title: "Project Management",
          text: "Real estate, retail, construction, renewable and green energy, manufacturing.",
        },
        {
          title: "Business Development",
          text: "Real estate, retail, renewable energy, manufacturing, industrial gases.",
        },
        {
          title: "Product Development",
          text: "Retail and manufacturing — from concept to market.",
        },
        {
          title: "Market Research",
          text: "Primary and secondary market research to support decision-making.",
        },
        {
          title: "Energy",
          text: "Renewable and green energy — project design, development and management in the energy sector.",
        },
      ],
    },
    footer: {
      contact: "Contact",
      phone: "Phone",
      email: "Email",
      rights: "All rights reserved.",
    },
  },
};
