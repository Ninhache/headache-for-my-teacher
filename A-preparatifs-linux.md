<img src="images/readme/header-small.jpg" >

# Installations et configuration Linux<!-- omit in toc -->
### (instructions spéciales Université de Lille)<!-- omit in toc -->

## Installation et configuration de Node

Les machines des salles TP de l'IUT disposent déjà de Node mais dans une version trop ancienne pour être utilisée dans ce cours.

Vous allez donc avoir besoin d'installer Node vous même, sans droit d'admin, dans votre session : **on va pour cela utiliser [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm).**

1. **Vérifiez si `nvm` n'est pas déjà installé** dans votre session (_si vous avez suivi les cours de JS de BUT2 normalement c'est le cas_):
	```bash
	nvm ls
	```
	Si la commande fonctionne, alors vous pouvez passer à l'étape suivante.
	Sinon, si elle retourne une erreur, c'est a priori que `nvm` n'est pas installé, donc **lancez l'install de `nvm`** :
	```bash
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
	```
	puis rechargez les variables d'environnement ajoutées par nvm :
	```bash
	source ~/.bashrc
	```
2. **Téléchargez et installez ensuite la version de Node que l'on souhaite** (_ici la 23_) grâce à nvm :
	```bash
	nvm install 23
	```
	> _**NB :** si la commande `nvm` n'est pas reconnue, tentez de fermer et relancer votre terminal. Si ça ne suffit pas, ajoutez les lignes suivantes à votre `.bashrc` :_
	> ```bash
	> export NVM_DIR="$HOME/.nvm"
	> [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
	> [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
	> ```
	> _Puis relancez_
	> ```bash
	> source ~/.bashrc
	> ```
3. **Vérifiez ensuite que la version de node est correcte** :
	```bash
	node -v
	```
	doit retourner `v23.3.0`


## Étape suivante <!-- omit in toc -->
Une fois tout installé, vous pouvez revenir aux préparatifs : [A.2. À propos de ce repo](A-preparatifs.md#a2-à-propos-de-ce-repo)