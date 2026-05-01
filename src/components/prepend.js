import { createMethodPage } from "./methodTemplate.js";

export const prependMethod = createMethodPage({
  key: "prepend",
  path: "/prepend",
  label: "prepend",
  title: "prepend()",
  description: "Prepends content inside each matched element.",
  signature: "crunch(selector).prepend(content)",
  example: 'crunch(".list").prepend("<li>First item</li>");',
});
