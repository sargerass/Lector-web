<template>
  <section class="list-webs-container">
    <button class="btn btn-success" @click="addPage">Agregar Página</button>
    <hr />
    <div class="list-group">
      <button
        v-for="page in  arrayPages"
        :key="page.id"
        type="button"
        class="list-group-item list-group-item-action"
        :class="{'active':page.id == web.data.id}"
        @click="viewDetail(page)"
      >{{page.name}}</button>
    </div>
    <hr />
    <button class="btn btn-dark btn-block" @click="verScript">Ver Script</button>
    <!--
    <button v-clipboard="value">
            Copy to clipboard
    </button>
    -->
    <create-web-modal ref="createWebModal" @webCreated="loadListWebs"></create-web-modal>
    <lector-script-modal ref="lectorScriptModal"></lector-script-modal>
  </section>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { EventBus } from "../../services/EventBus.js";
export default {
  name: "list-webs-container",
  data() {
    return {
      lectorJS: "---JOJO",
      collegeCurrent: "null",
      arrayPages: []
    };
  },
  components: {},
  mounted() {
    this.loadListWebs();
    EventBus.$on("reloadListpage", this.loadListWebs);
  },
  computed: {
    ...mapState(["web"])
  },
  methods: {
    ...mapMutations(["showNotification", 'verScript']),
    addPage() {
      this.$refs.createWebModal.showModal();
    },
    viewDetail(page) {
      /*
      this.showNotification({
        title: "text",
        text: "el nueevo"
      });
      */
      this.web.data = page;
      EventBus.$emit("loadInfoWeb");
    },
    loadListWebs() {
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
