<template>
  <section class="container-shell py-20">
    <h2 class="section-title text-center">Processus de travail</h2>
    <div class="mx-auto mt-10 max-w-3xl">
      <div v-for="(step, idx) in steps" :key="step" class="relative pb-8 pl-12">
        <div class="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">{{ idx + 1 }}</div>
        <p class="font-medium">{{ step }}</p>
        <div v-if="idx < steps.length - 1" class="absolute left-4 top-10 h-10 w-px bg-blue-300 dark:bg-blue-700"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = ['Analyse du besoin', 'Conception', 'Developpement', 'Tests', 'Livraison', 'Support']
</script>
