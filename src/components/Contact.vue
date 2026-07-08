<template>
  <section id="contact" class="section-block section-alt">
    <div class="container-shell">
      <div class="text-center">
        <p class="section-badge">Contact</p>
        <h2 class="section-title">Parlons de votre projet</h2>
        <p class="section-subtitle">
          Décrivez-nous votre besoin. Nous vous répondrons avec une proposition claire et un devis gratuit.
        </p>
      </div>

      <div class="mt-12 grid gap-10 lg:grid-cols-5">
        <form class="card lg:col-span-3" @submit.prevent>
          <div class="grid gap-4 sm:grid-cols-2">
            <div
              v-for="field in fields"
              :key="field.name"
              :class="field.full ? 'sm:col-span-2' : ''"
            >
              <label :for="field.name" class="mb-1.5 block text-xs font-medium text-slate-700">{{ field.label }}</label>
              <input
                :id="field.name"
                :type="field.type"
                :placeholder="field.placeholder"
                class="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          <div class="mt-4">
            <label for="message" class="mb-1.5 block text-xs font-medium text-slate-700">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Décrivez votre projet et vos objectifs…"
              class="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
            ></textarea>
          </div>

          <button type="submit" class="btn-primary mt-5">Envoyer</button>
        </form>

        <div class="space-y-5 lg:col-span-2">
          <div class="card">
            <h3 class="mb-3 text-sm font-semibold text-slate-900">Coordonnées</h3>
            <ul class="space-y-2.5 text-sm text-slate-600">
              <li>Bangui, République Centrafricaine</li>
              <li>+236 70 00 00 00</li>
              <li>contact@nanodev.cf</li>
            </ul>
          </div>

          <div class="overflow-hidden rounded-xl border border-slate-200">
            <iframe
              title="Carte — Bangui, République Centrafricaine"
              class="h-56 w-full border-0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Bangui%2C%20R%C3%A9publique%20Centrafricaine&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const fields = [
  { name: 'nom', label: 'Nom', type: 'text', placeholder: 'Votre nom' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'votre@email.com' },
  { name: 'telephone', label: 'Téléphone', type: 'tel', placeholder: '+236 …' },
  { name: 'entreprise', label: 'Entreprise', type: 'text', placeholder: 'Organisation' },
  { name: 'service', label: 'Service souhaité', type: 'text', placeholder: 'Ex. : site web, application…', full: true },
]
</script>
