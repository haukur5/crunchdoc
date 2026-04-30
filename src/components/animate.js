import { Router } from "../router";

Router.register("/animate", (mount) => {
  mount.innerHTML = `
        <section class="hero">
            <h1>animate()</h1>
            <p>This method is not yet implemented.</p>
        </section>
    `;
});
