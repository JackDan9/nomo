<template>
  <div class="lg:container lg:mx-auto">
    <app-main />
  </div>
</template>

<script>
import { AppMain } from './components';

export default {
  name: 'Layout',
  components: {
    AppMain
  },
};
</script>

<style lang="less" scoped>
</style>