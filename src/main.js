import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@/styles/index.css";
import i18n from "./i18n";

createApp(App).use(i18n).use(router).use(i18n).mount("#app");
