import createId from '@/lib/createId';

const localStorageKayName = 'tagList';


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
  create(name: string) {

    const names = this.data.map(item => item.name);
    if (names.indexOf(name) >= 0) { return 'duplicated';}
    const id = createId().toString();
    this.data.push({id: id, name: name});
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