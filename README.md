# Site vitrine — Cabinet Oriane Millet

Site statique pour le cabinet de psychomotricienne à Montpellier : présentation, parcours de formations, motifs de consultation, tarifs et contact.

Adresse : https://oriane-millet.github.io/psychomotricienne-montpellier/

## Prérequis

- [Node.js](https://nodejs.org/) (version LTS recommandée)

## Installation et commandes

```bash
npm install
npm run dev      # serveur de dev — http://localhost:3000 (écoute sur 0.0.0.0)
npm run build    # production dans dist/
npm run preview  # prévisualisation du build
npm run lint     # vérification TypeScript (tsc --noEmit)
```

## Stack technique

- React 19, TypeScript
- Vite 6
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Lucide React (icônes)

## Structure du projet

- `src/App.tsx` — page unique (sections, navigation)
- `src/components/` — composants réutilisables (`ParcoursExpandableCard`, etc.)
- `src/data/` — contenu structuré (formations)
- `src/images/` — médias (ex. portrait)
- `src/index.css` — thème et tokens Tailwind

Aucune variable d’environnement n’est requise pour le développement ou le build.
