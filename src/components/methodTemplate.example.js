import { createMethodPage } from "./methodTemplate.js";
import { crunch } from "../crunch.js";

// Copy this file, rename it to your method file (for example: append.js),
// then replace TODO values and hook it into methodPages.js.
export const methodNameMethod = createMethodPage({
  key: "methodName",
  path: "/methodName",
  label: "methodName",
  title: "methodName()",
  description: "Short description of what this method does.",
  signature: "crunch(selector).methodName(args)",
  example: 'crunch(".demo-item").methodName("value");',
  demoHtml: `
    <div class="method-page__demo-grid" data-methodname-demo="root">
      <div class="method-page__demo-controls">
        <button class="button" type="button" data-action="run-methodname">Run methodName()</button>
        <button class="button button--ghost" type="button" data-action="reset-methodname">Reset</button>
      </div>

      <div class="method-page__demo-cards">
        <div class="demo-item">Item 1</div>
        <div class="demo-item">Item 2</div>
        <div class="demo-item">Item 3</div>
      </div>

      <pre class="method-page__code method-page__demo-output" data-output>
Click "Run methodName()" to test.
      </pre>
    </div>
  `,
  setupDemo(mount) {
    const runBtn = mount.querySelector('[data-action="run-methodname"]');
    const resetBtn = mount.querySelector('[data-action="reset-methodname"]');
    const output = mount.querySelector("[data-output]");

    if (!runBtn || !resetBtn || !output) {
      return;
    }

    const demoSelector = '[data-methodname-demo="root"] .demo-item';

    runBtn.addEventListener("click", () => {
      crunch(demoSelector).methodName("value");
      output.textContent = 'Ran: crunch(".demo-item").methodName("value")';
    });

    resetBtn.addEventListener("click", () => {
      // TODO: reset demo state for this method
      output.textContent = "Reset demo state.";
    });
  },
});
