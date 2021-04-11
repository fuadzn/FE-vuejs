import Vue from "vue";
import index from "./app/index.vue";
import "./css/main.css";

new Vue({
  render: (h) => h(index),
}).$mount("#app");
