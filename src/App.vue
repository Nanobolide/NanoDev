<template>
  <div>
    <div class="fixed inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/40 to-indigo-50/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"></div>
    <div class="custom-cursor" :style="cursorStyle"></div>
    <Navbar :is-dark="isDark" @toggle-theme="toggleTheme" />
    <main>
      <RouterView />
    </main>
    <Footer />
    <button
      v-show="showTop"
      class="fixed bottom-6 right-6 rounded-full bg-blue-600 p-3 text-white shadow-xl transition hover:bg-blue-500"
      aria-label="Retour en haut"
      @click="scrollTop"
    >
      ↑
    </button>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import { useTheme } from './composables/useTheme'

const { isDark, toggleTheme } = useTheme()
const showTop = ref(false)
const cursor = ref({ x: -100, y: -100 })

const cursorStyle = computed(() => ({ left: `${cursor.value.x}px`, top: `${cursor.value.y}px` }))

const onScroll = () => {
  showTop.value = window.scrollY > 500
}

const onMove = (event) => {
  cursor.value = { x: event.clientX, y: event.clientY }
}

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  window.addEventListener('mousemove', onMove)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('mousemove', onMove)
})
</script>
