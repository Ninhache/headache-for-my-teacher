<img src="images/readme/header-small.jpg" >

# C. Serveur API REST <!-- omit in toc -->

**_Durant les TPs nous aurons à connecter notre application React à une API REST fournie ici : https://framagit.org/formation/react/api-server_**

Ce serveur (basé sur [Express.js](http://expressjs.com/)) offre une API REST minimaliste mais qui va être suffisante pour connecter notre appli React à une base de données [SQLite](https://sqlite.org/index.html) générée à la volée.

1. **Commencez par cloner le serveur :**
	```bash
	git clone https://framagit.org/formation/react/api-server.git ~/tps-react/api-server
	```
2. **Installez ensuite les dépendances du serveur :**
	```bash
	cd ~/tps-react/api-server
	npm i
	```

	_**NB :** Si cette commande déclenche une erreur en rapport avec node-gyp et que vous êtes sur windows, installez les `windows-build-tools` en ouvrant un terminal **en mode administrateur** et en lançant la commande :_
	```bash
	npm install --global --production --verbose windows-build-tools
	```

	_Patientez 5 ~ 10 minutes que tout s'installe, fermez vos terminaux ouverts (pour mettre à jour le PATH), relancez un terminal, puis retentez d'installer le serveur._

	_Si jamais l'installation de `windows-build-tools` bloque sur la ligne **"Successfully installed Python 2.7"** pendant plus de 5 ~ 10 minutes, vous pouvez tenter la manipulation décrite sur cette issue github pour débloquer l'install : https://github.com/felixrieseberg/windows-build-tools/issues/172#issuecomment-484091133_

3. **Lancez le serveur à l'aide de la commande :**
	```bash
	npm start
	```
	_**NB :** attention de bien lancer cette commande dans le dossier `api-server`_

4. **Vérifiez que la base de données SQLite a bien été créée** en vérifiant qu'un fichier `server/db.sqlite` figure bien maintenant dans le projet.

5. **Enfin, assurez vous du bon fonctionnement de l'API REST en ouvrant l'URL http://localhost:8080/api/videos dans votre navigateur.** Si tout se passe bien vous devez voir un JSON s'afficher avec des vidéos dedans !

	<a href="images/screen/screen-01.png"><img src="images/readme/screen-01.png" ></a>

## Étape suivante <!-- omit in toc -->
Si tout fonctionne, vous pouvez passer à la dernière étape : [D. Les devtools](D-devtools.md)