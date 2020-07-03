<img src="images/readme/header-small.jpg" >

# A. Préparatifs <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [A.1. À propos de ce repo](#a1-à-propos-de-ce-repo)
- [A.2. Récupération des fichiers](#a2-récupération-des-fichiers)
- [A.3. VSCod[e/ium]](#a3-vscodeium)
- [A.3. Ouvrir le projet dans VSCodium](#a3-ouvrir-le-projet-dans-vscodium)

## A.1. À propos de ce repo

**Ce repo contient un ensemble de fichiers qui vous seront utiles pour la réalisation des exercices de cette formation.**

Il contient notamment des fichiers html, css et des assets graphiques (images et vidéos) qui vous permettront de vous concentrer sur le JS sans trop vous soucier de l'apparence de ce que vous codez tout en ayant **quand même** quelque chose de présentable visuellement 😎

La première étape est donc de récupérer (via git) les fichiers du TP.<br>
***Allons y !***

## A.2. Récupération des fichiers

La solution la plus simple pour récupérer les fichiers du TP consiste à cloner ce repository à l'aide de la commande `git clone` :

1. **Si ce n'est pas déjà fait, installez les logiciels suivants :**
	- Git : https://git-scm.com/
	- Node.js (*version **current***): https://nodejs.org/en/download/current/
	- VSCodium : https://vscodium.com/ (Si vous avez déjà vscode, ça fera très bien l'affaire !)

2. **Ouvrez un terminal** *(si vous êtes sous windows, utilisez **Git bash** installé automatiquement avec Git)*

3. **Récupérez les fichiers de ce TP grâce à Git : clonez ce repo dans un dossier de votre choix** (*ici je clone dans mon dossier utilisateur/tps-react/tp0, attention au sens des slashs selon votre OS*) :
	```bash
	mkdir ~/tps-react
	git clone https://framagit.org/formation/react/tp0.git ~/tps-react/tp0
	```

## A.3. VSCod[e/ium]

***Pour développer avec React, vous utilisez déjà sans doute un éditeur adapté au JS moderne. Si vous ne l'avez pas encore testé, je ne peux que vous recommander d'utiliser Visual Studio Code / VSCodium au moins pour la durée de cette formation.***

[Visual Studio Code](https://code.visualstudio.com/) (vscode) est à l'heure actuelle l'un des éditeurs les plus **populaires** pour le développement web et en particulier dans l'écosystème React. C'est un éditeur opensource et développé avec [Electron](https://electronjs.org/), c'est donc un outil qui est **lui-même développé en JS !**

Malheureusement des questions de licence liées à Microsoft [plus ou moins obscures](https://vscodium.com/#why) viennent ternir un peu le tableau. Je vous conseille donc d'utiliser **la distribution "vraiment opensource" du logiciel qu'est [VSCodium](https://vscodium.com/)** (*aucune différence de fonctionnalité*).

***NB :** Si vous avez déjà VSCode et que vous ne souhaitez pas faire la bascule vers VSCodium, pas de soucis, comme les deux sont strictement identiques en terme de fonctionnalités, les TP fonctionneront de la même manière avec vscode !*


1. **Ouvrez le panneau des extensions** à l'aide du raccourci <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>X</kbd>

1. **Installez l'extension [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)** (*esbenp.prettier-vscode*)

	Prettier permet de formater automatiquement notre code en respectant de base un certain nombre de bonnes pratiques. Les possibilités de configuration sont volontairement limitées mais suffisantes pour avoir quand même l'impression d'avoir encore un peu la main sur son formatage 😄

	On configurera cette extension dans le prochain TP.

## A.3. Ouvrir le projet dans VSCodium
1. **Commencez par ouvrir les fichiers du TP dans VSCodium :**
	- soit en le lançant depuis un terminal (*adaptez le chemin vers le projet*):
		```bash
		codium ~/tps-react/tp0
		```
	- soit en ouvrant VSCodium, et en glissant le dossier du TP (*celui dans lequel vous avez cloné*) depuis l'explorateur de fichier/finder vers la fenêtre de VSCodium
	- soit en ouvrant VSCodium, et en ouvrant le dossier du projet avec <kbd>CTRL</kbd>+<kbd>O</kbd> ou via le menu `File` > `Open`

2. **Une fois le projet ouvert, profitez en pour tester quelques raccourcis clavier :**
	- <kbd>CTRL</kbd>+<kbd>P</kbd> : ouvrir un fichier à partir de son nom
	- <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> : lancer n'importe quelle commande des menus.
	- <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>:</kbd> : commenter/décommenter
	- cheat sheet windows : https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
	- cheat sheet mac : https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf
	- cheat sheet linux : https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf

## Étape suivante <!-- omit in toc -->
Si tout fonctionne, vous pouvez passer à l'étape suivante : [B. Intégration du JS](B-integration.md)