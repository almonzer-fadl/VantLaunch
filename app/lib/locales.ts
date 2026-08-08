export const GULF_LOCALES = ["sa", "ae", "qa", "kw", "bh", "om"] as const;
export type Locale =
  | (typeof GULF_LOCALES)[number]
  | "us" | "uk" | "ca" | "au" | "nz" | "sg"
  | "ie" | "de" | "nl" | "se" | "no" | "dk"
  | "tr" | "my"
  | "global";

export function isRTL(locale: Locale): boolean {
  return (GULF_LOCALES as readonly string[]).includes(locale);
}

/* ------------------------------------------------------------------ */
/*  Translation type                                                    */
/* ------------------------------------------------------------------ */

export interface Translations {
  hero: {
    heading1: string;
    heading2: string;
    subheadline: string;
    cta1: string;
    cta2: string;
  };
  problem: {
    tag: string;
    heading: string;
    sub: string;
    items: string[];
    tagline: string;
  };
  systems: {
    tag: string;
    heading: string;
    sub: string;
    items: { title: string; description: string }[];
  };
  engagement: {
    tag: string;
    heading: string;
    sub: string;
    cta: string;
    flowTitle: string;
    flowText: string;
  };
  process: {
    tag: string;
    heading: string;
    steps: string[];
  };
  builtFor: {
    tag: string;
    heading: string;
    sub: string;
  };
  work: {
    tag: string;
    heading: string;
    viewAll: string;
  };
  cta: {
    heading: string;
    sub: string;
    button: string;
    subtext: string;
    points: string[];
  };
  navbar: {
    solutions: string;
    engagements: string;
    process: string;
    faq: string;
    cta: string;
  };
  footer: {
    tagline: string;
  };
  form: {
    name: string; email: string; company: string; engagement: string;
    timeline: string; message: string; submit: string;
    sending: string; received: string; receivedSub: string;
    sendAnother: string; selectEngagement: string; notSure: string;
    timelineOptions: string[];
    engagementOptions: string[];
  };
}

/* ------------------------------------------------------------------ */
/*  Dictionary                                                         */
/* ------------------------------------------------------------------ */

