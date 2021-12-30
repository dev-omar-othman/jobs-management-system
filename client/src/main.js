import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import header1 from './components/not-user-header.vue';
import header2 from './components/user-header.vue';
import header3 from './components/recruiter-header.vue';
import jobpost from './components/job-post.vue';
import jobcomponent from './components/job.vue';
import "normalize.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

Vue.config.productionTip = false;
Vue.component('header1', header1);
Vue.component('header2', header2);
Vue.component('header3', header3);
Vue.component('jobpost', jobpost);
Vue.component('jobcomponent', jobcomponent);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
