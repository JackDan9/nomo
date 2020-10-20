<template>
  <div class="h-48 sm:48 md:h-48 lg:h-24 xl:h-24 bg-blue-700">
    <div class="lg:container lg:mx-auto
                flex flex-wrap items-center justify-between h-full">
      <div class="lg:w-1/4 xl:w-1/5 pl-6">
        <div class="flex items-center justify-end">
          <h1 class="text-4xl text-white">NOMO</h1>
        </div>
      </div>

      <div class="flex-1 lg:w-3/4 xl:w-4/5">
        <div class="w-full lg:px-6 xl:w-3/4 xl:px-12">
          <div class="relative">
            <span class="algolia-autocomplete" style="position: relative; display: inline-block; direction: ltr;">
              <input id="docsearch" 
                    class="transition-colors duration-100 ease-in-out 
                           focus:outline-0 border border-transparent 
                           focus:bg-white focus:border-gray-300 focus:rounded-full
                           placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input" 
                    type="text" 
                    placeholder="搜索召回信息" 
                    autocomplete="off" 
                    spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-label="search input" aria-owns="algolia-autocomplete-listbox-0" dir="auto" style="position: relative; vertical-align: top;">
              <pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: &quot;Inter var&quot;, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 16px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre>
              <span class="ds-dropdown-menu" role="listbox" id="algolia-autocomplete-listbox-0" style="position: absolute; top: 100%; z-index: 100; left: 0px; right: auto; display: none;"><div class="ds-dataset-1"></div></span>
            </span>
            <div class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
              <svg class="fill-current pointer-events-none text-gray-600 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path></svg>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden lg:flex lg:items-center lg:justify-between xl:w-1/4 px-6">
        <svg class="fill-current w-10 h-10 border border-white-800 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>GitHub</title><path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecallHeader',
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {

  },
  methods: {

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