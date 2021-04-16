import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";

Vue.config.productionTip = false;
new Vue({
  vuetify: new Vuetify(),
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
  render: (h) => h(App),
}).$mount("#app");
