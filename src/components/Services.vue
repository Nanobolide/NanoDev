<template>
  <section id="services" class="container-shell py-20">
    <h2 class="section-title text-center">Nos Services</h2>
    <p class="section-subtitle text-center">Des prestations completes adaptees a vos objectifs de croissance digitale.</p>
    <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <article v-for="service in services" :key="service.title" class="glass hover-lift rounded-2xl p-6">
        <component :is="service.icon" class="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
        <h3 class="mb-2 text-xl font-semibold">{{ service.title }}</h3>
        <p class="text-slate-600 dark:text-slate-300">{{ service.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ComputerDesktopIcon, DevicePhoneMobileIcon, SwatchIcon, PhotoIcon, VideoCameraIcon, ServerIcon } from '@heroicons/vue/24/outline'

const services = [
  { title: 'Developpement Web', icon: ComputerDesktopIcon, description: 'Creation de sites vitrines, plateformes web, ERP, CRM, applications metier et API modernes.' },
  { title: 'Developpement Mobile', icon: DevicePhoneMobileIcon, description: 'Applications Android et iOS developpees avec Flutter ou React Native.' },
  { title: 'Design Graphique', icon: SwatchIcon, description: 'Creation d identites visuelles, logos, affiches, flyers, cartes de visite, interfaces UI/UX.' },
  { title: 'Montage Photo', icon: PhotoIcon, description: 'Retouche photo professionnelle, photomontage, creation de visuels publicitaires.' },
  { title: 'Montage Video', icon: VideoCameraIcon, description: 'Montage video professionnel pour entreprises, publicites, reseaux sociaux et evenements.' },
  { title: 'Maintenance Informatique', icon: ServerIcon, description: 'Maintenance logicielle, support technique, depannage informatique et accompagnement.' },
]
</script>
