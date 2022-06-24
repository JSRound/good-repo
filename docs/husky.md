# Husky

> Modern native git hooks made easy

Husky improves your commits and more 🐶 woof!

You can use it to lint your commit messages, run tests, lint code, etc... when you commit or push. Husky supports [all Git hooks.](https://git-scm.com/docs/githooks)


<details><summary>Features</summary>


* Zero dependencies and lightweight (6 kB)
* Powered by modern new Git feature (core.hooksPath)
* Follows npm and Yarn best practices regarding autoinstall
* User-friendly messages
* Optional install
* Like husky 4, supports
    * macOS, Linux and Windows
    * Git GUIs
    * Custom directories
    * Monorepos
</details>
Bueno, todo esto esta genial pero como lo usamos.
Primero lo instalamos. Despues inicializamos el repositorio. Parece ser que hay un comando que hace todo en uno.
`husky-init` is a one-time command to quickly initialize a project with husky.

```npx husky-init && npm install       # npm```

Vale, ya lo tenemos creado y se supone que podemos hacer algo con Husky.
It will setup husky, modify package.json and create a sample pre-commit hook that you can edit. By default, it will run npm test when you commit.

To add another hook use husky add

Vamos a ver que trucos le ense;amos al perro.
Es hora de probar al husky.

