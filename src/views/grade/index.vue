<template>
    <template v-for="school in schoolArr">
        <el-row class="grade_span">
            <el-col :span="20" :offset="2">
                <el-text class="mx-1" type="info">{{school.name}}</el-text>
            </el-col>
        </el-row>
        <el-row class="grade_span" justify="center">
            <template v-for="item in school.grade">
                <el-col @click="toTagBook(item,school.name)" class="grade_item_span" :span="6" :offset="1">
                    <el-card  class="grade_item_card" shadow="never">
                        <el-text class="mx-1 grade_item_text" >{{item}}</el-text>
                    </el-card>
                </el-col>
            </template>
        </el-row>
    </template>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
import {primarySchool,middleSchool,highSchool,university,otherSchool} from "@/utils/export"
const schoolArr = ref([
    {name:'小学',grade:primarySchool.value},
    {name:'初中',grade:middleSchool.value},
    {name:'高中',grade:highSchool.value},
    {name:'大学',grade:university.value},
    {name:'其他',grade:otherSchool.value}
    ])

function toTagBook(tag1,tag2){
    const tag = tag1 + ',' + tag2
    router.replace({
        path: '/book/' + tag,
        params : {
            tag:tag
        }
    })
}
</script>
<style lang="scss" scoped>
    html{
    background-color: #FFFFFF !important;
}
.grade_item_card{
    height:60%;
    width:90%;
    border: none;
    text-align:center;
    border-radius:8%;
    align-items: center;
    margin-top:2em;
    background-color: #F5F6F8;
}
.grade_item_span{
    margin-top: -1.5em;
}
.grade_item_text{
    text-align:center;
}
.grade_span{
    margin-top:1.5em;
}
</style>