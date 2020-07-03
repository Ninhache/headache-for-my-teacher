<img src="images/readme/header-small.jpg" >

# B. Intégration du JS <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [B.1. Inclure le JS dans la page](#b1-inclure-le-js-dans-la-page)
- [B.2. Tester la page](#b2-tester-la-page)

## A.3. Lancement de l'API REST

Durant les TPs nous aurons à connecter notre application React à une API REST fournie ici : https://framagit.org/formation/react/api-server

Ce serveur (basé sur [Express.js](http://expressjs.com/)) offre donc une API REST minimaliste mais qui va être suffisante pour connecter notre appli React à une base de données [SQLite](https://sqlite.org/index.html) générée à la volée.


1. **Commencez par cloner le serveur :**
	```bash
	git clone https://framagit.org/formation/react/api-server.git ~/tps-react/api-server
	```
2. **Installez ensuite les dépendances du serveur :**
	```bash
	cd ~/tps-react/api-server
	npm i
	```

	***NB :** Si cette commande déclenche une erreur en rapport avec node-gyp et que vous êtes sur windows, installez les `windows-build-tools` en ouvrant un terminal **en mode administrateur** et en lançant la commande :*
	```bash
	npm install --global --production --verbose windows-build-tools
	```
	*Patientez 5 ~ 10 minutes que tout s'installe, fermez VSCodium, relancez le, puis retentez d'installer le serveur.*

3. **Lancez ensuite le serveur à l'aide de la commande :**
	```bash
	npm start
	```
	***NB :** attention de bien lancer cette commande dans le dossier `api-server`

4. **Vérifiez que la base de données SQLite a bien été créée** en vérifiant qu'un fichier `server/db.sqlite` a bien été créé.

5. **Enfin, assurez vous du bon fonctionnement de l'API REST en ouvrant l'URL http://localhost:8080/api/videos dans votre navigateur.** Si tout se passe bien vous devez voir un JSON s'afficher avec des vidéos dedans !

	<a href="images/screen/screen-01.png"><img src="images/readme/screen-01.png" ></a>

## Étape suivante <!-- omit in toc -->
Si tout fonctionne, vous pouvez passer à l'étape suivante : [D. Les devtools](D-devtools.md)