# Crunch.js Project
This project is a small documentation and demo website for `crunch.js`, a custom JavaScript DOM utility library inspired by jQuery.
The website demonstrates each available `crunch()` method with a description, syntax example, and live interactive demo.

## Team
```txt
Kristinn Daníel Gunnarsson - kristinng24
Elís Már Guðvarðsson - elisg24
Haukur Valdimarsson - haukurv24
```

## Features
The project currently documents and demonstrates the following methods:

- `crunch()`
- `siblings()`
- `ancestor()`
- `animate()`
- `validation()`
- `addClass()`
- `removeClass()`
- `toggleClass()`
- `on()`
- `append()`
- `prepend()`
- `remove()`
- `first()`
- `last()`
- `attr()`
- `text()`

## Project Structure
```txt
src/
├── components/
│   ├── addClass.js
│   ├── ancestor.js
│   ├── animate.js
│   ├── append.js
│   ├── attr.js
│   ├── crunch.js
│   ├── first.js
│   ├── last.js
│   ├── methodTemplate.js
│   ├── on.js
│   ├── prepend.js
│   ├── remove.js
│   ├── removeClass.js
│   ├── siblings.js
│   ├── text.js
│   ├── toggleClass.js
│   └── validation.js
├── styles/
│   ├── base.less
│   ├── main.less
│   └── variables/
│       ├── colors.less
│       └── screensize.less
├── crunch.js
├── main.js
└── router.js
```

## How to Run the Project
install dependencies:
```txt
npm install
```
Start the development server:
```txt
npm run dev
```
Build the project:
```txt
npm run build
```
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

Routes are handled in:
```txt
src/router.js
```
The router stores each route in a Map, listens for changes in the browser hash, and renders the matching page inside the #app element.

Example routes:
```txt
#/              Home page
#/crunch        crunch() documentation
#/addClass      addClass() documentation
#/removeClass   removeClass() documentation
#/toggleClass   toggleClass() documentation
#/attr          attr() documentation
#/text          text() documentation
```
The application starts in:
```txt
src/main.js
```
Main startup flow:
```
index.html
→ src/main.js
→ registerMethodPages()
→ Router.register(...)
→ Router.mount(...)
```

Each method page is imported into the METHODS array:
```txt
export const METHODS = [
  crunchMethod,
  siblingsMethod,
  ancestorMethod,
  animateMethod,
  validationMethod,
  addClassMethod,
  removeClassMethod,
  toggleClassMethod,
  onMethod,
  appendMethod,
  prependMethod,
  removeMethod,
  firstMethod,
  lastMethod,
  attrMethod,
  textMethod,
];
```

Each method object contains route information:
```txt
{
  key: "addClass",
  path: "/addClass",
  label: "addClass",
  title: "addClass()"
}
```

The router uses the path value to decide which page to show.

Example:
```txt
#/addClass
```

## Styling

The project uses LESS for styling.

The styles are organized into:
```txt
base.less       Global browser/default styles
main.less       Layout, components, demos, and responsive styling
colors.less     Color variables
screensize.less Responsive breakpoint variables
```
Responsive breakpoints are defined in screensize.less and used in main.less.

Example:
```txt
@media @mobile {
  ...
}

@media @tablet {
  ...
}

@media @desktop {
  ...
}
```