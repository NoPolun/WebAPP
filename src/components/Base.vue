<template>
    <div>
        <div>手机归属地查询查询</div>
        <input type="text" placeholder="请输入查询的手机号" v-model="phoneNumber">
        <button @click='clickNumber' >确定</button>
    </div>
</template>
<script>
export default {
    name:'Base',
    data(){
        return{
            phoneNumber:'',
        }
    },
    methods: {
        clickNumber(){
            alert('shuju');
            this.axios.get('http://apis.juhe.cn/mobile/get',{"phone":this.phoneNumber,"dtype":'json','key':'7ae71995d6f573bf27e46a48c4b7a535'})
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err); 
            })
        }
    },
}
</script>
<style lang="less" scoped>
    body{
        background-color: #eeeeee;
    }
</style>
