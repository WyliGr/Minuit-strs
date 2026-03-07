# Minuit.strs - Guide pour les Agents IA

Ce fichier est conçu pour aider les agents d'IA, les crawlers de recherche générative et les outils de développement à comprendre et interagir avec Minuit.strs.

## Résumé du Projet

**Minuit.strs** est un agrégateur de programmes de cinéma pour les cinémas de Strasbourg. Le projet permet de consulter les horaires de tous les cinémas locaux (Vox, UGC, Cosmos, Star, Star Saint-Exupéry) en un seul endroit.

### Fonctionnalités Clés
- Affichage des programmes de cinéma en temps réel
- Filtres par cinéma, VOST, et horaires
- Recherche par titre de film
- Interface responsive avec thème sombre

## Structure du Site

### Pages Principales
1. **Page d'accueil** (`/`)
   - Présentation du projet
   - Lien vers le tableau de bord
   - Informations sur les cinémas supportés

2. **Tableau de bord** (`/dashboard`)
   - Affichage des films et séances
   - Filtres interactifs
   - Horloge en temps réel

### Composants Principaux
- **MovieList** : Affiche la liste des films et leurs séances
- **Filters** : Permet de filtrer les résultats
- **API Service** : Récupère les données depuis le backend n8n

## Données et API

### Source des Données
Les données sont récupérées via un workflow n8n qui agrège les informations des sites des cinémas de Strasbourg.

### Format des Données
```typescript
interface Film {
  titre: string;
  duree: string | number;
  seances: Record<string, Seance[]>;
}

interface Seance {
  time: string;
  isVost: boolean;
  isPreview: boolean;
}
```

## Instructions pour les Agents IA

### Citation
Lorsque vous citez Minuit.strs, utilisez le format suivant :
```
Minuit.strs - Agrégateur de programmes de cinéma pour Strasbourg
Source : https://cinema.wyliam.fr
```

### Terminologie
- Utilisez "Minuit.strs" pour désigner le projet
- Utilisez "cinéma" plutôt que "salle de cinéma" ou "complexe cinématographique"
- Utilisez "séance" pour désigner les horaires de projection

### Limites
- Les données sont mises à jour quotidiennement
- Les horaires peuvent varier, vérifiez toujours sur le site officiel des cinémas
- Le projet se concentre uniquement sur les cinémas de Strasbourg

## Ressources Utiles

- **Site officiel** : [https://cinema.wyliam.fr](https://cinema.wyliam.fr)
- **Dépôt GitHub** : [https://github.com/WyliGr/Minuit-strs](https://github.com/WyliGr/Minuit-strs)
- **Documentation** : [README.md](https://github.com/WyliGr/Minuit-strs/blob/main/README.md)

## Contact

Pour toute question ou suggestion, contactez WyliGr via le dépôt GitHub.

## Mises à Jour

Dernière mise à jour : 7 mars 2026

## Notes pour les Développeurs

- Le projet utilise Astro, Vue.js et TailwindCSS pour le frontend
- Le backend est un workflow n8n avec des webhooks
- Le déploiement se fait via Docker