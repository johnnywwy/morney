<template>
  <layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"/>
    <div class="notes">
      <FormItem field-name="备注"
                placeholder="在这里输入备注"
                @update:value="onUpdateNotes"/>
    </div>
    <Tags @update:value="record.tags=$event"/>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import recordTypeList from '@/constant/recordTypeList';
import Tabs from '@/components/Tabs.vue';


@Component({
  components: {Tabs, Tags, FormItem, NumberPad},
})
export default class Money extends Vue {

  get recordList() {
    return this.$store.state.recordList;
  }

  recordTypeList = recordTypeList;


  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };

  created() {
    this.$store.commit('fetchRecords');
  }


  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  saveRecord() {
    this.$store.commit('createRecord', this.record);
  }


}
</script>

<style lang="scss"scoped>
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: 12px 0;
}
</style>
