<img src="images/readme/header-small.jpg" >

# B. Intégration du JS <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [B.1. Inclure le JS dans la page](#b1-inclure-le-js-dans-la-page)
- [B.2. Tester la page](#b2-tester-la-page)

## B.1. Inclure le JS dans la page
**Incluez le fichier `src/main.js` dans le fichier `index.html`** à l'aide d'une balise `<script>`. (*Pour ouvrir le fichier dans vscodium, utilisez le raccourci* <kbd>CTRL</kbd>+<kbd>P</kbd> puis tapez simplement son nom)<br>

Pour rappel, il existe plusieurs manières d'intégrer du code JavaScript dans une page HTML :
- **en "inline"** c'est à dire directement dans les attributs d'une balise. Dans l'exemple ci-dessous, le code JS s'exécutera lorsque l'utilisateur cliquera sur le lien :
	```html
	<a href="#" onclick="alert('Welcome to Westeros');return false;">
		GOT
	</a>
	```
- **dans une balise `<script>`.** Le code s'exécute alors au chargement de la page, au moment où le navigateur arrive à cette ligne (le navigateur parse le document html de haut en bas):
	```html
	<script>alert('Bienvenue à Westeros');</script>
	```
- **dans une balise `<script>` avec un attribut `src`**. Dans ce cas le code JS peut alors être externalisé dans un fichier distinct. Le code s'exécute lorsque le fichier est chargé :
	```html
	<script src="westeros.js"></script>
	```
**C'est cette dernière technique que nous emploierons car elle permet de bien séparer les responsabilités de notre appli** (*HTML et JS séparés*).

**Attention :** Pour éviter que le chargement du fichier JS ne bloque le chargement de la page HTML (comportement par défaut), il existe 2 solutions :
- placer la balise `<script>` en toute fin de fichier html, juste **avant** la balise fermante `</body>`
- placer la balise `<script>` dans le `<head>` du fichier, mais y ajouter un attribut **`defer`** (cf. [doc](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-defer))

C'est cette dernière solution que je préconise car elle présente l'avantage de ne pas mélanger le contenu du document (le `<body>`) avec des informations annexes comme le chargement de scripts JS (qui relèvent plutôt du `<head>`) par ailleurs le support navigateur est très bon (IE10, Android 3+, iOS 5+, etc.)

<a href="https://caniuse.com/#feat=script-defer"><img src="https://caniuse.bitsofco.de/static/v1/script-defer-1589742247382.webp" /></a>

## B.2. Tester la page
**Testez la page pour vérifier que le js est correctement chargé** : Ouvrez les outils de développement de votre navigateur (touche <kbd>F12</kbd> sur Chrome) et ouvrez le panneau "Console".

Si le fichier `main.js` est correctement chargé, le texte `'welcome to REACTube !'` doit s'afficher dans la console. En effet, le fichier `main.js` contient l'instruction
```js
console.log('Welcome to REACTube !');
```

Cette instruction `console.log()` permet d'afficher du texte ou des variables dans la console.

**NB :** _Si le texte ne s'affiche pas, c'est probablement que le fichier `main.js` n'est pas correctement intégré dans la page html. <br>Ouvrez le panneau "Network"/"Réseau" des devtools puis rechargez la page en désactivant le cache navigateur : touche <kbd>CTRL</kbd>+<kbd>F5</kbd>, ou <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>R</kbd> selon les navigateurs. Assurez-vous que cette fois le fichier `main.js` figure bien dans la liste des fichiers téléchargés. Si ce n'est toujours pas le cas, c'est que votre balise `<script>` n'est pas correcte (vérifiez le chemin vers le fichier)._

**_Pour la suite du TP, tout le code se fera dans ce fichier `main.js`, le fichier html ne devra pas être modifié !_**

## Étape suivante <!-- omit in toc -->
Si tout fonctionne, vous pouvez passer à l'étape suivante : [C. Les devtools](C-devtools.md)