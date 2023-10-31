<template >
<el-row  class="setting-item-card" justify="center" >
    <el-col :span="24" >
        <el-card shadow="never" class="box-card">
            <el-row>
                <el-col :span="8">
                    <el-text class="mx-1" size="large" tag="b">关于我们</el-text>   
                </el-col>
            </el-row>
        </el-card>
    </el-col>
</el-row>
<el-row  class="setting-item-card" justify="center" >
    <el-col :span="24" >
        <el-card shadow="never" class="box-card">
            <el-row>
                <el-col :span="8">
                    <el-text class="mx-1" size="large" tag="b">隐私协议</el-text>   
                </el-col>
            </el-row>
        </el-card>
    </el-col>
</el-row>
<el-row justify="center">
    <el-col  :span="18">
        <el-card  @click.prevent="logout"  shadow="never" id="setting-buttom">
            <div id="setting-buttom-text" > 	
                退出登录
            </div>
        </el-card>
    </el-col>
</el-row>
</template>
<script setup lang="ts">
import {removeCookieRefresh,removeCookieToken} from "@/utils/cookie";
import {useRouter} from 'vue-router'
import { useBasicStore } from '@/store/basic';
const router =  useRouter()
const store = useBasicStore()
function logout() {
    store.$reset()
    store.resetState()
    removeCookieRefresh()
    removeCookieToken()
    router.push("/")
    
}

</script>
<style lang="scss" scoped>
#setting-buttom{
    position: fixed;
    height: 3em;
    width: 70%;
    top: 90%;
    /* margin-top: 5vh; */
    border-color: #EA0000;
    border-radius:2em;
}
#setting-buttom-text{
    text-align:center;
    color:#EA0000;
    margin-top: -0.5em;
}
    
</style>