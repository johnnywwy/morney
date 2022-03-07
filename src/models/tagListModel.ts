const localStorageKayName = 'recordList';

type Tag = {
  id: string
  name: string

}

type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated';// success表示成功，duplicated表示重复
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
    const names = this.data.map(item => item.name);
    if (names.indexOf(name) >= 0) { return 'duplicated';}
    this.data.push({id: name, name: name});
    this.save();
    return 'success';
  }
};
export default tagListModel;