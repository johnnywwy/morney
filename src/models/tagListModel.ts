const localStorageKayName = 'recordList';

type TagListModel = {
  data: string[];
  fetch: () => string[];
  create: (name: string) => 'success'|'duplicated';// success表示成功，duplicated表示重复
  save: () => void
}
const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKayName) || '[]');
    return this.data;

  },
  save() {
    return window.localStorage.setItem(localStorageKayName, JSON.stringify(this.data));
  },
  create(name) {
    if (this.data.indexOf(name) >= 0) { return 'duplicated';}
    this.data.push(name);
    this.save();
    return 'success';
  }
};
export default tagListModel;