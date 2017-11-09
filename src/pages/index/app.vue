<template>
  <div class="warp">
    <p>index</p>
    <hello></hello>
  </div>
</template>
<script>
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
.warp {
  max-width: 750px;
  margin: 0 auto;
  background: #CCC;
}
</style>
