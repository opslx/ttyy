<template>
<el-row class="search-input"  justify="center">
    <el-col :span="22"> 			
        <!-- <form class="search-block" action="javascript:void 0"> -->
          <el-input
          @change="tapToSearch"
          @input="clearSearchWordArr"
          ref="searchRef"
          v-model="searchKeyword"
          class="w-50 m-2 search-input"
          size="large"
          clearable
          placeholder="search"
          :prefix-icon="Search"
        />
      <!-- </form> -->
    </el-col>
  </el-row>
  <el-row v-if="searchKeyword === ''" justify="center">
    <el-col :span="21" :offset="1">
        <el-check-tag class="search-word-tag" v-for="searchWord in searchWordHistoyArr" size="small" type="info">{{ searchWord }}</el-check-tag>
    </el-col>
  </el-row>
  <template v-for="item in searchWordArr" v-if="searchWordArr.length > 1 && parseInt(searchWordArr[0].id) !== 0 && searchKeyword !== ''">
    <el-row  justify="center">
        <el-col :span="21" :offset="1">
            <el-row>
                <el-col  :span="22">
                    <div @click="toReadWord(item.id)">
                        <h3 style="float:left">{{ item.word }}</h3>
                        <el-text style="float:left;margin-top:3vh;margin-left:2vw;" size="small"  class="mx-1" type="info" tag="b">/{{ item.usphone }}/</el-text>
                    </div>
                    <div style="float:right;margin-top:2.5vh;margin-right:5vw;">
                    <audio :id="item.id" :src="`https://dict.youdao.com/dictvoice?audio=${item.word}&type=2`"></audio>
                    <svg @click="playAudio(item.id)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21" height="20.3536376953125" viewBox="0 0 28 26.3536376953125" fill="none"><g opacity="1"  transform="translate(0 0.000732421875)  rotate(0)"><path id="Fill 1" fill-rule="evenodd" style="fill:#4865FF" opacity="1" d="M21.3791 8.47649L21.1591 8.24649C20.8591 7.95649 20.4091 7.95649 20.1091 8.24649C19.8091 8.54649 19.8091 8.99649 20.1091 9.29649L20.3291 9.51649C20.5591 9.74649 20.7091 9.96649 20.8591 10.2665L20.9291 10.3465C22.3491 12.5065 22.0491 14.4565 20.0291 16.6265C19.7391 16.9265 19.7391 17.3665 20.0291 17.6665C20.1791 17.8165 20.3291 17.8965 20.5591 17.8965C20.7791 17.8965 20.9291 17.8165 21.0791 17.6665C23.5491 14.9765 23.9191 12.2165 22.1291 9.51649C21.8991 9.14649 21.6791 8.77649 21.3791 8.47649Z"></path><path id="路径" fill-rule="evenodd" style="fill:#4865FF" opacity="1" d="M24.0693 4.50882C23.7693 4.20882 23.3193 4.20882 23.0193 4.50882C22.7293 4.80882 22.7293 5.25882 23.0193 5.55882L23.5493 6.07882C23.9193 6.60882 24.3693 7.05882 24.7393 7.64882C27.5793 11.9088 26.9893 16.0288 23.0193 20.1388C22.7293 20.4388 22.7293 20.8788 23.0193 21.1788C23.1693 21.3288 23.3193 21.4088 23.5493 21.4088C23.7693 21.4088 23.9193 21.3288 24.0693 21.1788C28.4793 16.6188 29.1493 11.6888 26.0093 6.90882C25.5693 6.22882 25.1193 5.70882 24.7393 5.18882C24.5193 4.88882 24.2993 4.65882 24.0693 4.50882Z"></path><path id="路径" fill-rule="evenodd" style="fill:#4865FF" opacity="1" d="M12.03 0.77L6.35 5.64L3.66 5.64C1.64 5.64 0 7.35 0 9.3L0 16.62C0 18.71 1.64 20.29 3.66 20.29L5.98 20.29L12.03 25.07C12.63 25.52 13.31 25.74 13.9 25.74C14.2 25.74 14.58 25.67 14.8 25.52C15.62 25.15 16.07 24.25 16.07 23.05L16.07 2.72C16.07 1.52 15.62 0.55 14.73 0.18C13.9 -0.2 12.86 0.03 12.03 0.77Z"></path><path id="路径" fill-rule="evenodd" style="fill:#4865FF" opacity="1" d="M14.5751 2.86523C14.5751 2.27523 14.3551 1.82523 14.0551 1.67523C13.7551 1.52523 13.3851 1.67523 12.9351 2.04523L6.87512 7.20523L3.66512 7.20523C2.46512 7.20523 1.49512 8.17523 1.49512 9.37523L1.49512 16.6952C1.49512 17.8952 2.46512 18.8652 3.66512 18.8652L6.50512 18.8652L12.9351 23.9452C13.3851 24.2452 13.8251 24.3952 14.1251 24.2452C14.4251 24.0952 14.5751 23.7252 14.5751 23.1252L14.5751 2.86523Z"></path></g></svg>                    </div>
                </el-col>
            </el-row>
        </el-col>
        <el-col @click="toReadWord(item.id)" :span="23">
            <el-col style="margin-left: 4vw;margin-bottom: 10px;" :offset="1">
              <el-tag class="ml-2" type="info">{{ item.book }}</el-tag>
            </el-col>
            <template v-for="syno in item.syno">
            <el-row class="collect-text-item">
                <el-col :span="2" :offset="1">
                    <el-text class="mx-1" type="info">{{ syno.pos }}</el-text>
                </el-col>
                <el-col  :span="16" :offset="1">
                    <el-text class="mx-1" >{{syno.tran}}</el-text>
                </el-col>
            </el-row>
            </template>
        </el-col>
        <el-col :span="22">
            <el-divider border-style="dashed" />
        </el-col>
    </el-row>
    </template>
