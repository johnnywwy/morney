import clone from '@/lib/clone';

const localStorageKayName = 'recordList';

let data: RecordItem[] | undefined = undefined;

const recordStore = {
  recordList: data,
  fetchRecords() {
    data = JSON.parse(window.localStorage.getItem(localStorageKayName) || '[]') as RecordItem[];
    return data;
  },
  saveRecord() {
    window.localStorage.setItem(localStorageKayName, JSON.stringify(data));
  },
  createRecord: (record: RecordItem) => {
    const record2: RecordItem = clone(record);
    record2.createAt = new Date();
    data && data.push(record2);
    recordStore.saveRecord();

  }

};

recordStore.fetchRecords();

export default recordStore;