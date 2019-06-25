<template>
  <div class="panel_webs">
    <div class="row">
      <div class="col-md-4">
        <list-webs-container></list-webs-container>
      </div>
      <div class="col-md-8">
        <single-web-container></single-web-container>
      </div>
    </div>
  </div>  
</template>

<script>
import {mapState, mapMutations, mapActions} from "vuex";
export default {
  name:"panel-webs-container",
  mounted() {
    
  },
  computed:{
    ...mapState(["web"])
  },
  methods:{
    
  }
  
};
</script>
