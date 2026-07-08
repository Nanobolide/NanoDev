# PR — feature/seo → develop

## Description

Optimisation SEO : balises meta, Open Graph, Twitter Card, sitemap et robots.txt.

## Changements réalisés

- Meta description et keywords en français
- Open Graph et Twitter Card
- `public/robots.txt` et `public/sitemap.xml`
- JSON-LD LocalBusiness (dans Home.vue)
- Image OG Pexels (professionnels africains)
- Police Inter préchargée

## Tests effectués

- [x] Balises présentes dans `index.html`
- [x] Sitemap accessible
- [x] Build production OK

## Checklist

- [x] Code testé
- [x] Meta tags validés
- [x] Documentation mise à jour

## Fusion rapide

```bash
git checkout develop
git merge --no-ff feature/seo -m "merge: feature/seo into develop"
git push origin develop
```
