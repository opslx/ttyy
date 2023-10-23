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