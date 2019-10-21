<template>
  <div>
    <!-- 我是登陆页面 -->
    <!-- Access Token值： 929e054b-6ec4-4622-a34f-73418993f833 -->
    <h2>请输入登录秘钥</h2><br>
    <el-input placeholder="请输入密码" v-model="input" show-password style="width:500px;"></el-input><br><br>
    <el-button type="primary" plain style="width:500px; height:40px" @click="den()">登录</el-button><br><br>
    <el-button type="primary" plain style="width:500px; height:40px" @click="$router.go(-1)">取消</el-button>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        input: ''
      }
    },
    methods:{
       den(){
          axios.post("https://www.vue-js.com/api/v1/accesstoken",{
            accesstoken:this.input
          }).then((res)=>{
              if(res.data.success){
                  this.$store.commit('deng',res.data)
                  console.log(res)
                  this.$router.push('/')
              }
          }).catch((err)=>{
              alert("你输入的密钥有误")
          })
      }
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    text-align: center;
  }
</style>
