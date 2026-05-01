import { createMethodPage } from "./methodTemplate.js";

export const onMethod = createMethodPage({
  key: "on",
  path: "/on",
  label: "on",
  title: "on()",
  description: "Attaches event listeners to matched elements.",
  signature: "crunch(selector).on(eventName, handler)",
  example: 'crunch(".btn").on("click", handleClick);',
});
