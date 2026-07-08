<template>
  <section class="section-block container-shell">
    <div class="text-center">
      <p class="section-badge">FAQ</p>
      <h2 class="section-title">Questions fréquentes</h2>
    </div>

    <div class="mx-auto mt-10 max-w-2xl space-y-2">
      <article
        v-for="item in faqs"
        :key="item.q"
        class="overflow-hidden rounded-xl border border-slate-200 bg-white"
      >
        <button
          class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-slate-900 transition hover:bg-slate-50"
          :aria-expanded="open === item.q"
          @click="open = open === item.q ? '' : item.q"
        >
          {{ item.q }}
          <span class="shrink-0 text-slate-400">{{ open === item.q ? '−' : '+' }}</span>
        </button>
        <p v-if="open === item.q" class="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-600">
          {{ item.a }}
        </p>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const open = ref('')
const faqs = [
  {
    q: 'Quels types de projets réalisez-vous ?',
    a: 'Développement web et mobile, design graphique, montage photo et vidéo, ainsi que maintenance informatique. Chaque projet fait l\'objet d\'une étude préalable.',
  },
  {
    q: 'Travaillez-vous avec les administrations et les ONG ?',
    a: 'Oui. Nous accompagnons les entreprises privées, les administrations publiques, les ONG et les entrepreneurs individuels.',
  },
  {
    q: 'Comment obtenir un devis ?',
    a: 'Remplissez le formulaire de contact ou écrivez-nous directement. Nous analysons votre besoin et vous envoyons une proposition détaillée, sans engagement.',
  },
  {
    q: 'Proposez-vous un accompagnement après livraison ?',
    a: 'Oui. Nous proposons de la maintenance, du support technique et des évolutions selon les besoins de chaque client.',
  },
]
</script>
