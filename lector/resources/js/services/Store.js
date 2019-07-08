/* eslint-disable */
import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);
export const store = new Vuex.Store({
	state: {
		statusPage:{
			block:false,
		},		
		web: {
			data: {}
		},
		views:{

		}
	},
	actions: {

	},
	mutations: {
		showNotification(state,options){
			state.views.panel.$notify({
				group: 'notificacion',
				...options
      });
		},
		verScript() {
      window.open("/assets/lector.js", "_blank");
    }
	}
});