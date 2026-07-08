# Git Workflow — NanoDev

Workflow inspiré de **GitHub Flow** + branche d'intégration `develop`.

## Branches

| Branche | Rôle |
|---------|------|
| `main` | Production stable — uniquement via PR validée |
| `develop` | Intégration — fusion des features avant release |
| `feature/*` | Une fonctionnalité = une branche |

## Convention de nommage

```
feature/home-page
feature/services-section
feature/contact
feature/navbar
feature/footer
feature/seo
fix/contact-form-validation
docs/git-workflow
```

## Convention de commits (Conventional Commits)

```
feat:     nouvelle fonctionnalité
fix:      correction de bug
docs:     documentation
style:    mise en forme (pas de changement logique)
refactor: restructuration sans changement fonctionnel
chore:    tâches outillage / config
```

Exemples :
```
feat(navbar): add responsive navigation with devis CTA
feat(services): add service cards with Pexels illustrations
fix(contact): correct form labels accessibility
```

## Cycle de travail (solo ou équipe)

```bash
# 1. Partir de develop à jour
git checkout develop
git pull origin develop

# 2. Créer la branche feature
git checkout -b feature/ma-fonctionnalite

# 3. Développer + commits atomiques
git add .
git commit -m "feat(scope): description claire"

# 4. Pousser et ouvrir une PR vers develop
git push -u origin feature/ma-fonctionnalite
```

Sur GitHub : **New Pull Request** → `base: develop` ← `compare: feature/ma-fonctionnalite`

## Fusion rapide après validation

### Via GitHub (recommandé)

1. Ouvrir la PR → vérifier la checklist
2. **Merge pull request** → **Squash and merge** (historique propre) ou **Merge commit**
3. Supprimer la branche feature

### Via CLI (après `gh auth login`)

```bash
gh pr merge <numero> --squash --delete-branch
```

### Via Git local (sans GitHub CLI)

```bash
git checkout develop
git pull origin develop
git merge --no-ff feature/ma-fonctionnalite -m "merge: feature/ma-fonctionnalite into develop"
git push origin develop
git branch -d feature/ma-fonctionnalite
git push origin --delete feature/ma-fonctionnalite
```

## Release vers production

Quand `develop` est stable :

```bash
# PR develop → main sur GitHub
# Puis en local :
git checkout main
git pull origin main
git merge --no-ff develop -m "release: v1.x.x"
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin main --tags
```

## Règles

- Ne jamais commit directement sur `main`
- Une PR = un sujet clair
- Pas de `git push --force` sur `main` ou `develop`
- Rebaser optionnel avant merge si la branche est en retard sur `develop`
