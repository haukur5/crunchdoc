import { Router } from "../router";

Router.register("/last", (mount) => {
  mount.innerHTML = `
        <section class="hero">
            <h1>last()</h1>
            <p>This method is not yet implemented.</p>
        </section>
    `;
});
