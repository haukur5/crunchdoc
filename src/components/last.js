import { createMethodPage } from "./methodTemplate.js";

export const lastMethod = createMethodPage({
  key: "last",
  path: "/last",
  label: "last",
  title: "last()",
  description: "Returns the last matched element.",
  signature: "crunch(selector).last()",
  example: 'crunch(".item").last();',
});
