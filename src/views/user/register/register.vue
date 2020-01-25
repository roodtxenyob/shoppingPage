<template>
  <div>
    <navtab>
      <div slot="center">注册</div>
    </navtab>
    <div class="conteiner">
      <el-form ref="form" :model="registerForm" label-width="80px">
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            autocomplete="off"
            v-model="registerForm.password"
            @blur="PasswordTesting"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="pass">
          <el-input
            type="password"
            autocomplete="off"
            v-model="registerForm.rePassword"
            @blur="rePasswordTesting"
          ></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="registerForm.nickName"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="registerForm.tell" type="email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="register">注册</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="routerLogin">已有账号？点我登录</el-button>
        </el-form-item>
        <el-form-item>
          <p class="qita">其他方式登录暂无</p>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import navtab from "components/common/navbar/navbar";
export default {
  name: "register",
  data() {
    return {
      registerForm: {
        nickName: "",
        password: "",
        rePassword: "",
        tell: ""
      }
    };
  },
  methods: {
    PasswordTesting(){
      if(this.registerForm.password == ""){
        this.$message({
          message: '密码不能为空',
          type: 'warning'
        });
      }
    },
    rePasswordTesting(){
      if(this.registerForm.password != this.registerForm.rePassword){
         this.$message({
          message: '两次密码不一致',
          type: 'warning'
        });
      }
    },
    routerLogin() {
      this.$router.replace("login");
    },
    register() {
      axios({
        baseURL: "/api",
        method: "post",
        url: "/register",
        timeout: 6000,
        data: {
          username: this.registerForm.nickName,
          password: this.registerForm.password,
        }
      })
        .then(res => {
          if(res.data.statusCode == 1){
            this.$message('注册成功');
            window.localStorage.setItem("token",res.data.token);
            this.$router.replace('userHome');
          }else{
            this.$message('注册失败');
          }
        })
        .catch(err => {
          this.$message('注册失败');
        });
    }
  },
  components: {
    navtab
  }
};
</script>

<style scoped>
.conteiner {
  margin-top: 20%;
  width: 80%;
  height: 80%;
}
.btn {
  width: 100%;
}
.p {
  text-align: right;
}
.qita {
  text-align: center;
}
.qita:after,
.qita:before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 1px;
  margin: 0 10px;
  vertical-align: middle;
  background-color: #d3d3d3;
}

.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.row-bg {
  padding: 0 0;
  background-color: #f9fafc;
}
</style>