# Release Please

Para que sirve esto y por que es tan genial? Por que es lo PRIMERO que tenemos que tener en cuenta a la hora de crear un repositorio con buenas practicas?

Hay que tenerlo en cuenta lo primero porque tenemos que escribir los commits siguiendo las especificacion [Conventional Commit messages](https://www.conventionalcommits.org/) para que se puedan rellenar las notas de la release.

Release Please automates CHANGELOG generation, the creation of GitHub releases, and version bumps for your projects.

It does so by parsing your git history, looking for [Conventional Commit messages](https://www.conventionalcommits.org/), and creating release PRs.

## Que es lo fundamental que hay que saber acerca de los Conventional Commit Messages?
The commit message should be structured as follows:
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit contains the following structural elements, to communicate intent to the consumers of your library:

1. fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
2. feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
3. BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.
4. types other than fix: and feat: are allowed, for example @commitlint/config-conventional (based on the the Angular convention) recommends build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, and others.
5. footers other than BREAKING CHANGE: <description> may be provided and follow a convention similar to git trailer format.


Additional types are not mandated by the Conventional Commits specification, and have no implicit effect in Semantic Versioning (unless they include a BREAKING CHANGE). A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., feat(parser): add ability to parse arrays.

## What's a Release PR? Y por que me deberia importar?

Rather than continuously releasing what's landed to your default branch, release-please maintains Release PRs:

These Release PRs are kept up-to-date as additional work is merged. When you're ready to tag a release, simply merge the release PR. Both squash-merge and merge commits work with Release PRs.

Entonces, que pasa cuando mergeamos la PR para crear una nueva release??

* Updates your changelog file (for example CHANGELOG.md), along with other language specific files (for example package.json).
* Tags the commit with the version number
* Creates a GitHub Release based on the tag

You can tell where the Release PR is its lifecycle by the status label on the PR itself:

* autorelease: pending is the initial state of the Release PR before it is merged
* autorelease: tagged means that the Release PR has been merged and the release has been tagged in GitHub
* autorelease: snapshot is special state for snapshot version bumps
* autorelease: published means that a GitHub release has been published based on the Release PR (release-please does not automatically add this tag, but we recommend it as a convention for publication tooling).
