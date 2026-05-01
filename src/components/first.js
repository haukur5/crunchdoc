import { createMethodPage } from "./methodTemplate.js";

export const firstMethod = createMethodPage({
  key: "first",
  path: "/first",
  label: "first",
  title: "first()",
  description: "Returns the first matched element.",
  signature: "crunch(selector).first()",
  example: 'crunch(".item").first();',
});
