import { crunch } from "../crunch.js";
import { createMethodPage } from "./methodTemplate.js";

const DEMO_SELECTOR = ".removeclass-demo .demo-item";

export const removeClassMethod = createMethodPage({
  key: "removeClass",
  path: "/removeClass",
  label: "removeClass",
  title: "removeClass()",
  description: "Removes one or more CSS classes from each selected element. Useful when you want to clear an active, selected, or highlighted state.",
  signature: "crunch(selector).removeClass(className)",
  example: 'crunch(".demo-item").removeClass("is-selected");',

  demoHtml: `
    <div class="method-page__demo-grid removeclass-demo">
      <div class="method-page__demo-controls">
        <button class="button" type="button" data-action="run-removeclass">Run removeClass()</button>
        <button class="button button--ghost" type="button" data-action="reset-removeclass">Reset</button>
      </div>

      <div class="method-page__demo-cards">
        <div class="demo-item is-selected">Card 1</div>
        <div class="demo-item is-selected">Card 2</div>
        <div class="demo-item is-selected">Card 3</div>
      </div>

      <pre class="method-page__code method-page__demo-output" data-output>
Click "Run removeClass()" to remove the selected class from every card.
      </pre>
    </div>
  `,

  setupDemo(mount) {
    const runBtn = mount.querySelector('[data-action="run-removeclass"]');
    const resetBtn = mount.querySelector('[data-action="reset-removeclass"]');
    const output = mount.querySelector("[data-output]");

    if (!runBtn || !resetBtn || !output) return;

    runBtn.addEventListener("click", () => {
      crunch(DEMO_SELECTOR).removeClass("is-selected");
      output.textContent = 'Ran: crunch(".demo-item").removeClass("is-selected")';
    });

    resetBtn.addEventListener("click", () => {
      crunch(DEMO_SELECTOR).addClass("is-selected");
      output.textContent = 'Reset: crunch(".demo-item").addClass("is-selected")';
    });
  },
});
