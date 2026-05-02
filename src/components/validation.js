import { crunch } from "../crunch.js";
import { createMethodPage } from "./methodTemplate.js";

const FORM_SELECTOR = ".validation-demo .demo-form";

export const validationMethod = createMethodPage({
  key: "validation",
  path: "/validation",
  label: "validation",
  title: "validation()",
  description: "Runs validation helpers on inputs and forms.",
  signature: "crunch(selector).validation(rules)",
  example: 'crunch("#email").validation({ required: true });',

  demoHtml: `
    <div class="method-page__demo-grid validation-demo">
      <div class="method-page__demo-controls">
        <button class="button" type="button" data-action="run-validation">Run validation()</button>
        <button class="button button--ghost" type="button" data-action="reset-validation">Reset</button>
      </div>

      <form class="demo-form">
        <input class="demo-item" type="text" name="email" placeholder="Email" />
        <input class="demo-item" type="password" name="password" placeholder="Password" />
      </form>

      <pre class="method-page__code method-page__demo-output" data-output>
Click "Run validation()" to validate form fields.
      </pre>
    </div>
  `,

  setupDemo(mount) {
    const runBtn = mount.querySelector('[data-action="run-validation"]');
    const resetBtn = mount.querySelector('[data-action="reset-validation"]');
    const output = mount.querySelector("[data-output]");
    const form = mount.querySelector(FORM_SELECTOR);

    if (!runBtn || !resetBtn || !output || !form) return;

    runBtn.addEventListener("click", () => {
      const errors = crunch(FORM_SELECTOR).validation({
        email: [
          {
            message: "Email is required.",
            valid: (value) => value.trim().length > 0,
          },
          {
            message: "Email format is invalid.",
            valid: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
          },
        ],
        password: [
          {
            message: "Password must be at least 8 characters.",
            valid: (value) => value.length >= 8,
          },
        ],
      });

      output.textContent = Object.keys(errors).length
        ? JSON.stringify(errors, null, 2)
        : "{}";
    });

    resetBtn.addEventListener("click", () => {
      form.reset();
      output.textContent = 'Reset form. Click "Run validation()" again.';
    });
  },
});
