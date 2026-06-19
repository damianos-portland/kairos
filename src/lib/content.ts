import type { LS } from "./i18n";

// Brand + contact — replace contact with your real details.
export const BRAND = {
  name: "Kairos",
  legal: "Kairos",
  email: "vc@upsell.ai",
  phone: "+30 697 250 4965",
  whatsapp: "https://wa.me/306972504965",
};

export const nav: { href: string; label: LS }[] = [
  { href: "/#services", label: { el: "Υπηρεσίες", en: "Services" } },
  { href: "/#process", label: { el: "Πώς δουλεύουμε", en: "Process" } },
  { href: "/#pricing", label: { el: "Τιμές", en: "Pricing" } },
  { href: "/contact", label: { el: "Επικοινωνία", en: "Contact" } },
];

export const hero = {
  kicker: { el: "ΙΣΤΟΣΕΛΙΔΕΣ · AI RECEPTIONIST · AUTOMATIONS", en: "WEBSITES · AI RECEPTIONIST · AUTOMATIONS" },
  lines: { el: ["Καιρός να εκσυγχρονίσεις", "την επιχείρησή σου."], en: ["Time to modernize", "your business."] },
  sub: {
    el: "Φτιάχνουμε ιστοσελίδες που πουλάνε, στήνουμε AI receptionist που απαντά 24/7, και αυτοματισμούς που τρέχουν τη δουλειά σου. 100% custom, δικό σου για πάντα.",
    en: "We build websites that sell, set up an AI receptionist that answers 24/7, and automations that run your back office. 100% custom, yours forever.",
  },
  cta1: { el: "Πάρε προσφορά", en: "Get a quote" },
  cta2: { el: "Δες τιμές", en: "See pricing" },
  note: { el: "Δωρεάν εκτίμηση σε 48 ώρες · Καμία δέσμευση", en: "Free estimate in 48h · No commitment" },
};

export const stats: { value: string; label: LS }[] = [
  { value: "3–7", label: { el: "μέρες παράδοση", en: "days delivery" } },
  { value: "100%", label: { el: "custom, όχι templates", en: "custom, not templates" } },
  { value: "2h", label: { el: "μέσος χρόνος απάντησης", en: "avg. response time" } },
  { value: "0", label: { el: "lock-in — δικό σου για πάντα", en: "lock-in — yours forever" } },
];

export const why = {
  title: { el: "Δεν πουλάμε υποσχέσεις. Παραδίδουμε αποτέλεσμα.", en: "We don't sell promises. We deliver results." },
  sub: { el: "Φτιάχνουμε σχεδόν τα πάντα, custom, σε μέρες. Ό,τι κι αν χρειαστείς, είμαστε ένα τηλέφωνο μακριά.", en: "We build almost anything, custom, in days. Whatever you need, we're one call away." },
  items: [
    { tag: "CONVERSION", title: { el: "Φτιαγμένο για να πουλάει", en: "Built to sell" }, body: { el: "Όχι απλά όμορφο site — δομή που οδηγεί τον επισκέπτη σε κλήση ή μήνυμα.", en: "Not just a pretty site — structure that drives visitors to call or message." } },
    { tag: "48H", title: { el: "Live σε 3–7 μέρες", en: "Live in 3–7 days" }, body: { el: "Ζωντανό preview σε κάθε βήμα — βλέπεις το site σου πριν πληρώσεις.", en: "Live preview at every step — you see your site before you pay." } },
    { tag: "0 LOCK-IN", title: { el: "Δικό σου για πάντα", en: "Yours forever" }, body: { el: "Site και κώδικας, 100% ιδιοκτησία σου — χωρίς μηνιαία δέσμευση.", en: "Site and code, 100% yours — no monthly lock-in." } },
    { tag: "100% CUSTOM", title: { el: "Ποτέ template", en: "Never a template" }, body: { el: "Κάθε site σχεδιάζεται από την αρχή για την επιχείρησή σου.", en: "Every site designed from scratch for your business." } },
  ],
};

export const process = {
  title: { el: "Από την ιδέα, live σε μέρες.", en: "From idea to live, in days." },
  sub: { el: "Τέσσερα βήματα, μηδέν γραφειοκρατία — εσύ βλέπεις preview σε κάθε στάδιο.", en: "Four steps, zero bureaucracy — you see a preview at every stage." },
  steps: [
    { n: "01", title: { el: "Συνεννόηση", en: "Consultation" }, body: { el: "Μας λες τι θέλεις. Σου δίνουμε ιδέα και τιμή σε λίγες ώρες, χωρίς δέσμευση.", en: "Tell us what you need. We send an idea and price within hours, no commitment." } },
    { n: "02", title: { el: "Σχεδιασμός", en: "Design" }, body: { el: "Φτιάχνουμε custom mockup — όχι template. Το εγκρίνεις πριν προχωρήσουμε.", en: "We build a custom mockup — not a template. You approve before we proceed." } },
    { n: "03", title: { el: "Υλοποίηση", en: "Build" }, body: { el: "Χτίζουμε γρήγορα και mobile-first. Κείμενα, φωτογραφίες, SEO — τα αναλαμβάνουμε.", en: "We build fast and mobile-first. Copy, photos, SEO — we handle it." } },
    { n: "04", title: { el: "Παράδοση", en: "Delivery" }, body: { el: "Live σε 3–7 μέρες. Το site και ο κώδικας είναι 100% δικά σου.", en: "Live in 3–7 days. The site and code are 100% yours." } },
  ],
};

