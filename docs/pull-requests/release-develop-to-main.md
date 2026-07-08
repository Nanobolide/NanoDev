# PR — develop → main (Release)

## Description

Intégration de toutes les fonctionnalités validées sur `develop` vers la branche de production `main`.

## Changements réalisés

- Site vitrine NanoDev complet (Vue 3 + Vite + Tailwind)
- Navigation, footer, home, services, contact, SEO
- Workflow Git documenté
- Contenu crédible sans données fictives

## Tests effectués

- [x] `npm run build`
- [x] `npm run dev`
- [x] Responsive mobile / tablette / desktop

## Checklist

- [x] Toutes les feature PR mergées dans develop
- [x] Build production OK
- [x] Aucune information fictive
- [x] Documentation workflow à jour

## Fusion rapide (production)

```bash
git checkout main
git pull origin main
git merge --no-ff develop -m "release: site vitrine NanoDev v1.0.0"
git tag -a v1.0.0 -m "Release v1.0.0 — Site vitrine NanoDev"
git push origin main --tags
```
