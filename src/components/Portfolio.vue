<template>
  <section id="portfolio" class="section-block section-alt">
    <div class="container-shell">
      <div class="text-center">
        <p class="section-badge">Réalisations</p>
        <h2 class="section-title">Portfolio</h2>
        <p class="section-subtitle">
          Découvrez les projets que nous avons livrés pour nos clients.
          Seuls les projets réels et autorisés y sont publiés.
        </p>
      </div>

      <!-- État vide : aucun projet fictif -->
      <div v-if="projects.length === 0" class="empty-state mt-12">
        <div class="icon-box mx-auto">
          <FolderOpenIcon class="h-5 w-5" />
        </div>
        <p class="mt-4 text-base font-medium text-slate-800">
          Nos réalisations seront prochainement présentées ici.
        </p>
        <p class="mx-auto mt-2 max-w-md text-sm text-slate-500">
          Nous préparons actuellement la mise en ligne de nos projets.
          En attendant, contactez-nous pour discuter de votre besoin.
        </p>
        <a href="#contact" class="btn-primary mt-6">Discuter de mon projet</a>
      </div>

      <!-- Grille de projets — alimentée par src/data/portfolio.js -->
      <template v-else>
        <div class="mt-8 flex flex-wrap justify-center gap-2">
          <button
            v-for="tag in tags"
            :key="tag"
            class="rounded-lg px-3.5 py-1.5 text-sm font-medium transition"
            :class="active === tag
              ? 'bg-slate-900 text-white'
              : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300'"
            @click="active = tag"
          >
            {{ tag }}
          </button>
        </div>

        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="project in filtered"
            :key="project.id"
            class="card group overflow-hidden !p-0"
          >
            <div class="overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <div class="p-5">
              <span class="text-xs font-semibold uppercase tracking-wide text-blue-600">{{ project.type }}</span>
              <h3 class="mt-1 font-semibold text-slate-900">{{ project.title }}</h3>
              <p class="mt-1.5 text-sm text-slate-500">{{ project.description }}</p>
              <div v-if="project.tags?.length" class="mt-3 flex flex-wrap gap-1.5">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
                >
                  {{ tag }}
                </span>
              </div>
              <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Voir le projet →
              </a>
            </div>
          </article>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { FolderOpenIcon } from '@heroicons/vue/24/outline'
import { portfolioProjects as projects } from '../data/portfolio'

const active = ref('Tous')
const tags = ['Tous', 'Web', 'Mobile', 'Design', 'Média']

const filtered = computed(() =>
  active.value === 'Tous'
    ? projects
    : projects.filter((p) => p.type === active.value),
)
</script>
