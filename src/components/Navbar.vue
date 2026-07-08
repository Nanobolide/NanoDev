<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <div class="container-shell mt-3">
      <nav class="glass flex items-center justify-between rounded-2xl px-4 py-3 text-sm shadow-lg">
        <RouterLink to="/" class="text-lg font-bold text-blue-600 dark:text-blue-400">NanoDev</RouterLink>
        <button class="md:hidden" @click="open = !open" aria-label="Ouvrir le menu">☰</button>
        <ul class="hidden items-center gap-6 md:flex">
          <li v-for="item in items" :key="item.to"><RouterLink :to="item.to" class="text-slate-700 hover:text-blue-600 dark:text-slate-200">{{ item.label }}</RouterLink></li>
        </ul>
        <button class="rounded-lg border border-slate-300 px-3 py-1 dark:border-slate-700" :aria-label="isDark ? 'Mode clair' : 'Mode sombre'" @click="$emit('toggleTheme')">
          {{ isDark ? '☀' : '🌙' }}
        </button>
      </nav>
      <div v-if="open" class="glass mt-2 rounded-2xl p-4 md:hidden">
        <RouterLink v-for="item in items" :key="item.to" :to="item.to" class="block py-2 text-slate-700 dark:text-slate-200" @click="open = false">{{ item.label }}</RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  isDark: { type: Boolean, default: false },
})

defineEmits(['toggleTheme'])

const open = ref(false)
const items = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'A propos' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]
</script>
