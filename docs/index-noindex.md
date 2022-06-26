# [To index.js or not to index.js?](https://www.reddit.com/r/javascript/comments/7rv221/to_indexjs_or_not_to_indexjs/)

## What can be wrong?
First, we need to understand what can be wrong when we create an index.js to require a path to a folder instead of a file.

* [Why you should avoid index.js?](https://medium.com/@alonmiz1234/why-you-should-avoid-index-js-3321a9902120)
* [Why you should stop using index files](https://josselinbuils.me/blog/stop-using-index-files)
* [How to use index.js file(Properly)](https://dev.to/fahadaminshovon/-how-to-use-indexjs-fileproperly-302f)
* [Don’t dynamically import code in a directory](https://itnext.io/dont-dynamically-import-code-in-a-directory-838cedf9534a)

## Advantages
So, once we know what can be wrong, we can avoid all the pitfalls of using `index.js`.And probably there are some advantages of using `index.js` files.

* It allows to change the structure of the files inside the folder no changing anything from outside the folder.
* It allows to create a logical structure of dependencies.
<details>
<summary>Encapsulation</summary>
</br>
Index.js is not about having to type out slightly shorter file names.

It is about encapsulation.

The idea is that your directories should have files and classes or services or whatever you want it have but everything this is public should be exported or exposed in the index.js

The idea is to never require a file from inside another directory directly as whatever it exposes should be that "package" 's internals and are private.

Of course this is not enforced in JavaScript, but it is important for writing clean, well organised code.

Of course on small projects it is annoying. Especially if you only have one or two files.

Carry on.
</details>


## Conclusion

On the safe side, creating a file with different name than index.js to collect all the exported item is the best solution. 

However, there is no a stardard apart from index.js for javascript, so this is the best solution (always checking for circular dependency issues). Pending to look for a linter to avoid circular dependency issues.

* [How to fix nasty circular dependency issues once and for all in JavaScript & TypeScript](https://medium.com/visual-development/how-to-fix-nasty-circular-dependency-issues-once-and-for-all-in-javascript-typescript-a04c987cf0de)   
* [Import/no-cycle](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md#:~:text=Ensures%20that%20there%20is%20no,maxDepth%20option%20is%20not%20set.)   
* [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)   
* [Eliminate Circular Dependencies from Your JavaScript Project](https://spin.atomicobject.com/2018/06/25/circular-dependencies-javascript/)   
</br>
> Eslint. [we have 2 rules to handle this already](https://github.com/import-js/eslint-plugin-import/issues/941#issuecomment-401778337_)
>
>  * import/no-cycle
>
>  * import/no-self-import

## Index.js implementations

* ES6
  * [Export Multiple Components in Index File](https://dev.to/cyishere/export-multiple-components-in-index-file-el3)
  * [Re-export values from another file in JavaScript](https://bobbyhadz.com/blog/javascript-export-from-another-file)
  * [How to require all files in a folder with Node.js?](https://thewebdev.info/2022/02/26/how-to-require-all-files-in-a-folder-with-node-js/)
* Flutter
  * view.dart

## Tools
* [create-index](https://github.com/gajus/create-index)