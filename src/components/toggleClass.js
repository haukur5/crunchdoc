import { Router } from "../router";

Router.register("/toggleClass", (mount) => {
  mount.innerHTML = `
        <section class="hero">
            <h1>toggleClass()</h1>
            <p>This method is not yet implemented.</p>
        </section>
    `;
});
