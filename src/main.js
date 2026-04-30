import "./crunch.js";

import { Router } from "./router.js";
import { renderSidebar } from "./layout/sidebar.js";

import "./styles/base.less";
import "./components/home.js";
import "./components/example.js";

renderSidebar();
Router.mount(document.getElementById("app"));