export const services = {
  title: { el: "Ό,τι χρειάζεται η επιχείρησή σου, online.", en: "Everything your business needs, online." },
  sub: { el: "Δεν φτιάχνουμε μόνο sites — στήνουμε και τη λογική πίσω από τη σελίδα.", en: "We don't just build sites — we set up the logic behind the page too." },
  items: [
    { icon: "🤖", title: { el: "AI Receptionist", en: "AI Receptionist" }, body: { el: "Απαντά κλήσεις & μηνύματα 24/7, κλείνει ραντεβού και δεν χάνει ποτέ πελάτη.", en: "Answers calls & messages 24/7, books appointments and never misses a lead." } },
    { icon: "◆", title: { el: "Ιστοσελίδες", en: "Websites" }, body: { el: "Custom marketing sites που μετατρέπουν επισκέπτες σε πελάτες.", en: "Custom marketing sites that turn visitors into customers." } },
    { icon: "▣", title: { el: "Custom CMS & Ραντεβού", en: "Custom CMS & Booking" }, body: { el: "Δικό σου admin panel — κρατήσεις, inventory, CRM. Χωρίς WordPress.", en: "Your own admin panel — bookings, inventory, CRM. No WordPress." } },
    { icon: "$", title: { el: "E-shops", en: "E-shops" }, body: { el: "Πλήρη online καταστήματα — ΦΠΑ, αποστολές, πληρωμές, νομικά.", en: "Full online stores — VAT, shipping, payments, legal pages." } },
    { icon: "↗", title: { el: "SEO & Συντήρηση", en: "SEO & Maintenance" }, body: { el: "Πάντα γρήγορο, ασφαλές και σε άνοδο στη Google.", en: "Always fast, secure and climbing on Google." } },
    { icon: "▶", title: { el: "Social Media", en: "Social Media" }, body: { el: "Επαγγελματική παρουσία σε Facebook & Instagram — content & reels.", en: "Pro presence on Facebook & Instagram — content & reels." } },
    { icon: "✦", title: { el: "Διαφημίσεις", en: "Ads" }, body: { el: "Google & Meta Ads που φέρνουν νέους πελάτες, με μετρήσιμα reports.", en: "Google & Meta Ads that bring new customers, with measurable reports." } },
  ],
};

export const aiReceptionist = {
  kicker: { el: "ΝΕΟ · AI RECEPTIONIST", en: "NEW · AI RECEPTIONIST" },
  title: { el: "Ένας AI receptionist που δεν κοιμάται ποτέ.", en: "An AI receptionist that never sleeps." },
  sub: {
    el: "Απαντά στο τηλέφωνο και στα μηνύματα, κλείνει ραντεβού στο ημερολόγιό σου και απαντά σε ερωτήσεις πελατών — στα Ελληνικά και στα Αγγλικά, 24 ώρες το 24ωρο.",
    en: "It answers your phone and messages, books appointments straight into your calendar and replies to customer questions — in Greek and English, 24/7.",
  },
  bullets: [
    { el: "Απαντά κλήσεις & μηνύματα 24/7", en: "Answers calls & messages 24/7" },
    { el: "Κλείνει ραντεβού στο ημερολόγιό σου", en: "Books appointments into your calendar" },
    { el: "Αξιολογεί & κατηγοριοποιεί leads", en: "Qualifies & routes leads" },
    { el: "Μιλάει Ελληνικά & Αγγλικά", en: "Speaks Greek & English" },
    { el: "Συνδέεται με CRM, WhatsApp & email", en: "Connects to CRM, WhatsApp & email" },
    { el: "Δεν χάνεις ποτέ τηλεφώνημα ξανά", en: "Never miss a call again" },
  ] as LS[],
  cta: { el: "Θέλω AI receptionist", en: "I want an AI receptionist" },
};

export interface Tier { name: LS; desc: LS; price: string; badge?: LS; features: LS[] }

