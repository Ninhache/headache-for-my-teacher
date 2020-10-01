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

La première étape est donc de récupérer (_via git_) les fichiers du TP.<br>
***Allons y !***

## A.2. Récupération des fichiers

La solution la plus simple pour récupérer les fichiers du TP consiste à cloner ce repository à l'aide de la commande `git clone` :

1. **Si ce n'est pas déjà fait, installez les logiciels suivants :**
	- Git : https://git-scm.com/
	- Node.js (*version **current 14.x***): https://nodejs.org/en/download/current/
	- VSCodium : https://vscodium.com/ (Si vous avez déjà vscode, ça fera très bien l'affaire !)

2. **Ouvrez un terminal** *(si vous êtes sous windows, utilisez **Git bash** installé automatiquement avec Git)*

3. **Récupérez les fichiers de ce TP grâce à Git : clonez ce repo dans un dossier de votre choix** (_ici je clone dans mon dossier &lt;utilisateur&gt;/tps-react/tp0, attention au sens des slashs selon votre OS_) :
	```bash
	mkdir ~/tps-react
	git clone https://framagit.org/formation/react/tp0.git ~/tps-react/tp0
	```
	***NB :** si vous préférez cloner en SSH pour ne pas avoir à taper votre mot de passe à chaque fois que vous clonerez un TP, renseignez votre clé SSH dans votre [compte utilisateur framagit](https://framagit.org/profile/keys) et clonez à partir de cette URL : `git@framagit.org:formation/react/tp0.git`*

## A.3. VSCod[e/ium]

**_Pour développer avec React, vous utilisez déjà sans doute un éditeur adapté au JS moderne. Si vous ne l'avez pas encore testé, je ne peux que vous recommander d'utiliser Visual Studio Code / VSCodium au moins pour la durée de cette formation._**

<img src="images/readme/vscode-ium.jpg" />

[Visual Studio Code](https://code.visualstudio.com/) (vscode) est à l'heure actuelle l'un des éditeurs les plus **populaires** pour le développement web et en particulier dans l'écosystème React. C'est un éditeur opensource et développé avec [Electron](https://electronjs.org/), c'est donc un outil qui est **lui-même développé en JS !**

Malheureusement des questions de licence liées à Microsoft [plus ou moins obscures](https://vscodium.com/#why) viennent ternir un peu le tableau. Je vous conseille donc d'utiliser **la distribution "vraiment opensource" du logiciel qu'est [VSCodium](https://vscodium.com/)** (*aucune différence de fonctionnalité, hormis le [store d'extensions](https://github.com/VSCodium/vscodium/blob/master/DOCS.md#extensions-marketplace)*).

_**NB :** Si vous avez déjà VSCode et que vous ne souhaitez pas faire la bascule vers VSCodium, pas de soucis, comme les deux sont strictement identiques en terme de fonctionnalités (hormis le store d'extension qui diffère), les TP fonctionneront de la même manière avec vscode !_


1. **Ouvrez le panneau des extensions** à l'aide du raccourci <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>X</kbd>

1. **Installez l'extension `Prettier - Code formatter`** (*esbenp.prettier-vscode*)

	Prettier permet de formater automatiquement notre code en respectant de base un certain nombre de bonnes pratiques. Les possibilités de configuration sont volontairement limitées mais suffisantes pour avoir quand même l'impression d'avoir encore un peu la main sur son formatage 😄

	On configurera cette extension dans le prochain TP.

## A.3. Ouvrir le projet dans VSCodium
1. **Commencez par ouvrir les fichiers du TP dans VSCodium :**
	- soit en le lançant depuis un terminal (*adaptez le chemin vers le projet*):
		```bash
		codium ~/tps-react/tp0
		```
		***NB :** Si vous utilisez VSCode, la commande `codium` doit être remplacée par `code`*
	- soit en ouvrant VSCodium, et en glissant le dossier du TP (*celui dans lequel vous avez cloné*) depuis l'explorateur de fichier/finder directement sur la fenêtre de VSCodium
	- soit en ouvrant le dossier du projet avec le raccourci <kbd>CTRL</kbd>+<kbd>O</kbd> ou via le menu `File` > `Open` de VSCodium

2. **Une fois le projet ouvert, profitez-en pour tester quelques raccourcis clavier :**
	- <kbd>CTRL</kbd>+<kbd>P</kbd> : ouvrir un fichier à partir de son nom
	- <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> : lancer n'importe quelle commande des menus.
	- <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>:</kbd> : commenter/décommenter
	- cheat sheet windows : https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
	- cheat sheet mac : https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf
	- cheat sheet linux : https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf

## Étape suivante <!-- omit in toc -->
Si tout fonctionne, vous pouvez passer à l'étape suivante : [B. Intégration du JS](B-integration.md)