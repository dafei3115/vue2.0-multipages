<template>
  <div class="warp">
    <p>aaaa</p>
    <hello></hello>
  </div>
</template>
<script>
// require("../../assets/js/common");
import Hello from '../../components/HelloWorld'

export default {
  name: 'index',
  components: {
    'hello': Hello
  },
  data() {
    return {
      bannerHref: '',

    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      var rep = {
        bannerPosition: 'hasActive'
      }
    }
  }
}
</script>

<style scoped>
/* @import "../../assets/css/common.less"; */
</style>