const EN_T: Translations = {
  hero: {
    heading1: "Custom Internal Business Systems",
    heading2: "for Growing Service Businesses",
    subheadline: "Replace scattered tools, repetitive work, and disconnected workflows with one system built around the way your business operates.",
    cta1: "Book Discovery Call",
    cta2: "View Engagement Options",
  },
  problem: {
    tag: "The Problem",
    heading: "Growing businesses outgrow their tools",
    sub: "As your service business grows, operational complexity grows with it. What started as manageable quickly becomes a drain on time, visibility, and profitability.",
    items: [
      "Information is scattered across multiple platforms.",
      "Teams waste hours on repetitive manual work.",
      "Reporting takes too long and is never up to date.",
      "Client communication is inconsistent and hard to track.",
      "Leadership lacks real-time visibility into operations.",
      "Operations become harder and more chaotic as the business grows.",
    ],
    tagline: "We build software around your workflow — not the other way around.",
  },
  systems: {
    tag: "Systems We Build",
    heading: "Custom systems designed around your operations",
    sub: "Every business operates differently. These are examples of the internal systems we typically build — each one designed to solve real operational problems, not sell you a feature list.",
    items: [
      { title: "Executive Operations Hubs", description: "A single pane of glass for leadership. See every metric, every department, and every decision point in one place — in real time." },
      { title: "Team Management Platforms", description: "Give each team their own workspace with role-based access, task tracking, and performance visibility — without the noise." },
      { title: "Client Portals", description: "Give clients complete visibility into their projects, approvals, and communications — reducing status meetings and endless email chains." },
      { title: "Internal CRM Systems", description: "Track clients, deals, and relationships in a system designed around your sales process — not a generic template." },
      { title: "Workflow Automation", description: "Eliminate repetitive manual work by connecting your tools and automating the processes that currently consume hours every week." },
      { title: "Reporting Systems", description: "Automated reports that pull from every data source and arrive where your team needs them — dashboards, inboxes, or Slack." },
      { title: "Approval Systems", description: "Custom approval workflows that match how your business actually operates — from purchase orders to client deliverables." },
      { title: "Mobile Companion Apps", description: "Give owners and leadership teams visibility and approval power from anywhere, without logging into a desktop." },
      { title: "Business Operating Systems", description: "A complete internal platform unifying your operations, client management, reporting, and automation into one owned system." },
    ],
  },
  engagement: {
    tag: "Where To Start",
    heading: "Choose how we begin",
    sub: "Every engagement is custom-built around your operations. Pick where you want to start — we handle the rest.",
    cta: "Book Discovery Call",
    flowTitle: "After your discovery call, we send a tailored proposal or checkout link.",
    flowText: "Payment → Onboarding questionnaire → Google Drive folder → Kickoff.",
  },
  process: {
    tag: "Our Process",
    heading: "From discovery to continuous improvement",
    steps: ["Discovery", "Design", "Build", "Launch", "Improve"],
  },
  builtFor: {
    tag: "Built For",
    heading: "Built around how you operate",
    sub: "Select your industry and see how VantLaunch adapts to your workflows.",
  },
  work: {
    tag: "Our Work",
    heading: "Real systems. Measurable outcomes.",
    viewAll: "View all case studies",
  },
  cta: {
    heading: "Imagine opening one dashboard instead of ten tabs.",
    sub: "Your operations deserve better than scattered tools and manual reports. Book a free discovery call — we will map your operations and show you what is possible.",
    button: "Book Discovery Call",
    subtext: "No obligation. No pressure. Just clarity.",
    points: ["We map your operations", "We identify bottlenecks", "We recommend the right system"],
  },
  navbar: { solutions: "Solutions", engagements: "Engagements", process: "Process", faq: "FAQ", cta: "Book a Call" },
  footer: { tagline: "Custom internal business systems for growing service businesses. Built around your workflow, delivered in weeks." },
  form: {
    name: "Your name", email: "Email address", company: "Company", engagement: "Engagement",
    timeline: "Timeline", message: "Tell us about your business and what you need",
    submit: "Send inquiry", sending: "Sending...",
    received: "Request received.", receivedSub: "We will review the details and follow up within 24 hours.",
    sendAnother: "Send another request", selectEngagement: "Select engagement", notSure: "Not sure yet",
    timelineOptions: ["Expected timeline", "ASAP", "Within 1 month", "This quarter", "Just exploring"],
    engagementOptions: ["Select engagement", "Starter", "Pro", "Mobile", "Enterprise", "Not sure yet"],
  },
};

