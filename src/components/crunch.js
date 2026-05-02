import { crunch } from "../crunch.js";
import { createMethodPage } from "./methodTemplate.js";

const DEMO_SELECTOR = ".crunch-demo .demo-item";

export const crunchMethod = createMethodPage({
  key: "crunch",
  path: "/crunch",
  label: "crunch",
  title: "crunch()",
  description: "Creates a CrunchResult collection from a CSS selector.",
  signature: "crunch(selector)",
  example: 'const items = crunch(".demo-item");',

  demoHtml: `
    <div class="method-page__demo-grid crunch-demo">
      <div class="method-page__demo-controls">
        <button class="button" type="button" data-action="run-crunch">Run crunch()</button>
      </div>

      <div class="method-page__demo-cards">
        <div class="demo-item">Element 1</div>
        <div class="demo-item">Element 2</div>
        <div class="demo-item">Element 3</div>
      </div>

      <pre class="method-page__code method-page__demo-output" data-output>
Click "Run crunch()" to count selected elements.
      </pre>
    </div>
  `,

  setupDemo(mount) {
    const runBtn = mount.querySelector('[data-action="run-crunch"]');
    const output = mount.querySelector("[data-output]");

    if (!runBtn || !output) return;

    runBtn.addEventListener("click", () => {
      const result = crunch(DEMO_SELECTOR);
      output.textContent = `crunch("${DEMO_SELECTOR}") found ${result.elements.length} element(s).`;
    });
  },
});
