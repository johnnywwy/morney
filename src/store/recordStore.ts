import clone from '@/lib/clone';

const localStorageKayName = 'recordList';

const recordStore = {
  recordList: [] as RecordItem[],
  fetchRecords() {
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageKayName) || '[]') as RecordItem[];
    return this.recordList;
  },
  saveRecord() {
    window.localStorage.setItem(localStorageKayName, JSON.stringify(this.recordList));
  },
  createRecord(record: RecordItem) {
    const record2: RecordItem = clone(record);
    record2.createAt = new Date();
    this.recordList && this.recordList.push(record2);
    recordStore.saveRecord();

  }

};

recordStore.fetchRecords();

export default recordStore;