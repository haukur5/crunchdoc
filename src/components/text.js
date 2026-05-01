import { createMethodPage } from "./methodTemplate.js";

export const textMethod = createMethodPage({
  key: "text",
  path: "/text",
  label: "text",
  title: "text()",
  description: "Gets or sets text content.",
  signature: "crunch(selector).text(value?)",
  example: 'crunch(".title").text("Hello Crunch");',
});
