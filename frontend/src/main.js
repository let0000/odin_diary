import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixin";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

createApp(App)
  .use(router)
  .use(store)
  .use(VueSweetalert2)
  .mixin(mixins)
  .mount("#app");

window.Kakao.init("363d2907a6151adfa741f25d9b29a371");
