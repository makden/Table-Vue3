export default {
  props:{
      hiddenWindow:{
          type:Boolean,
          default:false
      }
  },

  methods:{
      hidden() {
          this.$emit("hiddenWindow", false);
        }
  }
}