export const pricingOneoff = {
  title: { el: "Τιμές με διαφάνεια", en: "Transparent pricing" },
  sub: { el: "Τρεις ειλικρινείς επιλογές. Δεν είσαι σίγουρος; Σου λέμε σε 2 ώρες.", en: "Three honest options. Not sure? We'll tell you within 2 hours." },
  vatNote: { el: "Όλες οι τιμές χωρίς ΦΠΑ 24%. Το τελικό νούμερο συμφωνείται πριν ξεκινήσουμε.", en: "All prices excl. 24% VAT. The final number is agreed before we start." },
  tiers: [
    { name: { el: "Marketing site", en: "Marketing site" }, desc: { el: "Ένα όμορφο site που πουλάει την επιχείρησή σου.", en: "A beautiful site that sells your business." }, price: "€399", features: [
      { el: "Custom design", en: "Custom design" }, { el: "Mobile-first & γρήγορο", en: "Mobile-first & fast" }, { el: "SEO basics + meta", en: "SEO basics + meta" }, { el: "Φόρμα επικοινωνίας", en: "Contact form" }, { el: "Παράδοση σε 3–7 μέρες", en: "Delivery in 3–7 days" },
    ] },
    { name: { el: "Custom CMS site", en: "Custom CMS site" }, desc: { el: "Δικό σου admin panel για να τρέχεις την επιχείρηση.", en: "Your own admin panel to run the business." }, price: "€799", badge: { el: "ΔΗΜΟΦΙΛΕΣ", en: "POPULAR" }, features: [
      { el: "Ό,τι έχει το Marketing", en: "Everything in Marketing" }, { el: "Admin panel που ελέγχεις", en: "Admin panel you control" }, { el: "Κρατήσεις / inventory / CRM", en: "Bookings / inventory / CRM" }, { el: "Χωρίς WordPress", en: "No WordPress" }, { el: "Εκπαίδευση περιλαμβάνεται", en: "Training included" },
    ] },
    { name: { el: "E-shop", en: "E-shop" }, desc: { el: "Ένα πλήρες online κατάστημα, σωστά στημένο.", en: "A complete online store, set up right." }, price: "€999", features: [
      { el: "Πλήρες online κατάστημα", en: "Full online store" }, { el: "ΦΠΑ, αποστολές, πληρωμές", en: "VAT, shipping, payments" }, { el: "Νομικές σελίδες στα ελληνικά", en: "Legal pages (Greek)" }, { el: "Εισαγωγή προϊόντων", en: "Product import" }, { el: "Custom design", en: "Custom design" },
    ] },
  ] as Tier[],
};

export interface Plan { name: LS; price: string; badge?: LS; note?: LS; features: LS[] }
export const pricingMonthly = {
  title: { el: "Μηνιαία πακέτα", en: "Monthly packages" },
  sub: { el: "Τρεις κατηγορίες — διάλεξε αυτό που ταιριάζει στον στόχο σου. Οι τιμές δεν περιλαμβάνουν ΦΠΑ 24%.", en: "Three categories — pick what fits your goal. Prices excl. 24% VAT." },
  groups: [
    { name: { el: "Συντήρηση & Ανάπτυξη", en: "Maintenance & Growth" }, plans: [
      { name: { el: "Maintenance", en: "Maintenance" }, price: "€12", features: [{ el: "Hosting · Domain · SSL", en: "Hosting · Domain · SSL" }, { el: "Security monitoring", en: "Security monitoring" }, { el: "Backups & updates", en: "Backups & updates" }, { el: "Τεχνική υποστήριξη", en: "Technical support" }] },
      { name: { el: "Growth", en: "Growth" }, price: "€49", badge: { el: "ΔΗΜΟΦΙΛΕΣ", en: "POPULAR" }, features: [{ el: "Όλα του Maintenance", en: "Everything in Maintenance" }, { el: "1 SEO άρθρο/μήνα", en: "1 SEO article/mo" }, { el: "Analytics setup", en: "Analytics setup" }, { el: "Conversion tracking", en: "Conversion tracking" }, { el: "Μηνιαίες προτάσεις", en: "Monthly suggestions" }] },
      { name: { el: "Ads", en: "Ads" }, price: "€99", note: { el: "Το διαφημιστικό budget δεν περιλαμβάνεται.", en: "Ad budget not included." }, features: [{ el: "Όλα του Growth", en: "Everything in Growth" }, { el: "Google Ads setup & καμπάνιες", en: "Google Ads setup & campaigns" }, { el: "Keyword research", en: "Keyword research" }, { el: "Μηνιαίο report", en: "Monthly report" }] },
      { name: { el: "Growth Pro", en: "Growth Pro" }, price: "€199", note: { el: "Το διαφημιστικό budget δεν περιλαμβάνεται.", en: "Ad budget not included." }, features: [{ el: "Όλα του Ads", en: "Everything in Ads" }, { el: "Admin dashboard & live analytics", en: "Admin dashboard & live analytics" }, { el: "4 SEO άρθρα/μήνα · Local SEO", en: "4 SEO articles/mo · Local SEO" }, { el: "Google Business Profile", en: "Google Business Profile" }, { el: "2 NFC review cards", en: "2 NFC review cards" }] },
    ] },
    { name: { el: "Social Media", en: "Social Media" }, plans: [
      { name: { el: "Social Starter", en: "Social Starter" }, price: "€150", features: [{ el: "Δημιουργία περιεχομένου", en: "Content creation" }, { el: "Σχεδιασμός creatives", en: "Creative design" }, { el: "Facebook & Instagram posts", en: "Facebook & Instagram posts" }, { el: "Προγραμματισμός δημοσιεύσεων", en: "Post scheduling" }] },
      { name: { el: "Social Pro", en: "Social Pro" }, price: "€450", badge: { el: "ΔΗΜΟΦΙΛΕΣ", en: "POPULAR" }, features: [{ el: "Όλα του Social Starter", en: "Everything in Social Starter" }, { el: "4 Reels / videos τον μήνα", en: "4 Reels / videos per month" }, { el: "Stories & επιπλέον creatives", en: "Stories & extra creatives" }, { el: "Content planning", en: "Content planning" }] },
      { name: { el: "Social Elite", en: "Social Elite" }, price: "€879", features: [{ el: "Όλα του Social Pro", en: "Everything in Social Pro" }, { el: "10 Reels + 2 bonus τον μήνα", en: "10 Reels + 2 bonus per month" }, { el: "Πλήρες content calendar", en: "Full content calendar" }, { el: "Προτεραιότητα στην παραγωγή", en: "Priority production" }] },
    ] },
    { name: { el: "Meta Ads", en: "Meta Ads" }, plans: [
      { name: { el: "Meta Ads Starter", en: "Meta Ads Starter" }, price: "€149", badge: { el: "ΔΗΜΟΦΙΛΕΣ", en: "POPULAR" }, note: { el: "Το διαφημιστικό budget δεν περιλαμβάνεται.", en: "Ad budget not included." }, features: [{ el: "Setup λογαριασμών & Meta Pixel", en: "Account setup & Meta Pixel" }, { el: "Conversion tracking", en: "Conversion tracking" }, { el: "2 διαφημιστικές καμπάνιες", en: "2 ad campaigns" }, { el: "Βασική βελτιστοποίηση", en: "Basic optimization" }] },
      { name: { el: "Meta Ads Pro", en: "Meta Ads Pro" }, price: "€299", note: { el: "Το διαφημιστικό budget δεν περιλαμβάνεται.", en: "Ad budget not included." }, features: [{ el: "Όλα του Meta Ads Starter", en: "Everything in Meta Ads Starter" }, { el: "A/B & audience/creative testing", en: "A/B & audience/creative testing" }, { el: "Αναλυτικά reports", en: "Detailed reports" }, { el: "Στρατηγική scaling", en: "Scaling strategy" }] },
    ] },
  ] as { name: LS; plans: Plan[] }[],
};

