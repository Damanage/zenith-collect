// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// Components
import './components'

// Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'

import "@/assets/css/font.css";
import "@/assets/main.css";
import lodash from 'vue-lodash'
import moment from 'vue-moment'
import localstorage from 'vue-localstorage'

// Sync store with router
sync(store, router)

Vue.config.productionTip = false

Vue.use(lodash);
Vue.use(moment);
Vue.use(localstorage, {name: 'localStorage'});

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.filter('date', function (value) {
  if (value) return Vue.moment(value).format('DD.MM.YYYY')
  return null;
});

Vue.filter('fio', function (value) {
  if (value && value.sur_name && value.name) return `${value.sur_name} ${value.name}`.trim();
});

Vue.filter('isNullOrEmpty', function (value) {
  return !!(!value || value.length === 0);
});

Vue.config.errorHandler = function (error, component, source) {
  console.log(`Error Handler: ${error}, ${component}, ${source}`);
}

