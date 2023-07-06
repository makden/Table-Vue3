<template>
  <div id="app">
    <hr />
    <Table :dataTable="TableBody" :headTable="TableHead" />
    <!--<HelloWorld msg="Tables" /> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Table from './components/table.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Table,
  },
  data() {
    return {
      TableHead: [
        'Заголовок1',
        'Заголовок2',
        'Заголовок3',
        'Заголовок4',
        'Заголовок5',
      ],
      TableBody: [
        ['val-1-1', 'val-1-2', 'val-1-3', 'val-1-4', 'val-1-5'],
        ['val-2-1', 'val-2-2', 'val-2-3', 'val-2-4', 'val-2-5'],
        ['val-3-1', 'val-3-2', 'val-3-3', 'val-3-4', 'val-3-5'],
        ['val-4-1', 'val-4-2', 'val-4-3', 'val-4-4', 'val-4-5'],
        ['val-5-1', 'val-5-2', 'val-5-3', 'val-5-4', 'val-5-5'],
      ],
    };
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
  margin-top: 60px;
}
</style>
