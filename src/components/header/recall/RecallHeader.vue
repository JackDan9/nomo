<template>
  <div class="h-16 lg:h-24 bg-blue-700">
    <div class="lg:container lg:mx-auto flex flex-wrap items-center justify-between h-full">
      <div class="hidden lg:block lg:w-1/4 xl:w-1/5 pl-6">
        <div class="flex items-center justify-center">
          <h1 class="text-4xl text-white">{{title || 'NOMO'}}</h1>
        </div>
      </div>
      <div class="block lg:hidden lg:w-1/4 xl:w-1/5 pl-0 lg:pl-6">
        <button type="button" id="sidebar-open" class="flex p-6 items-center lg:hidden text-gray-100 focus:outline-none focus:text-gray-700" aria-label="Open site navigation" @click="toggleSideBar()">
          <svg class="fill-current w-4 h-4 text-gray-100" v-show="!sidebar.opened" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
          <svg class="fill-current w-4 h-4 text-gray-100" v-show="sidebar.opened" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path></svg>
        </button>
      </div>

      <div class="flex-1 lg:w-3/4 xl:w-4/5">
        <div class="w-full min-w-0 lg:px-6 xl:w-3/4 xl:px-12">
          <div class="relative">
            <span class="algolia-autocomplete relative inline-block">
              <input id="docsearch" 
                    class="transition-colors duration-100 ease-in-out 
                           focus:outline-0 border border-transparent 
                           focus:bg-white focus:border-gray-300 focus:rounded-full
                           placeholder-gray-600 rounded-full bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input" 
                    type="text" 
                    :placeholder="searchPlaceholder"
                    autocomplete="off" 
                    spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-label="search input" aria-owns="algolia-autocomplete-listbox-0" dir="auto" style="position: relative; vertical-align: top;">
              <pre aria-hidden="true" class="absolute invisible whitespace-pre font-mono text-base not-italic normal-nums" style="font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre>
              <span class="ds-dropdown-menu" role="listbox" id="algolia-autocomplete-listbox-0" style="position: absolute; top: 100%; z-index: 100; left: 0px; right: auto; display: none;"><div class="ds-dataset-1"></div></span>
            </span>
            <div class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
              <svg class="fill-current pointer-events-none text-gray-600 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path></svg>
            </div>
          </div>
        </div>
      </div>

      <div class="flex px-4 lg:px-0 lg:flex lg:items-center lg:justify-end xl:w-1/4 ">
        <svg class="fill-current w-8 h-8 lg:w-10 lg:h-10 border border-white-800 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>GitHub</title><path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path></svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'RecallHeader',
  data() {
    return {
      title: 'NOMO',
      searchPlaceholder: '搜索召回信息',
      showSibeMenu: false,
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
    ])
  },
  created() {

  },
  mounted() {

  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('recall/toggleSideBar')
    },
  }
}
</script>

<style lang="less" scoped>
.algolia-autocomplete {
  width: 100% !important;
  .ds-dropdown-menu {
    width: 100%!important;
    max-width: 100%!important;
    min-width: 0!important;
    top: -6px;
    border-radius: 4px;
    margin: 6px 0 0;
    padding: 0;
    text-align: left;
    height: auto;
    position: relative;
    background: transparent;
    border: none;
    z-index: 999;
    max-width: 600px;
    min-width: 500px;
    box-shadow: 0 1px 0 0 rgba(0,0,0,.2), 0 2px 3px 0 rgba(0,0,0,.1);
  }
}
</style>