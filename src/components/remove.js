import { crunch } from "../crunch.js";
import { createMethodPage } from "./methodTemplate.js";

const REMOVABLE_SELECTOR = ".remove-demo .demo-item.removable";

export const removeMethod = createMethodPage({
  key: "remove",
  path: "/remove",
  label: "remove",
  title: "remove()",
  description: "Removes every element in the result set from the DOM.",
  signature: "crunch(selector).remove()",
  example: 'crunch(".demo-item.removable").remove();',

  demoHtml: `
    <div class="method-page__demo-grid remove-demo">
      <div class="method-page__demo-controls">
        <button class="button" type="button" data-action="run-remove">Run remove()</button>
        <button class="button button--ghost" type="button" data-action="reset-remove">Reset</button>
      </div>

      <div class="method-page__demo-cards">
        <div class="demo-item">Card 1 (keep)</div>
        <div class="demo-item removable">Card 2 (removable)</div>
        <div class="demo-item">Card 3 (keep)</div>
        <div class="demo-item removable">Card 4 (removable)</div>
        <div class="demo-item">Card 5 (keep)</div>
      </div>

      <pre class="method-page__code method-page__demo-output" data-output>
Click "Run remove()" to remove the .removable cards.
      </pre>
    </div>
  `,

  setupDemo(mount) {
    const runBtn = mount.querySelector('[data-action="run-remove"]');
    const resetBtn = mount.querySelector('[data-action="reset-remove"]');
    const output = mount.querySelector("[data-output]");
    const cards = mount.querySelector(".remove-demo .method-page__demo-cards");
    if (!runBtn || !resetBtn || !output || !cards) return;

    const initialHtml = cards.innerHTML;

    runBtn.addEventListener("click", () => {
      const before = cards.querySelectorAll(".demo-item").length;
      crunch(REMOVABLE_SELECTOR).remove();
      const after = cards.querySelectorAll(".demo-item").length;
      output.textContent = `Ran: crunch(".demo-item.removable").remove() — removed ${before - after} card(s).`;
    });

    resetBtn.addEventListener("click", () => {
      cards.innerHTML = initialHtml;
      output.textContent = 'Reset cards. Click "Run remove()" to try again.';
    });
  },
});
