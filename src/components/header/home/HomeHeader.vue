<template>
  <div class="h-48 sm:h-48 md:h-48 lg:h-20 xl:h-24 bg-blue-600">
    <div class="lg:container lg:mx-auto 
                flex flex-wrap 
                items-center justify-between h-full">
      <div class="hidden sm:hidden md:hidden lg:flex xl:flex h-16 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <img src="@/assets/logo.png" alt="nomo" class="h-full w-full object-cover" />
      </div>

      <div class="h-12 sm:h-12 md:h-12 lg:h-16 xl:h-16 flex 
                  w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/5 
                  bg-white border rounded mx-4">
        <div class="flex flex-col w-1/2 sm:w-auto md:w-full lg:w-32 xl:w-1/2 justify-center items-start">
          <span class="hidden sm:hidden md:hidden lg:inline-block text-sm text-gray-400 px-1 py-1">出发地</span>
          <div class="text-lg text-gray-800 px-1 w-full">
            <city-picker field="city" placeholder="城市" :city-list="cityList" :no-hot="false" :value.sync="cityId1"></city-picker>
          </div>
        </div>
        <div class="h-full inline-flex justify-center items-center text-gray-400">
          <svg class="fill-current w-6 h-6 mr-2 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        </div>
        <div class="flex flex-col w-1/2 sm:w-auto md:w-full lg:w-32 xl:w-1/2 justify-center items-end sm:justify-center sm:items-end md:justify-center md:items-end lg:justify-center lg:items-start xl:justify-center xl:items-start">
          <span class="hidden sm:hidden md:hidden lg:inline-block text-sm text-gray-400 px-1 py-1">目的地</span>
          <div class="text-lg text-gray-800 px-1 w-full">
            <city-picker field="city" placeholder="城市" :city-list="cityList" :no-hot="false" :value.sync="cityId"></city-picker>
          </div>
        </div>
      </div>

      <div class="flex sm:flex-row md:flex-row lg:flex-col xl:flex-col
                  w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/5 
                  h-12 sm:h-12 md:h-12 lg:h-16 xl:h-16 items-center 
                  mx-4 bg-white border rounded">
        <span class="w-1/2 sm:w-1/2 md:w-1/2 lg:w-full xl:w-full 
                     text-lg sm:text-base md:text-base lg:text-sm xl:text-sm 
                     text-gray-400 px-1 py-1">出发日期</span>
        <div class="w-1/2 sm:w-1/2 md:w-1/2 lg:w-full xl:w-full 
                    text-lg 
                    text-right sm:text-right md:text-right lg:text-left xl:text-left 
                    text-gray-800 px-1">
                    <date-picker class="w-full" :date="startTime" :option="option" :limit="limit"></date-picker>
        </div>
      </div>
      <div class="flex 
                  w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/5 xl:py-3 
                  h-12 sm:h-12 md:h-12 lg:h-16 xl:h-16 items-center
                  items-center justify-center bg-yellow-600 rounded-full sm:rounded-full md:rounded-full lg:rounded xl:rounded mx-4">
        <div class="px-2">
          <svg class="fill-current pointer-events-none text-gray-600 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path></svg>
          <!-- <img src="" alt="" class="h-8 rounded-full border" /> -->
        </div>
        <div class="text-white text-base">
          <input placeholder="搜索航班" class="text-lg text-white appearance-none placeholder-white" type="text" style="border-radius: none; outline:none; background: initial"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from '@/components/datepicker/DatePicker';
import CityPicker from '../../../components/citypicker/CityPicker';
import cityList from '../../../components/citypicker/jsAddress';

window.CITY_PICKER_LIST = cityList;

export default {
  name: "GlobalHeader",
  data () {
    return {
      cityId: '',
      cityId1: '',
      cityList: cityList,
      startTime: {
        time: ''
      },
      endtime: {
        time: ''
      },
      option: {
        type: 'day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD',
        placeholder: '2020-11-03',
        inputStyle: {
          'display': 'inline-block',
          'line-height': '22px',
          'font-size': '16px',
          'cursor': 'pointer',
          'color': '#5F5F5F'
        },
        color: {
          header: '#ccc',
          headerText: '#f00'
        },
        buttons: {
          ok: 'Ok',
          cancel: 'Cancel'
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: true // as true as default
      },
      timeoption: {
        type: 'min',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD HH:mm'
      },
      multiOption: {
        type: 'multi-day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format:"YYYY-MM-DD HH:mm"
      },
      limit: [{
        type: 'weekday',
        available: [0, 1, 2, 3, 4, 5, 6, 7]
      },
      {
        type: 'fromto',
        from: '2016-02-01',
        to: '2030-02-20'
      }],
    }
  },
  created() {

  },
  methods: {

  },
  components: {
    'date-picker': DatePicker,
    'city-picker': CityPicker
  }
};
</script>

<style lang="less" scoped>
</style>