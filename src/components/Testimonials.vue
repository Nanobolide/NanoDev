<template>
  <section class="section-block container-shell">
    <div class="text-center">
      <p class="section-badge">Avis clients</p>
      <h2 class="section-title">Témoignages</h2>
      <p class="section-subtitle">
        Les retours authentiques de nos clients, publiés uniquement avec leur accord.
      </p>
    </div>

    <!-- Aucun faux témoignage -->
    <div v-if="items.length === 0" class="empty-state mt-12">
      <div class="icon-box mx-auto">
        <ChatBubbleLeftRightIcon class="h-5 w-5" />
      </div>
      <p class="mt-4 text-base font-medium text-slate-800">
        Les retours de nos premiers clients seront bientôt disponibles.
      </p>
      <p class="mx-auto mt-2 max-w-md text-sm text-slate-500">
        Nous ne publions que des témoignages réels et vérifiables.
        Soyez parmi les premiers à nous faire confiance.
      </p>
    </div>

    <!-- Liste alimentée par src/data/testimonials.js -->
    <div v-else class="mx-auto mt-12 max-w-2xl">
      <article
        v-for="item in items"
        :key="item.id"
        class="card mb-4 text-center"
      >
        <img
          v-if="item.avatar"
          :src="item.avatar"
          :alt="`Photo de ${item.name}`"
          class="mx-auto mb-4 h-14 w-14 rounded-full object-cover"
        />
        <p class="text-base leading-relaxed text-slate-700">"{{ item.text }}"</p>
        <p class="mt-4 font-semibold text-slate-900">{{ item.name }}</p>
        <p class="text-sm text-slate-500">{{ item.role }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ChatBubbleLeftRightIcon } from '@heroicons/vue/24/outline'
import { testimonials as items } from '../data/testimonials'
</script>
