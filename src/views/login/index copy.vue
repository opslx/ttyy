<template >
    <div class="logo-image">
            <el-image  style="width: 6rem; height: 6rem" src="ttyy.png" fit="fill" />
    </div>

<div class="user-input">
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        status-icon
    >
        <el-row class="SI"  justify="center">
            <el-col :span="20"> 	
                <el-form-item  prop="email">
                    <el-input
                    v-model="ruleForm.email"
                    class="w-50 m-2 no-border"
                    size="large"
                    placeholder="用户名"
                    :prefix-icon="User"
                    />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row  class="SI" justify="center">
            <el-col :span="20"> 			
                <el-form-item  prop="password">
                    <el-input
                        type="password"
                        v-model="ruleForm.password"
                        class="w-50 m-2"
                        size="large"
                        placeholder="密码"
                        :prefix-icon="Lock"
                        show-password
                    />
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>
<el-row style="margin-top:2vh"  justify="center">
    <el-col style="text-align:end" :span="20">
        <el-text tag="b" class="mx-1" type="info">忘记密码</el-text>
    </el-col>
</el-row>
<el-row  class="SI" justify="center">
    <el-col @click="submitForm(ruleFormRef)" class="login-buttom" :span="20">
        <div style="text-align:center;margin-top:0.6rem;color: #FFFFFF"> 	
            {{LoginMsg}}
         </div>
    </el-col>
</el-row>
</div>

<el-row style="margin-top:2vh"  justify="center">
    <el-col style="text-align:center" :span="20">
        <el-text class="mx-1" type="primary">创建账户</el-text>
    </el-col>
</el-row>
</template>
<script setup lang="ts">
import { reactive,ref } from 'vue'
import { User,Lock } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import { setUser } from '@/api/user';
import { useBasicStore } from '@/store/basic'; 
import { useRouter } from 'vue-router'

const store = useBasicStore()
const route = useRouter()
let buttonColor = ref('#F7B200')

interface RuleForm {
  email: string
  password: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  email: '',
  password: ''
})

const rules = reactive<FormRules<RuleForm>>({
  email: [
    {type:'email', required: true, message: 'Please input Email', trigger: 'blur' }
  ], 
  password:[
    { min: 8, max: 20, message: 'Please input Password', trigger: 'blur' },
    {type:'string',required:true}
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log(ruleForm);
      
      setUser(ruleForm).then((res) => {
        store.setToken(res.data.token)
        store.setUserInfo(res.data.userinfo)
        route.push("/")
        // useBasicStore().setRefresh(res.token)
      }).catch((err) => {
        console.log(err);
        
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}

let LoginMsg = ref("登录")


</script>
<style lang="scss" scoped>
.logo-image{
    margin-top: 15vh;
    text-align: center;

}
.user-input{
    margin-top: 10vh;
}
.SI{
    margin-top: 5vh; 
}
.login-buttom{
  border: none;
  border-radius: 3em;
  height:2.5em;;
  background-color: v-bind('buttonColor');;
}
:deep(.el-input__wrapper) {
  box-shadow: 0 0 0 0px !important;
}
html{
    background-color: #FFFFFF !important;
}

</style>