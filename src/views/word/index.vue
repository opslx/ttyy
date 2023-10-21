<template scroll="no">
    <el-row justify="center">
        <el-col :span="22">
            <el-card class="word-body-card">
                <el-row>
                    <el-col>
                    <el-row>
                        <el-col :span="8">
                            <h1>{{word.word}}</h1>
                        </el-col>
                        <el-col @click="user_collect" :span="4" :offset="12" style="margin-top: 4vh;">
                            <template v-if="collect">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.97021484375" height="20.72650146484375" viewBox="0 0 29.97021484375 28.72650146484375" fill="none"><path id="Fill 1" fill-rule="evenodd" style="fill:#F7B200" opacity="1" d="M24.8811 25.32L24.2711 18.7L29.3911 12.86C30.5011 11.58 29.9511 9.86 28.2911 9.49L20.7311 7.77L16.7611 1.09C15.8911 -0.36 14.0811 -0.36 13.2111 1.09L9.2411 7.77L1.6811 9.49C0.0310986 9.86 -0.538901 11.58 0.581099 12.86L5.6911 18.7L4.9911 26.44C4.8311 28.13 6.2911 29.19 7.8511 28.52L14.9811 25.46L21.0811 28.08C23.2211 29 25.0911 27.63 24.8811 25.32Z"></path></svg>
                            </template>
                            <template v-else>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.9703369140625" height="20.72650146484375" viewBox="0 0 29.9703369140625 28.72650146484375" fill="none"><path id="Fill 1" fill-rule="evenodd" style="fill:#CDCFD6" opacity="1" d="M24.8812 25.32L24.2712 18.7L29.3912 12.86C30.5012 11.58 29.9512 9.86 28.2912 9.49L20.7312 7.77L16.7612 1.09C15.8912 -0.36 14.0812 -0.36 13.2112 1.09L9.24116 7.77L1.68116 9.49C0.0311597 9.86 -0.53884 11.58 0.58116 12.86L5.69116 18.7L4.99116 26.44C4.83116 28.13 6.29116 29.19 7.85116 28.52L14.9812 25.46L21.0812 28.08C23.2212 29 25.0912 27.63 24.8812 25.32Z"></path></svg>
                            </template>
                        </el-col>
                    </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-text class="mx-1" type="info">{{word.ukphone}}</el-text>
                        <svg style="margin-left: 2vw;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20.00030517578125" viewBox="0 0 30 40.00030517578125" fill="none"><g opacity="1"  transform="translate(0 0.00030517578125)  rotate(0)"><g opacity="1"  transform="translate(0 0)  rotate(0)"><path id="Fill 1" fill-rule="evenodd" style="fill:#4865FF" opacity="1" d="M25.9641 10.2865L25.6841 10.0165C25.3241 9.65646 24.7841 9.65646 24.4141 10.0165C24.0541 10.3865 24.0541 10.9265 24.4141 11.2865L24.6941 11.5665C24.9641 11.8365 25.1441 12.1065 25.3241 12.4665L25.4141 12.5565C27.1441 15.1965 26.7741 17.5565 24.3241 20.1865C23.9641 20.5465 23.9641 21.0965 24.3241 21.4565C24.5041 21.6365 24.6941 21.7265 24.9641 21.7265C25.2341 21.7265 25.4141 21.6365 25.5941 21.4565C28.5941 18.1865 29.0441 14.8265 26.8641 11.5665C26.5941 11.1065 26.3241 10.6565 25.9641 10.2865Z"></path><path id="路径" fill-rule="evenodd" style="fill:#4865FF" opacity="1" d="M29.225 5.47789C28.865 5.11789 28.325 5.11789 27.955 5.47789C27.595 5.84789 27.595 6.38789 27.955 6.74789L28.595 7.38789C29.045 8.01789 29.595 8.56789 30.045 9.28789C33.495 14.4679 32.765 19.4579 27.955 24.4479C27.595 24.8179 27.595 25.3579 27.955 25.7179C28.135 25.9079 28.325 25.9979 28.595 25.9979C28.865 25.9979 29.045 25.9079 29.225 25.7179C34.585 20.1879 35.405 14.1979 31.585 8.38789C31.045 7.56789 30.495 6.93789 30.045 6.29789C29.775 5.93789 29.505 5.65789 29.225 5.47789Z"></path><path id="路径" fill-rule="evenodd" style="fill:#4865FF" opacity="1" d="M14.61 0.94L7.71 6.84L4.45 6.84C2 6.84 0 8.93 0 11.29L0 20.18C0 22.73 2 24.63 4.45 24.63L7.26 24.63L14.61 30.44C15.34 30.99 16.16 31.26 16.88 31.26C17.25 31.26 17.7 31.17 17.97 30.99C18.97 30.53 19.52 29.44 19.52 27.99L19.52 3.3C19.52 1.85 18.97 0.67 17.88 0.22C16.88 -0.24 15.61 0.03 14.61 0.94Z"></path><path id="路径" fill-rule="evenodd" style="fill:#4865FF" opacity="1" d="M17.6954 3.4813C17.6954 2.7613 17.4254 2.2113 17.0654 2.0313C16.7054 1.8513 16.2454 2.0313 15.7054 2.4813L8.34543 8.7513L4.44543 8.7513C2.99543 8.7513 1.81543 9.9313 1.81543 11.3813L1.81543 20.2713C1.81543 21.7313 2.99543 22.9113 4.44543 22.9113L7.89543 22.9113L15.7054 29.0813C16.2454 29.4413 16.7954 29.6213 17.1554 29.4413C17.5154 29.2613 17.6954 28.8113 17.6954 28.0813L17.6954 3.4813Z"></path></g></g></svg>
                    </el-col>
                    </el-row>
                    <template v-if="word.picture !== null">
                        <el-row justify="end">
                        <el-col :span="12" :offset="0">
                            <el-image style="border-radius: 5em;width: 10em; height: 10em" :src="word.picture" fit="fill"></el-image>
                        </el-col>
                        </el-row>
                    </template>
                    </el-col>
                </el-row>
             </el-card>
        </el-col>
    </el-row>
    <el-row class="word-text-span">
        <el-col :span="8" :offset="1">
            <el-text class="mx-1"> [词性]： </el-text>
        </el-col>
    </el-row>   
    <template v-for="syno in word.syno">
    <el-row class="word-text-item">
        <el-col :span="2" :offset="1">
            <el-text class="mx-1" type="info"> {{ syno.pos }}:</el-text>
        </el-col>
        <el-col  :span="16" :offset="2">
            <el-text class="mx-1" >{{ syno.tran }}</el-text>
        </el-col>
    </el-row>
    </template>
    <el-row class="word-text-span">
        <el-col class="word-text-item" :span="8" :offset="1">
            <el-text class="mx-1" type="info"> [例句]： </el-text>
        </el-col>
    </el-row>   
    <template v-for="(sentence, index) in word.sentence">
    <el-row class="word-text-item" v-show="index<3">
        <el-col :span="21" :offset="1">
            <el-text  class="mx-1" tag="b"> {{ sentence.sContent }}</el-text>
        </el-col>
        <el-col :span="21" :offset="1">
            <el-text class="mx-1" type="info">{{ sentence.sCn }}</el-text>
        </el-col>
    </el-row>
    </template>
    <el-row justify="center">
    <el-col :span="10" :offset="1">
        <el-card @click="getClickWord(word.last)" shadow="never" class="word-buttom" id="word-previous-buttom">
            <div class="word-next-buttom-text" > 	
                previous
            </div>
        </el-card>
    </el-col>
    <el-col :span="10" :offset="1">
        <el-card @click="getClickWord(word.next)" shadow="never" class="word-buttom"  id="word-next-buttom">
            <div class="word-next-buttom-text" > 	
                next
            </div>
        </el-card>
    </el-col>
