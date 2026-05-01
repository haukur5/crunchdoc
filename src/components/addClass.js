import { Router } from "../router";

Router.register("/addClass", (mount) => {
  mount.innerHTML = `
        <section class="method-page">
            <header class="method-page_header">
                <h1>addClass()</h1>
                <p>This method is not yet implemented.</p>
            </header>

            <section class="demo-panel">
                <div class="demo-panel_header">
                    <h2> Demo </h2>

                    <section class="code-panel">
                        <pre><code>crunch(".demo-card").addClass("is-selected");</code></pre>
                    </section>

                    <button class="button" type="button" id="add-class-demo">
                        Add class
                    </button>
                </div>
            
                <div class="demo-panel_body">
                    <div class="demo-card>Card 1</div>
                    <div class="demo-card>Card 2</div>
                    <div class="demo-card>Card 3</div>
                </div>

                <pre class="demo-panel_output" id="add-class-output">
                    Click the button to test addClass()
                </pre>
            </section>

        </section>
    `;

    const button = mount.querySelector("#add-class-demo");
    const output = mount.querySelector("#add-class-output");

    button.addEventListener("click",() => {
        crunch(".demo-card").addClass("is-selected");

        output.textContent = 
            'Ran: crunch(".demo-card").addClass("is-selected")';
    });

});
