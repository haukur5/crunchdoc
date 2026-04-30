import { Router } from "../router";

Router.register("/removeClass", (mount) => {
  mount.innerHTML = `
        <section class="hero">
            <h1>removeClass()</h1>
            <p>This method is not yet implemented.</p>
        </section>
    `;
});
