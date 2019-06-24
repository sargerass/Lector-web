<template>
  <article class="single_web">
    <h2 class="single_web_title">
      {{web.data.name}}
    </h2>
    <p>
      {{web.data.description}}
    </p>
    <div>
      {{web.data}}
    </div>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="imagenes-tab" data-toggle="tab" href="#imagenes" role="tab" aria-controls="imagenes" aria-selected="true">Imagenes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="colores-tab" data-toggle="tab" href="#colores" role="tab" aria-controls="colores" aria-selected="false">Colores</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="fuentes-tab" data-toggle="tab" href="#fuentes" role="tab" aria-controls="fuentes" aria-selected="false">Fuentes</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="imagenes" role="tabpanel" aria-labelledby="imagenes-tab">
        <div class="row">
          <div class="col-md-4" v-for="(image) in arrayImages" :key="image.id">
            <image-presentation :image="image" ></image-presentation>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="colores" role="tabpanel" aria-labelledby="colores-tab">
        colores
      </div>
      <div class="tab-pane fade" id="fuentes" role="tabpanel" aria-labelledby="fuentes-tab">
        fuentes
      </div>
    </div>
  </article>
</template>
<style lang="scss" scoped>
  
</style>


<script>
import {EventBus} from "../../services/EventBus.js";
import ImagePresentation from "../presentations/ImagePresentation.vue";
import {mapState, mapMutations, mapActions} from "vuex";
export default {
  name: "single-web-container",
  data(){
    return {
      arrayImages:[],
      arrayFonts:[],
      arrayColors:[]
    };
  },
  mounted() {
    console.log("Component mounted.");
    EventBus.$on("loadInfoWeb",this.loadInfo);
  },
  components:{
    ImagePresentation
  },
  computed:{
    ...mapState(["web"])
  },
  methods:{
    loadInfo(){
      console.log("load data");
      axios.get("/web/"+this.web.data.id).then( (res) =>{
        
        this.arrayImages = res.data.arrayImages;
        this.arrayFonts = res.data.arrayFonts;
        this.arrayColors = res.data.arrayColors;
      }, error => {
        
      } )
    }
  }
};
</script>
