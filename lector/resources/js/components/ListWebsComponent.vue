<template>
  <section>
    <button class="btn btn-success" @click="addPage">Agregar Página</button>
    <hr>
    <div class="list-group">
      <button
        v-for="page in  arrayPages"
        :key="page.id"
        type="button"
        class="list-group-item list-group-item-action"
        @click="viewDetail(page)"
      >{{page.name}}</button>
    </div>
    <create-web-modal ref="createWebModal" @webCreated="loadListWebs"></create-web-modal>
  </section>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "list-webs-component",
  data() {
    return {
      arrayPages: []
    };
  },
  mounted() {
    this.loadListWebs();
  },
  computed: {
    ...mapState(["web"])
  },
  methods: {
    addPage() {
      this.$refs.createWebModal.showModal();
      console.log("addPage");
    },
    viewDetail(page){
      this.web = page;
    },
    loadListWebs() {
      console.log("cargaremos la lista de la bwe ");
      axios.get("/web").then(
        res => {
          console.log("eeee", res);
          if (res.data.status == 1) {
            this.arrayPages = res.data.arrayPages;
          }
        },
        error => {
          console.log("no hay sesion");
        }
      );
    }
  }
};
</script>
