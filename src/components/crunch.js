import { Router } from "../router";

Router.register("/crunch", (mount) => {
  mount.innerHTML = `
        <section class="hero">
            <h1>crunch()</h1>
            <p>This method is not yet implemented.</p>
        </section>
    `;
});
