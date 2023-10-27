<template >
    <el-row  class="user-setting-card" justify="center" >
        <el-col :span="24" >
            <el-card @click="avatardialogVisible=true" shadow="hover" class="user-setting-box-card">
                <el-row   justify="start" >
                    <el-col :span="4">
                        <el-text tag="b">头像</el-text>   
                    </el-col>
                    <el-avatar class="user-setting-right-avatar"  :src="userinfo.avatar" /> 
                </el-row>
            </el-card>
        </el-col>
        <el-col :span="24" >
            <el-card @click="usernamedialogVisible = true" shadow="hover" class="user-setting-box-card">
                <el-row   justify="start" >
                    <el-col :span="4">
                        <el-text tag="b">用户名</el-text>   
                    </el-col>
                        <el-text class="user-setting-right-text" tag="b">{{ userinfo.username }}</el-text>  
                        <el-icon class="user-setting-right-icon"><Edit /></el-icon>
                </el-row>
            </el-card>
        </el-col>
        <el-col :span="24" >
            <el-card shadow="hover" class="user-setting-box-card">
                <el-row   justify="start" >
                    <el-col :span="4">
                        <el-text tag="b">邮箱</el-text>   
                    </el-col>
                        <el-text class="user-setting-right-text" tag="b">{{ userinfo.email }}</el-text>  
                </el-row>
            </el-card>
        </el-col>
    </el-row>
    <el-dialog
    v-model="usernamedialogVisible"
    title="修改用户名"
    width="20rem"
    top="30vh"
  >
  <el-form  ref="ruleFormRef" :rules="rules" :model="form">
      <el-form-item label="username:">
        <el-input clearable v-model="form.username" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="usernamedialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click.prevent="submitForm(ruleFormRef)">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>

  <el-dialog
    v-model="avatardialogVisible"
    title="修改头像"
    width="20rem"
    top="30vh"
  >
    <el-upload  ref="upload" class="upload-demo" action="#" drag multiple :headers="headers" :auto-upload="false"
         :on-change="beforeAvatarUpload"  :limit="1" :on-exceed="handleExceed">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text"><em>点击上传</em></div>
    </el-upload>
    <div slot="footer" class="dialog-footer">
        <el-button @click="dialogOfUpload = false">取 消</el-button>
        <el-button type="primary" @click="confirmUpload()">上 传</el-button>
    </div>
  </el-dialog>
</template>
<script setup lang="ts">
import { useBasicStore } from '@/store/basic';
import {ref,reactive} from 'vue'
import {updataUserInfo,updataUserAvatar} from '@/api/user'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import {getCookieToken} from '@/utils/cookie'
import { genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'

const {userInfo,userId} = useBasicStore()
const usernamedialogVisible = ref(false)
const userinfo = ref(userInfo)
const avatardialogVisible =ref(false)
const dialogOfUpload =ref(false)
let  File:any = null
const headers = {
    'Content-Type': 'multipart/form-data',
    'Authorization': "Bearer " + getCookieToken()
}


interface RuleForm {
  username: string
}

const ruleFormRef = ref<FormInstance>()
const form = reactive<RuleForm>({
  username: userInfo.username
})


const rules = reactive<FormRules<RuleForm>>({
  username: [
    {type:'string', required: true, message: 'Please input username', trigger: 'blur',min: 2, max: 10, }
  ]
})

function updateUsername(){
    updataUserInfo(userId,form).then(res => {
        const user = res.data

        if(res.status){
            userinfo.value = res.data
            userInfo.username = res.data.username
            usernamedialogVisible.value = false
            ElMessage.success({
              message: "更新成功",
              duration:1000
        })
        }else{
            ElMessage.error({
              message: user.username[0],
              duration:1000
        })}

    })
}


const submitForm = async (formEl: FormInstance | undefined) => {
  console.log(!formEl)
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
        updateUsername()
    } else {
      console.log('error submit!', fields)
    }
  })
}
function confirmUpload() { //确认上传
    const param = new window.FormData();
    console.log(File)
    param.append("avatar",File.raw,File.name);

    param.append('username',userInfo.username)
    console.log(param)
    updataUserAvatar(param).then(res => {
        ElMessage.success({
            message: "上传成功！",
            duration: 1000
        });
        userInfo.avatar = res.data.avatar
    }).catch(err => {
        ElMessage.error({
            message: err.data,
            duration: 1000
        });
    })
}

function beforeAvatarUpload(rawFile:any){
    console.log(rawFile)
  if (rawFile.raw.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    upload.value!.clearFiles()
  } else if (rawFile.size / 1024 / 1024 > 4) {
    ElMessage.error('Avatar picture size can not exceed 4MB!')
    upload.value!.clearFiles()
  }
  File = rawFile
  return true
}

const upload = ref<UploadInstance>()

const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}
</script>
<style lang="scss"> 

.user-setting-box-card{
    border: none;
}
.user-setting-card{
    border: none;

}
.user-setting-right-avatar{
    float: left;
    height: 3em;
    width: 3em;
    margin-left: 60%;
}
.user-setting-right-text{
    float: left;
    margin-left: 60%;
}
.user-setting-right-icon{
    float: left;
    margin-left: 2%;
    margin-top: 0.5%;
    color:#9BA2A8;
}
</style>