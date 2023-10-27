<template>
<el-row  class="user-card" justify="center" >
    <el-col :span="23" >
        <el-card 
        :body-style="{ background: 'linear-gradient(to right,  rgba(169,171,184), rgba(190,192,204))' }"
         class="box-card">
         <el-row>
            <el-col :span="4">
                <el-avatar :size="50" :src="userinfo.avatar" />
            </el-col>
            <template v-if="getUserInfo">
            <el-col style="margin-top:1em;" :span="14" :offset="6">
                <el-text size="large" tag="b"> <div style="color: #FFFFFF">{{userInfo.username}}</div></el-text>   
            </el-col>
            </template>
            <template v-else>
            <el-col style="margin-top:1em;" :span="8" :offset="12">
                <el-text @click="login"  size="large" tag="b"> <div style="color: #FFFFFF">立即登录 > </div></el-text>   
            </el-col>
            </template>
         </el-row>

        </el-card>
    </el-col>
</el-row>
<el-row style="margin-top:5vh">
<el-col :span="4" :offset="1">
    <el-text class="mx-1" size="large" tag="b" >课程相关</el-text>
</el-col>
</el-row>
<el-row  class="setting-card" justify="center" >
    <el-col :span="23" >
        <el-card 
        shadow="never"
         class="box-card">
         <template v-for="item in UserSettingItem">
            <el-row @click="router_to_path(item.path)"  class="user-card-item" justify="start" >
                <el-col :span="4" >
                    <el-image style="width: 1.7em; height: 1.7em" :src="item.image" fit="fill" />      
                </el-col>
                <el-col :span="8">
                    <el-text class="mx-1" size="large" tag="b">{{item.text}}</el-text>   
                </el-col>
            </el-row>
        </template>
        </el-card>
    </el-col>
</el-row>
</template>
<script setup lang="ts">
import {useRouter} from 'vue-router'
import { useBasicStore } from '@/store/basic'; 
import { ref } from 'vue'

const router =  useRouter()
const {userInfo,getUserInfo} = useBasicStore()
let userinfo = ref(userInfo)


function router_to_path(path:string){
    router.push(path)

}

const UserSettingItem = [
    {image:'word_book.png',text:"用户信息",path:"/user/setting"},
    {image:'word_collection.png',text:"单词收藏",path:"/collect"},
    {image:'glossary.png',text:"生词本",path:"/collect"},
    {image:'setting.png',text:"设置",path:"/setting"},
]

function login(){
    router.push('/login')

}

</script>
<style lang="scss">
.box-card{
    margin-top: 5vh;
    border: none;
    border-radius: 1em;

}
.setting-card{
    margin-top: -3vh;
    border: none;
    border-radius: 1em;

}
.user-card-item{
    margin-top: 5vh;
}
</style>