<template>
  <section class="section-block container-shell">
    <div class="text-center">
      <p class="section-badge">Méthode</p>
      <h2 class="section-title">Notre processus de travail</h2>
      <p class="section-subtitle">
        Un déroulement clair et structuré, pour que vous sachiez exactement ce qui se passe à chaque étape.
      </p>
    </div>

    <div class="mx-auto mt-14 grid max-w-4xl gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(step, idx) in steps"
        :key="step.title"
        class="bg-white p-6"
      >
        <span class="text-xs font-semibold text-blue-600">Étape {{ idx + 1 }}</span>
        <h3 class="mt-1 font-semibold text-slate-900">{{ step.title }}</h3>
        <p class="mt-2 text-sm leading-relaxed text-slate-500">{{ step.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  { title: 'Analyse du besoin', desc: 'Compréhension de vos objectifs, contraintes et attentes.' },
  { title: 'Conception', desc: 'Maquettes et architecture technique validées avec vous.' },
  { title: 'Développement', desc: 'Construction itérative avec points de suivi réguliers.' },
  { title: 'Tests', desc: 'Vérification fonctionnelle, technique et utilisateur.' },
  { title: 'Livraison', desc: 'Mise en production, formation et transfert des accès.' },
  { title: 'Support', desc: 'Maintenance et évolutions selon vos besoins.' },
]
</script>
