import { createMethodPage } from "./methodTemplate.js";

export const removeClassMethod = createMethodPage({
  key: "removeClass",
  path: "/removeClass",
  label: "removeClass",
  title: "removeClass()",
  description: "Removes one or more classes from matched elements.",
  signature: "crunch(selector).removeClass(className)",
  example: 'crunch(".card").removeClass("is-selected");',
});
