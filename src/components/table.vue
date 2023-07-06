<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="col in headTable">
          {{ col }} <span @click="sortCol">*</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="rows in dataTable">
        <td v-for="col in rows">{{ col }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'table',
  props: {},
  data() {
    return {
      headTable: [
        'Заголовок 1',
        'Заголовок 2',
        'Заголовок 3',
        'Заголовок 4',
        'Заголовок 5',
      ],
      dataTable: [
        ['val-1-1', 'val-1-2', 'val-1-3', 'val-1-4', 'val-1-5'],
        ['val-2-1', 'val-2-2', 'val-2-3', 'val-2-4', 'val-2-5'],
        ['val-3-1', 'val-3-2', 'val-3-3', 'val-3-4', 'val-3-5'],
        ['val-4-1', 'val-4-2', 'val-4-3', 'val-4-4', 'val-4-5'],
        ['val-5-1', 'val-5-2', 'val-5-3', 'val-5-4', 'val-5-5'],
      ],
    };
  },
  methods: {
    sortCol() {
      this.dataTable = this.dataTable.filter((el) => {
        console.log('----');
        let ddd = el.forEach((elem, eee) => {
          return String(elem).toLowerCase().indexOf('4-5') > -1;
        });
        //console.log(ddd);
        return ddd;
      });
    },
  },
};
</script>

<style scoped>
.table {
  width: 100%;
  border: none;
  margin-bottom: 20px;
  border-collapse: separate;
}
.table thead th {
  font-weight: bold;
  text-align: left;
  border: none;
  padding: 10px 15px;
  background: #def;
  font-size: 14px;
  border-top: 1px solid #ddd;
}
.table tr th:first-child,
.table tr td:first-child {
  border-left: 1px solid #ddd;
}
.table tr th:last-child,
.table tr td:last-child {
  border-right: 1px solid #ddd;
}
.table thead tr th:first-child {
  border-radius: 10px 0 0 0;
}
.table thead tr th:last-child {
  border-radius: 0 10px 0 0;
}
.table tbody td {
  text-align: left;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
}
.table tbody tr:nth-child(even) {
  background: #f8f8f8;
}
.table tbody tr:last-child td {
  border-bottom: 1px solid #ddd;
}
.table tbody tr:last-child td:first-child {
  border-radius: 0 0 0 20px;
}
.table tbody tr:last-child td:last-child {
  border-radius: 0 0 20px 0;
}
</style>
