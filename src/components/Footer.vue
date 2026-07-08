<template>
  <footer class="mt-14 border-t border-slate-200/60 bg-white/70 py-12 dark:border-slate-800 dark:bg-slate-950/80">
    <div class="container-shell grid gap-8 md:grid-cols-4">
      <div>
        <h3 class="text-xl font-bold text-blue-600 dark:text-blue-400">NanoDev</h3>
        <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">Construisons le numerique de demain en Centrafrique.</p>
      </div>
      <div>
        <p class="mb-2 font-semibold">Navigation</p>
        <ul class="space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li><RouterLink to="/">Accueil</RouterLink></li>
          <li><RouterLink to="/services">Services</RouterLink></li>
          <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </div>
      <div>
        <p class="mb-2 font-semibold">Coordonnees</p>
        <p class="text-sm text-slate-600 dark:text-slate-300">Bangui, Republique Centrafricaine<br/>+236 70 00 00 00<br/>contact@nanodev.cf</p>
      </div>
      <div>
        <p class="mb-2 font-semibold">Reseaux</p>
        <p class="text-sm text-slate-600 dark:text-slate-300">Facebook<br/>LinkedIn<br/>WhatsApp</p>
      </div>
    </div>
    <p class="container-shell mt-8 text-sm text-slate-500">© NanoDev 2026 - Tous droits reserves.</p>
  </footer>
</template>
