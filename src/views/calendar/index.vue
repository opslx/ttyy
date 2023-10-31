<template lang="">
  <el-calendar>
    <template #date-cell="{ data }">
      <p :class="data.isSelected ? 'is-selected' : ''">
        <el-text size="small"> {{ data.day.split('-').slice(1).join('-') }}
        </el-text> 
        <p>
        <template v-if="calendar.length != 0 ">
        <template v-for="item in calendar">
        <el-text  v-if="item.date === data.day"  class="mx-1" size="small" type="success">{{ item.word_count}}</el-text>
        </template>
        </template>
        <template v-else>
          <el-text class="mx-1" size="small" type="success">0</el-text>
        </template>
        </p>
      </p>
    </template>
  </el-calendar>
</template>
<script setup lang="ts">
import { getUserCalendar } from '@/api/user';
import { ref } from 'vue';
let calendar = ref([])
getUserCalendar().then(res => {
  console.log(res.data);
  
  calendar.value = res.data
})
</script>
<style lang="scss" scoped>
</style>