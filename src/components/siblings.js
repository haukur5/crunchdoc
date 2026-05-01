import { createMethodPage } from "./methodTemplate.js";

export const siblingsMethod = createMethodPage({
  key: "siblings",
  path: "/siblings",
  label: "siblings",
  title: "siblings()",
  description: "Returns sibling elements for each matched element.",
  signature: "crunch(selector).siblings()",
  example: 'crunch(".item.active").siblings();',
});
