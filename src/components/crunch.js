import { crunch } from "../crunch.js";
import { createMethodPage } from "./methodTemplate.js";

export const crunchMethod = createMethodPage({
  key: "crunch",
  path: "/crunch",
  label: "crunch",
  title: "crunch()",
  description: "Selects elements and wraps them in a collection.",
  signature: "crunch(selector)",
  example: 'const cards = crunch(".demo-card");',

  demoHtml: `
    <div class="method-page__demo-grid" data-crunch-demo="root">
      <div class="method-page__demo-controls">
        <button class="button" type="button" data-action="run-crunch">Run crunch()</button>
      </div>

      <div class="method-page__demo-cards">
        <div class="demo-item">Card 1</div>
        <div class="demo-item">Card 2</div>
        <div class="demo-item">Card 3</div>
      </div>

      <pre class="method-page__code method-page__demo-output" data-output>
Click "Run crunch()" to test.
      </pre>
    </div>
  `,

  setupDemo(mount) {
    const runBtn = mount.querySelector('[data-action="run-crunch"]');
    const output = mount.querySelector("[data-output]");
    if (!runBtn || !output) return;

    runBtn.addEventListener("click", () => {
      const result = crunch('[data-crunch-demo="root"] .demo-item');
      output.textContent = `Found ${result.elements.length} element(s).`;
    });
  },
});
