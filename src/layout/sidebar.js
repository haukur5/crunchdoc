import { renderMethodLinks } from "../components/methodPages.js";

export function renderSidebar() {
  document.getElementById("sidebar").innerHTML = `
        <h1>CrunchJS</h1>
        <nav>
            <h2>Getting Started</h2>
            <ul>
                <li><a href="#/">Home</a></li>
            </ul>
            <h2>Methods</h2>
            <ul>
                ${renderMethodLinks()}
            </ul>


        </nav>
`;
}
