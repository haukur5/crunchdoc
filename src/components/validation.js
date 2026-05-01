import { createMethodPage } from "./methodTemplate.js";

export const validationMethod = createMethodPage({
  key: "validation",
  path: "/validation",
  label: "validation",
  title: "validation()",
  description: "Runs validation helpers on inputs and forms.",
  signature: "crunch(selector).validation(rules)",
  example: 'crunch("#email").validation({ required: true });',
});
