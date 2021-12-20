import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import '@fortawesome/fontawesome-free/js/all';
import store from './vuex/store'



const app = createApp(App);
      app.use(router);
      app.use(store);
      app.mount("#app");