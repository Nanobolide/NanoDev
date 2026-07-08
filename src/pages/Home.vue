<template>
  <div>
    <div v-if="loading" class="fixed inset-0 z-50 grid place-items-center bg-slate-950 text-white">
      <div class="h-14 w-14 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
    </div>

    <Hero />

    <section id="a-propos" class="container-shell py-20">
      <div class="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 class="section-title">Qui sommes-nous ?</h2>
          <p class="section-subtitle !mx-0">NanoDev est une entreprise basee a Bangui specialisee dans le developpement de solutions numeriques sur mesure.</p>
          <p class="mt-4 text-slate-600 dark:text-slate-300">Nous accompagnons les entreprises, ONG, institutions et particuliers dans leur transformation digitale grace a des solutions fiables, modernes et evolutives.</p>
        </div>
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="Reunion de conception digitale" class="glass h-80 w-full rounded-2xl object-cover" loading="lazy" />
      </div>
    </section>

    <Services />
    <WhyChoose />
    <Statistics />
    <Process />
    <Portfolio />
    <Testimonials />
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
import Statistics from '../components/Statistics.vue'
import Testimonials from '../components/Testimonials.vue'
import WhyChoose from '../components/WhyChoose.vue'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 900)

  inView('section', (element) => {
    animate(element, { opacity: [0, 1], y: [26, 0] }, { duration: 0.7 })
  })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'NanoDev',
    slogan: 'Construisons le numerique de demain en Centrafrique.',
    address: { '@type': 'PostalAddress', addressLocality: 'Bangui', addressCountry: 'CF' },
    url: window.location.origin,
  }

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(jsonLd)
  document.head.appendChild(script)
})
</script>
