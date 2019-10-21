<template>
  <div class="app">
    <div class="one">
      我是one
      <ul>
        <li>one</li>
        <li>two</li>
        <li>shree</li>
        <li>two</li>
        <li>shree</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name:"Scss",
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  *{
      margin: 0;
      padding: 0;
      list-style: none
    }
  .app{
    width: 200px;
    height: 500px;
    border: 1px solid red;
    .one{
      width: 100px;
      height: 100px;
      ul{
        display: flex;
        width: 200px;
        li{
          width: 20px;
          border: 1px solid lawngreen;
        }
      }
    }
  }
</style>
