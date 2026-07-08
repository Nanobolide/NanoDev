# PR — feature/home-page → develop

## Description

Mise en place de la page d'accueil complète : Hero, section À propos, bandeau d'engagements et contenu crédible sans données fictives.

## Changements réalisés

- Hero plein écran avec illustration Pexels
- Section « Qui sommes-nous » avec mission officielle
- Bandeau engagements (devis gratuit, équipe Bangui, support)
- Intégration JSON-LD LocalBusiness
- Loader et animations scroll (Motion One)

## Tests effectués

- [x] Hero responsive
- [x] Ancres #services #contact
- [x] `npm run build` OK

## Checklist

- [x] Code testé
- [x] Responsive vérifié
- [x] Aucune statistique inventée

## Fusion rapide

```bash
git checkout develop
git merge --no-ff feature/home-page -m "merge: feature/home-page into develop"
git push origin develop
```
