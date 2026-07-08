<template>
  <section id="contact" class="container-shell py-20">
    <h2 class="section-title text-center">Contact</h2>
    <div class="mt-10 grid gap-8 lg:grid-cols-2">
      <form class="glass rounded-2xl p-6" @submit.prevent>
        <div class="grid gap-4 sm:grid-cols-2">
          <input v-for="field in fields" :key="field" :placeholder="field" class="rounded-xl border border-slate-300 bg-white/70 px-4 py-3 dark:border-slate-700 dark:bg-slate-900/50" :aria-label="field" />
        </div>
        <textarea rows="5" placeholder="Message" aria-label="Message" class="mt-4 w-full rounded-xl border border-slate-300 bg-white/70 px-4 py-3 dark:border-slate-700 dark:bg-slate-900/50"></textarea>
        <button class="mt-4 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500">Envoyer</button>
      </form>
      <div class="glass rounded-2xl p-4">
        <iframe title="Carte Bangui" class="h-full min-h-[380px] w-full rounded-xl border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Bangui%2C%20Republique%20Centrafricaine&output=embed"></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
const fields = ['Nom', 'Email', 'Telephone', 'Entreprise', 'Service souhaite']
</script>
