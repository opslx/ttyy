<template >
    <el-row  class="setting-card" justify="center" >
        <el-col :span="24" >
            <el-card shadow="hover" class="box-card">
                <el-row  class="user-card-item" justify="start" >
                    <el-col :span="4">
                        <el-text tag="b">头像</el-text>   
                    </el-col>
                    <el-avatar class="user-setting-right-avatar"  :src="userinfo.avatar" /> 
                </el-row>
            </el-card>
        </el-col>
        <el-col :span="24" >
            <el-card @click="dialogVisible = true" shadow="hover" class="box-card">
                <el-row  class="user-card-item" justify="start" >
                    <el-col :span="4">
                        <el-text tag="b">用户名</el-text>   
                    </el-col>
                        <el-text class="user-setting-right-text" tag="b">{{ userinfo.username }}</el-text>  
                        <el-icon class="user-setting-right-icon"><Edit /></el-icon>
                </el-row>
            </el-card>
        </el-col>
        <el-col :span="24" >
            <el-card shadow="hover" class="box-card">
                <el-row  class="user-card-item" justify="start" >
                    <el-col :span="4">
                        <el-text tag="b">邮箱</el-text>   
                    </el-col>
                        <el-text class="user-setting-right-text" tag="b">{{ userinfo.email }}</el-text>  
                </el-row>
            </el-card>
        </el-col>
    </el-row>
    <el-dialog
    v-model="dialogVisible"
    title="修改用户名"
    width="20rem"
    top="30vh"
  >
  <el-form  ref="ruleFormRef" :rules="rules" :model="form">
      <el-form-item label="username:">
        <el-input v-model="form.username" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click.prevent="submitForm(ruleFormRef)">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { useBasicStore } from '@/store/basic';
import {ref,reactive} from 'vue'
import {updataUserInfo} from '@/api/user'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'

const {userInfo,userId} = useBasicStore()
const dialogVisible = ref(false)
const userinfo = ref(userInfo)

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
        userinfo.value = res.data
        userInfo.username = res.data.username

    })
}


const submitForm = async (formEl: FormInstance | undefined) => {
  console.log(!formEl)
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
        dialogVisible.value = false
        updateUsername()
        ElMessage.success({
              message: "更新成功",
              duration:1000
        })
    } else {
      console.log('error submit!', fields)
    }
  })
}

</script>
<style lang="scss"> 
.box-card{
    border: none;
}
.setting-card{
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