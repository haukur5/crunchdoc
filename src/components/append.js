import { Router } from "../router";

Router.register("/append", (mount) => {
  mount.innerHTML = `
        <section class="hero">
            <h1>append()</h1>
            <p>This method is not yet implemented.</p>
        </section>
    `;
});
