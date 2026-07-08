<template>
  <section id="services" class="section-block section-alt">
    <div class="container-shell">
      <div class="text-center">
        <p class="section-badge">Prestations</p>
        <h2 class="section-title">Nos services</h2>
        <p class="section-subtitle">
          Chaque service est pensé pour répondre à un besoin concret de votre organisation.
          Découvrez ce que NanoDev peut réaliser pour votre projet.
        </p>
      </div>

      <div class="mt-14 grid gap-8 lg:grid-cols-2">
        <article
          v-for="(service, index) in services"
          :key="service.id"
          :ref="(el) => setCardRef(el, index)"
          class="service-card group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm"
        >
          <!-- Illustration + icône -->
          <div class="relative h-52 overflow-hidden">
            <img
              :src="service.image.src"
              :alt="service.image.alt"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
            <div class="absolute bottom-4 left-4 flex items-center gap-3">
              <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-blue-600 shadow-lg backdrop-blur-sm">
                <component :is="service.icon" class="h-5 w-5" />
              </div>
              <h3 class="text-lg font-semibold text-white drop-shadow-sm">{{ service.title }}</h3>
            </div>
          </div>

          <!-- Contenu -->
          <div class="p-6">
            <p class="mb-5 text-sm leading-relaxed text-slate-600">
              {{ service.description }}
            </p>

            <p class="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Prestations</p>
            <ul class="mb-6 grid gap-2 sm:grid-cols-2">
              <li
                v-for="item in service.prestations"
                :key="item"
                class="flex items-start gap-2 text-sm text-slate-700"
              >
                <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"></span>
                {{ item }}
              </li>
            </ul>

            <div class="flex flex-wrap gap-3">
              <button
                type="button"
                class="btn-secondary !px-4 !py-2 !text-sm"
                @click="toggleDetails(service.id)"
              >
                {{ expanded === service.id ? 'Réduire' : 'En savoir plus' }}
              </button>
              <a
                :href="`#contact?service=${encodeURIComponent(service.title)}`"
                class="btn-primary !px-4 !py-2 !text-sm"
              >
                Demander un devis
              </a>
            </div>

            <!-- Détails supplémentaires au clic -->
            <div
              v-if="expanded === service.id"
              class="mt-4 rounded-lg border border-blue-100 bg-blue-50/50 p-4 text-sm leading-relaxed text-slate-600"
            >
              Vous avez un projet de <strong class="text-slate-800">{{ service.title.toLowerCase() }}</strong> ?
              Contactez-nous pour un devis gratuit et personnalisé. Nous étudions votre besoin et vous proposons
              une solution adaptée à votre budget et à vos délais.
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { animate, inView } from 'motion'
import { services } from '../data/services'

const expanded = ref('')
const cardRefs = ref([])

const setCardRef = (el, index) => {
  if (el) cardRefs.value[index] = el
}

const toggleDetails = (id) => {
  expanded.value = expanded.value === id ? '' : id
}

onMounted(() => {
  cardRefs.value.forEach((card, index) => {
    if (!card) return
    inView(card, () => {
      animate(
        card,
        { opacity: [0, 1], y: [28, 0] },
        { duration: 0.55, delay: index * 0.08 },
      )
    }, { margin: '-80px' })
  })
})

onUnmounted(() => {
  cardRefs.value = []
})
</script>

<style scoped>
.service-card {
  opacity: 0;
  transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -12px rgba(37, 99, 235, 0.12);
  border-color: rgba(37, 99, 235, 0.2);
}
</style>
