<template>
  <div class="warp">
    <h1 id="aaa">index</h1>
    <p>indexindexindex{{this.$route.query.uid}}</p>
    <hello></hello>
  </div>
</template>
<script>
require("../../assets/js/common");
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
      $("#aaa").html("indexaaa")
    }
  }
}
</script>
<style lang="less" scoped>
.warp {
  max-width: 750px;
  margin: 0 auto;
  background: #CCC;
}
.warp{
  h1{ font-size: 28px;}
  p{ font-size: 16px;}
}
</style>