</template>
<script setup lang="ts">
import { onMounted,ref } from 'vue';
import {Search} from '@element-plus/icons-vue'
import {searchWord} from "@/api/book"
import {word} from '@/utils/export'
import { useRouter } from 'vue-router'
import { useBasicStore } from '@/store/basic';

const store = useBasicStore()
const router = useRouter()

const searchWordHistoyArr = ref(store.searchWordHistoryArr.slice(0,15))

const searchRef = ref(null)
const searchKeyword = ref('')
const searchWordArr = ref([word.value])
let currentAudioId:any = null;

onMounted(() => {
  searchRef.value.focus()
})

function tapToSearch(){
  if (searchKeyword.value !== ''){
      store.setsearchWordHistoryArr(searchKeyword.value)
      searchWord({search:searchKeyword.value}).then(res => {
      searchWordArr.value = res.data
  })
  }
}

const onAudioEnded = () => {  
    console.log(`音频 ${currentAudioId} 播放完成`);  
    currentAudioId = null;  
};    

function playAudio(id: any) {  
      const audioElement = document.getElementById(id);  
      if (audioElement) {  
        if (currentAudioId){
            const oldAudioElement:any = document.getElementById(currentAudioId); 
            console.log(`音频 ${currentAudioId} 播放暂停`);  
            oldAudioElement.pause()
        }
        currentAudioId = id; 
            // @ts-ignore 
        audioElement.play();  
        audioElement.addEventListener('ended', onAudioEnded)
      } else {  
        console.error(`无法找到id为 ${id} 的音频元素`);  
      }  
    };  


function toReadWord(id:any){
    console.log(id)
    router.push({
        path: '/search/word/' + id,
        params:{
            "WordId":id
        }
    })
}

function clearSearchWordArr(){
  searchWordArr.value = []
}

</script>
<style lang="scss" scoped>
html{
    background-color: #FFFFFF!important;
    overflow:auto;
}

#home-body{
    overflow: auto;
    
}
.search-input{
  margin-top: 5%;
  margin-bottom: 3%;
  border-radius: 1em;
}
.search-word-tag{
  margin-left: 1%;
  margin-top: 1%;
}
</style>