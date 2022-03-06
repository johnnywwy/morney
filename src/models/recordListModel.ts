const localStorageKayName = 'recordList';

const recordListModel = {
  clone(data: RecordItem[]| RecordItem) {
    return JSON.parse(JSON.stringify(data));
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKayName) || '[]') as RecordItem[];

  },
  save(data: RecordItem[]) {
    return window.localStorage.setItem(localStorageKayName, JSON.stringify(data));
  }
};
export default recordListModel;