import Vue from 'vue'
import App from './App.vue'
import router from "./router";




/**
 * Css Styles
 */

// import "./assets/css/bootstrap.min.css";
// import "./assets/css/font-awesome.min.css";
// import "./assets/css/elegant-icons.css";
// import "./assets/css/owl.carousel.min.css";
// import "./assets/css/nice-select.css";
// import "./assets/css/jquery-ui.min.css";
// import "./assets/css/slicknav.min.css";
// import "./assets/css/style.css";

/**
 * Js Plugins
 */

//  import "./assets/js/jquery-ui.min.js";
//  import "./assets/js/jquery.countdown.min.js";
//  import "./assets/js/jquery.nice-select.min.js";
//  import "./assets/js/jquery.zoom.min.js";
//  import "./assets/js/jquery.dd.min.js";
//  import "./assets/js/jquery.slicknav.js";
//  import "./assets/js/owl.carousel.min.js";
// import "../public/assets/js/main.js";


Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
