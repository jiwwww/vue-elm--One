<template>
  <div>

    <el-main style="display:flax">
      <div class="aaa">
        <div style="background: url(http://static.vue-js.com/FrhMYPI63ONaHPlhPFB1LhTGPxN4) no-repeat left center; background-size: 80%; height: 60px; background-color: #7aa2ee; border-radius: 3px" class="img"></div>
        <div class="bi">
          <ul>
              <router-link to="/shouinfo/List/?tab=all" tag="li">全部</router-link>
              <router-link to="/shouinfo/List/?tab=good" tag="li">精华</router-link>
              <router-link to="/shouinfo/List/?tab=share" tag="li">分享</router-link>
              <router-link to="/shouinfo/List/?tab=week" tag="li">week</router-link>
              <router-link to="/shouinfo/List/?tab=ask" tag="li">问答</router-link>
              <router-link to="/shouinfo/List/?tab=job" tag="li">招聘</router-link>
          </ul>
          <div>
            <router-view></router-view>
          </div>
        </div>
      </div>
      <div class="main-left">
        <div class="main-left_One" v-if="this.$store.state.falg">
           <img :src="this.list.avatar_url"><br>
          {{this.list.loginname}}
        </div>
        <div class="main-left_One" v-if="!this.$store.state.falg">
        未登录
        </div>
        <div class="main-left_Two">
          <img src="@/assets/two.jpg">
        </div>
        <div class="main-left_Shree">
          <img src="@/assets/one.jpg">
          <img src="@/assets/one.jpg">
          <img src="@/assets/one.jpg">
        </div>
        <div class="main-left_Four">
          <div class="he">
            <p>无人回复的话题</p>
          </div>
          <ui>
            <li>我去五连跪</li>
            <li>我去五连跪</li>
            <li>我去五连跪</li>
            <li>我去五连跪</li>
            <li>我去五连跪</li>
          </ui>
        </div>
    </div>
    </el-main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list:{}
    }
  },
  created(){
    this.list=this.$store.state.list
  }
}
</script>

<style>
  *{
    list-style: none;
  }
  .el-main {
    background-color: #E1E1E1;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
    height:1100px;
    padding-left: 110px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;

  }
  .main-left{
    width: 250px;
    height: auto;
    margin-left: 990px;
    margin-top: -125px;
  }
  .main-left_One{
    width: 250px;
    height: 100px;
    background: white;
  }
  .main-left_One>img{
    width: 30px;
    height:30px;
  }
  .main-left_One>p{
    font-size: 10px;
  }

  .main-left_One>span{
    font-size: 12px;
  }
  .main-left_Two{
    width: 250px;
    height: 150px;
    background: white;
    margin-top: 10px;
  }
  .main-left_Two>img{
    width: 230px;
    height: 120px;
    display: block;
    margin: 0 auto;
    padding-top: 10px;
  }
  .main-left_Shree{
    width: 250px;
    height: 150px;
    background: white;
    margin-top: 10px;
  }
  .main-left_Shree>img{
    width: 230px;
    height: 40px;
    background: white;
    margin-top: 5px;
  }
  .main-left_Four{
    width: 250px;
    height: 150px;
    background: white;
    margin-top: 10px;
  }
  .he{
    width: 250px;
    height: 30px;
    background: #F6F6F6;
  }
  .he>p{
    font-size: 12px;
    /* color:#51585c;border-radius:3px 3px 0 0 */
  }
  .img{
    width:70%;
  }
  .aaa{
    width: auto;
    height: auto;
  }
  .bi{
    background: #F6F6F6;
    width: 70%;
    /* text-align: center; */
    /* margin: 0 auto; */
    padding-top: 15px;
    margin-top: 20px;
    height: 30px;

  }
  .bi>ul{
    width: 100%;
    display: flex;
    text-align: center;
  }
  .bi>ul>li{
    list-style: none;
    margin-left: 30px;
    text-align: center;
    cursor: pointer;
    color: #8FBD50;
  }
  .bi>ul>li:hover{
    background: green;
    color: white;
  }
</style>
