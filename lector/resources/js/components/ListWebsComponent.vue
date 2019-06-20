<template>
  <section>
    <button class="btn btn-success" @click="addPage">Agregar Página</button>
    <hr>
    <div class="list-group">
      <button type="button" class="list-group-item list-group-item-action active">Cras justo odio</button>
      <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
      <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
      <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur a 222222222   --------------  c</button>
      <button
        type="button"
        class="list-group-item list-group-item-action"
        disabled
      >Vestibulum at eros</button>
    </div>
    <create-web-modal ref="createWebModal"></create-web-modal>
  </section>
</template>

<script>
import {mapState, mapMutations, mapActions} from "vuex";
export default {
  name: "list-webs-component",
  mounted() {
    console.log("mounted",$);
  },
  computed:{
    ...mapState(["web"])
  },
  methods:{
    addPage(){
      this.$refs.createWebModal.showModal();
      console.log("addPage");
    }
  }
};
</script>
