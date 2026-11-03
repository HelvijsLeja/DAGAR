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
    regNr: "40103579673",
    vatNr: "LV40103579673",
    legalAddress: "Silciema iela 15/2-40, Rīga, LV-1024, Latvija",
    founded: "2012",
  },
};

export interface Content {
  companyLegal: string;
  tagline: string;
  heroLead: string;
  nav: { home: string; about: string; services: string; faq: string; contact: string };
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
  process: {
    eyebrow: string;
    heading: string;
    steps: { title: string; text: string }[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    items: { q: string; a: string }[];
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
    tagline: "Enerģētikas un biznesa projektu vadība",
    heroLead:
      "Vadām enerģētikas un biznesa attīstības projektus visā pasaulē: no idejas un plāna līdz īstenošanai.",
    nav: { home: "Sākums", about: "Par mums", services: "Pakalpojumi", faq: "BUJ", contact: "Kontakti" },
    hero: { contact: "Apspriest projektu", services: "Skatīt pakalpojumus" },
    about: {
      lead: "Kopš 2012. gada",
      heading: "Par mums",
      intro:
        "SIA DAGAR kopš 2012. gada vada projektus un konsultē uzņēmumus visā pasaulē.",
      body: "Vadām projektus no idejas līdz rezultātam. Galvenā joma ir enerģētika: industriālās gāzes un atjaunojamā enerģētika. Strādājam arī biznesa attīstības, produktu attīstības un IKT projektos.",
      marketsLabel: "Līdzšinējā pieredze",
      markets: ["Latvija", "Polija", "Ukraina", "Lietuva", "Igaunija"],
    },
    services: {
      eyebrow: "Ko mēs darām",
      heading: "Pakalpojumi",
      lead: "Ko piedāvājam:",
      items: [
        {
          title: "Enerģētika",
          text: "Industriālo gāzu piegāde. Atjaunojamās enerģētikas projektu vadība.",
        },
        {
          title: "Biznesa attīstība",
          text: "Jaunu tirgu, partnerību un izaugsmes virzienu attīstība.",
        },
        {
          title: "Produktu attīstība",
          text: "Produktu dizains un izstrāde — no koncepcijas līdz tirgum.",
        },
        {
          title: "IKT",
          text: "Informācijas un komunikācijas tehnoloģiju risinājumi un projekti.",
        },
      ],
    },
    process: {
      eyebrow: "Kā mēs strādājam",
      heading: "Sadarbības gaita",
      steps: [
        { title: "Konsultācija", text: "Noskaidrojam jūsu vajadzības un mērķus." },
        { title: "Piedāvājums un plāns", text: "Sagatavojam risinājumu un darba plānu." },
        { title: "Īstenošana", text: "Vadām projektu un koordinējam izpildi." },
        { title: "Rezultāts un atbalsts", text: "Nododam rezultātu un sniedzam atbalstu." },
      ],
    },
    faq: {
      eyebrow: "Jautājumi un atbildes",
      heading: "Biežāk uzdotie jautājumi",
      items: [
        {
          q: "Ko dara SIA DAGAR?",
          a: "Sniedzam projektu vadības un konsultāciju pakalpojumus jomās: enerģētika, biznesa attīstība, produktu attīstība un IKT.",
        },
        {
          q: "Kādās nozarēs strādājat?",
          a: "Enerģētika (industriālo gāzu piegāde un atjaunojamā enerģētika), nekustamais īpašums, mazumtirdzniecība, ražošana un IKT.",
        },
        {
          q: "Kur jums ir pieredze?",
          a: "Projektus vadām visā pasaulē. Līdzšinējā pieredze ir Latvijā, Polijā, Ukrainā, Lietuvā un Igaunijā.",
        },
        {
          q: "Cik ilgi uzņēmums darbojas?",
          a: "Kopš 2012. gada, ar mītni Rīgā, Latvijā.",
        },
        {
          q: "Ko nozīmē pilna cikla projektu vadība?",
          a: "Vadām projektu no idejas un koncepcijas līdz īstenošanai un rezultātam.",
        },
        {
          q: "Vai strādājat atjaunojamās enerģētikas projektos?",
          a: "Jā. Enerģētika, tostarp atjaunojamā enerģētika, ir mūsu galvenā joma.",
        },
        {
          q: "Kā veidojas cena?",
          a: "Cena tiek noteikta individuāli — atkarībā no projekta apjoma, sarežģītības un vajadzībām. Sazinieties, un sagatavosim piedāvājumu.",
        },
        {
          q: "Kā uzsākt sadarbību?",
          a: "Uzrakstiet uz dagar@dagar.lv vai zvaniet +371 29185303. Īsi aprakstiet projektu, valsti un termiņu, un mēs atbildēsim ar nākamajiem soļiem.",
        },
        {
          q: "Kādā valodā notiek saziņa?",
          a: "Latviešu, angļu un krievu valodā.",
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
    companyLegal: "SIA DAGAR",
    tagline: "Energy and business project management",
    heroLead:
      "We run energy and business development projects worldwide: from idea and plan to delivery.",
    nav: { home: "Home", about: "About", services: "Services", faq: "FAQ", contact: "Contact" },
    hero: { contact: "Discuss your project", services: "View services" },
    about: {
      lead: "Since 2012",
      heading: "About us",
      intro:
        "Since 2012, SIA DAGAR has managed projects and advised companies worldwide.",
      body: "We take projects from idea to result. Our main focus is energy: industrial gases and renewable energy. We also work on business development, product development and ICT projects.",
      marketsLabel: "Experience to date",
      markets: ["Latvia", "Poland", "Ukraine", "Lithuania", "Estonia"],
    },
    services: {
      eyebrow: "What we do",
      heading: "Services",
      lead: "What we offer:",
      items: [
        {
          title: "Energy",
          text: "Industrial gas supply. Renewable energy project management.",
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
    process: {
      eyebrow: "How we work",
      heading: "Our process",
      steps: [
        { title: "Consultation", text: "We clarify your needs and goals." },
        { title: "Proposal & plan", text: "We prepare a solution and a work plan." },
        { title: "Execution", text: "We manage the project and coordinate delivery." },
        { title: "Result & support", text: "We hand over the result and provide support." },
      ],
    },
    faq: {
      eyebrow: "Questions & answers",
      heading: "Frequently asked questions",
      items: [
        {
          q: "What does DAGAR do?",
          a: "We provide project management and consulting services in energy, business development, product development and ICT.",
        },
        {
          q: "Which industries do you work in?",
          a: "Energy (industrial gas supply and renewable energy), real estate, retail, manufacturing and ICT.",
        },
        {
          q: "Where do you have experience?",
          a: "We run projects worldwide. Our experience to date covers Latvia, Poland, Ukraine, Lithuania and Estonia.",
        },
        {
          q: "How long has the company been operating?",
          a: "Since 2012, headquartered in Riga, Latvia.",
        },
        {
          q: "What does full-cycle project management mean?",
          a: "We manage a project from idea and concept through to implementation and result.",
        },
        {
          q: "Do you work on renewable energy projects?",
          a: "Yes. Energy, including renewable energy, is our main focus.",
        },
        {
          q: "How is pricing determined?",
          a: "Pricing is set individually, based on the project's scope, complexity and needs. Get in touch and we'll prepare a proposal.",
        },
        {
          q: "How do we start working together?",
          a: "Email dagar@dagar.lv or call +371 29185303. Briefly describe the project, country and timeline, and we'll reply with next steps.",
        },
        {
          q: "What languages do you work in?",
          a: "Latvian, English and Russian.",
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
    updated: "Pēdējoreiz atjaunināts: 2026. gada 5. oktobrī",
    intro:
      "Šī politika apraksta, kā SIA DAGAR apstrādā personas datus, kad apmeklējat vietni https://dagar.lv vai sazināties ar mums.",
    sections: [
      {
        heading: "1. Pārzinis",
        paragraphs: [
          "Personas datu pārzinis ir SIA DAGAR, reģ. Nr. 40103579673, juridiskā adrese: Silciema iela 15/2-40, Rīga, LV-1024, Latvija. Jautājumos par personas datiem rakstiet uz dagar@dagar.lv vai zvaniet +371 29185303.",
        ],
      },
      {
        heading: "2. Kādus datus apstrādājam",
        paragraphs: [
          "Mēs neizmantojam analītiku, reklāmas rīkus un profilēšanu. Vietnē nav kontaktformas.",
        ],
        list: [
          "Saziņas dati: ja rakstāt mums e-pastu vai zvanāt, mēs apstrādājam jūsu vārdu, e-pasta adresi vai tālruņa numuru, uzņēmumu (ja to norādāt) un ziņojuma saturu.",
          "Tehniskie dati: vietni mitina GitHub Pages. Kad atverat vietni, mitinātājs drošības nolūkos reģistrē jūsu IP adresi un pārlūka tehnisko informāciju. Mēs šos datus neredzam un neizmantojam statistikai.",
          "Valodas izvēle: ja izvēlaties vietnes valodu, šī izvēle tiek saglabāta jūsu pārlūkā (sk. 4. sadaļu).",
        ],
      },
      {
        heading: "3. Nolūki un tiesiskais pamats",
        paragraphs: [
          "Datu sniegšana ir brīvprātīga. Bez kontaktinformācijas mēs nevaram jums atbildēt. Automatizētus lēmumus, kas jūs būtiski ietekmētu, mēs nepieņemam.",
        ],
        list: [
          "Atbildēt uz jūsu pieprasījumu par mūsu pakalpojumiem un sagatavot piedāvājumu. Pamats: pasākumi pirms līguma noslēgšanas pēc jūsu pieprasījuma (VDAR 6. panta 1. punkta b) apakšpunkts).",
          "Citu saraksti un darījumu saziņu ar uzņēmumu pārstāvjiem uzturam, pamatojoties uz mūsu leģitīmo interesi atbildēt uz vēstulēm un uzturēt darījumu attiecības (VDAR 6. panta 1. punkta f) apakšpunkts).",
          "Nodrošināt vietnes darbību un drošību. Pamats: leģitīmā interese (VDAR 6. panta 1. punkta f) apakšpunkts).",
        ],
      },
      {
        heading: "4. Sīkdatnes un pārlūka krātuve",
        paragraphs: [
          "Vietne neizmanto sīkdatnes. Jūsu pārlūka lokālajā krātuvē (localStorage) tiek saglabāts tikai viens ieraksts „dagar-lang“ ar jūsu izvēlēto valodu, lai nākamajā apmeklējumā to atcerētos. Šis ieraksts netiek nosūtīts mums vai trešajām personām. To var dzēst pārlūka iestatījumos.",
        ],
      },
      {
        heading: "5. Cik ilgi glabājam datus",
        list: [
          "E-pasta saraksti glabājam 2 gadus pēc pēdējās saziņas.",
          "Ja noslēdzam līgumu, saraksti glabājam līguma darbības laikā un pēc tam tik ilgi, cik prasa normatīvie akti (piemēram, grāmatvedības prasības) vai cik vajadzīgs iespējamu prasījumu aizstāvībai.",
          "Tehniskos žurnālus glabā GitHub saskaņā ar saviem noteikumiem.",
          "Valodas izvēle paliek jūsu pārlūkā, līdz to izdzēšat.",
        ],
      },
      {
        heading: "6. Saņēmēji un nodošana ārpus ES/EEZ",
        paragraphs: [
          "Datus nododam tikai pakalpojumu sniedzējiem, kas nepieciešami vietnes un saziņas darbībai. Personas datus mēs nepārdodam. Nodošana uz ASV notiek, pamatojoties uz Eiropas Komisijas lēmumu par ES–ASV datu privātuma regulējumu (Īstenošanas lēmums (ES) 2023/1795) un/vai standarta līguma klauzulām.",
        ],
        list: [
          "GitHub, Inc. (ASV): vietnes mitināšana.",
        ],
      },
      {
        heading: "7. Jūsu tiesības",
        paragraphs: [
          "Jums ir tiesības piekļūt saviem datiem, labot tos, dzēst tos, ierobežot apstrādi un (ja piemērojams) saņemt datus pārnesamā formātā. Tiesības iebilst: jūs jebkurā laikā varat iebilst pret apstrādi, kas balstīta uz mūsu leģitīmajām interesēm. Pieprasījumus sūtiet uz dagar@dagar.lv; atbildēsim viena mēneša laikā. Jums ir arī tiesības iesniegt sūdzību Datu valsts inspekcijai (www.dvi.gov.lv).",
        ],
      },
      {
        heading: "8. Izmaiņas",
        paragraphs: [
          "Politiku atjaunināsim, ja mainīsies datu apstrāde. Aktuālā versija un tās datums vienmēr ir šajā lapā.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: 5 October 2026",
    intro:
      "This policy explains how SIA DAGAR processes personal data when you visit https://dagar.lv or contact us.",
    sections: [
      {
        heading: "1. Controller",
        paragraphs: [
          "The controller is SIA DAGAR, registration No. 40103579673, registered address: Silciema iela 15/2-40, Riga, LV-1024, Latvia. For questions about personal data, email dagar@dagar.lv or call +371 29185303.",
        ],
      },
      {
        heading: "2. What data we process",
        paragraphs: [
          "We do not use analytics, advertising tools or profiling. The website has no contact form.",
        ],
        list: [
          "Contact data: if you email or call us, we process your name, email address or phone number, company (if provided) and the content of your message.",
          "Technical data: the website is hosted on GitHub Pages. When you open the site, the host logs your IP address and technical browser information for security purposes. We do not access these data or use them for statistics.",
          "Language choice: if you choose a website language, your choice is stored in your browser (see section 4).",
        ],
      },
      {
        heading: "3. Purposes and legal basis",
        paragraphs: [
          "Providing data is voluntary. Without contact details we cannot reply to you. We do not make automated decisions that significantly affect you.",
        ],
        list: [
          "To respond to your enquiry about our services and prepare an offer. Basis: steps taken at your request prior to entering into a contract (Article 6(1)(b) GDPR).",
          "Other correspondence and business communication with company representatives are based on our legitimate interest in replying and maintaining business relations (Article 6(1)(f) GDPR).",
          "To operate and secure the website. Basis: legitimate interest (Article 6(1)(f) GDPR).",
        ],
      },
      {
        heading: "4. Cookies and browser storage",
        paragraphs: [
          "The website does not use cookies. Only one entry, “dagar-lang”, containing your chosen language, is saved in your browser’s local storage (localStorage) so the site remembers it on your next visit. It is not sent to us or to third parties. You can delete it in your browser settings.",
        ],
      },
      {
        heading: "5. How long we keep data",
        list: [
          "We keep email correspondence for 2 years after our last contact.",
          "If we enter into a contract, we keep correspondence for the term of the contract and afterwards for as long as required by law (e.g. accounting requirements) or needed to defend possible claims.",
          "Technical logs are retained by GitHub under its own terms.",
          "Your language choice stays in your browser until you delete it.",
        ],
      },
      {
        heading: "6. Recipients and transfers outside the EU/EEA",
        paragraphs: [
          "We share data only with service providers needed to run the website and communications. We do not sell personal data. Transfers to the USA rely on the European Commission’s adequacy decision for the EU-U.S. Data Privacy Framework (Implementing Decision (EU) 2023/1795) and/or standard contractual clauses.",
        ],
        list: [
          "GitHub, Inc. (USA): website hosting.",
        ],
      },
      {
        heading: "7. Your rights",
        paragraphs: [
          "You have the right to access your data, rectify it, erase it, restrict processing and (where applicable) receive your data in a portable format. Right to object: you may object at any time to processing based on our legitimate interests. Send requests to dagar@dagar.lv; we will reply within one month. You also have the right to lodge a complaint with the Data State Inspectorate of Latvia (www.dvi.gov.lv).",
        ],
      },
      {
        heading: "8. Changes",
        paragraphs: [
          "We will update this policy if our processing changes. The current version and its date are always available on this page.",
        ],
      },
    ],
  },
};
