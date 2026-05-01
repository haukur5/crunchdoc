export function createMethodPage({
  key,
  path,
  label,
  title,
  description,
  signature,
  example,
  demoHtml = "<p>Demo coming soon.</p>",
  setupDemo = () => {},
}) {
  return {
    key,
    path,
    label,
    title,
    description,
    signature,
    example,
    demoHtml,
    setupDemo,
  };
}
