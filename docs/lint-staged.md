# 🚫💩 lint-staged ![GitHub Actions](https://github.com/okonet/lint-staged/workflows/CI/badge.svg) [![npm version](https://badge.fury.io/js/lint-staged.svg)](https://badge.fury.io/js/lint-staged) [![Codecov](https://codecov.io/gh/okonet/lint-staged/branch/master/graph/badge.svg)](https://codecov.io/gh/okonet/lint-staged)

Run linters against staged git files and don't let :poop: slip into your code base!

```bash
npm install --save-dev lint-staged # requires further setup
```

Basicamente este paquete sirve para pasar los linters a los archivos stageados, en vez de a todo el proyecto.
Para eso, necesitamos que se ejecute el lint-staged en un pre-commit hook.

El standard para manejar pre-commit hooks es el paquete Husky

Asi que cuando instalamos lint-staged tenemos la utilidad para usar los linters antes de comitear, pero
* Tenemos que configurar el lint-staged para decirle que linters ejecutar
* Tenemos que configurar el pre-commit, de primeras con Husky