import { Router } from "../router.js";
import { addClassMethod } from "./addClass.js";
import { ancestorMethod } from "./ancestor.js";
import { animateMethod } from "./animate.js";
import { appendMethod } from "./append.js";
import { attrMethod } from "./attr.js";
import { crunchMethod } from "./crunch.js";
import { firstMethod } from "./first.js";
import { lastMethod } from "./last.js";
import { onMethod } from "./on.js";
import { prependMethod } from "./prepend.js";
import { removeMethod } from "./remove.js";
import { removeClassMethod } from "./removeClass.js";
import { siblingsMethod } from "./siblings.js";
import { textMethod } from "./text.js";
import { toggleClassMethod } from "./toggleClass.js";
import { validationMethod } from "./validation.js";

export const METHODS = [
  crunchMethod,
  siblingsMethod,
  ancestorMethod,
  animateMethod,
  validationMethod,
  addClassMethod,
  removeClassMethod,
  toggleClassMethod,
  attrMethod,
  textMethod,
  onMethod,
  appendMethod,
  prependMethod,
  removeMethod,
  firstMethod,
  lastMethod,
];

function renderMethodPage(method) {
  return `
    <article class="method-page method-page--${method.key}" data-method="${method.key}">
      <header class="method-page__header">
        <p class="method-page__eyebrow">Method</p>
        <h1 class="method-page__title">${method.title}</h1>
        <p class="method-page__description">${method.description}</p>
      </header>

      <section class="method-page__block">
        <h2 class="method-page__block-title">Signature</h2>
        <pre class="method-page__code"><code>${method.signature}</code></pre>
      </section>

      <section class="method-page__block">
        <h2 class="method-page__block-title">Example</h2>
        <pre class="method-page__code"><code>${method.example}</code></pre>
      </section>

      <section class="method-page__block">
        <h2 class="method-page__block-title">Live Demo</h2>
        <div class="method-page__demo">${method.demoHtml}</div>
      </section>
    </article>
  `;
}

export function registerMethodPages() {
  METHODS.forEach((method) => {
    Router.register(method.path, (mount) => {
      mount.innerHTML = renderMethodPage(method);
      method.setupDemo?.(mount);
    });
  });
}

export function renderMethodLinks() {
  return METHODS.map(
    (method) =>
      `<li class="sidebar__method-item"><a class="sidebar__method-link" href="#${method.path}">${method.label}</a></li>`,
  ).join("");
}
