<template >
    <el-row justify="center">
        <el-col>
            <el-card class="word-bord-card">
                <el-row>
                    <el-col :span="20">
                            <h3>access</h3>
                    </el-col>
                    <el-col :span="4">
                        <el-text class="mx-1" type="info">{{this.$router.params.bookId}}</el-text>
                    </el-col>
                    <el-col :span="10" :offset="5">
                        <el-image src="http://ydschool-online.nos.netease.com/CET4luan_1_1_access_1523504930159000002_access_JY.png" fit="fill"></el-image>
                    </el-col>
                </el-row>
             </el-card>
        </el-col>
    </el-row>
    <el-row justify="center">
        <el-col :span="24">
            <el-text class="mx-1" type="info">this a test message</el-text>
        </el-col>
        <el-col :span="24">
            <el-text class="mx-1" type="info">this a test message</el-text>
        </el-col>
    </el-row>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.word-body-card{
    background-color: #FFFFFF;
    border: none;
    border-radius:2em;
    margin-top: 5vh;
    
}
</style>