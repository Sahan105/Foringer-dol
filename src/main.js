import "sweetalert2/dist/sweetalert2.min.css";
import { createApp } from "vue";
import VueSweetalert2 from "vue-sweetalert2";
import "../src/assets/css/animate.css";
import "../src/assets/css/bootstrap.css";
import "../src/assets/css/dark.css";
import "../src/assets/css/font-icons.css";
import "../src/assets/css/magnific-popup.css";
import "../src/assets/css/responsive.css";
import "../src/assets/css/style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

createApp(App)
  .use(router)
  .use(store)
  .use(VueSweetalert2)

  .mount("#app");
