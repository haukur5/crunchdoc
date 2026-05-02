import { crunch } from "../crunch.js";
import { createMethodPage } from "./methodTemplate.js";

const DEMO_SELECTOR = ".animate-demo .demo-item";

export const animateMethod = createMethodPage({
  key: "animate",
  path: "/animate",
  label: "animate",
  title: "animate()",
  description: "Animates CSS properties over time.",
  signature: "crunch(selector).animate(styles, duration)",
  example: 'crunch(".box").animate({ opacity: 0.5 }, 300);',

  demoHtml: `
    <div class="method-page__demo-grid animate-demo">
      <div class="method-page__demo-controls">
        <button class="button" type="button" data-action="run-animate">Run animate()</button>
        <button class="button button--ghost" type="button" data-action="reset-animate">Reset</button>
      </div>

      <div class="method-page__demo-cards">
        <div class="demo-item">Box 1</div>
        <div class="demo-item">Box 2</div>
        <div class="demo-item">Box 3</div>
      </div>

      <pre class="method-page__code method-page__demo-output" data-output>
Click "Run animate()" to animate all boxes.
      </pre>
    </div>
  `,

  setupDemo(mount) {
    const runBtn = mount.querySelector('[data-action="run-animate"]');
    const resetBtn = mount.querySelector('[data-action="reset-animate"]');
    const output = mount.querySelector("[data-output]");

    if (!runBtn || !resetBtn || !output) return;

    runBtn.addEventListener("click", () => {
      crunch(DEMO_SELECTOR).animate(
        {
          opacity: 0.5,
          transform: "translateX(24px)",
          backgroundColor: "#1e3a5f",
        },
        {
          duration: 300,
          delay: 0,
          easing: "ease",
          iterationCount: 1,
          fillMode: "forwards",
        }
      );

      output.textContent = 'Ran: crunch(".box").animate({ opacity: 0.5 }, 300)';
    });

    resetBtn.addEventListener("click", () => {
      mount.querySelectorAll(DEMO_SELECTOR).forEach((el) => {
        el.getAnimations().forEach((anim) => anim.cancel());
      });
      output.textContent = "Reset animations.";
    });
  },
});
