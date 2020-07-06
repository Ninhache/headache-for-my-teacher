<img src="images/readme/header-small.jpg" >

# E. Pour aller plus loin : POO avancée <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [E.1. *Composition :* La classe VideoItem](#e1-composition-la-classe-videoitem)
- [E.2. *Composition :* La classe VideoList](#e2-composition-la-classe-videolist)
- [E.3. *Propriétés et méthodes statiques :* La classe PageRenderer](#e3-propriétés-et-méthodes-statiques-la-classe-pagerenderer)
- [E.4. *Setter & Getter :* La propriété `videos`](#e4-setter-getter-la-propriété-videos)

***Si vous êtes arrivé à cette partie du TP bravo* ! 🎉🥂😎 *Vous avez terminé les exercices de base du TP !***

Cette partie bonus du TP va vous permettre de perfectionner encore votre maîtrise de la POO en JS et notamment de travailler sur les concepts de composition, sur les méthodes et propriétés privées, statiques, et sur les méthodes get/set.

**C'est parti !**

## E.1. *Composition :* La classe VideoItem

***L'objectif de cet exercice est d'utiliser une classe à l'intérieur d'une autre. On va se servir de la classe `Img` développée précédemment à l'intérieur d'un nouveau composant : `VideoItem`.***

1. **Modifiez le code de la méthode `render()`** de la classe `Component` pour lui permettre de recevoir dans le paramètre `children` :
	- soit une **chaîne de caractères** (comme c'est déjà le cas actuellement)
	- soit un **tableau de chaînes de caractères.** <br>Par exemple : si `tag` vaut `"div"` et que `children` vaut `[ "youpi", "ça", "marche" ]` alors `render()` retournera la chaîne `"<div>youpiçamarche</div>"`.

	***NB :** Pour ne pas alourdir trop le code de la méthode `render()` et pour avoir un code plus lisible, passez le code de rendu des enfants, dans une méthode `renderChildren()`.*

	Pour tester si `children` est un tableau (classe `Array`), vous pouvez utiliser l'opérateur `instanceof` cf. https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/instanceof

	Testez votre classe avec le code suivant :
	```js
	const title = new Component( 'h1', null, ['Vos', ' ', 'recommandations'] );
	document.querySelector('.container > header').innerHTML = title.render();
	```

2. **Adaptez la méthode `render()`** pour permettre de passer dans `children` non seulement des chaînes de caractères comme c'est déjà le cas mais aussi **d'autres `Component`**, comme ceci :
	```js
	const c = new Component(
		'a',
		{name:'href', value:'uploads/video1.mp4'},
		[
			new Img('https://source.unsplash.com/L8KQIPCODV8/600x340'),
			'Le Top 10 des framework JS'
		]
	);
	document.querySelector( '.videoList' ).innerHTML = c.render();
	```
	Pour cela, la méthode `renderChildren()` devra maintenant tester le type de chaque enfant :
	- si cet enfant est lui-même une instance de Component, on fait alors appel à la méthode `render()` du `Component` enfant (petit indice : ça ressemble quand même beaucoup au concept de "récursivité"...)
	- si l'enfant est une chaîne de caractères, alors la chaîne est ajoutée telle qu'elle, comme auparavant

	Pour tester si un enfant est de la classe `Component`, vous pouvez là aussi utiliser l'opérateur `instanceof` cf. https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/instanceof

	Si votre code fonctionne correctement, vous devez avoir le rendu suivant :<br><a href="images/readme/screen-03.png"><img src="images/readme/screen-03.png" ></a>

3. **Créez une classe `VideoItem`** (dans `src/VideoItem.js`) qui hérite de la classe `Component` et qui utilise **obligatoirement** la classe **`Img`** pour rendre son code HTML.

	Avec le code JS suivant :
	```js
	const video = {
		title:'Le Top 10 des frameworks JS',
		description:'Vous n\'en croirez pas vos yeux',
		file: 'video1.mp4',
		thumbnail: 'L8KQIPCODV8'
	};
	const videoItem = new VideoItem(video);
	document.querySelector( '.videoList' ).innerHTML = videoItem.render();
	```
	... le code HTML généré sera :
	```html
	<a href="uploads/video1.mp4">
		<img src="https://source.unsplash.com/L8KQIPCODV8/600x340" />
		<section class="infos">
			<h4>Le Top 10 des framework JS</h4>
			<p>Vous n'en croirez pas vos yeux</p>
		</section>
	</a>
	```
	... et le rendu obtenu dans la page sera celui-ci :

	<a href="images/readme/screen-04.png"><img src="images/readme/screen-04.png" ></a>

## E.2. *Composition :* La classe VideoList

***Après un exemple simple de composition, attaquons nous à un cas plus complexe : celui de la `VideoList`.***

Cette classe va nous permettre d'afficher plusieurs vignettes côte à côté grâce au composant `VideoItem` créé précédemment.

1. **Créez un module `src/data.js` dans lequel vous exporterez le tableau suivant :**
	```js
	[
		{
			id: 1,
			title:'Le Top 10 des frameworks JS',
			description:'Vous n\'en croirez pas vos yeux',
			file: 'video1.mp4',
			thumbnail: 'L8KQIPCODV8'
		},
		{
			id: 2,
			title:'5 bonnes raisons de ne pas fuir cette formation',
			description:'Vous allez halluciner ! Cliquez vite !',
			file: 'video2.mp4',
			thumbnail: 'umyvrlx0ma8'
		},
		{
			id: 3,
			title:'Les plus grands secrets des développeurs React',
			description:'Cliquez et découvrez avant les autres ces astuces incroyables !',
			file: 'video3.mp4',
			thumbnail: 'L1ijLaihN2A'
		},
		{
			id: 4,
			title:'Votre DSI ne veut pas que vous voyiez cette vidéo !',
			description:'Les experts sont formels : cette méthode de développement mystérieuse va changer votre vie.',
			file: 'video4.mp4',
			thumbnail: 'XIVDN9cxOVc'
		},
		{
			id: 5,
			title:'Les gens vous supplieront de développer leur appli !',
			description:'Visionnez cette vidéo au plus vite et apprenez les 1022 méthodes de développement les plus rentables.',
			file: 'video5.mp4',
			thumbnail: 'E9ANYNkN4Sc'
		},
		{
			id: 6,
			title:'Les 12 techniques imparables pour rater un café',
			description:'Vous en avez marre de tout réussir ? Ratez aux moins les cafés grâce à cette vidéo inédite !',
			file: 'video6.mp4',
			thumbnail: 'uwIJbtLpvV4'
		}
	]
	```
2. **Dans le fichier `index.html`, changez le nom de la classe CSS de la balise `<div class="videoList">` en `<div class="page">`**. C'est la `VideoList` qui sera chargée de créer, à l'intérieur de `<div class="page">`, la `<div class="videoList">`.
2. **Créez enfin la classe `VideoList` dans le fichier `src/VideoList.js` ** :
	- cette classe hérite de `Component`
	- instanciez la dans `src/main.js` comme ceci :
		```js
		// `data` est le tableau défini dans `src/data.js`
		const videoList = new VideoList(data);
		document.querySelector( '.page' ).innerHTML = videoList.render();
		```
	-  pour chaque cellule du tableau `data`, le composant `VideoList` créera un composant `VideoItem` associé
	-  le code HTML retourné par la méthode `render()` sera une balise `<div class="videoList">` dans laquelle sera injectée la combinaison du `render()` de chaque `VideoItem`

	***NB:** en théorie, un simple override du constructor et l'utilisation de la méthode [Array.map](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map) doivent suffire !*

	Le résultat attendu est le suivant :<br><a href="images/readme/screen-05.png"><img src="images/readme/screen-05.png" ></a>

## E.3. *Propriétés et méthodes statiques :* La classe PageRenderer

Pour rappel les proriétés et méthodes statiques peuvent se déclarer à l'aide du mot clé `static`. Ces propriétés/méthodes sont définies et s'utilisent au niveau de la classe (et pas de l'instance) comme ceci :

```js
class Counter {
    static counter = 0;
    static getCounter() {
        return this.counter++;
    }
}

console.log(
	Counter.getCounter(),   // 0
	Counter.counter,        // 1
	Counter.getCounter(),   // 1
	Counter.counter,        // 2
);
```

Dans cet exercice je vous propose aussi d'utiliser une syntaxe que l'on n'a pas encore abordé en cours qui est celle des **propriétés et méthodes privées**.

Pour déclarer et utiliser des propriétés ou méthodes privées il suffit de les préfixer du caractère `'#'`comme ceci :

```js
class Animal {
	name = 'unknown'; // propriété publique
	#canFly = false; // propriété privée (#)
	constructor(name) {
		this.name = name;
		this.#canFly = (name == 'Bran');
	}
}
```

Le support des propriétés et méthodes privées est en stage 3/4 de spécification. Ce n'est donc pas encore dans la spec EcmaScript officielle. Néanmoins il est possible de les utiliser grâce à au plugin Babel [@babel/plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) que l'on a déjà installé précédemment (c'est le même que pour les propriétés publiques).

Si vous vous demandez pourquoi on écrit `#propriete` et pas `private propriete` comme dans d'autres langages, la réponse se trouve ici : https://github.com/tc39/proposal-class-fields/blob/master/PRIVATE_SYNTAX_FAQ.md#why-arent-declarations-private-x

1. **Créez une classe `Page`** (dans un module `src/Page.js`)  :
	- qui hérite de `Component`
	- dont le constructeur reçoit comme paramètres: title (string), className (string) et children
	- `title` sera enregistré dans une propriété d'instance privée
	- la classe dispose d'une méthode `renderTitle()` qui retourne le titre passé au constructeur entouré d'une balise `<h1>...</h1>`
2. **Modifiez la classe `VideoList` pour la faire hériter de `Page`.** Son titre sera `'Recommandations'`, son `className` "videoList".
3. **Créez une classe `PageRenderer`** (dans un module `src/PageRenderer.js`) avec :
	- une propriété statique `titleElement`
	- une propriété statique `contentElement`
	- une méthode statique `renderPage( page )` qui affiche dans `titleElement` le résultat de l'appel à la méthode `page.renderTitle()` et dans contentElement le résultat de l'appel à la méthode `page.render()` de la page passée en paramètre.
4. **Dans le `main.js`, renseignez les valeurs de `titleElement` et `contentElement` comme ceci :**

	```js
	PageRenderer.titleElement = document.querySelector('.container > header');
	PageRenderer.contentElement = document.querySelector('.page');
	```
5. **Affichez enfin la `VideoList` grâce à la classe `PageRenderer`**


## E.4. *Setter & Getter :* La propriété `videos`

A l'aide des propriétés privées, des getters et des setters, faire en sorte que le code suivant permette d'afficher la liste des vidéos :
```js
const videoList = new VideoList([]);
PageRenderer.renderPage( videoList ); // affiche une page vide
videoList.videos = data;
PageRenderer.renderPage( videoList ); // affiche la liste des vidéos
```

**C'est la fin de ce TP, rendez-vous très vite pour le prochain chapitre !**