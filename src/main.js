import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueI18n from "vue-i18n";

import "@/styles/index.css";

const i18n = VueI18n.createI18n({
	locale: "hr",
	fallbackLocale: "en",
});

/* const App = Vue.createApp({}); */

App.use(i18n);
App.use(router);
App.mount("#app");

createApp(App).use(router).use(i18n).mount("#app");
