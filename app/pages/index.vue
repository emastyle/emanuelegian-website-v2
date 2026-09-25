<script setup lang="ts">
import type { Locale } from '~/composables/useSiteI18n'

const email = 'emanuele@emanuelegian.com'
const linkedIn = 'https://www.linkedin.com/in/emanuelegian'

const { locale, locales, t, setLocale } = useSiteI18n()

const certifications = [
  {
    src: withBase('/certs/adobe-professional.png'),
    alt: 'Adobe Certified Professional — Magento Commerce Developer',
    href: 'https://certification.adobe.com/credential/verify/3916b265-38cf-483d-8352-42a35e2738a2',
  },
  {
    src: withBase('/certs/adobe-expert.png'),
    alt: 'Adobe Certified Expert — Magento Commerce Cloud Developer',
    href: 'https://certification.adobe.com/credential/verify/02e5dda1-dd65-445e-8722-a403847a7857',
  },
  {
    src: withBase('/certs/zce-php-engineer.png'),
    alt: 'Zend Certified PHP Engineer',
    href: 'http://www.zend.com/en/yellow-pages/ZEND029844',
  },
  {
    src: withBase('/certs/magento-developer.png'),
    alt: 'Magento Certified Developer',
    href: null,
  },
]

const openDevelopment = ref(false)
const openElectronics = ref(false)

const ogLocale = computed(() =>
  locale.value === 'it' ? 'it_IT' : locale.value === 'pl' ? 'pl_PL' : 'en_US',
)

useHead(() => ({
  title: t.value.pageTitle,
  htmlAttrs: { lang: locale.value },
  meta: [
    { name: 'description', content: t.value.pageDescription },
    { property: 'og:title', content: t.value.pageTitle },
    { property: 'og:description', content: t.value.pageDescription },
    { property: 'og:locale', content: ogLocale.value },
    { name: 'twitter:title', content: t.value.pageTitle },
    { name: 'twitter:description', content: t.value.pageDescription },
  ],
}))

function onLocale(next: Locale) {
  setLocale(next)
}
</script>

<template>
  <div class="page">
    <header class="top">
      <nav class="lang" :aria-label="t.langNav">
        <button
          v-for="code in locales"
          :key="code"
          type="button"
          class="lang__btn"
          :class="{ 'lang__btn--active': locale === code }"
          :aria-current="locale === code ? 'true' : undefined"
          @click="onLocale(code)"
        >
          {{ code }}
        </button>
      </nav>
    </header>

    <main>
      <section class="hero" aria-labelledby="name">
        <p class="eyebrow">EG-Lab</p>
        <h1 id="name">Emanuele Gian</h1>
        <p class="location">{{ t.location }}</p>
        <p class="subtitle">
          {{ t.subtitle }}
        </p>
        <p class="consult">
          <a :href="`mailto:${email}`">{{ t.contactMe }}</a>
          <span class="dot" aria-hidden="true">·</span>
          <a :href="linkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </section>

      <section id="development" class="block block--primary" aria-labelledby="development-title">
        <h2 id="development-title">{{ t.development }}</h2>
        <ul>
          <li v-for="item in t.developmentSummary" :key="item">{{ item }}</li>
        </ul>

        <div
          class="more-wrap"
          :class="{ 'more-wrap--open': openDevelopment }"
        >
          <div id="development-more" class="more-inner">
            <div class="more-panel">
              <ul>
                <li v-for="item in t.developmentMore" :key="item">{{ item }}</li>
              </ul>

              <ul class="certs" :aria-label="t.certifications">
                <li v-for="cert in certifications" :key="cert.alt">
                  <a
                    v-if="cert.href"
                    :href="cert.href"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img :src="cert.src" :alt="cert.alt" width="70" height="70" loading="lazy">
                  </a>
                  <img
                    v-else
                    :src="cert.src"
                    :alt="cert.alt"
                    width="70"
                    height="70"
                    loading="lazy"
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="more-toggle"
          :aria-expanded="openDevelopment"
          aria-controls="development-more"
          @click="openDevelopment = !openDevelopment"
        >
          {{ openDevelopment ? t.showLess : t.more }}
        </button>
      </section>

      <section id="electronics" class="block block--secondary" aria-labelledby="electronics-title">
        <h2 id="electronics-title">{{ t.electronics }}</h2>
        <ul>
          <li v-for="item in t.electronicsSummary" :key="item">{{ item }}</li>
        </ul>
        <div
          class="more-wrap"
          :class="{ 'more-wrap--open': openElectronics }"
        >
          <div id="electronics-more" class="more-inner">
            <div class="more-panel">
              <ul>
                <li v-for="item in t.electronicsMore" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="more-toggle"
          :aria-expanded="openElectronics"
          aria-controls="electronics-more"
          @click="openElectronics = !openElectronics"
        >
          {{ openElectronics ? t.showLess : t.more }}
        </button>
      </section>
    </main>

    <footer class="footer">
      <p>{{ t.footer }}</p>
    </footer>
  </div>