const AR_T: Translations = {
  hero: {
    heading1: "أنظمة أعمال داخلية مخصصة",
    heading2: "للشركات الخدمية المتنامية",
    subheadline: "استبدل الأدوات المتفرقة والعمل المتكرر والعمليات غير المتصلة بنظام واحد مبني حول طريقة عمل شركتك.",
    cta1: "احجز مكالمة اكتشاف",
    cta2: "تصفح خيارات التعاقد",
  },
  problem: {
    tag: "المشكلة",
    heading: "الشركات المتنامية تتجاوز أدواتها",
    sub: "مع نمو أعمالك الخدمية، يزداد التعقيد التشغيلي. ما بدأ سهلاً يصبح سريعاً استنزافاً للوقت والرؤية والربحية.",
    items: [
      "المعلومات متناثرة عبر منصات متعددة.",
      "الفرق تهدر ساعات في الأعمال اليدوية المتكررة.",
      "التقارير تستغرق وقتاً طويلاً ولا تكون محدثة.",
      "التواصل مع العملاء غير متناسق ويصعب تتبعه.",
      "الإدارة تفتقر إلى رؤية فورية للعمليات.",
      "العمليات تصبح أصعب وأكثر فوضى مع نمو الشركة.",
    ],
    tagline: "نبني البرمجيات حول سير عملك — وليس العكس.",
  },
  systems: {
    tag: "الأنظمة التي نبنيها",
    heading: "أنظمة مخصصة مصممة حول عملياتك",
    sub: "كل شركة تعمل بشكل مختلف. هذه أمثلة على الأنظمة الداخلية التي نبنيها عادة — كل منها مصمم لحل مشاكل تشغيلية حقيقية.",
    items: [
      { title: "مراكز العمليات التنفيذية", description: "لوحة واحدة للقيادة. شاهد كل مؤشر وكل قسم وكل نقطة قرار في مكان واحد — فورياً." },
      { title: "منصات إدارة الفرق", description: "امنح كل فريق مساحة عمل خاصة به مع صلاحيات وتتبع مهام ورؤية أداء — بدون ضوضاء." },
      { title: "بوابات العملاء", description: "امنح العملاء رؤية كاملة لمشاريعهم وموافقاتهم وتواصلهم — مما يقلل الاجتماعات وسلاسل البريد." },
      { title: "أنظمة إدارة علاقات العملاء", description: "تتبع العملاء والصفقات والعلاقات في نظام مصمم حول عملية مبيعاتك — وليس قالباً عاماً." },
      { title: "أتمتة سير العمل", description: "تخلص من الأعمال اليدوية المتكررة بربط أدواتك وأتمتة العمليات التي تستهلك ساعات كل أسبوع." },
      { title: "أنظمة التقارير", description: "تقارير آلية تسحب من كل مصدر بيانات وتصل حيث يحتاجها فريقك — لوحات، بريد، أو سلاك." },
      { title: "أنظمة الموافقات", description: "سير موافقات مخصص يطابق كيفية عمل شركتك فعلياً — من أوامر الشراء إلى تسليمات العملاء." },
      { title: "تطبيقات الجوال المصاحبة", description: "امنح الملاك وفرق القيادة رؤية وصلاحية موافقة من أي مكان، بدون تسجيل دخول للحاسوب." },
      { title: "أنظمة تشغيل الأعمال", description: "منصة داخلية كاملة توحد عملياتك وإدارة عملائك وتقاريرك وأتمتتك في نظام واحد تملكه." },
    ],
  },
  engagement: {
    tag: "من أين نبدأ",
    heading: "اختر كيف نبدأ",
    sub: "كل تعاقد مبني خصيصاً حول عملياتك. اختر من أين تريد أن تبدأ — ونتولى نحن الباقي.",
    cta: "احجز مكالمة اكتشاف",
    flowTitle: "بعد مكالمة الاكتشاف، نرسل عرضاً مخصصاً أو رابط دفع.",
    flowText: "دفع ← استبيان تأهيل ← مجلد قوقل درايف ← انطلاق.",
  },
  process: {
    tag: "عمليتنا",
    heading: "من الاكتشاف إلى التحسين المستمر",
    steps: ["اكتشاف", "تصميم", "بناء", "إطلاق", "تحسين"],
  },
  builtFor: {
    tag: "مبني لـ",
    heading: "مبني حول طريقة عملك",
    sub: "اختر مجالك وشاهد كيف تتكيف فانت لانش مع سير عملك.",
  },
  work: {
    tag: "أعمالنا",
    heading: "أنظمة حقيقية. نتائج قابلة للقياس.",
    viewAll: "تصفح كل دراسات الحالة",
  },
  cta: {
    heading: "تخيل فتح لوحة تحكم واحدة بدلاً من عشر تبويبات.",
    sub: "عملياتك تستحق أفضل من الأدوات المتفرقة والتقارير اليدوية. احجز مكالمة اكتشاف مجانية — سنقوم بتحليل عملياتك ونريك ما هو ممكن.",
    button: "احجز مكالمة اكتشاف",
    subtext: "بدون التزام. بدون ضغط. مجرد وضوح.",
    points: ["نحلل عملياتك", "نحدد المعوقات", "نرشح النظام المناسب"],
  },
  navbar: { solutions: "الحلول", engagements: "التعاقدات", process: "العمليـة", faq: "أسئلة", cta: "احجز مكالمة" },
  footer: { tagline: "أنظمة أعمال داخلية مخصصة للشركات الخدمية المتنامية. مبنية حول سير عملك، تُسلم في أسابيع." },
  form: {
    name: "اسمك", email: "البريد الإلكتروني", company: "الشركة", engagement: "نوع التعاقد",
    timeline: "الجدول الزمني", message: "أخبرنا عن عملك وما تحتاجه",
    submit: "إرسال", sending: "جارٍ الإرسال...",
    received: "تم استلام الطلب.", receivedSub: "سنراجع التفاصيل ونتواصل معك خلال ٢٤ ساعة.",
    sendAnother: "إرسال طلب آخر", selectEngagement: "اختر نوع التعاقد", notSure: "لست متأكداً",
    timelineOptions: ["الجدول المتوقع", "في أقرب وقت", "خلال شهر", "هذا الربع", "للاستكشاف فقط"],
    engagementOptions: ["اختر نوع التعاقد", "أساسي", "برو", "جوال", "مؤسسي", "لست متأكداً"],
  },
};

