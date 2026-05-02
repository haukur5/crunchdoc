import { crunch } from "../crunch.js";
import { createMethodPage } from "./methodTemplate.js";

const TARGET_SELECTOR = ".ancestor-demo .demo-target";
const ALL_BOXES_SELECTOR = ".ancestor-demo .demo-box";

export const ancestorMethod = createMethodPage({
  key: "ancestor",
  path: "/ancestor",
  label: "ancestor",
  title: "ancestor()",
  description: "Finds matching ancestor elements up the DOM tree.",
  signature: "crunch(selector).ancestor(target)",
  example: 'crunch(".button").ancestor(".card");',

  demoHtml: `
  
    <div class="method-page__demo-grid ancestor-demo">
      <div class="method-page__demo-controls">
        <button class="button" type="button" data-action="run-ancestor">Run ancestor()</button>
        <button class="button button--ghost" type="button" data-action="reset-ancestor">Reset</button>
      </div>

      <div class="demo-box level-1">
        Level 1
        <div class="demo-box level-2">
          Level 2
          <div class="demo-box level-3">
            Level 3
            <div class="demo-item demo-target">Target element</div>
          </div>
        </div>
      </div>

      <pre class="method-page__code method-page__demo-output" data-output>
        Click "Run ancestor()" to highlight parent containers of the target.
      </pre>
    </div>
  `,

  setupDemo(mount) {
    const runBtn = mount.querySelector('[data-action="run-ancestor"]'); 
    const resetBtn = mount.querySelector('[data-action="reset-ancestor"]');
    const output = mount.querySelector("[data-output]");

    if (!runBtn || !resetBtn || !output) return;

    runBtn.addEventListener("click", () => {
      crunch(ALL_BOXES_SELECTOR).removeClass("is-selected");
      const ancestors = crunch(TARGET_SELECTOR).ancestor(".demo-box");
      ancestors.addClass("is-selected");
      output.textContent = `Found ${ancestors.elements.length} ancestor(s).`;
    });

    resetBtn.addEventListener("click", () => {
      crunch(ALL_BOXES_SELECTOR).removeClass("is-selected");
      output.textContent = "Reset ancestor highlight.";
    });
  },


});