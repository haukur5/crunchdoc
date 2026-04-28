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
                <li><a href="#/example">example</a></li>
            </ul>
        </nav>
`;
}
