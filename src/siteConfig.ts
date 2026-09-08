// ─────────────────────────────────────────────────────────────
//  SIA DAGAR — saturs divās valodās (LV / EN)
//  Rediģējiet tekstu abās valodās zemāk.
// ─────────────────────────────────────────────────────────────

export type Lang = "lv" | "en";

// Valodas neatkarīgi dati (kopīgi abām valodām)
export const common = {
  companyName: "DAGAR",
  marketsCode: "LV · PL · UA · LT · EE",
  // Vietnes adrese (izmanto SEO / canonical / sitemap). Nomainiet, ja domēns cits.
  siteUrl: "https://dagar.lv",
  contact: {
    phone: "+371 29185303",
    email: "dagar@dagar.lv",
  },
  // Juridiskie dati (izmanto privātuma politikā un strukturētajos datos)
  company: {
    legalName: "SIA DAGAR",
    regNr: "Reģ. Nr. 40103579673",
    vatNr: "LV40103579673",
    legalAddress: "Rīga, Latvija",
    founded: "2012",
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
    privacy: string;
    backHome: string;
  };
}

export interface PrivacySection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface PrivacyContent {
  title: string;
  updated: string;
  intro: string;
  sections: PrivacySection[];
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
      lead: "Projektu vadība un konsultācijas šādās jomās:",
      items: [
        {
          title: "Enerģētika",
          text: "Industriālo gāzu piegāde un atjaunojamā enerģētika — biogāze un biometāns.",
        },
        {
          title: "Biznesa attīstība",
          text: "Jaunu tirgu, partnerību un izaugsmes virzienu attīstība.",
        },
        {
          title: "Produktu attīstība un izstrāde",
          text: "Produktu izstrāde un attīstība — no koncepcijas līdz tirgum.",
        },
        {
          title: "IKT",
          text: "Informācijas un komunikācijas tehnoloģiju risinājumi un projekti.",
        },
      ],
    },
    footer: {
      contact: "Kontakti",
      phone: "Tālr.",
      email: "E-pasts",
      rights: "Visas tiesības aizsargātas.",
      privacy: "Privātuma politika",
      backHome: "Atpakaļ uz sākumu",
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
      lead: "Project management and consulting in the following areas:",
      items: [
        {
          title: "Energy",
          text: "Industrial gas supply and renewable energy — biogas and biomethane.",
        },
        {
          title: "Business Development",
          text: "Developing new markets, partnerships and growth directions.",
        },
        {
          title: "Product Development",
          text: "Product design and development — from concept to market.",
        },
        {
          title: "ICT",
          text: "Information and communication technology solutions and projects.",
        },
      ],
    },
    footer: {
      contact: "Contact",
      phone: "Phone",
      email: "Email",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      backHome: "Back to home",
    },
  },
};

