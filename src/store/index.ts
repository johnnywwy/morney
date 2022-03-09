import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[]
  },
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    saveRecord(state) {
      window.localStorage.setItem('recordList',
        JSON.stringify(state.recordList));
    },
    createRecord(state, record: RecordItem) {
      const record2: RecordItem = clone(record);
      record2.createAt = new Date();
      state.recordList.push(record2);
      console.log(state.recordList);
      store.commit('saveRecord');
    }
  }
});


export default store;