const TR_T: Translations = {
  hero: {
    heading1: "Büyüyen Hizmet İşletmeleri için",
    heading2: "Özel İç İş Sistemleri",
    subheadline: "Dağınık araçları, tekrarlayan işleri ve kopuk iş akışlarını, işletmenizin çalışma şekline göre inşa edilmiş tek bir sistemle değiştirin.",
    cta1: "Keşif Görüşmesi Ayarla",
    cta2: "Seçenekleri Gör",
  },
  problem: {
    tag: "Sorun",
    heading: "Büyüyen işletmeler araçlarını aşar",
    sub: "Hizmet işletmeniz büyüdükçe operasyonel karmaşıklık da büyür. Yönetilebilir başlayan şey hızla zaman, görünürlük ve kârlılık kaybına dönüşür.",
    items: [
      "Bilgiler birden fazla platforma dağılmış durumda.",
      "Ekipler tekrarlayan manuel işlere saatler harcıyor.",
      "Raporlama çok uzun sürüyor ve hiç güncel değil.",
      "Müşteri iletişimi tutarsız ve takibi zor.",
      "Yönetim operasyonlarda gerçek zamanlı görünürlükten yoksun.",
      "İşletme büyüdükçe operasyonlar daha zor ve kaotik hale geliyor.",
    ],
    tagline: "Yazılımı iş akışınızın etrafında inşa ediyoruz — tersi değil.",
  },
  systems: {
    tag: "İnşa Ettiğimiz Sistemler",
    heading: "Operasyonlarınıza göre tasarlanmış özel sistemler",
    sub: "Her işletme farklı çalışır. Bunlar tipik olarak inşa ettiğimiz iç sistem örnekleridir — her biri gerçek operasyonel sorunları çözmek için tasarlanmıştır.",
    items: [
      { title: "Yönetici Operasyon Merkezleri", description: "Liderlik için tek bir cam panel. Her metriği, her departmanı ve her karar noktasını tek bir yerde — gerçek zamanlı olarak görün." },
      { title: "Ekip Yönetim Platformları", description: "Her ekibe rol tabanlı erişim, görev takibi ve performans görünürlüğü olan kendi çalışma alanını verin." },
      { title: "Müşteri Portalları", description: "Müşterilere projeleri, onayları ve iletişimleri hakkında tam görünürlük verin." },
      { title: "Dahili CRM Sistemleri", description: "Müşterileri, anlaşmaları ve ilişkileri satış sürecinize göre tasarlanmış bir sistemde takip edin." },
      { title: "İş Akışı Otomasyonu", description: "Araçlarınızı bağlayarak ve her hafta saatler tüketen süreçleri otomatikleştirerek tekrarlayan manuel işleri ortadan kaldırın." },
      { title: "Raporlama Sistemleri", description: "Her veri kaynağından çeken ve ekibinizin ihtiyaç duyduğu yere ulaşan otomatik raporlar." },
      { title: "Onay Sistemleri", description: "İşletmenizin gerçekte nasıl çalıştığına uygun özel onay iş akışları." },
      { title: "Mobil Yardımcı Uygulamalar", description: "Sahipler ve liderlik ekiplerine her yerden görünürlük ve onay yetkisi verin." },
      { title: "İşletme İşletim Sistemleri", description: "Operasyonlarınızı, müşteri yönetiminizi, raporlamanızı ve otomasyonunuzu sahip olduğunuz tek bir sistemde birleştiren komple iç platform." },
    ],
  },
  engagement: {
    tag: "Nereden Başlamalı",
    heading: "Nasıl başlayacağımızı seçin",
    sub: "Her anlaşma operasyonlarınıza göre özel olarak inşa edilir. Nereden başlamak istediğinizi seçin — gerisini biz hallederiz.",
    cta: "Keşif Görüşmesi Ayarla",
    flowTitle: "Keşif görüşmenizden sonra, size özel bir teklif veya ödeme bağlantısı göndeririz.",
    flowText: "Ödeme → Başlangıç Anketi → Google Drive Klasörü → Başlangıç.",
  },
  process: {
    tag: "Sürecimiz",
    heading: "Keşiften sürekli iyileştirmeye",
    steps: ["Keşif", "Tasarım", "İnşa", "Lansman", "İyileştirme"],
  },
  builtFor: {
    tag: "Kimler İçin",
    heading: "Nasıl çalıştığınıza göre inşa edildi",
    sub: "Sektörünüzü seçin ve VantLaunch'ın iş akışlarınıza nasıl uyum sağladığını görün.",
  },
  work: {
    tag: "Çalışmalarımız",
    heading: "Gerçek sistemler. Ölçülebilir sonuçlar.",
    viewAll: "Tüm vaka çalışmalarını gör",
  },
  cta: {
    heading: "On sekme yerine tek bir panel açtığınızı hayal edin.",
    sub: "Operasyonlarınız dağınık araçlardan ve manuel raporlardan daha iyisini hak ediyor. Ücretsiz bir keşif görüşmesi ayarlayın — operasyonlarınızı haritalandıralım ve nelerin mümkün olduğunu gösterelim.",
    button: "Keşif Görüşmesi Ayarla",
    subtext: "Yükümlülük yok. Baskı yok. Sadece netlik.",
    points: ["Operasyonlarınızı haritalandırırız", "Darboğazları tespit ederiz", "Doğru sistemi öneririz"],
  },
  navbar: { solutions: "Çözümler", engagements: "Anlaşmalar", process: "Süreç", faq: "SSS", cta: "Görüşme Ayarla" },
  footer: { tagline: "Büyüyen hizmet işletmeleri için özel iç iş sistemleri. İş akışınıza göre inşa edilir, haftalar içinde teslim edilir." },
  form: {
    name: "Adınız", email: "E-posta adresi", company: "Şirket", engagement: "Anlaşma Türü",
    timeline: "Zaman Çizelgesi", message: "İşletmeniz ve ihtiyaçlarınız hakkında bilgi verin",
    submit: "Gönder", sending: "Gönderiliyor...",
    received: "Talep alındı.", receivedSub: "Detayları inceleyip 24 saat içinde dönüş yapacağız.",
    sendAnother: "Başka bir talep gönder", selectEngagement: "Anlaşma seçin", notSure: "Emin değilim",
    timelineOptions: ["Beklenen zaman", "En kısa sürede", "1 ay içinde", "Bu çeyrek", "Sadece keşif"],
    engagementOptions: ["Anlaşma seçin", "Başlangıç", "Pro", "Mobil", "Kurumsal", "Emin değilim"],
  },
};

