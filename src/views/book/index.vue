<template class="page-box">
<el-row class="search"  justify="center">
    <el-col :span="23"> 			
        <el-input
        v-model="searchKeyword"
        class="w-50 m-2 search-input"
        size="large"
        placeholder="搜索单词本"
        :prefix-icon="Search"
      />
    </el-col>
  </el-row>
  <tempalte v-for="i in filteredItems">
  <el-row class="book-card-row"  justify="center">
    <el-col :span="23"> 
      <el-card @click="getBook(i.id)" class="book-card" shadow="hover"> 				
        <el-row :gutter="24">
          <el-col :span="5"> 
      <view class="demo-layout bg-purple v1">
					<el-image style="border-radius: 0.3em;width: 4em; height: 6em" fit="fill"  :src="i.image" />
        </view> 
        </el-col>
        <el-col :span="17"> 
          <el-space alignment="normal" direction="vertical">
          <el-text tag="b">{{i.name}}</el-text>
          <el-text class="mx-1" type="info" size="small">{{i.description}}</el-text>
          <el-text ></el-text>
          <el-text  class="mx-1">{{i.book_word_count}}词</el-text>
          </el-space>
      </el-col>
    </el-row>
      </el-card>
    </el-col>
  </el-row>
  </tempalte>
  <el-row justify="center">
    <el-col :span="20">
        <el-card @click="selectedBook()" shadow="never" id="book-buttom">
            <div id="book-buttom-text" > 	
                {{buttom_text}}
            </div>
        </el-card>
    </el-col>
</el-row>
</template>
<script setup lang="ts">
import {  Search } from '@element-plus/icons-vue'
import {getAllBook,getTagBook} from '@/api/book'
import { useBasicStore } from '@/store/basic'; 
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import {computed} from "vue"
const buttom_text = ref('更换词书')
const books = ref([])
const book = ref(0)
const router = useRouter()
const routerName = router.currentRoute.value.name
const searchKeyword = ref('')

if (routerName === "TagBook"){
  buttom_text.value = '开始学习'
  const tag = router.currentRoute.value.params.tag
  getTagBook({tag:tag}).then((res) => {
    books.value = res.data
  }).catch((err) => {
    console.log(err);
  })

}else{

  getAllBook().then((res) => {
    books.value = res.data
  }).catch((err) => {
    console.log(err);
  })
}


let store = useBasicStore()
function getBook(bookId:number) {
  book.value = bookId
  
}
function selectedBook(){
  store.setBook(book)
  router.push("/")
}

const filteredItems:any = computed(() => {
  return books.value.filter((item:any) =>
        item.name.toLowerCase().includes(searchKeyword.value.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchKeyword.value.toLowerCase()) ||
        item.title.toLowerCase().includes(searchKeyword.value.toLowerCase())
      );

})



</script>

  
<style scoped lang="scss">
.book-card-row {
  margin-top: 1em;
}
.search{
  margin-top: 3vh;
  margin-bottom: 2em;
  border-radius: 1em;
}
.book-card{
  border: none;
  border-radius: 0.5em;
}
#book-buttom{
    position: fixed;
    height: 3em;
    top: 90%;
    width: 80vw;
    border: none;
    border-radius:2em;
    background-color: #F7B200;
}
#book-buttom-text{
    text-align:center;
    color:#FFFFFF;
    margin-top: -0.5em;
}
</style>
