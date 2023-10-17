<template>
  <el-card class="home-title-card">
    <el-row class="home-title-span">
        <el-col style="margin-top:3vh">
            <el-image style="border-radius: 0.3em;width: 18em; height: 4vh" fit="fill"  src="we.png" />
        </el-col>
    </el-row>
  </el-card>
  <el-row  class="home-title-input-span">
        <el-col :span="20" :offset="2">
            <el-input
                style="height:6vh"
                v-model="input1"
                size="large"
                placeholder="查询单词"
                :suffix-icon="Search"
                />
        </el-col>
    </el-row>
<el-row  justify="center">
    <el-col :span="22">
        <el-card shadow="never" id="home-book-card">
            <el-row>
                <el-col :span="4">
                    <el-image style="border-radius: 0.3em;width: 3.5em; height: em" fit="fill" :src="book.image" />
                </el-col>
                <el-col :span="18" :offset="1">
                <el-row >
                    <el-col :span="12">
                        <el-text class="mx-1" size="large">{{book.name}}</el-text>
                    </el-col>
                    <el-col :span="4">
                        <el-text  @click="selectBook" type="info" class="mx-1" size="small">换书 ></el-text>
                    </el-col >
                    <el-col id="book-progress">
                        <el-progress :stroke-width="4" :show-text="false" :percentage="50">
                        </el-progress>
                    </el-col>
                    <el-col  id="book-progress-number">
                        <el-text type="info" class="mx-1" size="small">{{ book.number }} </el-text>
                    </el-col>
                </el-row>
                </el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="24">
                    <el-divider />
                </el-col>
            </el-row>
            <el-row  justify="center">
                <el-col :span="24">
                    <el-row justify="center">
                        <el-col :span="10" :offset="2">
                            <el-space alignment="center" direction="vertical">
                                <h1>5</h1>
                                <el-text type="info" class="mx-1" size="small">总学习天数 </el-text>
                            </el-space>
                        </el-col>
                        <el-col alignment="center" :span="8" :offset="4">
                            <el-space direction="vertical">
                                <h1>222</h1>
                                <el-text type="info" class="mx-1" size="small">学习单词 </el-text>
                            </el-space>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-card>
    </el-col>
</el-row>
<el-row justify="center">
    <el-col :span="20">
        <el-card shadow="never" id="home-buttom">
            <div id="home-buttom-text" > 	
                开始背单词吧！
            </div>
        </el-card>
    </el-col>
</el-row>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';
import { useBasicStore } from '@/store/basic'; 
import {getBook} from '@/api/book'

let {bookId} = useBasicStore()
let book = ref({
    title:"",
    image:"",
    number:"",
    total:"",
    tag:"",
    name:'',
})
let input1 = ref('')
const router = useRouter()
function selectBook(){
    router.push("/book")

}
console.log(bookId);

getBook(bookId).then((res) => {
    console.log(res);
    
    book.value = res.data
}).catch((err) => {
    console.log(err);
    
})




</script>
<style>
.home-title-card{
  border: none;
  height: 27vh;
  margin-left: -10px;
  margin-right: -10px;
  margin-top: -5vh;
  border-radius: 1.5em;
  background-color:#4865FF;
} 
.home-title-span{
    margin-top: 10vh;
}
.home-title-input-span{
    margin-top: -3vh;
}
.el-input__wrapper{
    border-radius: 1.2em !important;
}
#book-progress{
    margin-top: 1vh;
}
#book-progress-number{
    margin-top: 2.5vh;
}
#home-book-card{
    border: none;
    margin-top: 8vh;
    border-radius:1em;
}
#home-buttom{
    height: 3em;
    border: none;
    margin-top: 15vh;
    border-radius:2em;
    background-color: #F7B200;
}
#home-buttom-text{
    text-align:center;
    color:#FFFFFF;
    margin-top: -0.5em;
}
</style>
