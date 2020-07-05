<img src="images/readme/header-small.jpg" >

# B. POO <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [B.1. Rappels de syntaxe](#b1-rappels-de-syntaxe)
	- [B.1.1. class & propriétés publiques](#b11-class-propriétés-publiques)
	- [B.1.2. méthodes](#b12-méthodes)
- [B.2. La classe Component](#b2-la-classe-component)
- [B.3. Héritage : La classe Img](#b3-héritage-la-classe-img)
- [Étape suivante](#étape-suivante)

***NB* : Dans ce TP vous coderez dans un premier temps vos classes directement dans le fichier `src/main.js` sans compiler votre code et sans passer par des fichiers (modules) séparés.**

Dans la suite du TP on compilera notre code pour le rendre compatible avec tous les navigateurs, et on organisera notre code plus proprement en séparant les classes dans des modules différents.

Mais pour le moment on va simplifier la mise en place en remettant ça à plus tard (*ne faites pas ça dans la vraie vie !*).

## B.1. Rappels de syntaxe
### B.1.1. class & propriétés publiques
Comme vu dans le cours (*procurez vous le support pdf sur moodle !*) ES6 a introduit une nouvelle syntaxe pour la création de classes. Finis les `prototypes`, désormais le mot clé `class` fait son apparition et permet une d'utiliser syntaxe plus proche de ce qui se fait dans les autres langages objets :
```js
class Animal {
	constructor( name ){
		this.name = name;
	}
}
const threeEyedRaven = new Animal( 'Bran' );
```
La création de propriétés d'instances se fait par l'utilisation du mot clé `this` dans le constructeur : `this.name = name;` permet de créer une propriété `name` sur l'instance en cours de création et de lui assigner la valeur passée au constructeur via l'instruction `new Animal( 'Bran' );`.

On peut ensuite accéder aux propriétés de l'objet en utilisant la notation pointée :
```js
console.log( threeEyedRaven.name );
```
Il est possible également de déclarer les propriétés d'instance en dehors du constructeur de cette manière :
```js
class Animal {
	name;
	constructor( name ){
		this.name = name;
	}
}
```
Attention cependant, cette notation n'est pas encore dans la spec officielle d'EcmaScript (la spec suivie par JavaScript) mais a des chances d'être intégrée dans la version 2020 d'EcmaScript (ES11) : cf. https://github.com/tc39/proposal-class-fields et https://tc39.github.io/proposal-class-fields/

Pour pouvoir l'utiliser avec Babel, il faudra modifier légèrement la configuration de Babel (cf. chapitre suivant).

### B.1.2. méthodes
La création de méthodes d'une classe se fait de la manière suivante :
```js
class Animal {
	constructor( name ){
		this.name = name;
	}
	fly() { // déclaration de méthode
		console.log(`${this.name} is flying !`);
	}
}
const threeEyedRaven = new Animal( 'Bran' );
```
Pour appeler la méthode, on utilise simplement la notation pointée :
```js
threeEyedRaven.fly();
```

## B.2. La classe Component
1. **Effacez tout le contenu du fichier `src/main.js`**.
2. **Ajoutez dans le fichier `index.html` une balise `<header>`** à l'intérieur de la section `<div class="container">` comme ceci :
	```html
	<div class="container">
		<header></header>
		<div class="videoList">
		</div>
	</div>
	```
3. **Dans le fichier `src/main.js` créez une classe `Component` qui s'utilise de la manière suivante :**
	```js
	const title = new Component( 'h1' );
	document.querySelector('.container > header').innerHTML = title.render();
	```
	+ **le constructeur** prend en paramètre une chaîne nommée `tag` pour le moment simplement sauvegardé dans une propriété de l'instance: `this.tag`
	+ **la classe dispose d'une méthode `render()`**.

  		Cette méthode retourne une chaîne de caractères au format html qui correspond à une balise dont le type dépend de l'attribut `tag` passé au constructeur.

		Par exemple si `tag` vaut `'div'` alors `render()` retournera la chaîne de caractères :
		```js
		'<div></div>'
		```
		Dans notre exemple plus haut, `tag` vaut `'h1'`, `render()` retourne donc :
		```js
		'<h1></h1>'
		```

	**Vérifiez que votre classe fonctionne correctement en inspectant le code généré par votre application avec l'Inspecteur d'éléments des devtools du navigateur.**

	***NB :** Utilisez les template strings pour cette méthode et pensez à passer des lignes dans la chaîne de caractères pour rendre votre code plus lisible.*

4. **Ajoutez un second paramètre au constructeur, nommé `children`.** Modifiez le code de la méthode render() de manière à ce que le code suivant :
    ```js
	const title = new Component( 'h1', 'Recommandations' );
	document.querySelector('.container > header').innerHTML = title.render();
	```
	Injecte dans la page le code suivant :
	```js
	'<h1>Recommandations</h1>'
	```

	Contrôlez que le rendu est bien conforme à la capture suivante : <br><a href="images/readme/screen-01.png"><img src="images/readme/screen-01.png" ></a>

5. **Modifiez le fonctionnement de la méthode render pour prendre en compte le cas où `children` est vide** (`null` ou `undefined`). Par exemple si je crée un Component de ce style :
	```js
	const img = new Component( 'img' );
	```
	`render()` doit retourner `<img />` et pas `<img></img>` (*car ce n'est pas un code HTML valide selon la spec du W3C*).

	**Testez votre classe comme ceci** :
	```js
	const img = new Component( 'img' );
	document.querySelector( '.videoList' ).innerHTML = img.render();
	```
	Vérifiez dans l'inspecteur d'éléments que votre image est bien ajoutée dans `videoList`. (*NB. Visuellement, difficile de contrôler le rendu : aucune image ne s'affiche car on n'a pas précisé ni de source ni de taille à l'image !*)

6. **Ajoutez un paramètre `attribute` en 2e position du constructeur de la classe `Component`  : enregistrez ce paramètre dans une propriété d'instance `this.attribute`.**

	La signature du constructeur sera désormais :
	```js
	constructor( tagName, attribute, children ) {
	```

	**Modifiez la méthode `render()` pour prendre en compte le paramètre `attribute`**. On considère que ce paramètre aura toujours la forme d'un objet littéral avec deux propriétés : `name` et `value`. Si le paramètre `attribute` a été fourni au constructeur comme ceci :

	```js
	const img = new Component( 'img', {name:'src', value:'https://source.unsplash.com/wOHH-NUTvVc/600x340'} );
	```

	`render()` doit retourner le code suivant :
	```html
	<img src="https://source.unsplash.com/wOHH-NUTvVc/600x340" />
	```
	*Pour ne pas alourdir trop le code de la méthode render() je vous recommande de créer une nouvelle méthode `renderAttribute()` -appelée dans la méthode `render()`- qui va être en charge du rendu de l'attribut html.*

	Testez ce nouveau code, le rendu devra cette fois être :<br><a href="images/readme/screen-02.png"><img src="images/readme/screen-02.png" ></a>

## B.3. Héritage : La classe Img
1. **Créez maintenant une nouvelle classe `Img`** qui hérite de `Component` et dont le constructeur s'utilise comme ceci :
	```js
	const img = new Img('https://source.unsplash.com/wOHH-NUTvVc/600x340');
	```
	Testez le résultat de ce composant à l'aide de l'instruction :
	```js
	document.querySelector( '.videoList' ).innerHTML = img.render();
	```
	Le rendu doit être identique à la capture précédente : <br><a href="images/readme/screen-02.png"><img src="images/readme/screen-02.png" ></a>

## Étape suivante
Si vous avez terminé cette partie sur la POO, il est l'heure de compiler notre code avec Babel. RDV dans la partie suivante : [C. Compiler avec Babel](./C-babel.md)