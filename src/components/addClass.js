import { crunch } from "../crunch.js";
import { createMethodPage } from "./methodTemplate.js";

const DEMO_SELECTOR = '[data-addclass-demo="root"] .demo-card';

export const addClassMethod = createMethodPage({
  key: "addClass",
  path: "/addClass",
  label: "addClass",
  title: "addClass()",
  description: "Adds one or more classes to all matched elements.",
  signature: "crunch(selector).addClass(className)",
  example: 'crunch(".demo-card").addClass("is-selected");',
  demoHtml: `
    <div class="method-page__demo-grid" data-addclass-demo="root">
      <div class="method-page__demo-controls">
        <button class="button" type="button" data-action="run-addclass">Run addClass()</button>
        <button class="button button--ghost" type="button" data-action="reset-addclass">Reset</button>
      </div>

      <div class="method-page__demo-cards">
        <div class="demo-card">Card 1</div>
        <div class="demo-card">Card 2</div>
        <div class="demo-card">Card 3</div>
      </div>

      <pre class="method-page__code method-page__demo-output" data-output>Click "Run addClass()" to test.</pre>
    </div>
  `,
  setupDemo(mount) {
    const runBtn = mount.querySelector('[data-action="run-addclass"]');
    const resetBtn = mount.querySelector('[data-action="reset-addclass"]');
    const output = mount.querySelector("[data-output]");

    if (!runBtn || !resetBtn || !output) {
      return;
    }

    runBtn.addEventListener("click", () => {
      crunch(DEMO_SELECTOR).addClass("is-selected");
      output.textContent = 'Ran: crunch(".demo-card").addClass("is-selected")';
    });

    resetBtn.addEventListener("click", () => {
      crunch(DEMO_SELECTOR).removeClass("is-selected");
      output.textContent = 'Reset: crunch(".demo-card").removeClass("is-selected")';
    });
  },
});
