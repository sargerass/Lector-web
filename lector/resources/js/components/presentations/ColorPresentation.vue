<template>
  <div class="color-presentation">
    <div class="color-presentation__box" :style="{'background':color.rgba}"></div>
    <div class="color-presentation__codigos">
      {{color.rgba}}
      <br>
      {{color.hexa}}
    </div>
  </div>  
</template>
<style lang="scss" scoped>
  .color-presentation{
    margin-bottom: 1rem;    
    &__box{
      &::before{
        content:"";
        display: block;
        padding-top: 100%;
      }
    }
    &__codigos{
      font-size: .8rem;
      font-weight: bold;
    }
  }
</style>

<script>
import {mapState, mapMutations, mapActions} from "vuex";
export default {
  name:"color-presentation",
  props:["color"],
  mounted() {
    
  },
  computed:{
    ...mapState(["web"])
  },
  methods:{
    
  }
  
};
</script>
