# PR — feature/contact → develop

## Description

Section contact professionnelle avec formulaire structuré, labels accessibles, coordonnées et carte Google Maps.

## Changements réalisés

- Formulaire : nom, email, téléphone, entreprise, service, message
- Labels et placeholders clairs
- Bloc coordonnées Bangui
- Carte Google Maps intégrée

## Tests effectués

- [x] Formulaire affiché correctement
- [x] Carte iframe chargée
- [x] Responsive vérifié

## Checklist

- [x] Code testé
- [x] Responsive vérifié
- [x] Labels ARIA présents

## Fusion rapide

```bash
git checkout develop
git merge --no-ff feature/contact -m "merge: feature/contact into develop"
git push origin develop
```
