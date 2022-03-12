type RecordItem = {
  tags: Tag[],
  notes: string,
  type: string,
  amount: number //数据类型
  createAt?: string//类
}

type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag,
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

// interface Window {}
