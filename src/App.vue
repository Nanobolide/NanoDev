<template>
  <div class="min-h-screen bg-white">
    <Navbar />
    <main>
      <RouterView />
    </main>
    <Footer />
    <button
      v-show="showTop"
      class="fixed bottom-6 right-6 rounded-lg bg-blue-600 p-2.5 text-white shadow-lg transition hover:bg-blue-700"
      aria-label="Retour en haut"
      @click="scrollTop"
    >
      ↑
    </button>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'

const showTop = ref(false)

const onScroll = () => {
  showTop.value = window.scrollY > 500
}

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
