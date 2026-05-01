import { createMethodPage } from "./methodTemplate.js";

export const attrMethod = createMethodPage({
  key: "attr",
  path: "/attr",
  label: "attr",
  title: "attr()",
  description: "Gets or sets element attributes.",
  signature: "crunch(selector).attr(name, value?)",
  example: 'crunch("img").attr("alt", "Preview image");',
});
