<template>
  <section class="section-block container-shell">
    <div class="text-center">
      <p class="section-badge">Nos valeurs</p>
      <h2 class="section-title">Pourquoi choisir NanoDev ?</h2>
      <p class="section-subtitle">
        Une approche professionnelle, ambitieuse et transparente — sans promesses exagérées,
        seulement des engagements concrets sur la qualité de notre travail.
      </p>
    </div>

    <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <article v-for="item in values" :key="item.title" class="card">
        <div class="icon-box">
          <component :is="item.icon" class="h-5 w-5" />
        </div>
        <h3 class="mb-2 font-semibold text-slate-900">{{ item.title }}</h3>
        <p class="text-sm leading-relaxed text-slate-600">{{ item.text }}</p>
        <p v-if="item.tech" class="mt-3 text-xs leading-relaxed text-slate-400">{{ item.tech }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
import {
  WrenchScrewdriverIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  LightBulbIcon,
  MapPinIcon,
} from '@heroicons/vue/24/outline'

const values = [
  {
    title: 'Développement sur mesure',
    icon: WrenchScrewdriverIcon,
    text: 'Chaque solution est conçue selon vos besoins métiers, votre contexte et vos objectifs réels.',
  },
  {
    title: 'Technologies modernes',
    icon: CpuChipIcon,
    text: 'Nous maîtrisons les stacks actuelles pour livrer des solutions performantes et évolutives.',
    tech: 'Vue.js, Laravel, Spring Boot, Flutter, React Native, Docker, Cloud, IA',
  },
  {
    title: 'Qualité',
    icon: ShieldCheckIcon,
    text: 'Nous privilégions un code propre, sécurisé et maintenable, avec des livrables testés et documentés.',
  },
  {
    title: 'Accompagnement',
    icon: UserGroupIcon,
    text: 'Nous vous accompagnons de l\'analyse du besoin jusqu\'à la mise en production et au-delà.',
  },
  {
    title: 'Innovation',
    icon: LightBulbIcon,
    text: 'Nous intégrons les meilleures pratiques du secteur et les technologies les plus récentes adaptées à votre projet.',
  },
  {
    title: 'Proximité',
    icon: MapPinIcon,
    text: 'Une entreprise locale basée à Bangui, proche de ses clients et des réalités de la République Centrafricaine.',
  },
]
</script>
