<template>
  <div>
    <div class="lb">
        <ul>
              <li v-for="(item,index) in arr" :key="index" @click="tiao(item.id)">
                <div class="nr">
                    <img :src="item.author.avatar_url">
                    <span style="margin-bottom: 30px;">{{ item.reply_count }}</span>/<span>{{ item.visit_count }}</span>
                    <button>{{ type(item) }}</button>
                    {{item.title}}
                </div>
            </li>
        </ul>
    </div>
    <el-pagination
      background
				:page-count="arr.length"
				:current-page="pages"
				layout="prev, pager, next"
      @current-change="getData"
      >
    </el-pagination>
   </div>
</template>

<script>
export default {
    data() {
        return {
            arr:[],
            pages:1,
            limit:15
        }
    },
    mounted() {
      this.huoqu()
      console.log(this.$router)
      console.log(this.$route)
    },
    methods: {
        type(v){
            if(v.top){
                return "置顶"
            }else if(!v.top&&v.tab=="share"){
                return "分享"
            }else if(!v.top&&v.tab=="ask"){
                return '问答'
            }else if(!v.top&&v.tab=="job"){
                return '招聘'
            }else if(!v.top&&v.tab=="good"){
                return '精华'
            }else if(!v.top&&v.tab=="weex"){
                return 'weex'
            }
        },
        huoqu(val){
          // let tab = this.$route.query.tab || 'all';
            this.axios.get("https://www.vue-js.com/api/v1/topics").then(res=>{
                console.log(res)
                this.arr=res.data.data
            })
        },
        tiao(id){
            this.$router.push(`/Details?id=${id}`)
        },
        getData(val){
           this.pages = val?val:1;
            let tab = this.$route.query.tab || 'all';
            this.axios.get("https://www.vue-js.com/api/v1/topics",{
              params:{
              tab,
              page: this.pages,
              limit: this.limit
            }
            }).then(res=>{
                console.log(res)
                this.arr=res.data.data
            })

        }
    },
    watch: {
        $route(){
            let can=this.$route.query.tab
            console.log(can)
            if(can=='all'){
                this.huoqu()
            }else{
                this.axios.get(`https://www.vue-js.com/api/v1/topics?tab=${can} `).then(res=>{
                console.log(res)
                this.arr=res.data.data
              })
            }
        },
    },
}
</script>

<style>
  .lb{
    background: white;
  }
  .lb>ul>li{
    padding-top: 8px;
    width: 100%;
    margin-top: 8px;
    display: flex;
    cursor: pointer;
    list-style: none;
  }
  .lb>ul>li:hover{
      background: #F6F6F6;
  }
  .lb>ul>li>.nr{
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
    font-size: 13px;
    padding-left: 8px;
  }
  .lb>ul>li>.nr>img{
    width: 25px;
    height: 25px;
    vertical-align: middle;
    margin-bottom: 30px;
  }
  .lb>ul>li>.nr>span{
    margin-bottom: 50px;
  }
  button{
    height: 22px;
    font-size: 11px;
    width: 35px;
    margin-top: 15px;
    background: #369219;
    color: white;
    border: 1px #369219 solid;
    border-radius: 8px;
    margin-bottom: 30px;
  }
</style>
