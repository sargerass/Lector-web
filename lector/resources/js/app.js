/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vuex from 'vuex'
import VeeValidate from "vee-validate";
import { Validator } from 'vee-validate';
import Notifications from 'vue-notification';

import Clipboard from 'v-clipboard';

import {dictionaryForms} from "./services/DictionaryForms.js";

window.Vue = require('vue');

Vue.use(Vuex);
Vue.use(Clipboard);
Vue.use(Notifications);
Vue.use(VeeValidate,{
    locale:"es"
});

Validator.localize(dictionaryForms);


Vue.component('list-webs-container', require('./components/containers/ListWebsContainer.vue').default);
Vue.component('panel-webs-container', require('./components/containers/PanelWebsContainer.vue').default);
Vue.component('single-web-container', require('./components/containers/SingleWebContainer.vue').default);
Vue.component('create-web-modal', require('./components/modals/CreateWebModal.vue').default);
Vue.component('lector-script-modal', require('./components/modals/LectorScriptModal.vue').default);
Vue.component('loader-web', require('./components/utils/LoaderWeb.vue').default);

import {store} from "./services/Store.js";

const app = new Vue({
    el: '#app',store
    
});
