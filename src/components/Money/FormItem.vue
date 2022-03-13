<template>
  <div>
    <Icon name="notes" class="notesIcon"/>
    <label class="formItem">
      <span class="name">{{ this.fieldName }}</span>
      <input type="text" :value="value"
             @input="onValueChanged($event.target.value)"
             :placeholder="placeholder">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';


@Component
export default class FormItem extends Vue {
  @Prop({default: ''}) readonly value!: string;

  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder?: string;

  onValueChanged(value: string) {
    this.$emit('update:value', value);
  }
}
</script>

<style lang="scss" scoped>

div {
  display: flex;
  align-items: center;
  padding-left: 16px;

  .notesIcon {
    height: 15px;
  }
}


.formItem {
  font-size: 15px;
  padding-left: 3px;
  display: flex;
  align-items: center;
  width:95%;

  > .name {
    padding-right: 10px;

  }

  input {
    height: 44px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>