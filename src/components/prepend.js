import { crunch } from "../crunch.js";
import { createMethodPage } from "./methodTemplate.js";

const DEMO_SELECTOR = ".prepend-demo .demo-item";

export const prependMethod = createMethodPage({
  key: "prepend",
  path: "/prepend",
  label: "prepend",
  title: "prepend()",
  description:
    "Prepends content (an HTML string or a DOM node) as the first child of every element in the result set.",
  signature: "crunch(selector).prepend(content)",
  example: 'crunch(".demo-item").prepend("<span>★</span>");',

  demoHtml: `
    <div class="method-page__demo-grid prepend-demo">
      <div class="method-page__demo-controls">
        <button class="button" type="button" data-action="run-prepend">Run prepend()</button>
        <button class="button button--ghost" type="button" data-action="reset-prepend">Reset</button>
      </div>

      <div class="method-page__demo-cards">
        <div class="demo-item">Card 1</div>
        <div class="demo-item">Card 2</div>
        <div class="demo-item">Card 3</div>
      </div>

      <pre class="method-page__code method-page__demo-output" data-output>
Click "Run prepend()" to prepend a star to each card.
      </pre>
    </div>
  `,

  setupDemo(mount) {
    const runBtn = mount.querySelector('[data-action="run-prepend"]');
    const resetBtn = mount.querySelector('[data-action="reset-prepend"]');
    const output = mount.querySelector("[data-output]");
    const cards = mount.querySelector(".prepend-demo .method-page__demo-cards");
    if (!runBtn || !resetBtn || !output || !cards) return;

    const initialHtml = cards.innerHTML;

    runBtn.addEventListener("click", () => {
      crunch(DEMO_SELECTOR).prepend('<span class="prepended-tag">★</span> ');
      output.textContent = 'Ran: crunch(".demo-item").prepend("<span>★</span>")';
    });

    resetBtn.addEventListener("click", () => {
      cards.innerHTML = initialHtml;
      output.textContent = 'Reset cards. Click "Run prepend()" to try again.';
    });
  },
});
