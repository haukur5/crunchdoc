import "./crunch.js";

import { Router } from "./router.js";
import { renderSidebar } from "./layout/sidebar.js";
import { registerMethodPages } from "./components/methodPages.js";

import "./styles/base.less";
import "./styles/main.less";
import "./components/home.js";

registerMethodPages();

renderSidebar();
Router.mount(document.getElementById("app"));
