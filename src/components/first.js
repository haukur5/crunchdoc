import { crunch } from "../crunch.js";
import { createMethodPage } from "./methodTemplate.js";

const DEMO_SELECTOR = ".first-demo .demo-item";

export const firstMethod = createMethodPage({
  key: "first",
  path: "/first",
  label: "first",
  title: "first()",
  description:
    "Returns a new result set containing only the first element of the original selection.",
  signature: "crunch(selector).first()",
  example: 'crunch(".demo-item").first().addClass("is-selected");',

  demoHtml: `
    <div class="method-page__demo-grid first-demo">
      <div class="method-page__demo-controls">
        <button class="button" type="button" data-action="run-first">Run first()</button>
        <button class="button button--ghost" type="button" data-action="reset-first">Reset</button>
      </div>

      <div class="method-page__demo-cards">
        <div class="demo-item">Card 1</div>
        <div class="demo-item">Card 2</div>
        <div class="demo-item">Card 3</div>
        <div class="demo-item">Card 4</div>
      </div>

      <pre class="method-page__code method-page__demo-output" data-output>
Click "Run first()" to highlight the first card.
      </pre>
    </div>
  `,

  setupDemo(mount) {
    const runBtn = mount.querySelector('[data-action="run-first"]');
    const resetBtn = mount.querySelector('[data-action="reset-first"]');
    const output = mount.querySelector("[data-output]");
    if (!runBtn || !resetBtn || !output) return;

    runBtn.addEventListener("click", () => {
      crunch(DEMO_SELECTOR).removeClass("is-selected");
      const result = crunch(DEMO_SELECTOR).first();
      result.addClass("is-selected");
      output.textContent = `Ran: crunch(".demo-item").first() — got ${result.elements.length} element ("${result.text()}").`;
    });

    resetBtn.addEventListener("click", () => {
      crunch(DEMO_SELECTOR).removeClass("is-selected");
      output.textContent = 'Reset highlight. Click "Run first()" to try again.';
    });
  },
});
