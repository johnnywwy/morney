<template>
  <layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';

import {Component, Watch} from 'vue-property-decorator';
import model from '@/model';

const recordList: RecordItem[] = model.fetch();


@Component({
  components: {Tags, Notes, Types, NumberPad},
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  recordList: RecordItem[] = recordList;
  record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  saveRecord() {
    const record2: RecordItem = model.clone(this.record);
    record2.createAt = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onRecordListChange() {
    model.save(this.recordList);
    console.log(recordList);
  }

}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
