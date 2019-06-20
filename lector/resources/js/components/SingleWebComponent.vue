<template>
  <section class="single_web">
    <h2 class="single_web_title">

    </h2>
  </section>
</template>
<style>

</style>

<script>
import {mapState, mapMutations, mapActions} from "vuex";
export default {
  name: "single-web-component",
  mounted() {
    console.log("Component mounted.");
  },
  computed:{
    ...mapState(["web"])
  }
};
</script>