export const included = {
  title: { el: "Τι παίρνεις, κάθε φορά", en: "What you get, every time" },
  items: [
    { el: "Custom design — ποτέ template", en: "Custom design — never a template" },
    { el: "Mobile-first, γρήγορο σε κάθε κινητό", en: "Mobile-first, fast on every phone" },
    { el: "SEO + AI-ready από μέρα 1", en: "SEO + AI-ready from day 1" },
    { el: "Έτοιμο σε Ελληνικά + Αγγλικά", en: "Ready in Greek + English" },
    { el: "Παράδοση σε 3–7 μέρες", en: "Delivery in 3–7 days" },
    { el: "Δωρεάν εκτίμηση πριν ξεκινήσεις", en: "Free estimate before you start" },
  ] as LS[],
};

export const faq: { q: LS; a: LS }[] = [
  { q: { el: "Πόσο γρήγορα παραδίδετε;", en: "How fast do you deliver?" }, a: { el: "Τα περισσότερα sites είναι live σε 3–7 μέρες, ανάλογα με το περιεχόμενο και την πολυπλοκότητα.", en: "Most sites go live in 3–7 days, depending on content and complexity." } },
  { q: { el: "Το site είναι δικό μου;", en: "Do I own the site?" }, a: { el: "Ναι — site και κώδικας είναι 100% δικά σου. Χωρίς μηνιαία δέσμευση, χωρίς lock-in.", en: "Yes — the site and code are 100% yours. No monthly lock-in." } },
  { q: { el: "Δουλεύετε με templates;", en: "Do you use templates?" }, a: { el: "Όχι. Κάθε site σχεδιάζεται custom από την αρχή για την επιχείρησή σου.", en: "No. Every site is custom-designed from scratch for your business." } },
  { q: { el: "Δεν έχω κείμενα/φωτογραφίες.", en: "I don't have copy/photos." }, a: { el: "Κανένα πρόβλημα — αναλαμβάνουμε κείμενα, φωτογραφίες και SEO αν δεν έχεις.", en: "No problem — we handle copy, photos and SEO if you don't have them." } },
  { q: { el: "Πώς γίνεται η πληρωμή;", en: "How does payment work?" }, a: { el: "Συμφωνούμε το τελικό νούμερο πριν ξεκινήσουμε. Βλέπεις design πριν πληρώσεις.", en: "We agree the final number before starting. You see the design before you pay." } },
];

export const cta = {
  title: { el: "Έτοιμος να αποκτήσεις site που πουλάει;", en: "Ready for a site that sells?" },
  sub: { el: "Πες μας για την επιχείρησή σου — δωρεάν εκτίμηση σε 48 ώρες, καμία δέσμευση.", en: "Tell us about your business — free estimate in 48h, no commitment." },
  button: { el: "Πάρε προσφορά", en: "Get a quote" },
};

