/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vuex from 'vuex'
import VeeValidate from "vee-validate";
import { Validator } from 'vee-validate';
window.Vue = require('vue');

Vue.use(Vuex);
Vue.use(VeeValidate,{
    locale:"es"
});
import {dictionaryForms} from "./services/DictionaryForms.js";
Validator.localize(dictionaryForms);
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));


Vue.component('list-webs-component', require('./components/ListWebsComponent.vue').default);
Vue.component('panel-webs-component', require('./components/PanelWebsComponent.vue').default);
Vue.component('single-web-component', require('./components/SingleWebComponent.vue').default);
Vue.component('create-web-modal', require('./modals/CreateWebModal.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import {store} from "./services/Store.js";

const app = new Vue({
    el: '#app',store
    
});