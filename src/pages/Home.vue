<template>
  <div>
    <div v-if="loading" class="fixed inset-0 z-50 grid place-items-center bg-white">
      <div class="h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-blue-600"></div>
    </div>

    <Hero />

    <section id="a-propos" class="section-block container-shell">
      <div class="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <p class="section-badge">À propos</p>
          <h2 class="section-title">Qui sommes-nous ?</h2>

          <p class="mb-4 leading-relaxed text-slate-600">
            <strong class="font-medium text-slate-900">NanoDev</strong> est une entreprise de prestations de
            services informatiques basée à Bangui, République Centrafricaine.
          </p>

          <p class="mb-8 leading-relaxed text-slate-600">
            Notre mission est d'accompagner les entreprises, les administrations, les ONG et les entrepreneurs
            dans leur transformation numérique grâce à des solutions modernes, fiables et adaptées à leurs besoins.
          </p>

          <div class="grid gap-4 sm:grid-cols-2">
            <div v-for="item in strengths" :key="item.title" class="card !p-4">
              <h3 class="mb-1 text-sm font-semibold text-slate-900">{{ item.title }}</h3>
              <p class="text-sm leading-relaxed text-slate-500">{{ item.text }}</p>
            </div>
          </div>
        </div>

        <div class="overflow-hidden rounded-2xl border border-slate-200/80 shadow-lg">
          <img
            :src="images.about.src"
            :alt="images.about.alt"
            class="aspect-[4/5] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <Services />
    <WhyChoose />
    <Process />
    <Portfolio />
    <Testimonials />

    <section class="section-block section-alt">
      <div class="container-shell text-center">
        <h2 class="section-title">Un projet en tête ?</h2>
        <p class="section-subtitle mb-8">
          Décrivez-nous votre besoin. Nous vous répondrons avec une proposition claire et un devis gratuit,
          sans engagement de votre part.
        </p>
        <a href="#contact" class="btn-primary">Nous contacter</a>
      </div>
    </section>

    <FAQ />
    <Contact />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { animate, inView } from 'motion'
import Contact from '../components/Contact.vue'
import FAQ from '../components/FAQ.vue'
import Hero from '../components/Hero.vue'
import Portfolio from '../components/Portfolio.vue'
import Process from '../components/Process.vue'
import Services from '../components/Services.vue'
import Testimonials from '../components/Testimonials.vue'
import WhyChoose from '../components/WhyChoose.vue'
import { images } from '../data/images'

const loading = ref(true)

const strengths = [
  {
    title: 'Expertise technique',
    text: 'Développement web, mobile, design et infrastructure — avec des technologies éprouvées.',
  },
  {
    title: 'Solutions sur mesure',
    text: 'Chaque projet est pensé pour répondre à un besoin métier précis, pas à un modèle générique.',
  },
  {
    title: 'Engagement qualité',
    text: 'Code propre, livrables testés et documentation pour des solutions durables.',
  },
  {
    title: 'Proximité locale',
    text: 'Basés à Bangui, nous comprenons le contexte centrafricain et ses acteurs économiques.',
  },
]

onMounted(() => {
  setTimeout(() => { loading.value = false }, 500)

  inView('section', (el) => {
    animate(el, { opacity: [0, 1], y: [16, 0] }, { duration: 0.5 })
  })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'NanoDev',
    description: 'Prestations de services informatiques à Bangui, République Centrafricaine.',
    address: { '@type': 'PostalAddress', addressLocality: 'Bangui', addressCountry: 'CF' },
    url: window.location.origin,
  }

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(jsonLd)
  document.head.appendChild(script)
})
</script>
