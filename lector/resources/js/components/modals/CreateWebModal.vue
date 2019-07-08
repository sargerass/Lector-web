<template>
  <div
    class="create-web-modal modal fade"
    ref="modal"
    :id="idModal"
    tabindex="-1"
    role="dialog"
    :aria-labelledby="idModal"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="idModal">Crear página</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form
            id="app"
            @submit="checkForm"
            action="/api/web"
            method="post"
          >
            <div class="form-group">
              <label for="formGroupExampleInput">Nombre</label>
              <input
                type="text"
                class="form-control"
                v-model="web.name"
                name="name"
                id="name"
                :class="{'create-web-modal__form-error':errors.first('name')}"
                placeholder="Ingresa su nombre"
                v-validate="{required:true }"
                required
              >
              <span>{{ errors.first('url') }}</span>
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput">url</label>
              <input
                type="url"
                class="form-control"
                v-model="web.url"
                name="url"
                id="url"
                :class="{'create-web-modal__form-error':errors.first('url')}"
                placeholder="Ingresa la url"
                v-validate="{required:true,url: {require_protocol: true }}"
                required
              >
              <span>{{ errors.first('url') }}</span>
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Descripción</label>
              <input
                type="text"
                class="form-control"
                v-model="web.description"
                name="description"
                id="description"
                placeholder="Descripción"
                :class="{'create-web-modal__form-error':errors.first('description')}"
                v-validate="{required:true}"
                required
              >
              <span>{{ errors.first('description') }}</span>
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Data</label>
              <textarea v-model="web.data" cols="30" rows="10" name="data" id="data" class="form-control" v-validate="{required:true}" 
                :class="{'create-web-modal__form-error':errors.first('data')}"
                required
              >
              </textarea>
            </div>
            <div>
              <button class="btn btn-link" @click="verScript">Ver Script</button>
            </div>
            <br>
            <div class="text-center">              
              <button type="submit" class="btn btn-dark">
                Crear Página
              </button>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .create-web-modal{
    &__form-error{
      border:1px solid #f00;
    }
  }
</style>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "create-web-modal",
  data() {
    return {
      web:{},
      idModal: "modal" + new Date().getUTCMilliseconds(),
      
    };
  },
  mounted() {
    console.log("modal.",this.web, this.load);
  },
  computed: {
    ...mapState(["statusPage"])
  },
  methods: {
    ...mapMutations(['verScript']),
    checkForm(e){
      e.preventDefault();
      if(this.errors.items.length == 0){
        this.statusPage.block = true;    
        axios.post("/web", this.web).then( (res) =>{
          if(res.data.status == 1){
            $(this.$refs.modal).modal('hide');
            this.$emit("webCreated");
          }
          this.statusPage.block = false;
        },error=>{
          this.statusPage.block = false;
        });
        
      }
      console.log("---",this.web,this.errors);
    },
    showModal() {
      $(this.$refs.modal).modal();
      this.web = {};
    }
  }
};
</script>



