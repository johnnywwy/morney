<template>
  <layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList"
          :value.sync="interval"/>
    <ol>
      <li v-for="(group,index) in result" :key="index.id">
        <h3 class="title">{{ group.title }}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <span>{{ tagString(item.tags) }}</span>
            <span class="notes">{{ item.notes }}</span>
            <span>￥{{ item.amount }}</span>

          </li>
        </ol>
      </li>
    </ol>
  </layout>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constant/intervalList';
import recordTypeList from '@/constant/recordTypeList';


@Component({
  components: {Tabs},
})

export default class Statistics extends Vue {
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get result() {
    const {recordList} = this;

    type hashTableValue = { title: string, items: RecordItem[] }

    const hashTable: { [key: string]: hashTableValue } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createAt!.split('T');
      console.log(date);
      hashTable[date] = hashTable[date] || {title: date, items: []};
      hashTable[date].items.push(recordList[i]);
    }
    console.log(hashTable);
    return hashTable;

  }

  beforeCreate() {
    this.$store.commit('fetchRecords');
  }

  tagString(tags: Tag[]) {
    console.log(tags);
    return tags.length === 0 ? '无' : tags.join(',');
  }


  type = '-';
  interval = 'day';
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>

<style lang="scss" scoped>
::v-deep {
  .type-tabs-item {
    background: white;

    &.selected {
      background: #c4c4c4;

      &::after {
        display: none;
      }
    }
  }

  .interval-tabs-item {
    height: 48px;
  }
}

%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.title {
  @extend %item;
}

.record {
  @extend %item;
  border: 1px solid red;
  background: white;
}

.notes {
  margin-right: auto;
  margin-left: 8px;
  color: #999;
}

</style>