import Vue from 'vue'
import App from './App.vue'
import axios from "axios" //Imported axios in here as well


Vue.config.productionTip = false
Vue.prototype.$http = axios;//Equated axios to $http so i could get an APi request. Found this method off a Vue youtube tutorial. 

new Vue({
  render: h => h(App),
}).$mount('#app')
