<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="col in headTable">{{ col }}</th>
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
  props: {
    dataTable: Array,
    headTable: Array,
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
