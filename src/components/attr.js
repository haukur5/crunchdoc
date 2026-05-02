import { crunch } from "../crunch.js";
import { createMethodPage } from "./methodTemplate.js";

const DEMO_SELECTOR = ".attr-demo .demo-item";

export const attrMethod = createMethodPage({
  key: "attr",
  path: "/attr",
  label: "attr",
  title: "attr()",
  description: "Gets the value of an attribute from the first selected element, or sets an attribute value on all selected elements.",
  signature: "crunch(selector).attr(name, value?)",
  example: 'crunch("img").attr("alt", "Preview image");',

  demoHtml: `
    <div class="method-page__demo-grid attr-demo">
      <div class="method-page__demo-controls">
        <button class="button" type="button" data-action="run-attr">Run attr()</button>
        <button class="button button--ghost" type="button" data-action="reset-attr">Reset</button>
      </div>

      <div class="method-page__demo-cards">
        <div class="demo-item" data-status="new">Card 1</div>
        <div class="demo-item" data-status="new">Card 2</div>
        <div class="demo-item" data-status="new">Card 3</div>
      </div>

      <pre class="method-page__code method-page__demo-output" data-output>
Click "Run attr()" to set data-status="updated" and read it from the first card.
      </pre>
    </div>
  `,

  setupDemo(mount) {
    const runBtn = mount.querySelector('[data-action="run-attr"]');
    const resetBtn = mount.querySelector('[data-action="reset-attr"]');
    const output = mount.querySelector("[data-output]");

    if (!runBtn || !resetBtn || !output) return;

    runBtn.addEventListener("click", () => {
      crunch(DEMO_SELECTOR).attr("data-status", "updated");
      crunch(DEMO_SELECTOR).addClass("is-selected");
      const status = crunch(DEMO_SELECTOR).first().attr("data-status");
      output.textContent = `Ran: crunch(".demo-item").attr("data-status", "updated")\nFirst card status: ${status}`;
    });

    resetBtn.addEventListener("click", () => {
      crunch(DEMO_SELECTOR).attr("data-status", "new");
      crunch(DEMO_SELECTOR).removeClass("is-selected");
      output.textContent = 'Reset: data-status="new"';
    });
  },
});
