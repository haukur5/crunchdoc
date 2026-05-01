import { createMethodPage } from "./methodTemplate.js";

export const crunchMethod = createMethodPage({
  key: "crunch",
  path: "/crunch",
  label: "crunch",
  title: "crunch()",
  description: "Creates a Crunch collection from a selector or element.",
  signature: "crunch(selector)",
  example: 'const cards = crunch(".card");',
});