export const contactPage = {
  title: { el: "Πες μας τι χρειάζεσαι.", en: "Tell us what you need." },
  sub: { el: "Διαβάζουμε κάθε μήνυμα και απαντάμε άμεσα. Δωρεάν εκτίμηση — χωρίς δέσμευση.", en: "We read every message and reply fast. Free estimate — no commitment." },
  interest: { el: "Ποια υπηρεσία σε ενδιαφέρει; (προαιρετικό)", en: "Which service interests you? (optional)" },
  options: [
    { el: "AI Receptionist", en: "AI Receptionist" }, { el: "Ιστοσελίδα", en: "Website" }, { el: "Custom CMS / Ραντεβού", en: "Custom CMS / Booking" }, { el: "E-shop", en: "E-shop" }, { el: "Social Media", en: "Social Media" }, { el: "Διαφημίσεις", en: "Ads" }, { el: "Δεν είμαι σίγουρος/η", en: "Not sure" },
  ] as LS[],
  fields: { name: { el: "Όνομα", en: "Name" }, phone: { el: "Τηλέφωνο", en: "Phone" }, email: { el: "Email", en: "Email" }, message: { el: "Μήνυμα (προαιρετικό)", en: "Message (optional)" } },
  submit: { el: "Αποστολή", en: "Send" },
  direct: { el: "Ή επικοινώνησε απευθείας", en: "Or reach us directly" },
  sent: { el: "Ευχαριστούμε! Θα σου απαντήσουμε άμεσα.", en: "Thanks! We'll get back to you shortly." },
};

// ── Legal pages ───────────────────────────────────────────────────────────────
// NOTE: identify the controller fully before going live — add the legal entity
// name, ΑΦΜ/ΓΕΜΗ and registered address to legal.privacy controller section.
export interface LegalSection { h: LS; body: LS[] }
export interface LegalDoc { title: LS; updated: LS; intro: LS; sections: LegalSection[] }

const LAST_UPDATED: LS = { el: "Τελευταία ενημέρωση: 19 Ιουνίου 2026", en: "Last updated: 19 June 2026" };

