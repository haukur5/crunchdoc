# GIT

//               Git strategy tree              //

                         Main
                          |
                      Development
                     |     |     |
              features/  bugfix/ refactor/

// Our strategy :
When working on features, bugfixes or refactoring we create our own branches using git checkout -b features/*featurename* for example. Then we commit, create pull requests and push to the dev branch. We only use main to create a pull request when we're ready to turn in.



## Routing

This project uses a small custom hash-based router instead of an external routing library.

Routes are handled in `src/router.js`. The router stores each route in a `Map`, listens for changes in the browser hash, and renders the matching page inside the `#app` element.

Example routes:

```txt
#/              Home page
#/crunch        crunch() documentation
#/addClass      addClass() documentation
#/removeClass   removeClass() documentation
#/toggleClass   toggleClass() documentation
#/attr          attr() documentation
#/text          text() documentation
...
```

Program starts in src/main.js
```txt
main.js:
- registerMethodPages();
- renderSidebar();
- Router.mount(document.getElementById("app"));
```

Each method page is imported into the METHODS array:
```txt
export const METHODS = [
  crunchMethod,
  siblingsMethod,
  ancestorMethod,
  addClassMethod,
  removeClassMethod,
  toggleClassMethod,
  attrMethod,
  textMethod,
];
```

URLs look like this:
```txt
#/              home page
#/addClass      addClass method page
#/siblings      siblings method page
#/text          text method page
```

Each method object contains routing information
Example:
```txt
{
  key: "addClass",
  path: "/addClass",
  label: "addClass",
  title: "addClass()"
}
```
Router uses the path value to decide which page to show.
Example:
```txt
#/addClass
```

Main routing:
```txt
index.html → src/main.js → registerMethodPages() → Router.register(...) → Router.mount(...)
```
