# ChessContender
Un jeu d'échec mais avec quelques ajouts 

## Le but ?

- ### Faire une version débile du jeu d'échec emblématique !

Basé sur le jeu d'échec qu'on connait tous, mais avec des modifications.

- Les pions seront des rappeurs français connu
- Lorsque les pions meurent, ou tuent une punchline du rappeur est dite !
- Lorsque le joueur met trop de temps à jouer, les pions l'insultent
- Lorsque le joueur met beaucoup trop de temps à jouer, les pions jouent d'eux même ! Il faut jouer vite !

# Comment installer l'app en local !

## Installer la confg : ./bin

pour les version linux -> 

    ./linux_20lts_setup.sh

puis pour initialiser la BDD et installer les paquets nodes -> 

    ./init_app.sh

Une fois fait, la database ***chesscontenderDB*** est créé les models importés, les fixture chargées en BDD et les paquets node chargés.

## Lancer l'app

Retourner dans le dossier source 

    cd .. 

Pour acceder à la version de développement local (conseillé pour dev)

    nodemon index.js

Pour acceder à la version de développement avec les variables d'environnement serveur 

    npm run dev