</el-row>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import {getBookWord,getWord} from "@/api/book"
import { useRouter } from 'vue-router'

const router = useRouter()
const book_data = {book:router.currentRoute.value.params.bookId}
const word = ref({
    word:'',
    id:'',
    picture:'',
    last:'',
    next:'',
    usphone:'',
    ukphone:'',
    trans:[{}],
    sentence:[{}],
    syno:[{}]


})
const collect = ref(false)
function user_collect(){
    collect.value = true
}
getBookWord(book_data).then(res => {
    console.log(res.data)
    word.value = res.data
}).catch(err => {
    console.log(err);
    
})

function getClickWord(wordId:any){
    getWord(wordId,book_data).then(res => {

        word.value = res.data
    })
}
</script>
<style lang="scss" scoped>
.word-body-card{
    background-color: #FFFFFF;
    border: none;
    border-radius:1em;
    margin-top: 5vh;
    overflow:hidden ;
    
}
.word-buttom{
    position:fixed;
    height: 2.8em;
    border: none;
    top: 89vh;
    width: 40vw;
    border-radius:1.5em;
    
}

#word-next-buttom{
    background-color: #F7B200;
}

#word-previous-buttom{
    background-color: #4865FF;
}
.word-next-buttom-text{
    text-align:center;
    color:#FFFFFF;
    margin-top: -0.5em;
}
.word-text-span{
    margin-top: 2vh;
}
.word-text-item{
    margin-top: 1vh;
}
</style>