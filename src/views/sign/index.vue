<template>

<el-row>
    <el-col :span="20">
        <h1>创建账户</h1>
    </el-col>
</el-row>
<el-row>
    <el-col :span="20">
        <h1>请输入能联系您的邮箱</h1>
    </el-col>
</el-row>
<el-row>
    <el-col :span="20">
    <el-input
      v-model="input1"
      class="w-50 m-2"
      size="large"
      placeholder="Please Input"
    />
    </el-col>
</el-row>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const input1 = ref("")
</script>
<style lang="">
    
</style>