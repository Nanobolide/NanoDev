# PR — refactor/remove-dark-mode → develop

## Description

Suppression du mode sombre par défaut et des composants associés aux statistiques fictives, pour un site crédible en thème clair premium.

## Changements réalisés

- Suppression `useTheme.js`, `useCounter.js`, `Statistics.vue`
- App.vue simplifié (fond blanc, sans toggle dark)
- Portfolio et témoignages en état vide honnête
- Contenu sans chiffres ni avis inventés

## Tests effectués

- [x] Site en mode clair uniquement
- [x] Aucune régression navigation
- [x] Build OK

## Checklist

- [x] Code testé
- [x] Aucune donnée fictive
- [x] Documentation mise à jour

## Fusion rapide

```bash
git checkout develop
git merge --no-ff refactor/remove-dark-mode -m "merge: refactor/remove-dark-mode into develop"
git push origin develop
```

> Note : la branche `feature/dark-mode` n'est pas utilisée — le dark mode a été retiré volontairement du produit.