// ─────────────────────────────────────────────────────────────
//  Privātuma politika (LV / EN)
// ─────────────────────────────────────────────────────────────
export const privacyContent: Record<Lang, PrivacyContent> = {
  lv: {
    title: "Privātuma politika",
    updated: "Pēdējoreiz atjaunināts: 2026. gada 8. septembrī",
    intro:
      `Šī privātuma politika apraksta, kā ${common.company.legalName} apstrādā personas datus, kad izmantojat mūsu vietni ${common.siteUrl} un sazināties ar mums. Mēs cienām jūsu privātumu un apstrādājam datus saskaņā ar Vispārīgo datu aizsardzības regulu (VDAR).`,
    sections: [
      {
        heading: "1. Pārzinis un kontaktinformācija",
        paragraphs: [
          `Datu pārzinis: ${common.company.legalName}, ${common.company.regNr}, ${common.company.legalAddress}.`,
          `Jautājumos par personas datu apstrādi rakstiet uz: ${common.contact.email}.`,
        ],
      },
      {
        heading: "2. Kādus datus mēs apstrādājam",
        paragraphs: ["Atkarībā no tā, kā izmantojat vietni, mēs varam apstrādāt:"],
        list: [
          "Saziņas dati (kontaktforma vai e-pasts): vārds, e-pasta adrese, tālruņa numurs un ziņojuma saturs.",
          "Tehniskie dati (sīkdatnes un analītika): IP adrese, ierīces un pārlūka informācija, vietnes lietošanas statistika.",
        ],
      },
      {
        heading: "3. Apstrādes nolūki un tiesiskais pamats",
        list: [
          "Atbildēt uz jūsu pieprasījumiem un nodrošināt saziņu — pamats: jūsu piekrišana un mūsu leģitīmās intereses.",
          "Vietnes darbības nodrošināšana un uzlabošana — pamats: mūsu leģitīmās intereses.",
          "Analītika un sīkdatnes — pamats: jūsu piekrišana.",
        ],
      },
      {
        heading: "4. Sīkdatnes",
        paragraphs: [
          "Vietne var izmantot nepieciešamās sīkdatnes (vietnes pamatdarbībai) un analītikas sīkdatnes (lietošanas statistikai). Analītikas sīkdatnes tiek izmantotas tikai ar jūsu piekrišanu. Sīkdatnes var pārvaldīt un dzēst pārlūkprogrammas iestatījumos.",
        ],
      },
      {
        heading: "5. Datu glabāšana",
        paragraphs: [
          "Personas datus glabājam tikai tik ilgi, cik nepieciešams attiecīgā nolūka sasniegšanai vai normatīvo aktu prasību izpildei, pēc tam tie tiek dzēsti vai anonimizēti.",
        ],
      },
      {
        heading: "6. Datu saņēmēji un nodošana",
        paragraphs: [
          "Datus varam nodot uzticamiem pakalpojumu sniedzējiem (piemēram, vietnes uzturēšanai un analītikas rīkiem), kuri darbojas mūsu uzdevumā. Dati tiek apstrādāti ES/EEZ teritorijā vai ar atbilstošām aizsardzības garantijām. Mēs nepārdodam jūsu personas datus.",
        ],
      },
      {
        heading: "7. Jūsu tiesības",
        paragraphs: ["Saskaņā ar VDAR jums ir tiesības:"],
        list: [
          "Piekļūt saviem datiem un saņemt to kopiju;",
          "Labot neprecīzus datus;",
          "Dzēst datus (“tikt aizmirstam”);",
          "Ierobežot vai iebilst pret apstrādi;",
          "Uz datu pārnesamību;",
          "Atsaukt piekrišanu jebkurā laikā;",
          "Iesniegt sūdzību Datu valsts inspekcijai (www.dvi.gov.lv).",
        ],
      },
      {
        heading: "8. Izmaiņas politikā",
        paragraphs: [
          "Mēs varam periodiski atjaunināt šo privātuma politiku. Aktuālā versija vienmēr būs pieejama šajā lapā ar norādīto atjaunināšanas datumu.",
        ],
      },
    ],
  },

  en: {
    title: "Privacy Policy",
    updated: "Last updated: 8 September 2026",
    intro:
      `This privacy policy describes how ${common.company.legalName} processes personal data when you use our website ${common.siteUrl} and contact us. We respect your privacy and process data in accordance with the General Data Protection Regulation (GDPR).`,
    sections: [
      {
        heading: "1. Controller and contact information",
        paragraphs: [
          `Data controller: ${common.company.legalName}, ${common.company.regNr}, ${common.company.legalAddress}.`,
          `For questions about the processing of personal data, write to: ${common.contact.email}.`,
        ],
      },
      {
        heading: "2. What data we process",
        paragraphs: ["Depending on how you use the website, we may process:"],
        list: [
          "Contact data (contact form or email): name, email address, phone number and message content.",
          "Technical data (cookies and analytics): IP address, device and browser information, website usage statistics.",
        ],
      },
      {
        heading: "3. Purposes and legal basis",
        list: [
          "To respond to your requests and enable communication — basis: your consent and our legitimate interests.",
          "To operate and improve the website — basis: our legitimate interests.",
          "Analytics and cookies — basis: your consent.",
        ],
      },
      {
        heading: "4. Cookies",
        paragraphs: [
          "The website may use necessary cookies (for core functionality) and analytics cookies (for usage statistics). Analytics cookies are used only with your consent. You can manage and delete cookies in your browser settings.",
        ],
      },
      {
        heading: "5. Data retention",
        paragraphs: [
          "We keep personal data only for as long as necessary to achieve the relevant purpose or to comply with legal requirements, after which it is deleted or anonymised.",
        ],
      },
      {
        heading: "6. Recipients and transfers",
        paragraphs: [
          "We may share data with trusted service providers (for example, website hosting and analytics tools) acting on our behalf. Data is processed within the EU/EEA or with appropriate safeguards. We do not sell your personal data.",
        ],
      },
      {
        heading: "7. Your rights",
        paragraphs: ["Under the GDPR you have the right to:"],
        list: [
          "Access your data and receive a copy;",
          "Rectify inaccurate data;",
          "Erase data (“right to be forgotten”);",
          "Restrict or object to processing;",
          "Data portability;",
          "Withdraw consent at any time;",
          "Lodge a complaint with the Data State Inspectorate of Latvia (www.dvi.gov.lv).",
        ],
      },
      {
        heading: "8. Changes to this policy",
        paragraphs: [
          "We may update this privacy policy from time to time. The current version will always be available on this page with the update date indicated.",
        ],
      },
    ],
  },
};