</template>

<style scoped>
.page {
  width: min(100% - 2 * var(--space), var(--max));
  margin: 0 auto;
  padding: calc(var(--space) * 1.25) 0 calc(var(--space) * 2);
}

.top {
  display: flex;
  justify-content: flex-end;
  margin-bottom: calc(var(--space) * 1.5);
  animation: rise 0.7s ease both;
}

.lang {
  display: flex;
  gap: 0.75rem;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 500;
}

.lang__btn {
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  font-weight: inherit;
  color: var(--ink-muted);
  opacity: 0.55;
  cursor: pointer;
}

.lang__btn:hover {
  color: var(--ink);
  opacity: 0.85;
}

.lang__btn--active {
  color: var(--ink);
  opacity: 1;
  border-bottom: 1.5px solid var(--accent);
  padding-bottom: 0.1rem;
}

.lang__btn:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.hero {
  padding-bottom: calc(var(--space) * 1.75);
  border-bottom: 1px solid var(--line);
  animation: rise 0.8s ease 0.05s both;
}

.eyebrow {
  margin: 0 0 0.75rem;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-muted);
}

h1 {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(2.4rem, 7vw, 3.6rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.location {
  margin: 0.55rem 0 0;
  font-size: 0.82rem;
  color: var(--ink-muted);
  opacity: 0.8;
}

.subtitle {
  margin: 0.55rem 0 0;
  max-width: 28rem;
  font-size: 1.15rem;
  font-weight: 500;
  line-height: 1.35;
  color: var(--ink);
}

.consult {
  margin: 1rem 0 0;
  color: var(--accent);
  font-weight: 500;
  font-size: 0.98rem;
}

.consult .dot {
  color: var(--ink-muted);
  margin: 0 0.35rem;
}

.block {
  padding: calc(var(--space) * 1.35) 0;
  border-bottom: 1px solid var(--line);
  animation: rise 0.75s ease both;
}

.block--primary {
  animation-delay: 0.12s;
}

.block--secondary {
  animation-delay: 0.18s;
  border-bottom: 0;
}

.block--secondary h2 {
  color: color-mix(in srgb, var(--ink) 82%, transparent);
}

.block--secondary > ul > li {
  color: color-mix(in srgb, var(--ink-muted) 100%, transparent);
  opacity: 0.9;
}

h2 {
  margin: 0 0 0.85rem;
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  position: relative;
  padding: 0.35rem 0 0.35rem 1rem;
  color: var(--ink-muted);
  line-height: 1.45;
}

li::before {
  content: '';
  position: absolute;
  left: 0;
  /* Center the dash on the first text line */
  top: calc(0.35rem + 0.725em);
  width: 0.45rem;
  height: 1.5px;
  background: var(--accent);
  transform: translateY(-50%);
}

.block--primary > ul > li {
  color: var(--ink);
}

.certs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.85rem 1rem;
  margin: 1.1rem 0 0;
  padding: 0;
  list-style: none;
}

.certs li {
  padding: 0;
}

.certs li::before {
  display: none;
}

.certs a {
  display: block;
  line-height: 0;
  border-radius: 4px;
  transition: opacity 0.15s ease;
}

.certs a:hover {
  opacity: 0.8;
}

.certs img {
  display: block;
  width: auto;
  height: 3.5rem;
  object-fit: contain;
}

.more-wrap {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s ease;
}

.more-wrap--open {
  grid-template-rows: 1fr;
}

.more-inner {
  overflow: hidden;
  min-height: 0;
}

.more-panel {
  margin-top: 0.35rem;
  opacity: 0;
  transform: translateY(-0.35rem);
  transition:
    opacity 0.28s ease,
    transform 0.28s ease;
}

.more-wrap--open .more-panel {
  opacity: 1;
  transform: translateY(0);
}

.more-panel li {
  color: var(--ink-muted);
}

.more-toggle {
  margin-top: 0.85rem;
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--accent);
  cursor: pointer;
  text-underline-offset: 0.18em;
}

.more-toggle:hover {
  color: var(--ink);
  text-decoration: underline;
}

.more-toggle:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.footer {
  margin-top: calc(var(--space) * 0.5);
  padding-top: var(--space);
  color: var(--ink-muted);
  font-size: 0.92rem;
  animation: rise 0.7s ease 0.3s both;
}

.footer p {
  margin: 0;
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(0.6rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
  }

  .more-wrap {
    transition: none;
  }

  .more-panel {
    transition: none;
  }
}
</style>
