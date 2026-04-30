import { Router } from "../router";

Router.register("/prepend", (mount) => {
  mount.innerHTML = `
        <section class="hero">
            <h1>prepend()</h1>
            <p>This method is not yet implemented.</p>
        </section>
    `;
});
