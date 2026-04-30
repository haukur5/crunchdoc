import { Router } from "../router";

Router.register("/text", (mount) => {
  mount.innerHTML = `
        <section class="hero">
            <h1>text()</h1>
            <p>This method is not yet implemented.</p>
        </section>
    `;
});
