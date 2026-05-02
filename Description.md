# CrunchJS

In this assignment we are going to recreate the almighty jQuery. jQuery was hugely popular around 10 to 15 years ago but is still being used in some projects — although not as widely as before. jQuery encapsulates a lot of functionality within JavaScript, especially related to operations on the DOM. Take a look at https://jquery.com/ to see how the original library works.

## Template

This assignment comes with a template which includes:

- A work environment to start working on the stylesheet right away
- A scaffolded vite project with all packages already needed
- A starting template for the website
- An empty `crunch.js` file where your library should be written

In order to start working you can follow these steps:

1. Make sure NPM is installed and available in the PATH (https://nodejs.org/en/download/)
2. Execute the command `npm install` in the root of the template
3. Execute the command `npm run dev` in the root of the template
4. View `example.js` and `home.js` to see how you can create components 
	1. To style each component, you can use less and we have already added two files, `colors.less` and `base.less`

The template is set up using LESS. All valid CSS is also valid LESS, but you are encouraged to use LESS features (variables, mixins, nesting).

## Assignment description

### Part A — Styling (50%)

All layout must be created using **a combination of CSS Grid and Flexbox**.
All styling must reside under the styles folder and not in a style tag inside a component.
You are encouraged to utilize BEM naming convention throughout the project

**(12.5%) Desktop layout**
- Uses the full viewport width effectively.
- The navigation sidebar sits alongside the main content, both visible at the same time.
- Method examples and code blocks have room to breathe
**(12.5%) Tablet layout**
- The sidebar may either narrow or collapse into a toggleable menu.
- Content remains comfortably readable without horizontal scrolling
**(12.5%) Mobile layout**
- The layout is a single-column.
- Code blocks remain readable, scrolling horizontally only within the code block itself, never the page
**(12.5%) Functionality**
- Navigation works on every screen size.
- Hover and focus states are styled
- Any interactive method demos behave correctly.
- The page responds correctly at every breakpoint without breaking
- A route/component is created for each method implementation of CrunchJs with a working visual demonstration

#### Breakpoints

Typical breakpoints are:
- Mobile: up to **600px
- Tablet: **600px - 1024px
- Desktop: **1024px** and above 

#### Other

For the tablet and mobile views, there should be no horizontal scrolling (only vertical). Content must be properly sized to fit the screen. 

The submitted solution needs to be working properly on each screen size.

---

### Part B — CrunchJS library (50%)

All methods below must be implemented using plain JavaScript. The methods should be stored within a single file called `crunch.js`. You are not allowed to use jQuery, or any other DOM library.

The `crunch` function can return multiple elements within its query, e.g. you are searching for an HTML class which many elements are associated with. If you apply a method on those elements it will be applied to all elements within the result set, unless specifically stated.

```js
// This will apply a class to all .card elements
crunch('.card').addClass('selected');

// This will return all sibling .card elements of #card-2
crunch('#card-2').siblings('.card');
```

### 1. (2%) The crunch keyword

jQuery uses `$` as its keyword. In this assignment you should use `crunch` as the keyword for your functionality, so if you have a method called `remove` it should be called `crunch("someQuery").remove();`. Define the `crunch` keyword.

### 2. (2%) Query selector

Implement the query selector. With the query selector you can get every element within the DOM with a valid CSS selector.

```js
const cards = crunch('.card-section .card');
```

### 3. (2%) Chainable methods

All methods should be chainable, so you can call multiple crunch methods in a single chain.

```js
crunch('.card').addClass('highlight').attr('data-seen', 'true');
```

### 4. (4%) siblings(selector?)

Implement the method `siblings` which accepts an optional parameter called `selector`. The method should return all siblings of the elements within the result set (not including the elements themselves). If the optional parameter `selector` is provided, only siblings matching the passed in selector should be returned.

```html
<section class="card-section">
  <div class="card" id="card-1"></div>
  <div class="card" id="card-2"></div>
  <div class="card" id="card-3"></div>
</section>
```

```js
// Returns #card-1 and #card-3
crunch('#card-2').siblings();

// Returns #card-1 and #card-3 (filtered by selector)
crunch('#card-2').siblings('.card');
```

### 5. (4%) ancestor(selector?)

Implement the method `ancestor` which accepts an optional parameter called `selector`. The method should return all ancestors of the elements within the result set. If the optional parameter `selector` is provided, only ancestors matching the passed in selector should be returned. An ancestor is a node which is further up in the tree than a parent. The root node is the topmost ancestor for all elements within the DOM.

```html
<body>
  <main>
    <section class="card-section">
      <div class="card" id="card-1"></div>
    </section>
  </main>
</body>
```

```js
// Returns all ancestors: section, main, body, html
crunch('#card-1').ancestor();

// Returns only the main element
crunch('#card-1').ancestor('main');
```

### 6. (9%) animate(properties, options)

Implement the method `animate` which accepts two required arguments: a `properties` object and an `options` object. The method should return the same result set as the initial selector. The method should perform an animation on every element in the result set, animating each named CSS property towards the value provided. The `options` object describes how the animation plays out.

The `properties` argument allows any valid CSS property, but the keys should be in **camelCase** (not the kebab-case used in CSS itself). For example, `backgroundColor` is allowed but `background-color` is not.

The `options` argument supports the following keys:

- `duration`: number of milliseconds the animation runs for
- `delay`: time before the animation starts, accepted as either a number (milliseconds) or a CSS time string (e.g. `'2s'`)
- `easing`: `'linear'`, `'ease'`, `'ease-in'`, `'ease-out'`, `'ease-in-out'`, or a `cubic-bezier(n, n, n, n)` string
- `iterationCount`: a number, or `'infinite'`
- `fillMode`: `'none'`, `'forwards'`, `'backwards'`, or `'both'`

```html
<div class="moveable-card">I am about to move!</div>
```

```js
crunch('.moveable-card').animate(
  {
    transform: 'translateX(100px)',
    backgroundColor: '#3b82f6',
  },
  {
    duration: 1000,
    delay: '0.5s',
    easing: 'ease-in-out',
    iterationCount: 1,
    fillMode: 'forwards',
  }
);
```

### 7. (12%) validation(rules)

Implement the method `validation` which accepts one required argument for validation properties, a `rules` object. The validation will only work if there are children within the result set which can be validated e.g. input, textarea and select. The method returns a validation result for the form found within the result set. This method will only work when the result set contains a single value - if there is more than one value the first value within the result set will be used. This method cannot be chained further.
```html
<form action="" id="user-credentials">
	<div class="form-group">
		<input type="text" name="email-address" />
	</div>
	<div class="form-group">
		<input type="password" name="password" />
	</div>
	<div class="form-group">
		<input type="password" name="confirm-password" />
	</div>
	<div class="form-group">
		<button type="submit">Submit</button>
	</div>
</form>
```


```js
const result = crunch('#user-credentials').validation({
  'email-address': [
    {
      message: 'The email address is required',
      valid: (value) => value.length > 0,
    },
    {
      message: 'The email address must be correctly formatted',
      // Regex to check if the email address is correctly formatted
      valid: (value) =>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
    },
  ],
  password: [
    {
      message:
        'The password must be at least 8 characters and contain a letter, a number and a special character',
      valid: (value) =>
      // Regex to check if string is more than 8 in length contains 
      // at least one character, number and special character
        /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(value),
    },
  ],
  'confirm-password': [
    {
      message: 'The confirm password must match the password',
      valid: (value, parent) => {
        const password = parent.querySelector('input[name="password"]');
        return value === password.value;
      },
    },
  ],
});

console.log(result);
/*
  If the form is valid an empty object is returned: {}

  If the form contains any errors, the input values within the form will be listed:
    {
      'email-address': 'The email address is required',
      'password': 'The password must be at least 8 characters ...',
      'confirm-password': 'The confirm password must match the password'
    }
*/
```

### 8. (4%) addClass / removeClass / toggleClass

Implement the methods `addClass`, `removeClass` and `toggleClass`. Each accepts a single required parameter, a string representing the class name, and applies the operation to every element in the result set. All three methods should return the same result set as the initial selector.

```js
crunch('.card').addClass('selected');
crunch('.card').removeClass('selected');
crunch('.card').toggleClass('selected');
```

### 9. (4%) attr(name, value?)

Implement the method `attr` which accepts a required parameter `name` and an optional parameter `value`. If `value` is provided, the attribute is set on every element in the result set and the same result set is returned. If `value` is not provided, the current value of the attribute on the first element in the result set is returned.

```js
// Setter — returns the result set
crunch('.card').attr('data-seen', 'true');

// Getter — returns a string
const id = crunch('.card').attr('id');
```

### 10. (3%) text(value?)

Implement the method `text` which accepts an optional parameter `value`. If `value` is provided, the text content of every element in the result set is replaced and the same result set is returned. If `value` is not provided, the current text content of the first element in the result set is returned.

```js
// Setter
crunch('.card').text('Updated');

// Getter
const label = crunch('#card-1').text();
```

### 11. (2%) on(event, handler)

Implement the method `on` which accepts two required parameters: `event` (a string event type) and `handler` (a function). The method should attach an event listener to every element in the result set. The method should return the same result set as the initial selector.

```js
crunch('#append-card').on('click', function (evt) {
  // handler code
});
```

### 12. (2%) Manipulation — append, prepend, remove, first, last

Implement the following manipulation methods. All except `remove` should return the same result set as the initial selector.

- `append(content)` — appends `content` (a string of HTML or a DOM element) as the last child of every element in the result set.
- `prepend(content)` — prepends `content` as the first child of every element in the result set.
- `remove()` — removes every element in the result set from the DOM.
- `first()` — returns a result set containing only the first element.
- `last()` — returns a result set containing only the last element.

```js
crunch('.card-section').append('<div class="card" id="card-5">Card 5</div>');
crunch('.card').last().remove();
```

---

## Notes

I will be aware that jQuery exists and therefore your code will be tested. If it is too similar to the original jQuery library, students will be summoned to a meeting where they need to explain why their code is so similar. If the results from this meeting come negative, the student will get a 0 for this assignment.

## Github workflow

Your use of GitHub is part of the grade on this assignment, not just the final code. Usage of a branching strategy and pull requests is expected.

### Repository setup

- Create a private Github repository
- Push the template as your initial commit on the `main` branch
- Do **not** commit `node_modules/` or build output


### Branching and pull requests

All work must go through pull requests. Do **not** commit directly to `main`
You will work with your group on a specific development branch e.g. `dev` or `development`, for each release create a pull request from development onto main  

#### Example - implementing siblings
1. Create the branch e.g. `feat/siblings` from `dev`
2. Open a pull request from `feat/siblings` to `dev`
3. When done and reviewed, merge the PR into `dev`

Try to aim for at least one pull request into dev per major method e.g. `siblings`, `ancestor`, `animate`, etc.  

#### Project done
1. Open a pull request from `dev` onto `main` 
2. Copy the pull request link and submit in canvas
3. Make sure that all TAs and Teachers have access to the Github repository


## Submission

A link to the Github pull request, from development branch onto the main.
Make sure that all TAs and Teacher have access to the Github repository

## Reading material

- DOM info — https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
- CSS Grid Layout — https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
- JavaScript: The Definitive Guide, 7th edition — Chapter 15
