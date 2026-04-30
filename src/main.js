import "./crunch.js";

import { Router } from "./router.js";
import { renderSidebar } from "./layout/sidebar.js";

import "./styles/base.less";
import "./components/home.js";
import "./components/crunch.js";
import "./components/siblings.js";
import "./components/ancestor.js";
import "./components/animate.js";
import "./components/validation.js";
import "./components/addClass.js";
import "./components/removeClass.js";
import "./components/toggleClass.js";
import "./components/attr.js";
import "./components/text.js";
import "./components/on.js";
import "./components/append.js";
import "./components/prepend.js";
import "./components/remove.js";
import "./components/first.js";
import "./components/last.js";

renderSidebar();
Router.mount(document.getElementById("app"));
