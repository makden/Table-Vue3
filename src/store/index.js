import { createStore } from 'vuex';
import { tables } from './table.db';
import { tables2 } from './table2.db';
export default createStore({
  state: {
    table: tables,
  },
  getters: {
    tableHead(state) {
      return state.table.headtable;
    },
    tableData(state) {
      return state.table.datatable;
    },
  },
  mutations: {
    tableHead(state) {
      state.table = tables2;
    },
    // tableData(state, table) {
    //   state.table = table;
    // },
  },
  actions: {},
});