export const legal: { privacy: LegalDoc; terms: LegalDoc; cookies: LegalDoc } = {
  privacy: {
    title: { el: "Πολιτική Απορρήτου", en: "Privacy Policy" },
    updated: LAST_UPDATED,
    intro: {
      el: "Η παρούσα Πολιτική Απορρήτου εξηγεί ποια προσωπικά δεδομένα συλλέγουμε όταν επικοινωνείς μαζί μας μέσω αυτού του ιστότοπου, πώς τα χρησιμοποιούμε και ποια δικαιώματα έχεις σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR – ΕΕ 2016/679).",
      en: "This Privacy Policy explains what personal data we collect when you contact us through this website, how we use it, and the rights you have under the General Data Protection Regulation (GDPR – EU 2016/679).",
    },
    sections: [
      {
        h: { el: "1. Υπεύθυνος επεξεργασίας", en: "1. Data controller" },
        body: [
          { el: `Υπεύθυνος επεξεργασίας των δεδομένων είναι η ${BRAND.name}, που διαχειρίζεται αυτόν τον ιστότοπο. Μπορείς να επικοινωνήσεις μαζί μας στο ${BRAND.email} ή στο ${BRAND.phone}.`, en: `The data controller is ${BRAND.name}, which operates this website. You can reach us at ${BRAND.email} or ${BRAND.phone}.` },
        ],
      },
      {
        h: { el: "2. Ποια δεδομένα συλλέγουμε", en: "2. What data we collect" },
        body: [
          { el: "Δεδομένα που μας δίνεις εσύ: όταν συμπληρώνεις τη φόρμα επικοινωνίας ή γράφεις στον AI receptionist, συλλέγουμε το ονοματεπώνυμο, το τηλέφωνο, το email και το περιεχόμενο του μηνύματός σου.", en: "Data you provide: when you fill in the contact form or chat with the AI receptionist, we collect your name, phone, email and the content of your message." },
          { el: "Τεχνικά δεδομένα: όπως κάθε ιστότοπος, ο πάροχος φιλοξενίας μας μπορεί να καταγράφει βασικά τεχνικά στοιχεία (π.χ. διεύθυνση IP, τύπος προγράμματος περιήγησης) για λόγους ασφάλειας και λειτουργίας.", en: "Technical data: like any website, our hosting provider may log basic technical information (e.g. IP address, browser type) for security and operational purposes." },
        ],
      },
      {
        h: { el: "3. Σκοποί & νομική βάση", en: "3. Purposes & legal basis" },
        body: [
          { el: "Χρησιμοποιούμε τα δεδομένα σου για να απαντήσουμε στο αίτημά σου, να σου στείλουμε προσφορά και να παρέχουμε τις υπηρεσίες που ζητάς. Νομική βάση είναι το έννομο συμφέρον μας να απαντάμε σε ερωτήματα και η λήψη μέτρων πριν τη σύναψη σύμβασης κατόπιν δικού σου αιτήματος (άρθρο 6 GDPR).", en: "We use your data to respond to your request, send you a quote and provide the services you ask for. The legal basis is our legitimate interest in answering enquiries and taking steps at your request prior to entering into a contract (Article 6 GDPR)." },
        ],
      },
      {
        h: { el: "4. AI Receptionist", en: "4. AI Receptionist" },
        body: [
          { el: "Όταν χρησιμοποιείς το chat, τα μηνύματά σου επεξεργάζονται από υπηρεσία τεχνητής νοημοσύνης (Anthropic) ώστε να παραχθεί απάντηση. Μην κοινοποιείς ευαίσθητα δεδομένα μέσω του chat. Αν αφήσεις στοιχεία επικοινωνίας, τα χρησιμοποιούμε μόνο για να σου απαντήσουμε.", en: "When you use the chat, your messages are processed by an AI service (Anthropic) to generate a reply. Please do not share sensitive data through the chat. If you leave contact details, we use them only to get back to you." },
        ],
      },
      {
        h: { el: "5. Αποδέκτες & εκτελούντες την επεξεργασία", en: "5. Recipients & processors" },
        body: [
          { el: "Δεν πουλάμε τα δεδομένα σου. Τα μοιραζόμαστε μόνο με αξιόπιστους παρόχους που μας βοηθούν να λειτουργήσουμε τον ιστότοπο: φιλοξενία (Vercel), αποστολή ειδοποιήσεων email (Resend), AI απαντήσεις (Anthropic) και, αν κλείσεις κλήση, προγραμματισμό ραντεβού (Cal.com). Κάθε πάροχος επεξεργάζεται δεδομένα μόνο για λογαριασμό μας.", en: "We do not sell your data. We only share it with trusted providers that help us operate the site: hosting (Vercel), email notifications (Resend), AI replies (Anthropic) and, if you book a call, appointment scheduling (Cal.com). Each provider processes data only on our behalf." },
        ],
      },
      {
        h: { el: "6. Διεθνείς διαβιβάσεις", en: "6. International transfers" },
        body: [
          { el: "Ορισμένοι πάροχοι ενδέχεται να επεξεργάζονται δεδομένα εκτός ΕΟΧ (π.χ. στις ΗΠΑ). Σε αυτές τις περιπτώσεις βασιζόμαστε σε κατάλληλες εγγυήσεις, όπως οι Τυποποιημένες Συμβατικές Ρήτρες της Ευρωπαϊκής Επιτροπής.", en: "Some providers may process data outside the EEA (e.g. in the US). In such cases we rely on appropriate safeguards, such as the European Commission's Standard Contractual Clauses." },
        ],
      },
      {
        h: { el: "7. Χρόνος διατήρησης", en: "7. Retention" },
        body: [
          { el: "Διατηρούμε τα στοιχεία επικοινωνίας σου όσο χρειάζεται για να απαντήσουμε και να διαχειριστούμε το αίτημά σου ή τη συνεργασία μας, και στη συνέχεια για όσο επιβάλλει η νομοθεσία. Μπορείς να ζητήσεις τη διαγραφή τους οποτεδήποτε.", en: "We keep your contact details for as long as needed to respond to and manage your request or our engagement, and thereafter for as long as the law requires. You can request deletion at any time." },
        ],
      },
      {
        h: { el: "8. Τα δικαιώματά σου", en: "8. Your rights" },
        body: [
          { el: "Έχεις δικαίωμα πρόσβασης, διόρθωσης, διαγραφής, περιορισμού και φορητότητας των δεδομένων σου, καθώς και δικαίωμα εναντίωσης στην επεξεργασία. Για να ασκήσεις οποιοδήποτε δικαίωμα, γράψε μας στο " + BRAND.email + ".", en: "You have the right to access, rectify, erase, restrict and port your data, as well as the right to object to processing. To exercise any right, email us at " + BRAND.email + "." },
          { el: "Αν θεωρείς ότι παραβιάζονται τα δικαιώματά σου, μπορείς να υποβάλεις καταγγελία στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (www.dpa.gr).", en: "If you believe your rights are being infringed, you may lodge a complaint with the Hellenic Data Protection Authority (www.dpa.gr)." },
        ],
      },
      {
        h: { el: "9. Ασφάλεια", en: "9. Security" },
        body: [
          { el: "Λαμβάνουμε εύλογα τεχνικά και οργανωτικά μέτρα για την προστασία των δεδομένων σου. Καμία μετάδοση μέσω διαδικτύου δεν είναι απολύτως ασφαλής, αλλά εργαζόμαστε για να ελαχιστοποιήσουμε τους κινδύνους.", en: "We take reasonable technical and organisational measures to protect your data. No transmission over the internet is completely secure, but we work to minimise the risks." },
        ],
      },
      {
        h: { el: "10. Cookies", en: "10. Cookies" },
        body: [
          { el: "Ο ιστότοπος χρησιμοποιεί ελάχιστη τοπική αποθήκευση για να θυμάται τη γλώσσα σου. Δες την Πολιτική Cookies για λεπτομέρειες.", en: "The site uses minimal local storage to remember your language. See the Cookie Policy for details." },
        ],
      },
      {
        h: { el: "11. Αλλαγές στην παρούσα πολιτική", en: "11. Changes to this policy" },
        body: [
          { el: "Ενδέχεται να επικαιροποιήσουμε την παρούσα πολιτική. Η ημερομηνία στην κορυφή δείχνει την τελευταία ενημέρωση.", en: "We may update this policy. The date at the top shows the most recent revision." },
        ],
      },
    ],
  },

  terms: {
    title: { el: "Όροι Χρήσης", en: "Terms of Use" },
    updated: LAST_UPDATED,
    intro: {
      el: "Οι παρόντες όροι διέπουν τη χρήση αυτού του ιστότοπου και την επικοινωνία σου μαζί μας. Χρησιμοποιώντας τον ιστότοπο, αποδέχεσαι τους όρους αυτούς.",
      en: "These terms govern your use of this website and your communication with us. By using the site, you accept these terms.",
    },
    sections: [
      {
        h: { el: "1. Ο ιστότοπος", en: "1. The website" },
        body: [
          { el: `Αυτός ο ιστότοπος ανήκει και διαχειρίζεται από την ${BRAND.name}. Παρουσιάζει τις υπηρεσίες μας (ιστοσελίδες, e-shops, AI receptionist, αυτοματισμοί, διαφημίσεις) και σου επιτρέπει να επικοινωνήσεις μαζί μας.`, en: `This website is owned and operated by ${BRAND.name}. It presents our services (websites, e-shops, AI receptionist, automations, advertising) and lets you get in touch with us.` },
        ],
      },
      {
        h: { el: "2. Προσφορές & τιμές", en: "2. Quotes & pricing" },
        body: [
          { el: "Οι τιμές στον ιστότοπο είναι ενδεικτικές αφετηρίες και δεν περιλαμβάνουν ΦΠΑ 24%, εκτός αν αναφέρεται διαφορετικά. Η τελική τιμή κάθε έργου συμφωνείται γραπτώς πριν την έναρξη. Καμία προσφορά δεν είναι δεσμευτική μέχρι να την επιβεβαιώσουμε και οι δύο πλευρές.", en: "Prices on the site are indicative starting points and exclude 24% VAT unless stated otherwise. The final price of each project is agreed in writing before work begins. No quote is binding until both parties confirm it." },
        ],
      },
      {
        h: { el: "3. Υποχρεώσεις σου", en: "3. Your obligations" },
        body: [
          { el: "Συμφωνείς να μας παρέχεις ακριβείς πληροφορίες και να χρησιμοποιείς τον ιστότοπο νόμιμα. Όταν μας δίνεις περιεχόμενο (κείμενα, λογότυπα, φωτογραφίες) για ένα έργο, δηλώνεις ότι έχεις το δικαίωμα να το χρησιμοποιήσεις.", en: "You agree to provide accurate information and to use the website lawfully. When you give us content (copy, logos, photos) for a project, you confirm that you have the right to use it." },
        ],
      },
      {
        h: { el: "4. Παράδοση & ιδιοκτησία", en: "4. Delivery & ownership" },
        body: [
          { el: "Μετά την ολοκλήρωση και την εξόφληση ενός έργου, το παραδοτέο site και ο κώδικάς του ανήκουν σε εσένα, χωρίς δέσμευση (lock-in). Τυχόν εργαλεία ή βιβλιοθήκες τρίτων διέπονται από τις δικές τους άδειες.", en: "Upon completion and full payment of a project, the delivered site and its code belong to you, with no lock-in. Any third-party tools or libraries are governed by their own licenses." },
        ],
      },
      {
        h: { el: "5. Πνευματική ιδιοκτησία ιστότοπου", en: "5. Website intellectual property" },
        body: [
          { el: `Το περιεχόμενο αυτού του ιστότοπου (κείμενα, σχεδιασμός, λογότυπο) ανήκει στην ${BRAND.name} και δεν επιτρέπεται η αναπαραγωγή του χωρίς άδεια.`, en: `The content of this website (copy, design, logo) belongs to ${BRAND.name} and may not be reproduced without permission.` },
        ],
      },
      {
        h: { el: "6. Περιορισμός ευθύνης", en: "6. Limitation of liability" },
        body: [
          { el: "Ο ιστότοπος παρέχεται «ως έχει». Δεν φέρουμε ευθύνη για έμμεσες ή παρεπόμενες ζημίες από τη χρήση του. Καταβάλλουμε εύλογες προσπάθειες ώστε οι πληροφορίες να είναι ακριβείς και ενημερωμένες.", en: "The website is provided \"as is\". We are not liable for indirect or consequential damages arising from its use. We make reasonable efforts to keep the information accurate and up to date." },
        ],
      },
      {
        h: { el: "7. Σύνδεσμοι τρίτων", en: "7. Third-party links" },
        body: [
          { el: "Ο ιστότοπος μπορεί να περιέχει συνδέσμους προς υπηρεσίες τρίτων (π.χ. WhatsApp, Cal.com). Δεν ευθυνόμαστε για το περιεχόμενο ή τις πολιτικές τους.", en: "The website may contain links to third-party services (e.g. WhatsApp, Cal.com). We are not responsible for their content or policies." },
        ],
      },
      {
        h: { el: "8. Εφαρμοστέο δίκαιο", en: "8. Governing law" },
        body: [
          { el: "Οι παρόντες όροι διέπονται από το ελληνικό δίκαιο. Αρμόδια για κάθε διαφορά είναι τα δικαστήρια της Αθήνας.", en: "These terms are governed by Greek law. The courts of Athens have jurisdiction over any dispute." },
        ],
      },
      {
        h: { el: "9. Αλλαγές & επικοινωνία", en: "9. Changes & contact" },
        body: [
          { el: `Μπορούμε να επικαιροποιήσουμε τους όρους ανά πάσα στιγμή. Για ερωτήσεις, γράψε μας στο ${BRAND.email}.`, en: `We may update these terms at any time. For questions, email us at ${BRAND.email}.` },
        ],
      },
    ],
  },

  cookies: {
    title: { el: "Πολιτική Cookies", en: "Cookie Policy" },
    updated: LAST_UPDATED,
    intro: {
      el: "Η παρούσα πολιτική εξηγεί πώς ο ιστότοπος χρησιμοποιεί cookies και παρόμοιες τεχνολογίες τοπικής αποθήκευσης.",
      en: "This policy explains how the website uses cookies and similar local-storage technologies.",
    },
    sections: [
      {
        h: { el: "1. Τι είναι τα cookies", en: "1. What are cookies" },
        body: [
          { el: "Τα cookies και η τοπική αποθήκευση (local storage) είναι μικρά αρχεία που αποθηκεύονται στη συσκευή σου ώστε ο ιστότοπος να λειτουργεί σωστά και να θυμάται τις προτιμήσεις σου.", en: "Cookies and local storage are small files saved on your device so the website works correctly and remembers your preferences." },
        ],
      },
      {
        h: { el: "2. Τι χρησιμοποιούμε", en: "2. What we use" },
        body: [
          { el: "Απαραίτητα / προτιμήσεων: αποθηκεύουμε τοπικά τη γλώσσα που επέλεξες (Ελληνικά ή Αγγλικά) ώστε να μη χρειάζεται να την επιλέγεις ξανά. Αυτό δεν περιλαμβάνει αναγνωριστικά παρακολούθησης.", en: "Necessary / preferences: we store your chosen language (Greek or English) locally so you don't have to pick it again. This contains no tracking identifiers." },
          { el: "Δεν χρησιμοποιούμε διαφημιστικά cookies ή cookies παρακολούθησης τρίτων στον ιστότοπο. Αν προσθέσουμε αναλυτικά εργαλεία (analytics) στο μέλλον, θα επικαιροποιήσουμε την παρούσα πολιτική.", en: "We do not use advertising or third-party tracking cookies on this site. If we add analytics in the future, we will update this policy." },
        ],
      },
      {
        h: { el: "3. Διαχείριση cookies", en: "3. Managing cookies" },
        body: [
          { el: "Μπορείς να διαγράψεις ή να μπλοκάρεις την τοπική αποθήκευση ανά πάσα στιγμή από τις ρυθμίσεις του προγράμματος περιήγησής σου. Αν το κάνεις, ο ιστότοπος θα συνεχίσει να λειτουργεί αλλά δεν θα θυμάται τη γλώσσα σου.", en: "You can delete or block local storage at any time from your browser settings. If you do, the site will keep working but won't remember your language." },
        ],
      },
      {
        h: { el: "4. Αλλαγές & επικοινωνία", en: "4. Changes & contact" },
        body: [
          { el: `Ενδέχεται να επικαιροποιήσουμε την παρούσα πολιτική. Για ερωτήσεις, γράψε μας στο ${BRAND.email}.`, en: `We may update this policy. For questions, email us at ${BRAND.email}.` },
        ],
      },
    ],
  },
};

export const footer = {
  tagline: { el: "Συνδέουμε τις επιχειρήσεις με τους πελάτες τους — με sites που φέρνουν αποτέλεσμα.", en: "We connect businesses with their customers — with sites that deliver." },
  servicesTitle: { el: "Υπηρεσίες", en: "Services" },
  companyTitle: { el: "Εταιρία", en: "Company" },
  legalTitle: { el: "Νομικά", en: "Legal" },
  company: [
    { href: "/#process", label: { el: "Πώς δουλεύουμε", en: "Process" } },
    { href: "/#pricing", label: { el: "Τιμές", en: "Pricing" } },
    { href: "/contact", label: { el: "Επικοινωνία", en: "Contact" } },
  ],
  legal: [
    { href: "/privacy", label: { el: "Πολιτική Απορρήτου", en: "Privacy Policy" } },
    { href: "/terms", label: { el: "Όροι Χρήσης", en: "Terms of Use" } },
    { href: "/cookies", label: { el: "Πολιτική Cookies", en: "Cookie Policy" } },
  ],
};
