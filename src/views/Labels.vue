<template>
  <div class="nav-wrapper">
    <div class="content">
      Labels.vue
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">

export default {
  name: 'Labels',

};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  border: 1px solid red;
  flex-direction: column;
  height: 100vh;
}

.content {
  border: 1px solid blue;
  overflow: auto;
  flex-grow: 1;
}
</style>