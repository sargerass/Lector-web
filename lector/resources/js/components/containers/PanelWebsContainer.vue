<template>
  <div class="panel-webs">
    <div class="row">
      <div class="col-md-4">
        <list-webs-container></list-webs-container>
      </div>
      <div class="col-md-8">
        <single-web-container v-if="web.data.id" ></single-web-container>
      </div>
    </div>
    <notifications group="notificacion" position="bottom right"/>
    <loader-web v-show="statusPage.block"></loader-web>
  </div>  
  
</template>

<script>
import {mapState, mapMutations, mapActions} from "vuex";
export default {
  name:"panel-webs-container",
  mounted() {
    this.views.panel = this;
  },
  computed:{
    ...mapState(["web", 'views', 'statusPage'])
  },
  methods:{
    
  }
  
};
</script>
