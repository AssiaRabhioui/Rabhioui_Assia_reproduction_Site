# Rabhioui Assia reproduction de site

## Contexte du projet

Dans le cadre du cours de Design Web, je réalise un projet qui a pour objectif de reproduire un site web existant afin de comprendre sa structure, son organisation et ses fonctionnalités.

J’ai choisi de reproduire le site : "https://theoceancleanup.com/" qui possède un design au thème bleu et une mise en page particulière qui m’a permis d’explorer différentes techniques de développement web.

---

## Objectif du projet

Le but de ce travail n’est pas seulement de copier un site, mais également de le transformer en y ajoutant un contenu personnel.

Ainsi, j’ai adapté le projet en changeant le sujet principal pour le rendre plus créatif et personnel.

---

## Mon idée de projet

J’ai décidé de transformer ce site en un carnet interactif en ligne.

Ce carnet fonctionne comme un espace collaboratif :
- chaque utilisateur peut lire des histoires déjà présentes
- chaque utilisateur peut également écrire sa propre histoire

Cela crée un site vivant et évolutif, comme un livre infini où chacun peut s’exprimer librement.

---

## Intégration des vidéos

Certaines vidéos (trop lourde pour etre publié sur github) utilisées dans ce projet sont hébergées sur YouTube afin d’alléger le dépôt GitHub.

Elles sont ensuite intégrées au site à l’aide du format embed de YouTube, qui permet d’afficher les vidéos directement dans une page web.

Pour cela, les liens YouTube classiques ont été modifiés :
le lien de partage (youtu.be) ne fonctionne pas pour l’intégration
il a été remplacé par le format /embed/
Exemple de lien utilisé: 
- Lien YouTube classique :
    https://youtu.be/Edt_b2tZCos
- Lien adapté pour le site (embed) :
    https://www.youtube.com/embed/Edt_b2tZCos?autoplay=1&mute=1&loop=1&playlist=Edt_b2tZCos
  
Remarques importantes
Le format /embed/ est obligatoire pour intégrer une vidéo dans un site web.
Le paramètre playlist doit être identique à l’ID de la vidéo pour permettre la lecture en boucle.
L’option autoplay=1&mute=1 permet le lancement automatique de la vidéo.

Lien pour la video "desktop sans js" : https://youtu.be/Edt_b2tZCos
Lien pour la video "desktop avec js" : https://youtu.be/osQhNrD3sTo
