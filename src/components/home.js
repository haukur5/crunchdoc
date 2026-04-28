import { Router } from "../router";

Router.register("/", (mount) => {
  mount.innerHTML = `
        <section class="hero">
            <h1>CrunchJS</h1>
            <p>Use the sidebar to explore methods. Each page demonstrates a
               method in action and lets you try it out interactively.</p>
        </section>
    `;
});
