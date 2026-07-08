<template>
  <section class="container-shell py-20">
    <h2 class="section-title text-center">Pourquoi choisir NanoDev</h2>
    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <article v-for="item in items" :key="item.title" class="glass hover-lift rounded-2xl p-6">
        <h3 class="mb-2 text-lg font-semibold">{{ item.title }}</h3>
        <p class="text-slate-600 dark:text-slate-300">{{ item.text }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
const items = [
  { title: 'Innovation', text: 'Toujours avec les dernieres technologies.' },
  { title: 'Qualite', text: 'Code propre, robuste et professionnel.' },
  { title: 'Support', text: 'Accompagnement apres livraison.' },
  { title: 'Respect des delais', text: 'Livraison dans les temps.' },
]
</script>
