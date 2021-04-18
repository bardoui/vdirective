import { createApp } from "vue";
import App from "./App.vue";
import vDirective from "../src/vDirective";

createApp(App)
    .use(vDirective)
    .mount("#app");
