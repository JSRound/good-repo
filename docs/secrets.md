# Secrets

Hay una pagina que busca secretos en tus repositorios [GitGuardian](https://www.gitguardian.com/)
[GitGuardian Dashboard](https://dashboard.gitguardian.com/)

Curiosamente, aunque los secretos que te marca en el repositorio se pueden eliminar con un rebase squash, los commits siguen estando en la historia de Github.
Para solucionarlo
[Rewriting your git history, removing files permanently [cheat sheet included]](https://blog.gitguardian.com/rewriting-git-history-cheatsheet/)

Hay una herramienta para borrar determinados commits o ficheros del repositorio
[git-filter-repo](https://github.com/newren/git-filter-repo)

De todas formas, algunos commits se quedan borrados pero en la memoria de Github online.
La unica manera de momento de solucionarlo es borrar el repositorio (manteniendo el repositorio local!!!!) y pushear despues.