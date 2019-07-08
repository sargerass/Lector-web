<template>
  <div class="loader-web">
    <div class="loader-web__container">
      <div>
        Cargando
        <br>
        <div class="spinner-border text-dark" role="status">        
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      
    </div>
  </div>
</template>
<style lang="scss" scoped>
.loader-web {
  position: fixed;
  background: rgba(0,0,0,.5);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 6666;
  &__container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
    color:#fff;
  }
}
</style>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "loader-web",
  props: [],
  mounted() {},
  computed: {
    ...mapState(["web"])
  },
  methods: {}
};
</script>
