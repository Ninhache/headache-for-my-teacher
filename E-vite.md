<img src="images/readme/header-small.jpg" >

# E. Vite <!-- omit in toc -->

_**Jusque là on a configuré notre environnement de développement manuellement, outil par outil, et si l'on a déjà quelque chose d'à peu près fonctionnel (tsc watch + npx serve) on peut faire bien mieux.**_

Je vous propose d'adopter l'un des outils les plus populaires dans le monde du dev front : [Vite](https://vitejs.dev/).

## Sommaire <!-- omit in toc -->
- [E.1. Présentation](#e1-présentation)
- [E.2. Installation](#e2-installation)
- [E.3. Lancer le serveur de développement](#e3-lancer-le-serveur-de-développement)
- [E.4. Le fichier `package.json`](#e4-le-fichier-packagejson)
- [E.5. Créer un script de build personnalisé](#e5-créer-un-script-de-build-personnalisé)


## E.1. Présentation

<img src="images/readme/header-vite.png" />

_**Vite est un outil qui vise à simplifier le setup d'un projet JS/TS en embarquant plusieurs outils déjà pré-configurés, notamment :**_
- _**un bundler ([rollup](https://rollupjs.org/)) :**  qui permet de fusionner les modules en un seul fichier (appelé "bundle")_
- _**un compilateur de code TypeScript et ES6+ ([esbuild](https://esbuild.github.io/)) :** qui compile [selon la doc](https://vite.dev/guide/features.html#typescript) entre 20 et 30 fois plus rapidement que tsc !!_
- _**différents outils qui simplifient la vie du développeur+** comme par exemple un serveur de développement qui permet de tester son appli sans passer par `npx serve`, un système de ["hot reload"](https://vitejs.dev/guide/features.html#hot-module-replacement), la [minimisation des CSS](https://vitejs.dev/guide/features.html#css), le [support de React](https://vitejs.dev/guide/features.html#jsx), etc._

L'avantage d'utiliser Vite est donc que l'on a, avec un seul package, un environnement de dev et de build prêt à l'emploi, qu'il aurait fallu sinon installer et configurer à la main, et c'est souvent très compliqué (_à titre d'exemple, les précédentes versions de ce TP utilisaient Webpack comme bundler, Babel comme compilateur, webpack-dev-server comme serveur de développement, et enfin react-refresh + react-refresh-webpack-plugin pour le hot reload, ça faisait beaucoup !_).

Par ailleurs, Vite va, comme son nom l'indique... vite ! Il est en effet beaucoup [plus rapide que la solution webpack+babel/tsc](https://storybook.js.org/blog/storybook-performance-from-webpack-to-vite/) par exemple.

## E.2. Installation

_**L'installation de Vite se fait comme pour TypeScript avec npm (Node Package Manager).**_

1. **Tout d'abord, stoppez les commandes `npx serve -l 8000` et `./node_modules/.bin/tsc --watch`**. Nous n'allons plus en avoir besoin puisque Vite intègre un serveur http de développement et compile pour nous à la volée.

2. **Installez vite :**
	```bash
	npm install --save-dev vite
	```

	> <details><summary>ℹ️ Ça fait quoi déjà npm install ?</summary>
	>
	> _`npm install ...` télécharge les paquets demandés pour qu'ils soient disponibles dans notre projet._
	>
	> _Ouvrez le fichier `package.json` dans VSCodium (<kbd>CTRL</kbd>+<kbd>P</kbd>). Vous noterez que le paquet `vite` a été rajouté dans les dépendances du projet !_
	>
	> _Vous pourrez aussi remarquer que dans le dossier `/node_modules` on a maintenant d'autres dossiers que `typescript` et `.bin` : un dossier nommé `vite` et d'autres qui correspondent aux dépendances de Vite (rollup, esbuild, etc.)_
	> </details>

## E.3. Lancer le serveur de développement
Le serveur de développement de Vite va nous permettre d'avoir en une commande l'équivalent des deux commandes qu'on lançait jusque là séparément (le serveur http avec `npx serve` et le compilateur avec `tsc --watch`).

1. Avant de pouvoir utiliser le serveur de développement il faut qu'on modifie notre fichier index.html pour faire un truc bizarre :

	Dans la balise `<script>`, au lieu de charger le fichier compilé `/build/main.js`, chargez le fichier SOURCE à savoir `/src/main.ts` !
	```html
	<script src="/src/main.ts" type="module"></script>
	```

	> <details><summary>ℹ️ Mais ?!! 🤯 On avait dit que le navigateur comprenait pas TypeScript et qu'il fallait le compiler en JS !</summary>
	>
	> _Oui c'est vrai, mais en fait Vite va le faire de manière transparente : quand le navigateur recevra le contenu du fichier `src/main.ts` Vite l'aura au préalable compilé en JS à la volée !_
	>
	> _Plus d'infos ici : https://vite.dev/guide/#index-html-and-project-root_
	> </details>

3. **Vous pouvez maintenant lancer le serveur de développement de Vite à l'aide de la commande** :
	```bash
	./node_modules/.bin/vite --port 8000
	```

	<img src="images/readme/vite.gif" />

	Rafraîchissez votre navigateur sur http://localhost:8000, notre application doit s'afficher comme avant avec `npx serve -l 8000`.

	Par contre le premier gros avantage par rapport à l'ancienne commande c'est que maintenant on a directement le live-reload activé ! (_en attendant le Hot Reload quand on utilisera React_) : modifiez le code de `/src/main.ts`, en remplaçant par exemple le texte du `h1`, vite va détecter automatiquement le changement et rafraîchir le navigateur pour refléter les changements ! Pratique !!

	<img src="images/readme/vite-reload.gif">

	> _**NB :** ce serveur est utile uniquement pendant la phase de développement, pour le déploiement en production, Vite dispose d'une commande `vite build` qui permet de compiler le TS et de fusionner tous les modules en un seul fichier (le "bundle"). Pour plus d'informations sur cette fonction, ça se passe dans la doc officielle : https://vitejs.dev/guide/build.html_

## E.4. Le fichier `package.json`

**Avec la commande `npm init` qu'on a lancée au début du TP (dans la partie B. TypeScript) nous avons créé un fichier `package.json` dans le projet.**

Ce fichier sert à plusieurs choses et notamment :
1. **Il permet de conserver l'historique de tous les paquets qui sont installés dans le projet.** C'est en quelque sorte l'équivalent du fichier `pom.xml` en JAVA ou encore du `composer.json` en PHP. On a vu tout à l'heure que dans la section `devDependencies` est maintenant listé le paquet npm `vite`.

	À chaque fois qu'on installe un paquet npm :

	1. le paquet en question se télécharge dans le dossier `node_modules` (vous devez normalement voir un dossier `/node_modules/vite` dans votre projet)
	2. puis le nom du paquet ainsi que sa version sont automatiquement ajoutés dans le fichier `package.json`.

	> <details><summary>⚠️ Le dossier <code>node_modules</code> n'est <strong>JAMAIS</strong> versionné</summary>
	>
	> _En effet c'est en général un dossier relativement volumineux et plein de tout petits fichiers._
	>
	> _Par contre le fichier **`package.json` lui doit être versionné** car il servira de "recette" pour indiquer aux prochaines personnes qui rejoindront le projet quels sont les paquets nécessaires._
	>
	> _En effet, grâce au `package.json`, on n'a qu'à exécuter la commande `npm install` (sans préciser de nom de paquet) pour installer automatiquement toutes les dépendances du projet (c'est d'ailleurs ce que vous ferez dans les prochains TPs_ 🙂 _) !_
	> </details>

2. **Dans ce fichier on va également pouvoir ajouter des "scripts personnalisés" que l'on pourra lancer à l'aide de la commande `npm run xxxxx`.** C'est cette dernière possibilité que l'on va maintenant exploiter pour nous simplifier la vie dans la suite du TP.

## E.5. Créer un script de build personnalisé
Tout à l'heure, pour lancer le serveur de Vite, on a exécuté la commande suivante :

```bash
./node_modules/.bin/vite --port 8000
```

Grâce au `package.json` on va créer **un "raccourci"** pour lancer cette commande plus facilement.

1. **Dans VSCodium, ouvrez le fichier `package.json`** en tapant <kbd>CTRL</kbd>+<kbd>P</kbd> puis le nom du fichier (<kbd>Enter</kbd> _pour ouvrir le fichier_)
2. **Localisez la section "scripts" du fichier**. Elle doit ressembler à :
	```json
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	```
3. **Cette section permet d'ajouter des tâches qui pourront être lancées à l'aide de la commande `npm run <nom-du-script>`.** Par défaut le `package.json` contient une tâche `"test"`. Stoppez le serveur de développement en appuyant sur la touche <kbd>Q</kbd> dans le terminal (_ou_ <kbd>CTRL</kbd>+<kbd>C</kbd>) et lancez donc à la place ce script `"test"` en tapant :
	```bash
	npm run test
	```
	Vous verrez alors la commande `"echo \"Error: no test specified\" && exit 1"` s'exécuter dans le terminal :

	<img src="images/readme/npm-run-test.gif" />

	`"test"` est donc une sorte d'**alias**, de **"raccourci"**, permettant de lancer une commande plus complexe grâce à [`npm run` (_doc_)](https://docs.npmjs.com/cli/v9/using-npm/scripts?v=true#npm-run-user-defined).

4. **Ajoutez maintenant dans le `package.json` un nouveau script qu'on appellera "dev"** et qui permettra de lancer le serveur de développement :
	```json
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
		"dev": "vite --port 8000"
	},
	```
	> _**NB :** Vous noterez que **le chemin `./node_modules/.bin/`** que l'on utilisait jusque là dans notre commande **n'est plus nécessaire** : en effet, comme l'on se trouve dans un script "npm", node va aller automatiquement chercher les exécutables directement dans le dossier `./node_modules/.bin/`, plus besoin donc de le préciser !_

5. **Lancez la commande `npm run dev`** et constatez avec émerveillement que le serveur se lance !

	<img src="images/readme/npm-run-dev.gif" />

	> <details><summary>🚧 La compilation ne fonctionne pas ?</summary>
	>
	> _Si la compilation ne se lance pas, plusieurs raisons sont possibles :_
	> - _soit Vite n'est pas correctement installé,_
	> - _soit la section "scripts" n'est pas correctement formatée (pensez qu'il s'agit d'un fichier JSON, par conséquent l'oubli d'une **virgule** entre chaque script ou au contraire l'ajout d'une virgule à la fin du dernier script, sont considérés comme des **erreurs** de syntaxe_ 👀 _)_
	> </details>

6. Voilà c'est déjà mieux, mais on peut faire encore plus simple en utilisant le script "start" ! **Changez le nom de votre script `"dev"` en `"start"`**. Maintenant plutôt que de devoir taper `npm run dev`, on va pouvoir omettre le mot "run" et taper simplement :
	```bash
	npm start
	```

	Lancez la commande `npm start` et constatez que le serveur se lance comme avant mais en ayant économisé quand même 4 caractères à taper !! C'est pas rien ! 😂

	<img src="images/readme/npm-start.gif" />

## Étape suivante <!-- omit in toc -->
Bref, maintenant que nos outils de dev sont en place, on est parés pour les prochains TP, mais s'il vous reste du temps, vous pouvez vous attaquer à la dernière partie avec quelques exercices pour améliorer notre fonction `renderElement` : [F. Pour aller plus loin](./F-plus-loin.md)