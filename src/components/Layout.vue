<template>
  <div class="layout-wrapper">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot></slot>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  props: ['classPrefix'],
  name: 'Layout'
};
</script>

<style lang="scss" scoped>


.layout-wrapper {
  display: flex;
  //border: 1px solid red;
  flex-direction: column;
  height: 100vh;
}

.content {
  //border: 1px solid blue;
  overflow: auto;
  flex-grow: 1;
}
</style>