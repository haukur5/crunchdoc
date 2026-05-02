import { crunch } from "../crunch.js";
import { createMethodPage } from "./methodTemplate.js";

const DEMO_SELECTOR = ".append-demo .demo-item";

export const appendMethod = createMethodPage({
  key: "append",
  path: "/append",
  label: "append",
  title: "append()",
  description:
    "Appends content (an HTML string or a DOM node) as the last child of every element in the result set.",
  signature: "crunch(selector).append(content)",
  example: 'crunch(".demo-item").append("<span>!</span>");',

  demoHtml: `
    <div class="method-page__demo-grid append-demo">
      <div class="method-page__demo-controls">
        <button class="button" type="button" data-action="run-append">Run append()</button>
        <button class="button button--ghost" type="button" data-action="reset-append">Reset</button>
      </div>

      <div class="method-page__demo-cards">
        <div class="demo-item">Card 1</div>
        <div class="demo-item">Card 2</div>
        <div class="demo-item">Card 3</div>
      </div>

      <pre class="method-page__code method-page__demo-output" data-output>
Click "Run append()" to append a tag to each card.
      </pre>
    </div>
  `,

  setupDemo(mount) {
    const runBtn = mount.querySelector('[data-action="run-append"]');
    const resetBtn = mount.querySelector('[data-action="reset-append"]');
    const output = mount.querySelector("[data-output]");
    const cards = mount.querySelector(".append-demo .method-page__demo-cards");
    if (!runBtn || !resetBtn || !output || !cards) return;

    const initialHtml = cards.innerHTML;

    runBtn.addEventListener("click", () => {
      crunch(DEMO_SELECTOR).append(' <span class="appended-tag">[appended]</span>');
      output.textContent = 'Ran: crunch(".demo-item").append("<span>[appended]</span>")';
    });

    resetBtn.addEventListener("click", () => {
      cards.innerHTML = initialHtml;
      output.textContent = 'Reset cards. Click "Run append()" to try again.';
    });
  },
});
