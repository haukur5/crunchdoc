export const Router = (() => {
  const routes = new Map();
  let notFound = null;
  let mountEl = null;

  function register(path, renderFn) {
    routes.set(path, renderFn);
  }

  function setNotFound(renderFn) {
    notFound = renderFn;
  }

  function mount(el) {
    mountEl = el;
    window.addEventListener("hashchange", resolve);
    resolve();
  }

  function resolve() {
    const path = location.hash.replace(/^#/, "") || "/";
    mountEl.innerHTML = "";

    const handler = routes.get(path);
    if (handler) {
      handler(mountEl);
    } else if (notFound) {
      notFound(mountEl);
    } else {
      mountEl.innerHTML = "<h1>404</h1><p>Page not found.</p>";
    }
  }

  return { register, setNotFound, mount };
})();
