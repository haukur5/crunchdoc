import { Router } from "../router";

Router.register("/remove", (mount) => {
  mount.innerHTML = `
        <section class="hero">
            <h1>remove()</h1>
            <p>This method is not yet implemented.</p>
        </section>
    `;
});
