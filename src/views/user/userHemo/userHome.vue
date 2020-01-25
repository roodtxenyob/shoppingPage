<template>
  <div class="box repair">
    <navbar><div slot="center">个人中心</div></navbar>
    <userInfo></userInfo>
  </div>
</template>

<script>
  import navbar from "components/common/navbar/navbar";
  import userInfo from "./childComps/userInfo";
  
  export default {
    name: "user",
    components: {
      navbar,
      userInfo
    }
  }
</script>

<style scoped>
  .box{
    margin-top: 40px;
    height: 230px;
    background-color: #f5659f;
  }
  .repair:after,.repair:before{
    display: table;
    content: "";
    clear: both;
  }
</style>
