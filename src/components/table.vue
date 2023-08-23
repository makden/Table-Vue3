<template>
  <table class="table table-light table-striped table-bordered">
    <caption @click="$store.commit('tableHead')">
      vue
    </caption>
    <thead>
      <tr>
        <th v-for="col in $store.getters.tableHead">
          {{ col }} <span @click="sortCol">*</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="rows in $store.getters.tableData">
        <td v-for="col in rows">{{ col }}</td>
      </tr>
    </tbody>
  </table>
  <hr />
  <btn @click="hiddenWindow(true)"> Добавить строку</btn>

  <transition name="fade"
    ><mdlwnd
      @hiddenWindow="hiddenWindow"
      v-if="modalWindow"
      title="Добавить нового пользователя"
  /></transition>
</template>

<script>
import btn from './UI/btn';
import mdlwnd from './UI/modalwindow';
export default {
  components: {
    btn,
    mdlwnd,
  },
  name: 'table',
  props: {},
  data() {
    return { modalWindow: false };
  },
  methods: {
    sortCol() {
      this.$store.state.tables.dataTable = this.dataTable.filter((el) => {
        let ddd = [];
        el.forEach((elem, eee) => {
          if (String(elem).toLowerCase().indexOf('4-5') > -1) {
            ddd.push(elem);
          }
        });
        console.log(ddd);
        return ddd;
      });
    },
    hiddenWindow(hide) {
      this.modalWindow = hide;
    },
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* .table {
  width: 100%;
  border: none;
  margin-bottom: 20px;
  border-collapse: separate;
} */
.table thead th {
  font-weight: bold;
  text-align: left;
  border: none;
  padding: 10px 15px;
  background: #def;
  font-size: 14px;

  color: #333;
}
/*
.table tr th:first-child,
.table tr td:first-child {
  border-left: 1px solid #1f4699;
}
.table tr th:last-child,
.table tr td:last-child {
  border-right: 1px solid #1f4699;
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
  border-bottom: 1px solid #1f4699;
}
.table tbody tr:last-child td:first-child {
  border-radius: 0 0 0 20px;
}
.table tbody tr:last-child td:last-child {
  border-radius: 0 0 20px 0;
} */
</style>
