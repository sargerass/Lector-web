<template>
  <div class="font-presentation">
    {{font}}
  </div>  
</template>
<style lang="scss" scoped>
  .font-presentation{
    margin-bottom: 1rem;
  }
</style>

<script>
import {mapState, mapMutations, mapActions} from "vuex";
export default {
  name:"font-presentation",
  props:["font"],
  mounted() {
    
  },
  computed:{
    ...mapState(["web"])
  },
  methods:{
    
  }
  
};
</script>
