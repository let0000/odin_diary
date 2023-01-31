import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixin";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

createApp(App).use(router).mixin(mixins).mount("#app");
