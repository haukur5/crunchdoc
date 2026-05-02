import { crunch } from "../crunch.js";
import { createMethodPage } from "./methodTemplate.js";

const DEMO_SELECTOR = ".toggleclass-demo .demo-item";

export const toggleClassMethod = createMethodPage({
  key: "toggleClass",
  path: "/toggleClass",
  label: "toggleClass",
  title: "toggleClass()",
  description: "Adds a CSS class if it is missing, or removes it if it already exists. Useful for switching visual states on and off, such as selected items or expanded panels.",
  signature: "crunch(selector).toggleClass(className)",
  example: 'crunch(".card").toggleClass("is-selected");',

  demoHtml: `
    <div class="method-page__demo-grid toggleclass-demo">
      <div class="method-page__demo-controls">
        <button class="button" type="button" data-action="run-toggleclass">Run toggleClass()</button>
        <button class="button button--ghost" type="button" data-action="reset-toggleclass">Reset</button>
      </div>

      <div class="method-page__demo-cards">
        <div class="demo-item">Card 1</div>
        <div class="demo-item is-selected">Card 2</div>
        <div class="demo-item">Card 3</div>
      </div>

      <pre class="method-page__code method-page__demo-output" data-output>
Click "Run toggleClass()" to switch the selected class on every card.
      </pre>
    </div>
  `,

  setupDemo(mount) {
    const runBtn = mount.querySelector('[data-action="run-toggleclass"]');
    const resetBtn = mount.querySelector('[data-action="reset-toggleclass"]');
    const output = mount.querySelector("[data-output]");

    if (!runBtn || !resetBtn || !output) return;

    runBtn.addEventListener("click", () => {
      crunch(DEMO_SELECTOR).toggleClass("is-selected");
      const selectedCount = mount.querySelectorAll(`${DEMO_SELECTOR}.is-selected`).length;
      output.textContent = `Ran: crunch(".demo-item").toggleClass("is-selected") — ${selectedCount} card(s) selected.`;
    });

    resetBtn.addEventListener("click", () => {
      crunch(DEMO_SELECTOR).removeClass("is-selected");
      crunch(DEMO_SELECTOR).elements[1]?.classList.add("is-selected");
      output.textContent = "Reset toggle demo.";
    });
  },
});
