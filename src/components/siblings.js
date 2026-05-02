import { crunch } from "../crunch.js";
import { createMethodPage } from "./methodTemplate.js";

const DEMO_SELECTOR = ".siblings-demo .demo-item";
const ACTIVE_SELECTOR = ".siblings-demo .demo-item.active";

export const siblingsMethod = createMethodPage({
  key: "siblings",
  path: "/siblings",
  label: "siblings",
  title: "siblings()",
  description: "Returns sibling elements for each matched element.",
  signature: "crunch(selector).siblings()",
  example: 'crunch(".item.active").siblings();',

  demoHtml: `
    <div class="method-page__demo-grid siblings-demo">
      <div class="method-page__demo-controls">
        <button class="button" type="button" data-action="run-siblings">Run siblings()</button>
        <button class="button button--ghost" type="button" data-action="reset-siblings">Reset</button>
      </div>

      <div class="method-page__demo-cards">
        <div class="demo-item">Card 1</div>
        <div class="demo-item active">Active card</div>
        <div class="demo-item">Card 3</div>
        <div class="demo-item">Card 4</div>
      </div>

      <pre class="method-page__code method-page__demo-output" data-output>
Click "Run siblings()" to highlight siblings of the active card.
      </pre>
    </div>
  `,

  setupDemo(mount) {
    const runBtn = mount.querySelector('[data-action="run-siblings"]');
    const resetBtn = mount.querySelector('[data-action="reset-siblings"]');
    const output = mount.querySelector("[data-output]");

    if (!runBtn || !resetBtn || !output) return;

    runBtn.addEventListener("click", () => {
      crunch(DEMO_SELECTOR).removeClass("is-selected");
      const siblings = crunch(ACTIVE_SELECTOR).siblings();
      siblings.addClass("is-selected");
      output.textContent = `Found ${siblings.elements.length} sibling(s).`;
    });

    resetBtn.addEventListener("click", () => {
      crunch(DEMO_SELECTOR).removeClass("is-selected");
      output.textContent = "Reset sibling highlight.";
    });
  },
});
