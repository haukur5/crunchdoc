import { createMethodPage } from "./methodTemplate.js";

export const ancestorMethod = createMethodPage({
  key: "ancestor",
  path: "/ancestor",
  label: "ancestor",
  title: "ancestor()",
  description: "Finds matching ancestor elements up the DOM tree.",
  signature: "crunch(selector).ancestor(target)",
  example: 'crunch(".button").ancestor(".card");',
});
