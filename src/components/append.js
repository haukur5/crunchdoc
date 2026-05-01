import { createMethodPage } from "./methodTemplate.js";

export const appendMethod = createMethodPage({
  key: "append",
  path: "/append",
  label: "append",
  title: "append()",
  description: "Appends content inside each matched element.",
  signature: "crunch(selector).append(content)",
  example: 'crunch(".list").append("<li>New item</li>");',
});
