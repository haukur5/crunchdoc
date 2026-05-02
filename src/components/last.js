import { crunch } from "../crunch.js";
import { createMethodPage } from "./methodTemplate.js";

const DEMO_SELECTOR = ".last-demo .demo-item";

export const lastMethod = createMethodPage({
  key: "last",
  path: "/last",
  label: "last",
  title: "last()",
  description:
    "Returns a new result set containing only the last element of the original selection.",
  signature: "crunch(selector).last()",
  example: 'crunch(".demo-item").last().addClass("is-selected");',

  demoHtml: `
    <div class="method-page__demo-grid last-demo">
      <div class="method-page__demo-controls">
        <button class="button" type="button" data-action="run-last">Run last()</button>
        <button class="button button--ghost" type="button" data-action="reset-last">Reset</button>
      </div>

      <div class="method-page__demo-cards">
        <div class="demo-item">Card 1</div>
        <div class="demo-item">Card 2</div>
        <div class="demo-item">Card 3</div>
        <div class="demo-item">Card 4</div>
      </div>

      <pre class="method-page__code method-page__demo-output" data-output>
Click "Run last()" to highlight the last card.
      </pre>
    </div>
  `,

  setupDemo(mount) {
    const runBtn = mount.querySelector('[data-action="run-last"]');
    const resetBtn = mount.querySelector('[data-action="reset-last"]');
    const output = mount.querySelector("[data-output]");
    if (!runBtn || !resetBtn || !output) return;

    runBtn.addEventListener("click", () => {
      crunch(DEMO_SELECTOR).removeClass("is-selected");
      const result = crunch(DEMO_SELECTOR).last();
      result.addClass("is-selected");
      output.textContent = `Ran: crunch(".demo-item").last() — got ${result.elements.length} element ("${result.text()}").`;
    });

    resetBtn.addEventListener("click", () => {
      crunch(DEMO_SELECTOR).removeClass("is-selected");
      output.textContent = 'Reset highlight. Click "Run last()" to try again.';
    });
  },
});
