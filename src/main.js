import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import "@/style/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import BootstrapVue3 from "bootstrap-vue-3";

const app = createApp(App);

app.use(i18n);
app.use(BootstrapVue3);
app.use(store);
app.use(router);
app.mount("#app");
