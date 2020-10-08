<template>
  <div class="lg">
    <global-header />
    <div class="lg:container lg:mx-auto">
      <app-main />
    </div>
  </div>
</template>

<script>
import { AppMain } from './components';
import GlobalHeader from '../components/header/GlobalHeader.vue';

export default {
  name: 'Layout',
  components: {
    AppMain,
    GlobalHeader
  },
};
</script>

<style lang="less" scoped>
</style>