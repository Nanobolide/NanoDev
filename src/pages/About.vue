<template>
  <div class="pt-24">
    <section class="section-block container-shell">
      <div class="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <p class="section-badge">À propos de NanoDev</p>
          <h1 class="section-title">Une entreprise sérieuse, moderne et ancrée à Bangui</h1>

          <p class="mb-4 leading-relaxed text-slate-600">
            NanoDev est une entreprise de prestations de services informatiques basée à Bangui,
            République Centrafricaine.
          </p>

          <p class="mb-8 leading-relaxed text-slate-600">
            Notre mission est d'accompagner les entreprises, les administrations, les ONG et les entrepreneurs
            dans leur transformation numérique grâce à des solutions modernes, fiables et adaptées à leurs besoins.
          </p>

          <ul class="space-y-3">
            <li v-for="item in points" :key="item" class="flex items-start gap-3 text-sm text-slate-700">
              <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-600"></span>
              {{ item }}
            </li>
          </ul>
        </div>

        <div class="overflow-hidden rounded-2xl border border-slate-200/80 shadow-lg">
          <img
            :src="images.team.src"
            :alt="images.team.alt"
            class="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { images } from '../data/images'

const points = [
  'Expertise technique en développement web, mobile et design',
  'Capacité à concevoir des solutions entièrement sur mesure',
  'Engagement envers la qualité, la sécurité et la maintenabilité',
  'Proximité avec les acteurs économiques de la République Centrafricaine',
]
</script>
