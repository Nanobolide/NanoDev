# PR — feature/services-section → develop

## Description

Refonte complète de la section Services : cartes premium avec illustrations, icônes, descriptions, listes de prestations et boutons CTA.

## Changements réalisés

- 6 cartes services (Web, Mobile, Design, Photo, Vidéo, Maintenance)
- Illustrations Pexels (professionnels africains)
- Données modulaires `src/data/services.js`
- Animations hover et scroll
- Boutons « En savoir plus » et « Demander un devis »

## Tests effectués

- [x] 6 services affichés correctement
- [x] Hover et animations
- [x] Responsive 1 col mobile / 2 col desktop

## Checklist

- [x] Code testé
- [x] Responsive vérifié
- [x] Contenu conforme au brief client

## Fusion rapide

```bash
git checkout develop
git merge --no-ff feature/services-section -m "merge: feature/services-section into develop"
git push origin develop
```
