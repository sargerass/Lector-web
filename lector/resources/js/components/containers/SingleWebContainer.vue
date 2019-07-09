<template>
  <article class="single-web-container">
    <div class="row">
      <div class="col-md-9">
        <h2 class="single-web-container__title">
          {{web.data.name}}
        </h2>
      </div>
      <div class="col-md-3 text-right">
        <button class="btn btn-danger" @click="deleteWeb">
          Eliminar
        </button>
      </div>
    </div>    
    <p>
      {{web.data.description}}
    </p>
    
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
        <div class="row">
          <div class="col-md-3" v-for="(color) in arrayColors" :key="color.id">
            <color-presentation :color="color" ></color-presentation>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="fuentes" role="tabpanel" aria-labelledby="fuentes-tab">
        <div class="row">
          <div class="col-md-4" v-for="(font) in arrayFonts" :key="font.id">
            <font-presentation :font="font" ></font-presentation>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<style lang="scss" scoped>
  
</style>
<script>
import {EventBus} from "../../services/EventBus.js";

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
  created(){
    EventBus.$on("loadInfoWeb",this.loadInfo);
    
  },
  mounted() {
    //EventBus.$on("loadInfoWeb",this.loadInfo);
    this.loadInfo();
  },
  components:{
    //ImagePresentation,ColorPresentation,FontPresentation
  },
  computed:{
    ...mapState(["web"])
  },
  methods:{
    ...mapMutations(['showNotification']),
    deleteWeb(){      
      axios.delete("/web/"+this.web.data.id).then( (res) =>{
        console.log("llego", res, res.data);
        this.web.data.id = false;
        EventBus.$emit("reloadListpage");
        this.showNotification({
          title:"Página eliminada",
          text:`Se elimino la página ${this.web.data.name}`,
          type:"error"
        })
      }, error => {
        
      } )
    },
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
