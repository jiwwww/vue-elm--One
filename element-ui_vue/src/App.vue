<template>
  <div id="app">
    <el-container>
      <el-header height="45px">
        <div class="head">
            <div class="jw">
              <a class="leng" href="/">
                <img src="./assets/logo.png"><span>Vue.js</span>
              </a>
              <input type="text" class="sreach">
            </div>
            <ul class="nav">
                <li>首页</li>
                <li>微信公众号</li>
                <li>VUE2.0</li>
                <li>参考资料</li>
                <li>API</li>
                <li>关于</li>
                <li>注册</li>
                <li @click="logo()">{{this.$store.state.name}}</li>
            </ul>
         </div>
      </el-header>

      <router-view/>
    </el-container>

  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    logo(){
      if(this.$store.state.name=='退出'){
        this.$store.commit('tui')
    }else{
        this.$router.push('/Register')
    }
  }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding:0;
  }
  .el-header{
    background-color: #1C6132;
    color: #333;
    text-align: center;
    line-height: 45px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  .head {
    width: 90%;
    height: 45px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .jw{
    height: auto;
    width: auto;
  }
  .jw>a{
    color: white;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
  }
  .jw>a>img{
    width: 35px;
    height: 35px;
    text-align: center;
    vertical-align: middle;
  }
  .leng {
      width: 120px;
      height: 40px;
      display: block;
  }
  .leng img {
      width: 120px;
      height: 40px;
  }
  .jw{
    display: flex;
  }
  .sreach {
      width: 211px;
      height: 25px;
      border-radius:50px;
      border: 0;
      outline: none;
      background: #4F9639;
      padding-left: 15px;
      transition: all  0.5s;
      margin-left: 20px;
      margin-top: 11px;
  }
  .sreach:hover{
      background: white;
  }
  .nav {
      width: 555px;
      height: 45px;
      display: flex;
  }
  .nav li {
      width: 10%;
      height: 45px;
      line-height: 45px;
      text-align: center;
      list-style: none;
      color: #EEEEEE;
      font-size: 10px;
      cursor: pointer;
  }
  .nav li:hover{
      color: white
  }
</style>