/* ------------------------------------------------------------------ */
/*  Locale data                                                        */
/* ------------------------------------------------------------------ */

type LocaleData = {
  currency: string;
  engagementPrices: { starter: string; pro: string; mobile: string };
  t: Translations;
  dir: "ltr" | "rtl";
  lang: string;
};

function makeEN(prices: { starter: string; pro: string; mobile: string }, overrides?: Partial<Translations>): LocaleData {
  return {
    currency: "", engagementPrices: prices,
    t: { ...EN_T, ...overrides },
    dir: "ltr", lang: "en",
  };
}

function makeAR(prices: { starter: string; pro: string; mobile: string }, lang: string, heroSubheadline?: string): LocaleData {
  const t: Translations = {
    ...AR_T,
    ...(heroSubheadline ? { hero: { ...AR_T.hero, subheadline: heroSubheadline } } : {}),
  };
  return { currency: "", engagementPrices: prices, t, dir: "rtl", lang };
}

function makeTR(prices: { starter: string; pro: string; mobile: string }): LocaleData {
  return { currency: "", engagementPrices: prices, t: TR_T, dir: "ltr", lang: "tr-TR" };
}

export const LOCALE_DATA: Record<Locale, LocaleData> = {
  us: makeEN({ starter: "From $2,500", pro: "From $5,000", mobile: "From $10,000" }),
  uk: makeEN({ starter: "From £2,000", pro: "From £4,000", mobile: "From £8,000" }, {
    hero: { ...EN_T.hero, subheadline: "Built for UK agencies, consultancies and professional service firms. Replace scattered tools with one system built around your operations." },
  }),
  ca: makeEN({ starter: "From 3,500 CAD", pro: "From 7,000 CAD", mobile: "From 14,000 CAD" }, {
    hero: { ...EN_T.hero, subheadline: "Helping Canadian service businesses replace manual operations with one connected system built around the way you work." },
  }),
  au: makeEN({ starter: "From 4,000 AUD", pro: "From 8,000 AUD", mobile: "From 16,000 AUD" }, {
    hero: { ...EN_T.hero, subheadline: "Built for Australian agencies, consultancies and growing service businesses. One connected system around your operations." },
  }),
  nz: makeEN({ starter: "From 4,500 NZD", pro: "From 9,000 NZD", mobile: "From 18,000 NZD" }, {
    hero: { ...EN_T.hero, subheadline: "Built for New Zealand service businesses ready to replace scattered tools with one connected system." },
  }),
  sg: makeEN({ starter: "From 3,500 SGD", pro: "From 7,000 SGD", mobile: "From 14,000 SGD" }, {
    hero: { ...EN_T.hero, subheadline: "Helping Singapore businesses automate operations and centralise workflows into one connected platform." },
  }),
  ie: makeEN({ starter: "From 2,500 €", pro: "From 5,000 €", mobile: "From 10,000 €" }, {
    hero: { ...EN_T.hero, subheadline: "Built for Irish agencies, consultancies and professional service firms ready to replace disconnected tools." },
  }),
  de: makeEN({ starter: "From 2,500 €", pro: "From 5,000 €", mobile: "From 10,000 €" }, {
    hero: { ...EN_T.hero, subheadline: "Helping German businesses replace disconnected software with custom operational systems built around their workflow." },
  }),
  nl: makeEN({ starter: "From 2,500 €", pro: "From 5,000 €", mobile: "From 10,000 €" }, {
    hero: { ...EN_T.hero, subheadline: "Built for Dutch agencies, consultancies and growing service businesses. Replace scattered tools with one system." },
  }),
  se: makeEN({ starter: "From 25,000 SEK", pro: "From 50,000 SEK", mobile: "From 100,000 SEK" }),
  no: makeEN({ starter: "From 27,500 NOK", pro: "From 55,000 NOK", mobile: "From 110,000 NOK" }),
  dk: makeEN({ starter: "From 18,500 DKK", pro: "From 37,000 DKK", mobile: "From 74,000 DKK" }),
  tr: makeTR({ starter: "From ₺75,000", pro: "From ₺150,000", mobile: "From ₺300,000" }),
  my: makeEN({ starter: "From RM10,000", pro: "From RM20,000", mobile: "From RM40,000" }, {
    hero: { ...EN_T.hero, subheadline: "Helping Malaysian service businesses centralize operations with custom internal business systems built around their workflow." },
  }),
  sa: makeAR({ starter: "From 9,500 SAR", pro: "From 19,000 SAR", mobile: "From 37,500 SAR" }, "ar-SA", "نساعد الشركات السعودية على تبسيط العمليات من خلال برمجيات مخصصة مبنية حول سير عملها."),
  ae: makeAR({ starter: "From 9,500 AED", pro: "From 19,000 AED", mobile: "From 37,500 AED" }, "ar-AE", "نساعد شركات الإمارات على مركزة العمليات في منصة واحدة مخصصة."),
  qa: makeAR({ starter: "From 9,000 QAR", pro: "From 18,000 QAR", mobile: "From 36,500 QAR" }, "ar-QA", "نساعد الشركات القطرية على استبدال الأدوات المتفرقة بأنظمة تشغيلية مخصصة."),
  kw: makeAR({ starter: "From 750 KWD", pro: "From 1,500 KWD", mobile: "From 3,000 KWD" }, "ar-KW", "نساعد الشركات الكويتية على أتمتة العمليات ومركزة البيانات في نظام واحد."),
  bh: makeAR({ starter: "From 950 BHD", pro: "From 1,900 BHD", mobile: "From 3,750 BHD" }, "ar-BH", "نساعد الشركات البحرينية على استبدال العمليات اليدوية بأنظمة رقمية مخصصة."),
  om: makeAR({ starter: "From 950 OMR", pro: "From 1,900 OMR", mobile: "From 3,850 OMR" }, "ar-OM", "نساعد الشركات العمانية على بناء أنظمة داخلية مخصصة تدعم نموها التشغيلي."),
  global: makeEN({ starter: "From $2,500", pro: "From $5,000", mobile: "From $10,000" }),
};
