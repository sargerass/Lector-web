<template>
  <div
    class="lector_script_modal modal fade"
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
          <h5 class="modal-title" :id="idModal">Lector JS</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <button v-clipboard="value"
            >
            Copy to clipboard
          </button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <!--
          <button type="button" class="btn btn-primary">Save changes</button>
          -->
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .lector_script_modal{
    
  }
</style>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "lector-script-modal",
  data() {
    return {
      value:"hollaa",
      web:{},
      idModal: "modalL" + new Date().getUTCMilliseconds(),
      
    };
  },
  mounted() {
    //console.log("modal.",this.web);
  },
  computed: {
    //...mapState(["web"])
  },
  methods: {
    clipboardSuccessHandler ({ value, event }) {
      console.log('success', value)
      this.$clipboard(value)
    },
 
    clipboardErrorHandler ({ value, event }) {
      console.log('error', value)
    },
    showModal() {
      $(this.$refs.modal).modal();
    }
  }
};
</script>



