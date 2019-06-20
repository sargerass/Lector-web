<template>
  <div class="panel_webs">
    <div class="row">
      <div class="col-md-4">
        <list-webs-component></list-webs-component>
      </div>
      <div class="col-md-8">
        <single-web-component></single-web-component>
      </div>
    </div>
    
  </div>  
</template>

<script>
import {mapState, mapMutations, mapActions} from "vuex";
export default {
  name:"panel-webs-component",
  mounted() {
    console.log("Component mounted.");
  },
  computed:{
    ...mapState(["web"])
  }
  
};
</script>
