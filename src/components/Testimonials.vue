<template>
  <section class="container-shell py-20">
    <h2 class="section-title text-center">Temoignages</h2>
    <div class="glass mx-auto mt-10 max-w-3xl rounded-2xl p-8 text-center">
      <p class="mb-4 text-lg italic">"{{ current.text }}"</p>
      <p class="font-semibold">{{ current.name }}</p>
      <p class="mt-2 text-yellow-500">★★★★★</p>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const index = ref(0)
const testimonials = [
  { name: 'Aline M.', text: 'NanoDev a modernise notre plateforme en un temps record.' },
  { name: 'Jean P.', text: 'Equipe professionnelle, reactive et tres creative.' },
  { name: 'Sonia D.', text: 'Le resultat depasse nos attentes, surtout en UX.' },
]

const current = computed(() => testimonials[index.value])
let timer = 0

onMounted(() => {
  timer = setInterval(() => {
    index.value = (index.value + 1) % testimonials.length
  }, 3500)
})

onUnmounted(() => clearInterval(timer))
</script>
