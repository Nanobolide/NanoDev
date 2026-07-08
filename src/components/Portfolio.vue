<template>
  <section id="portfolio" class="container-shell py-20">
    <h2 class="section-title text-center">Portfolio</h2>
    <div class="mt-6 flex flex-wrap justify-center gap-3">
      <button v-for="tag in tags" :key="tag" class="rounded-full border px-4 py-2 text-sm" :class="active === tag ? 'bg-blue-600 text-white border-blue-600' : 'border-slate-300 dark:border-slate-700'" @click="active = tag">{{ tag }}</button>
    </div>
    <div class="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
      <article v-for="item in filtered" :key="item.title" class="glass mb-6 break-inside-avoid rounded-2xl p-4">
        <img :src="item.image" :alt="item.title" class="h-48 w-full rounded-xl object-cover" loading="lazy" />
        <h3 class="mt-3 text-lg font-semibold">{{ item.title }}</h3>
        <p class="text-sm text-slate-600 dark:text-slate-300">{{ item.type }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const tags = ['Tous', 'Web', 'Mobile', 'Design', 'Media']
const active = ref('Tous')
const items = [
  { title: 'Application Web', type: 'Web', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Application Mobile', type: 'Mobile', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Site Vitrine', type: 'Web', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Logo Premium', type: 'Design', image: 'https://images.unsplash.com/photo-1634942536747-8f8f6ed15c93?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Flyer Corporate', type: 'Design', image: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Video Promotionnelle', type: 'Media', image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=80' },
]

const filtered = computed(() => active.value === 'Tous' ? items : items.filter((item) => item.type === active.value))
</script>
