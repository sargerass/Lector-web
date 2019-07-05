<template>
  <div class="image-presentation">
    <div class="card" >
      <div class="image-presentation__image" :style="{'background-image':`url('${image.link}')`}">

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
  .image-presentation{
    margin-bottom: 1rem;
    &__image{
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
    
  },
  computed:{
    ...mapState(["web"])
  },
  methods:{
    
  }
  
};
</script>
