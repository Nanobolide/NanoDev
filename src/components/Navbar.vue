<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
    <div class="container-shell">
      <nav class="flex items-center justify-between py-3.5">
        <RouterLink to="/" class="flex items-center gap-2.5">
          <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">N</span>
          <span class="text-sm font-semibold tracking-tight text-slate-900">NanoDev</span>
        </RouterLink>

        <button class="p-2 text-slate-500 md:hidden" @click="open = !open" aria-label="Menu">
          {{ open ? '✕' : '☰' }}
        </button>

        <ul class="hidden items-center gap-7 md:flex">
          <li v-for="item in items" :key="item.to">
            <RouterLink :to="item.to" class="text-sm text-slate-600 transition hover:text-slate-900">
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>

        <div class="hidden md:block">
          <RouterLink to="/contact" class="btn-primary !py-2">Devis gratuit</RouterLink>
        </div>
      </nav>

      <div v-if="open" class="border-t border-slate-100 pb-4 md:hidden">
        <RouterLink
          v-for="item in items"
          :key="item.to"
          :to="item.to"
          class="block py-2.5 text-sm text-slate-700"
          @click="open = false"
        >
          {{ item.label }}
        </RouterLink>
        <RouterLink to="/contact" class="btn-primary mt-2 w-full" @click="open = false">Devis gratuit</RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(false)
const items = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]
</script>
