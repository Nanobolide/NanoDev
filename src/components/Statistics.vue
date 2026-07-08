<template>
  <section class="container-shell py-20">
    <h2 class="section-title text-center">Statistiques</h2>
    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <article v-for="stat in stats" :key="stat.label" class="glass rounded-2xl p-6 text-center">
        <p class="text-4xl font-black text-blue-600 dark:text-blue-400">{{ stat.value }}+</p>
        <p class="mt-2 text-slate-600 dark:text-slate-300">{{ stat.label }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useCounter } from '../composables/useCounter'

const projects = useCounter(25)
const clients = useCounter(50)
const years = useCounter(5)
const success = useCounter(100)

const stats = computed(() => [
  { value: projects.value, label: 'Projets realises' },
  { value: clients.value, label: 'Clients satisfaits' },
  { value: years.value, label: 'Annees d experience' },
  { value: success.value, label: 'Clients accompagnes' },
])
</script>
