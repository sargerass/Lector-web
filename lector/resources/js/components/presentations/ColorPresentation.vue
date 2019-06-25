<template>
  <div class="color_presentation">
    <div class="color_presentation_box" :style="{'background':color.rgba}"></div>
    <div class="color_presentation_codigos">
      {{color.rgba}}
      <br>
      {{color.hexa}}
    </div>
  </div>  
</template>
<style lang="scss" scoped>
  .color_presentation{
    margin-bottom: 1rem;    
    &_box{
      &::before{
        content:"";
        display: block;
        padding-top: 100%;
      }
    }
    &_codigos{
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
