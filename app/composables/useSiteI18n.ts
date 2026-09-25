export type Locale = 'en' | 'it' | 'pl'

export const locales: Locale[] = ['en', 'it', 'pl']

const messages = {
  en: {
    langNav: 'Language',
    location: 'Italian, based in Poland',
    subtitle: 'E‑commerce, web development & electronic craft.',
    contactMe: 'Contact me',
    development: 'Development',
    electronics: 'Electronics',
    more: 'More',
    showLess: 'Show less',
    certifications: 'Certifications',
    footer: 'Pianist / keyboardist',
    pageTitle: 'Emanuele Gian — E-commerce, web development & electronic craft',
    pageDescription:
      'Emanuele Gian (EG-Lab): e-commerce and web development (PHP, Laravel, Magento / Adobe Commerce) and electronics. Italian, based in Poland.',
    developmentSummary: [
      'E-commerce development, integrations & maintenance',
      'Custom application development',
      'PHP, Laravel, Magento / Adobe Commerce',
    ],
    developmentMore: [
      'Backend-focused full-stack work on complex commerce platforms',
      'Integrations with ERP, CRM, payment gateways, SSO, and SAP / PIM / ETL',
      'Hands-on experience with Adobe Commerce Cloud',
    ],
    electronicsSummary: [
      'Prototyping and repair (digital / RF / audio)',
      'HF / amateur radio',
      'Audio amplifiers & musical instruments',
    ],
    electronicsMore: [
      'Microcontroller / embedded programming',
      'Circuit design, debug & bench work',
    ],
  },
  it: {
    langNav: 'Lingua',
    location: 'Italiano, basato in Polonia',
    subtitle: 'E‑commerce, sviluppo web & electronic craft.',
    contactMe: 'Contattami',
    development: 'Sviluppo',
    electronics: 'Elettronica',
    more: 'Di più',
    showLess: 'Mostra meno',
    certifications: 'Certificazioni',
    footer: 'Pianista / tastierista',
    pageTitle: 'Emanuele Gian — E-commerce, sviluppo web & electronic craft',
    pageDescription:
      'Emanuele Gian (EG-Lab): e-commerce e sviluppo web (PHP, Laravel, Magento / Adobe Commerce) ed elettronica. Italiano, basato in Polonia.',
    developmentSummary: [
      'Sviluppo e-commerce, integrazioni e manutenzione',
      'Sviluppo di applicazioni custom',
      'PHP, Laravel, Magento / Adobe Commerce',
    ],
    developmentMore: [
      'Full-stack con focus backend su piattaforme commerce complesse',
      'Integrazioni con ERP, CRM, gateway di pagamento, SSO e SAP / PIM / ETL',
      'Esperienza pratica su Adobe Commerce Cloud',
    ],
    electronicsSummary: [
      'Prototipazione e riparazione (digitale / RF / audio)',
      'Radio HF / HAM',
      'Amplificatori audio e strumenti musicali',
    ],
    electronicsMore: [
      'Programmazione microcontroller / embedded',
      'Progettazione circuiti, debug e misure',
    ],
  },
  pl: {
    langNav: 'Język',
    location: 'Włoch, bazujący w Polsce',
    subtitle: 'E‑commerce, rozwój web & electronic craft.',
    contactMe: 'Kontakt',
    development: 'Rozwój',
    electronics: 'Elektronika',
    more: 'Więcej',
    showLess: 'Pokaż mniej',
    certifications: 'Certyfikaty',
    footer: 'Pianista / keyboardista',
    pageTitle: 'Emanuele Gian — E-commerce, rozwój web & electronic craft',
    pageDescription:
      'Emanuele Gian (EG-Lab): e-commerce i rozwój web (PHP, Laravel, Magento / Adobe Commerce) oraz elektronika. Włoch, bazujący w Polsce.',
    developmentSummary: [
      'Rozwój e-commerce, integracje i utrzymanie',
      'Rozwój aplikacji custom',
      'PHP, Laravel, Magento / Adobe Commerce',
    ],
    developmentMore: [
      'Full-stack z naciskiem na backend złożonych platform commerce',
      'Integracje z ERP, CRM, bramkami płatności, SSO oraz SAP / PIM / ETL',
      'Praktyczne doświadczenie z Adobe Commerce Cloud',
    ],
    electronicsSummary: [
      'Prototypowanie i naprawa (cyfrowe / RF / audio)',
      'Radio HF / HAM',
      'Wzmacniacze audio i instrumenty muzyczne',
    ],
    electronicsMore: [
      'Programowanie mikrokontrolerów / embedded',
      'Projektowanie układów, debug i pomiary',
    ],
  },
} as const

const STORAGE_KEY = 'eg-locale'

export function useSiteI18n() {
  const locale = useState<Locale>('locale', () => 'en')

  onMounted(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null
    if (saved && locales.includes(saved)) {
      locale.value = saved
    }
    document.documentElement.lang = locale.value
  })

  const t = computed(() => messages[locale.value])

  function setLocale(next: Locale) {
    locale.value = next
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, next)
      document.documentElement.lang = next
    }
  }

  return { locale, locales, t, setLocale }
}
