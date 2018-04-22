// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MainPage from './components/MainPage'
import router from './router'
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import MaterialInput from 'vue-material-input'
Vue.use(VueMaterial,MaterialInput);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: 'MainPage',
  router,
  components: { MainPage},
  template: '<MainPage/>'
})
