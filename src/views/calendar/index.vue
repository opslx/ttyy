<template lang="">
  <el-calendar>
    <template #date-cell="{ data }">
      <p :class="data.isSelected ? 'is-selected' : ''">
        <el-text size="small"> {{ data.day.split('-').slice(1).join('-') }}
        </el-text> 
        <el-text class="mx-1" size="small" type="success">1111</el-text>
      </p>
    </template>
  </el-calendar>
</template>
<script setup lang="ts">
</script>
<style lang="">
</style>