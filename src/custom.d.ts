type RecordItem = {
  tags: string[],
  notes: string,
  type: string,
  amount: number //数据类型
  createAt?: Date | undefined//类
}

interface Window {
  tagList: Tag[];
  createTag: (name: string) => void;
}

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

