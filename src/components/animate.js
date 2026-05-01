import { createMethodPage } from "./methodTemplate.js";

export const animateMethod = createMethodPage({
  key: "animate",
  path: "/animate",
  label: "animate",
  title: "animate()",
  description: "Animates CSS properties over time.",
  signature: "crunch(selector).animate(styles, duration)",
  example: 'crunch(".box").animate({ opacity: 0.5 }, 300);',
});
