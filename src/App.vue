<template>
  <div id="app">
    <hdr />
    <hr />
    <Table :dataTable="TableBody" :headTable="TableHead" />
    <!--<HelloWorld msg="Tables" /> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Table from './components/table.vue';
import hdr from './components/hdr.vue';
export default {
  name: 'App',
  components: {
    hdr,
    HelloWorld,
    Table,
  },
  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  font-size: 14px;
}
</style>
