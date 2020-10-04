<img src="images/readme/header-small.jpg" >

# C. Compiler avec Babel <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [C.1. Installation et configuration](#c1-installation-et-configuration)
- [C.2. Compilation](#c2-compilation)
- [C.3. Créer un script de build personnalisé](#c3-créer-un-script-de-build-personnalisé)

***Jusque là on ne s'est pas préoccupé de la compatibilité navigateur du code que l'on a tapé.***

En revanche dans la vraie vie, si l'on veut que tous les internautes puissent utiliser notre application sans encombre, **il faut compiler notre code ES6+ en ES5**. Cette compilation se fait avec [Babel](https://babeljs.io).

## C.1. Installation et configuration
L'installation de Babel se fait avec npm (Node Package Manager - l'outil fourni avec Node et qui permet de télécharger des utilitaires JS).

1. **Tout d'abord, ouvrez un nouveau terminal intégré dans VSCodium** (*vous en avez normalement déjà un qui exécute le serveur http `npx serve -l 8000`*).

	Je vous recommande d'utiliser ici [un terminal splitté](https://code.visualstudio.com/docs/editor/integrated-terminal#_terminal-splitting) pour afficher deux terminaux côte à côté. : Tapez <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> puis **`Terminal: split terminal`** ou cliquez sur l'icône suivante :

	<img src="images/readme/split-terminal.png" />

	L'avantage du terminal splitté, c'est que vous pouvez garder un oeil sur les deux terminaux en parallèle. Pratique !

2. **Initialisez votre projet npm :** Dans le terminal de VSCodium tapez la commande :
	```bash
	npm init
	```
	Répondez alors aux questions qui vous sont posées (donnez le nom "reactube" au projet, vous pouvez ensuite taper <kbd>Entrée</kbd> pour toutes les autres questions). À la fin du questionnaire vous verrez qu'un fichier `package.json` a été créé. Celui-ci nous sera utile par la suite.

3. **Installez babel :**
	```bash
	npm install --save-dev @babel/core @babel/cli
	```
	Ouvrez le fichier `package.json`dans VSCodium (<kbd>CTRL</kbd>+<kbd>P</kbd>). Vous noterez que les paquets `@babel/core` et `@babel/cli` ont été rajoutés dans les dépendances du projet !

	Vous pourrez aussi remarquer qu'un dossier `node_modules` a également été créé. C'est lui qui contient le code de toutes les dépendances du projet (toutes les librairies js qu'on a installé avec npm).

4. **Installez le preset `env` :**

	Un **preset** est une sorte de dictionnaire qui indique à babel la syntaxe à compiler (_sans preset, Babel n'applique aucune modification au code source_). Le preset `env` permet de transpiler **toutes les features officielle ES6+ en ES5** (c'est une sorte de dictionnaire de traduction ES6+ -> ES5) :
	```bash
	npm install --save-dev @babel/preset-env
	```
5. **Installez le plugin `proposal-class-properties` :**

	Certaines syntaxes que l'on utilise dans notre code ne sont pas encore dans la spec officielle (_c'est le cas pour la déclaration de propriétés d'instance en dehors du constructeur par exemple_). Par conséquent elles **ne sont pas couvertes par le preset `env`**

	La plupart des fonctionnalités que nous utiliserons dans notre code sont cependant dans un stade relativement avancé de discussion (_niveau 3 sur 4_) et ont désormais de grandes chances d'arriver dans la spécification officielle prochainement. Pas de raison de s'en priver donc.

	Pour pouvoir utiliser ces syntaxes, il faut ajouter à Babel un "plugin" qui va lui permettre de compiler ces futures syntaxes : dans notre cas, il s'agit de ["@babel/plugin-proposal-class-properties"](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties).

	Installez donc ce plugin :

	```bash
	npm install --save-dev @babel/plugin-proposal-class-properties
	```

6. **Enfin, créez un fichier `.babelrc` à la racine de votre projet** (_au même niveau que le `index.html` et le `package.json`_) pour dire à Babel d'utiliser à la fois le preset `env` et le plugin que l'on vient d'installer :
	```json
	{
		"presets": ["@babel/env"],
		"plugins": ["@babel/plugin-proposal-class-properties"]
	}
	```
	**NB :** le nom du fichier est bien `.babelrc`. Si vous êtes sous windows vous ne pourrez pas créer ce fichier avec l'explorateur de fichiers (_windows vous oblige à choisir un nom de fichier de la forme `nom-du-fichier.extension`_) utilisez donc VSCodium pour ça : <kbd>CTRL</kbd>+<kbd>N</kbd> puis <kbd>CTRL</kbd>+<kbd>S</kbd>

## C.2. Compilation
6. **Vous pouvez maintenant compiler votre code ES6+ en ES5 à l'aide de la commande** :
	```bash
	./node_modules/.bin/babel src -d build
	```
	Cette commande va créer un dossier `build` dans lequel sera placé le fichier `main.js` compilé !

	Vérifiez que le fichier `build/main.js` est bien compilé et qu'il ne reste plus de traces de code ES6 (const, let, ...). Si ce n'est pas le cas (s'il reste des `const`, des template strings ou des arrow functions), c'est que le `.babelrc` est mal configuré ou que vous avez raté une étape !

7. **Une fois le fichier `build/main.js` créé, modifiez le fichier `index.html` pour charger ce fichier à la place du `src/main.js`.** Rechargez la page pour vérifier que tout fonctionne toujours correctement !

## C.3. Créer un script de build personnalisé
Jusque là pour lancer la compilation avec [Babel](https://babeljs.io), nous lancions la commande suivante :

```bash
./node_modules/.bin/babel src -d build
```

Avec le `package.json` **on va créer un "raccourci" pour lancer cette commande plus facilement.**

1. Dans VSCodium, **ouvrez le fichier `package.json`** en tapant <kbd>CTRL</kbd>+<kbd>P</kbd> puis le nom du fichier ( <kbd>Enter</kbd> _pour ouvrir le fichier_)
2. **Localisez la section "scripts" du fichier**. Elle doit ressembler à :
	```json
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	```
4. **Cette section permet d'indiquer des tâches qui pourront être lancées à l'aide de la commande `npm run <nom-du-script>`.** Par défaut le `package.json` contient une tâche `"test"`. Lancez le script `"test"` en tapant :
	```bash
	npm run test
	```
	Vous verrez la commande `"echo \"Error: no test specified\" && exit 1"` s'exécuter dans le terminal.<br>

	<img src="images/readme/npm-run-test.gif" />

	`"test"` est donc une sorte d'alias, de **"raccourci"**, permettant de lancer une commande plus complexe.
5. **Ajoutez maintenant dans le `package.json` un nouveau script qu'on appellera "build"** et qui permettra de lancer la compilation Babel :
	```json
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
		"build": "babel src -d build"
	},
	```
	*Vous noterez que le chemin  `./node_modules/.bin/' n'est maintenant plus nécessaire !*

6. **Lancez la commande `npm run build`** et constatez avec émerveillement que la compilation babel se lance !

	<img src="images/readme/npm-run-build.gif" />

	*Si la compilation ne se lance pas, plusieurs raisons possibles :*
	- *soit Babel n'est pas correctement installé,*
	- *soit la section "scripts" n'est pas correctement formatée (pensez qu'il s'agit d'un fichier JSON, par conséquent l'oubli d'une virgule entre chaque script ou au contraire l'ajout d'une virgule à la fin du dernier script, sont considérés comme des erreurs de syntaxe).*
7. **Ajoutez un nouveau script nommé `"watch"`** qui permettra de lancer la commande :
	```bash
	./node_modules/.bin/babel src -d build --verbose --watch --source-maps
	```
	Lancez la commande `npm run watch` dans votre terminal et vérifiez que lorsque vous modifiez le fichier `src/main.js`, le fichier `build/main.js` est bien mis automatiquement à jour.

	<img src="images/readme/npm-run-watch.gif" />

	_Vous voyez que le watch ne vous rend pas la main sur le terminal, il faut le laisser ouvert pour que la recompilation automatique à chaque sauvegarde continue de fonctionner._

## Étape suivante <!-- omit in toc -->
Maintenant que votre code compile, vous pouvez passer à l'étape suivante : [D. Les modules](./D-modules.md)