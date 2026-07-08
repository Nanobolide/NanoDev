<template>
  <section class="hero-gradient relative flex min-h-[92vh] items-center overflow-hidden pt-24">
    <div class="container-shell relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
      <div>
        <p class="section-badge">Bangui, République Centrafricaine</p>

        <h1 class="mb-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
          Construisons le numérique de demain en Centrafrique.
        </h1>

        <p class="mb-6 max-w-lg text-lg leading-relaxed text-slate-600">
          NanoDev est une entreprise de prestations de services informatiques basée à Bangui.
          Nous accompagnons les entreprises, les administrations, les ONG et les entrepreneurs
          dans leur transformation numérique.
        </p>

        <ul class="mb-8 space-y-2.5">
          <li v-for="point in points" :key="point" class="flex items-center gap-2.5 text-sm text-slate-700">
            <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"></span>
            {{ point }}
          </li>
        </ul>

        <div class="flex flex-wrap gap-3">
          <a href="#contact" class="btn-primary">Demander un devis</a>
          <a href="#services" class="btn-secondary">Nos services</a>
        </div>
      </div>

      <div class="relative">
        <div class="overflow-hidden rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-200/50">
          <img
            :src="images.hero.src"
            :alt="images.hero.alt"
            class="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
            loading="eager"
          />
        </div>
        <div class="card absolute -bottom-5 -left-4 max-w-[200px] !p-4 sm:-left-6">
          <p class="text-sm font-medium text-slate-900">Solutions sur mesure</p>
          <p class="mt-0.5 text-xs text-slate-500">Web, mobile, design & IT</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { images } from '../data/images'

const points = [
  'Expertise technique en développement web et mobile',
  'Solutions adaptées à vos besoins métiers',
  'Entreprise locale, ancrée à Bangui',
]
</script>
