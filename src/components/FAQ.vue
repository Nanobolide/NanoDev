<template>
  <section class="container-shell py-20">
    <h2 class="section-title text-center">FAQ</h2>
    <div class="mx-auto mt-8 max-w-3xl space-y-4">
      <article v-for="item in faqs" :key="item.q" class="glass rounded-2xl">
        <button class="flex w-full items-center justify-between px-5 py-4 text-left font-semibold" @click="open = open === item.q ? '' : item.q">
          {{ item.q }}
          <span>{{ open === item.q ? '-' : '+' }}</span>
        </button>
        <p v-if="open === item.q" class="px-5 pb-5 text-slate-600 dark:text-slate-300">{{ item.a }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const open = ref('')
const faqs = [
  { q: 'Quels types de projets prenez-vous ?', a: 'Nous realisons des solutions web, mobile, design et support informatique.' },
  { q: 'Travaillez-vous avec les ONG et institutions ?', a: 'Oui, nous accompagnons entreprises, ONG, institutions et particuliers.' },
  { q: 'Proposez-vous un support apres livraison ?', a: 'Oui, nous proposons maintenance evolutive et support technique.' },
]
</script>
