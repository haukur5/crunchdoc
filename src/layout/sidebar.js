export function renderSidebar() {
  document.getElementById("sidebar").innerHTML = `
        <div class="library-title">
            <h2>CrunchJs</h2>
        </div>
        <nav>
            <h2>Getting Started</h2>
            <ul>
                <li><a href="#/">Home</a></li>
            </ul>
            <h2>Methods</h2>
            <ul>
                <li><a href="#/crunch">crunch</a></li>
                <li><a href="#/siblings">siblings</a></li>
                <li><a href="#/ancestor">ancestor</a></li>
                <li><a href="#/animate">animate</a></li>
                <li><a href="#/validation">validation</a></li>
                <li><a href="#/addClass">addClass</a></li>
                <li><a href="#/removeClass">removeClass</a></li>
                <li><a href="#/toggleClass">toggleClass</a></li>
                <li><a href="#/attr">attr</a></li>
                <li><a href="#/text">text</a></li>
                <li><a href="#/on">on</a></li>
                <li><a href="#/append">append</a></li>
                <li><a href="#/prepend">prepend</a></li>
                <li><a href="#/remove">remove</a></li>
                <li><a href="#/first">first</a></li>
                <li><a href="#/last">last</a></li>
            </ul>


        </nav>
`;
}
