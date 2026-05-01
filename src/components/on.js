import { crunch } from "../crunch.js";
import { createMethodPage } from "./methodTemplate.js";

export const onMethod = createMethodPage({
  key: "on",
  path: "/on",
  label: "on",
  title: "on()",
  description:
    "Attaches an event listener to every element in the result set. The listener stays attached until the element is removed from the DOM.",
  signature: "crunch(selector).on(eventName, handler)",
  example: 'crunch(".on-demo-card").on("click", (e) => console.log(e.target));',
  demoHtml: `
    <div class="method-page__demo-grid" data-on-demo="root">
      <div class="method-page__demo-controls">
        <button class="button" type="button" data-action="run-on">Attach click handlers</button>
        <button class="button button--ghost" type="button" data-action="reset-on">Reset</button>
      </div>

      <div class="method-page__demo-cards">
        <div class="demo-item on-demo-card">Card 1</div>
        <div class="demo-item on-demo-card">Card 2</div>
        <div class="demo-item on-demo-card">Card 3</div>
      </div>

      <pre class="method-page__code method-page__demo-output" data-output>
Click "Attach click handlers", then click any card.
      </pre>
    </div>
  `,
  setupDemo(mount) {
    const root = mount.querySelector('[data-on-demo="root"]');
    const runBtn = mount.querySelector('[data-action="run-on"]');
    const resetBtn = mount.querySelector('[data-action="reset-on"]');
    const output = mount.querySelector("[data-output]");
    if (!root || !runBtn || !resetBtn || !output) return;

    const cardsContainer = root.querySelector(".method-page__demo-cards");
    const initialCardsHtml = cardsContainer.innerHTML;

    runBtn.addEventListener("click", () => {
      crunch(".on-demo-card").on("click", (e) => {
        output.textContent = `Clicked: ${e.currentTarget.textContent.trim()}`;
      });
      output.textContent = 'Ran: crunch(".on-demo-card").on("click", handler) — now click any card.';
    });

    resetBtn.addEventListener("click", () => {
      cardsContainer.innerHTML = initialCardsHtml;
      output.textContent = 'Reset. Click "Attach click handlers" to wire them up again.';
    });
  },
});
