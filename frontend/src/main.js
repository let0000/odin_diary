import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixin";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

createApp(App).use(router).use(store).mixin(mixins).mount("#app");

window.Kakao.init("363d2907a6151adfa741f25d9b29a371");
