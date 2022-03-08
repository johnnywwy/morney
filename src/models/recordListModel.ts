import clone from '@/lib/clone';

const localStorageKayName = 'recordList';

const recordListModel = {
  data: [] as RecordItem[],
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  create(record: RecordItem) {
    const record2: RecordItem = clone(record);
    record2.createAt = new Date();
    this.data.push(record2);
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