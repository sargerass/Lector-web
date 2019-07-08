<template>
  <div class="font-presentation">
    {{font.name}}
  </div>
</template>
<style lang="scss" scoped>
  .font-presentation{
    margin-bottom: 1rem;
    text-align: center;
    padding: 5px 0;
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
