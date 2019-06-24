<template>
  <div class="image_single">
    <div class="card" >
      <div class="image_single_image" :style="{'background-image':`url('${image.link}')`}">

      </div>
      <div class="card-body">
        <p class="card-text">
          Formato: <strong>{{image.format}}</strong>
        </p>
        <div class="text-center">
          <a :href="image.link" target="_blank" class="btn btn-primary">
            Ver imagen
          </a>
        </div>          
      </div>
    </div>
  </div>  
</template>
<style lang="scss" scoped>
  .image_single{
    margin-bottom: 1rem;
    &_image{
      margin:1rem;
      height: 150px;
      background-size:contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    
  }
</style>

<script>
import {mapState, mapMutations, mapActions} from "vuex";
export default {
  name:"image-presentation",
  props:["image"],
  mounted() {
    console.log("Component mounted.");
  },
  computed:{
    ...mapState(["web"])
  },
  methods:{
    
  }
  
};
</script>
