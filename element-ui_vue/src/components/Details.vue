<template>
    <div id="x">
        <button @click="$router.go(-1)">返回</button>
        <div v-html="arr.content"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr:[]
        }
    },
    mounted() {
        let id=this.$route.query.id
        console.log(this.$route.query.id)
        this.axios.get(`https://www.vue-js.com/api/v1/topic/${id}`).then(res=>{
            console.log(res.data.data)
            this.arr=res.data.data
        })
    },
}
</script>

<style>
.x{width: 100%;}
</style>
