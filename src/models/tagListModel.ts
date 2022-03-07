const localStorageKayName = 'recordList';

type Tag = {
  id: string
  name: string

}

type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated';// success表示成功，duplicated表示重复
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
  save: () => void
  remove: (id: string) => boolean
}
const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKayName) || '[]');
    return this.data;

  },
  update(id, name) {
    const idList = this.data.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.data.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        const tag = this.data.filter(item => item.id === id)[0];
        tag.name = name;
        this.save();
        return 'success';
      }
    } else {
      return 'not found';
    }
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
  },
  remove(id: string) {
    let index = -1;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        index = i;
        break;
      }
    }
    console.log('index');
    console.log(index);
    this.data.splice(index, 1);
    this.save();
    return true;
  }
};
export default tagListModel;