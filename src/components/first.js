import { Router } from "../router";

Router.register("/first", (mount) => {
  mount.innerHTML = `
        <section class="hero">
            <h1>first()</h1>
            <p>This method is not yet implemented.</p>
        </section>
    `;
});
