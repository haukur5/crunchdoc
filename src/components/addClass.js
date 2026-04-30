import { Router } from "../router";

Router.register("/addClass", (mount) => {
  mount.innerHTML = `
        <section class="hero">
            <h1>addClass()</h1>
            <p>This method is not yet implemented.</p>
        </section>
    `;
});
