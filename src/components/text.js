import { crunch } from "../crunch.js";
import { createMethodPage } from "./methodTemplate.js";

const DEMO_SELECTOR = ".text-demo .demo-item";

export const textMethod = createMethodPage({
  key: "text",
  path: "/text",
  label: "text",
  title: "text()",
  description: "Gets the text content from the first selected element, or replaces the text content of all selected elements.",
  signature: "crunch(selector).text(value?)",
  example: 'crunch(".title").text("Hello Crunch");',

  demoHtml: `
    <div class="method-page__demo-grid text-demo">
      <div class="method-page__demo-controls">
        <button class="button" type="button" data-action="run-text">Run text()</button>
        <button class="button button--ghost" type="button" data-action="reset-text">Reset</button>
      </div>

      <div class="method-page__demo-cards">
        <div class="demo-item">Card 1</div>
        <div class="demo-item">Card 2</div>
        <div class="demo-item">Card 3</div>
      </div>

      <pre class="method-page__code method-page__demo-output" data-output>
Click "Run text()" to replace the text in every card.
      </pre>
    </div>
  `,

  setupDemo(mount) {
    const runBtn = mount.querySelector('[data-action="run-text"]');
    const resetBtn = mount.querySelector('[data-action="reset-text"]');
    const output = mount.querySelector("[data-output]");

    if (!runBtn || !resetBtn || !output) return;

    runBtn.addEventListener("click", () => {
      crunch(DEMO_SELECTOR).text("Hello Crunch");
      crunch(DEMO_SELECTOR).addClass("is-selected");
      const text = crunch(DEMO_SELECTOR).first().text();
      output.textContent = `Ran: crunch(".demo-item").text("Hello Crunch")\nFirst card text: ${text}`;
    });

    resetBtn.addEventListener("click", () => {
      crunch(DEMO_SELECTOR).elements.forEach((el, index) => {
        el.textContent = `Card ${index + 1}`;
      });
      crunch(DEMO_SELECTOR).removeClass("is-selected");
      output.textContent = "Reset text demo.";
    });
  },
});
