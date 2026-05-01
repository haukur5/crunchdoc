import { Router } from "../router";

Router.register("/ancestor", (mount) => {
  mount.innerHTML = `
        <section class="hero">
            <h1>ancestor()</h1>
            <p>This method is not yet implemented.</p>
        </section>
    `;
});
