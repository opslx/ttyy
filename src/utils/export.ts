import {ref} from 'vue'
export const  word = ref({
    word:'',
    id:'',
    picture:'',
    last:'',
    next:'',
    usphone:'',
    ukphone:'',
    trans:[{}],
    sentence:[{
        sContent:'',
        sCn:'',
    }],
    user_collect:false,
    syno:[{
        pos:'',
        tran:''
    }]


})

export const primarySchool = ref(['一年级','二年级',"三年级",'四年级','五年级','六年级'])
export const middleSchool = ref (['初一','初二','初三'])
export const highSchool = ref(['高一','高二','高三'])
export const university = ref(['大一','大二','大三','大四','硕士生','博士生'])
export const otherSchool = ref(['工作党','其他'])