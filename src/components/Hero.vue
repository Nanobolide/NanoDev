<template>
  <section class="hero-gradient relative flex min-h-screen items-center overflow-hidden pt-28 text-white">
    <div class="absolute inset-0 opacity-40" aria-hidden="true">
      <div class="absolute -left-20 top-32 h-72 w-72 rounded-full bg-blue-500 blur-3xl"></div>
      <div class="absolute right-0 top-16 h-64 w-64 rounded-full bg-indigo-400 blur-3xl"></div>
    </div>
    <div class="container-shell relative grid items-center gap-10 lg:grid-cols-2">
      <div>
        <p class="mb-3 inline-block rounded-full border border-white/30 px-4 py-1 text-sm">Bangui, Republique Centrafricaine</p>
        <h1 class="mb-6 text-4xl font-black leading-tight sm:text-6xl">NanoDev</h1>
        <p class="mb-8 max-w-xl text-lg text-blue-100">Solutions numeriques innovantes pour entreprises, administrations et entrepreneurs.</p>
        <div class="flex flex-wrap gap-4">
          <a href="#contact" class="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-100">Demander un devis</a>
          <a href="#services" class="rounded-xl border border-white/40 px-6 py-3 font-semibold transition hover:bg-white/10">Nos services</a>
        </div>
      </div>
      <div class="glass rounded-3xl p-6 text-slate-900 dark:text-white">
        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80" alt="Equipe digitale en collaboration" class="h-[420px] w-full rounded-2xl object-cover" loading="eager" />
      </div>
    </div>
  </section>
</template>
