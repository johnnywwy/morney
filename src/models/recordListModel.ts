const localStorageKayName = 'recordList';

const recordListModel = {
  data: [] as RecordItem[],
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  clone(data: RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data));
  },

  create() {

  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKayName) || '[]') as RecordItem[];
    return this.data;

  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  save() {
    window.localStorage.setItem(localStorageKayName, JSON.stringify(this.data));

  }
};
export default recordListModel;