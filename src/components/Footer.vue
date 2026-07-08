<template>
  <footer class="border-t border-slate-200 bg-white py-12">
    <div class="container-shell grid gap-8 sm:grid-cols-2 md:grid-cols-4">
      <div>
        <div class="mb-3 flex items-center gap-2">
          <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">N</span>
          <span class="text-sm font-semibold text-slate-900">NanoDev</span>
        </div>
        <p class="text-sm leading-relaxed text-slate-500">
          Prestations de services informatiques à Bangui, République Centrafricaine.
        </p>
      </div>

      <div>
        <p class="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Navigation</p>
        <ul class="space-y-2 text-sm text-slate-600">
          <li><RouterLink to="/" class="hover:text-slate-900">Accueil</RouterLink></li>
          <li><RouterLink to="/services" class="hover:text-slate-900">Services</RouterLink></li>
          <li><RouterLink to="/portfolio" class="hover:text-slate-900">Portfolio</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:text-slate-900">Contact</RouterLink></li>
        </ul>
      </div>

      <div>
        <p class="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Contact</p>
        <ul class="space-y-2 text-sm text-slate-600">
          <li>Bangui, RCA</li>
          <li>+236 70 00 00 00</li>
          <li>contact@nanodev.cf</li>
        </ul>
      </div>

      <div>
        <p class="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Réseaux</p>
        <ul class="space-y-2 text-sm text-slate-600">
          <li><a href="#" class="hover:text-slate-900">Facebook</a></li>
          <li><a href="#" class="hover:text-slate-900">LinkedIn</a></li>
          <li><a href="#" class="hover:text-slate-900">WhatsApp</a></li>
        </ul>
      </div>
    </div>

    <p class="container-shell mt-10 border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
      © NanoDev 2026 — Tous droits réservés.
    </p>
  </footer>
</template>
