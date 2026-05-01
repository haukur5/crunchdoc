import { createMethodPage } from "./methodTemplate.js";

export const removeMethod = createMethodPage({
  key: "remove",
  path: "/remove",
  label: "remove",
  title: "remove()",
  description: "Removes matched elements from the DOM.",
  signature: "crunch(selector).remove()",
  example: 'crunch(".toast").remove();',
});
