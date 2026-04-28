import { Router } from "../router";

Router.register("/example", (mount) => {
  mount.innerHTML = `
        <section class="example">
		<p>This is an example of how you can create and style each component</p>
        </section>
    `;
});
