import { createMethodPage } from "./methodTemplate.js";

export const toggleClassMethod = createMethodPage({
  key: "toggleClass",
  path: "/toggleClass",
  label: "toggleClass",
  title: "toggleClass()",
  description: "Toggles a class on matched elements.",
  signature: "crunch(selector).toggleClass(className)",
  example: 'crunch(".card").toggleClass("is-selected");',
});
