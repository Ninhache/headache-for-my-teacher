<img src="images/readme/header-small.jpg" >

# B. La fonction renderElement <!-- omit in toc -->

_**Nous allons développer dans ce TP une fonction nommée `renderElement` qui va permettre de générer du code HTML en JS.**_

A chaque étape du TP vous allez perfectionner cette fonction pour la rendre capable de gérer des paramètres supplémentaires.

> _**NB :** Dans ce TP vous coderez dans un premier temps directement dans le fichier `src/main.js` **sans compiler** votre code et **sans passer par des fichiers (modules) séparés**._
>
> _Dans la suite du TP on compilera notre code pour le rendre compatible avec tous les navigateurs, et on organisera notre code plus proprement en séparant les classes dans des modules différents._ \
> _Mais pour le moment on va simplifier la mise en place en remettant ça à plus tard (ne faites pas ça dans la vraie vie !)._

## Sommaire <!-- omit in toc -->
- [B.1. Rappels de syntaxe](#b1-rappels-de-syntaxe)
	- [B.1.1. Template strings](#b11-template-strings)
	- [B.1.2. Fonctions](#b12-fonctions)
- [B.2. La fonction renderElement](#b2-la-fonction-renderelement)

## B.1. Rappels de syntaxe

### B.1.1. Template strings

Comme vu dans le cours (*procurez vous le support pdf !*), ES6 a introduit une nouvelle syntaxe pour les chaînes de caractère appelée [**"template strings"** (_mdn_)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

Cette nouvelle syntaxe permet notamment :
- de déclarer des chaînes de caractères **multi-lignes**
- **mais surtout d'injecter dedans des valeurs** sans avoir besoin de faire de la concaténation :
	```js
	const lawyer = 'Saul';
	const critic = 'better';
	console.log(`Better call ${lawyer} is ${critic} than Breaking Bad`);
	```

### B.1.2. Fonctions

ES6 a également introduit une nouvelle syntaxe pour l'écriture des fonctions : les **["arrow functions" (_ou "fonctions fléchées" en français_)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions)**.

On a donc désormais 3 façons différentes d'écrire des fonctions en JS :

```js
function makeEpisode(hero) { // fonction nommée
	return `${hero} is dead !`;
}
// ou
const makeEpisode = function(hero) { //fonction anonyme
	return `${hero} is dead !`;
}
// ou
const makeEpisode = (hero) => { // arrow function ("lambda")
	return `${hero} is dead !`;
}
```

Ces 3 déclarations ont exactement le même effet : elles créent en mémoire une constante qui a le nom `"makeEpisode"` et qui contient une valeur de type [`Function` (_mdn_)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions). \
Elles s'appellent donc toutes les 3 de la même manière :

```js
const newEpisode = makeEpisode('Benjen Stark');
```

> _**NB :** A propos des arrow functions, notez qu'il est dans certains cas possible de simplifier l'écriture :_
> - _si le corps de la fonction ne contient qu'un return, on peut retirer les accolades et le mot clé return :_
> 	```js
> 	const makeEpisode = (hero) => `${hero} is dead !`;
>	```
> - _si la fonction ne prend qu'un seul paramètre, on peut retirer les parenthèses autour :_
> 	```js
> 	const makeEpisode = hero => `${hero} is dead !`;
>	```
> _A nouveau, aucun changement sur la façon d'appeler la fonction. C'est totalement transparent lors de l'appel : `const newEpisode = makeEpisode('Benjen Stark');`_

## B.2. La fonction renderElement
1. **Effacez tout le contenu du fichier `src/main.js`**.
2. **Ajoutez dans le fichier `index.html` une balise `<header>`** à l'intérieur de la balise `<div class="container">`, juste au dessus de la `<div class="videoList">`, comme ceci :
	```html
	<div class="container">
		<header></header> <!-- 👈 c'est cette balise qu'il faut ajouter -->
		<div class="videoList">
		</div>
	</div>
	```
3. **Dans le fichier `src/main.js` créez une fonction `renderElement` qui s'utilise de la manière suivante :**
	```js
	const title = renderElement( 'h1' );
	document.querySelector('.container > header').innerHTML = title;
	```
	+ la fonction **prend en paramètre une chaîne nommée `tagName`**
	+ elle **retourne une chaîne de caractères au format html**, qui représente une balise dont le type dépend du paramètre `tagName`.

		Par exemple si `tagName` vaut `'div'` alors `renderElement()` retournera la chaîne de caractères :
		```js
		'<div></div>'
		```
		Dans notre exemple plus haut, `tagName` vaut `'h1'`, `renderElement` retourne donc :
		```js
		'<h1></h1>'
		```
		> _**NB :** Je vous conseille d'utiliser les **template strings** dans cette fonction, cela vous permettra facilement d'injecter des valeurs dans votre chaîne et en plus de passer des lignes dans la chaîne de caractères pour rendre votre code plus lisible._

	**Vérifiez que votre fonction "fonctionne" correctement en inspectant le code généré par votre application avec l'Inspecteur d'éléments des devtools du navigateur.**

	> _**NB :** On passe par l'inspecteur d'éléments car visuellement à l'écran, c'est difficile de contrôler le rendu : rien ne s'affiche car notre balise `<h1>` est vide !_

	<img src="images/readme/screen-01-h1.png"/>


4. **Ajoutez un second paramètre à la fonction `renderElement`, nommé `children`.** Modifiez le code de la fonction de manière à ce que le code suivant :
    ```js
	const title = renderElement( 'h1', 'Recommandations' );
	document.querySelector('.container > header').innerHTML = title;
	```
	Injecte dans la page le code suivant :
	```js
	'<h1>Recommandations</h1>'
	```

	Contrôlez que le rendu est bien conforme à la capture suivante :

	<img src="images/readme/screen-01.png" >

5. **Modifiez le fonctionnement de la fonction pour prendre en compte le cas où `children` est vide** (`null` ou `undefined`). Par exemple si j'appelle `renderElement` comme ceci :
	```js
	const img = renderElement( 'img' );
	```
	`renderElement` doit retourner `<img />` (_une balise "auto fermante", c'est à dire sans enfants_) et pas `<img></img>` (_car ce n'est pas un code HTML valide selon la spec du W3C_).

	**Testez votre fonction en ajoutant dans le `main.js`** (_conservez le code de title, on en aura encore besoin_) :
	```js
	const img = renderElement( 'img' );
	document.querySelector( '.videoList' ).innerHTML = img;
	```
	Vérifiez dans **l'inspecteur d'éléments** que votre image est bien ajoutée dans `videoList` :

	> _**NB :** Comme tout à l'heure avec le `h1`, on passe par l'inspecteur d'éléments car visuellement à l'écran, c'est difficile de contrôler le rendu : aucune image ne s'affiche car on n'a pas précisé ni de source ni de taille à l'image !_

	> _**NB2 :** Selon votre navigateur il est possible que l'inspecteur d'éléments n'affiche que `<img>` et pas `<img />`. C'est une simplification faite par les devtools, mais ça ne veut pas dire que votre code ne fonctionne pas. Testez donc votre code avec `console.log(img)`, là vous saurez avec certitude si votre méthode retourne bien `<img />`._

	<img src="images/readme/screen-02-inspecteur.png">

6. **Ajoutez un paramètre `attribute` en 2e position de la fonction `renderElement` :**

	La signature de la fonction sera désormais :
	```js
	renderElement( tagName, attribute, children ) {
	```
	> _**NB :** comme on modifie la signature de la fonction, la création de `title` n'est plus correcte (on passe seulement 2 paramètres à la fonction, le `children` se retrouve donc à la place du `attribute`). Pour régler le problème, vous avez le droit de modifier la création de `title` en passant `null` au paramètre `attribute`._

	**Modifiez donc la fonction `renderElement()` pour prendre en compte ce nouveau paramètre `attribute`**. On considère que ce paramètre aura toujours la forme d'un objet littéral avec deux propriétés : `name` et `value`. C'est à dire que si le paramètre `attribute` a été fourni comme ceci :

	```js
	const img = renderElement( 'img', {name:'src', value:'https://source.unsplash.com/wOHH-NUTvVc/600x340'} );
	```

	alors `img` doit contenir le code suivant :
	```html
	<img src="https://source.unsplash.com/wOHH-NUTvVc/600x340" />
	```

	Testez ce nouveau code, le rendu devra cette fois être :

	<img src="images/readme/screen-02.png">

## Étape suivante <!-- omit in toc -->
Maintenant que notre fonction `renderElement` est bien avancée, il est l'heure de répartir notre code dans différents fichiers à l'aide des modules ! RDV donc dans la partie suivante : [C. Modules](./C-modules.md)