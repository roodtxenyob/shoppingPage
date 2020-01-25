<template>
  <div>
    <navtab>
      <div slot="center">登录</div>
    </navtab>
    <div class="conteiner">
      <el-form ref="form" :model="loginForm" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="loginForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <p class="p">忘记密码?</p>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="btn">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="btn" @click="routerRegister">注册</el-button>
        </el-form-item>
        <el-form-item>
          <p class="qita">其他方式登录暂无</p>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import navtab from "components/common/navbar/navbar";

import axios from "axios";
export default {
  name: "login",

  created() {
    let token = window.localStorage.getItem("token");
    axios({
      baseURL: "/api",
      method: "post",
      url: "/islogin",
      timeout: 6000,
      data: {
        token: token
      }
    })
      .then(result => {
        if (result.data.statusCode == 1) {
          console.log();
          this.$router.replace({ path: 'userHome', query: { name:result.data.userInfo[0].username}});
          //this.$router.replace("userHome");
        } else {
          window.localStorage.removeItem("token");
        }
        console.log(result);
      })
      .catch(err => {
        console.log(err)
        this.$message("服务器忙稍后再试");
      });
  },
  data() {
    return {
      loginForm: {
        name: "",
        pass: ""
      }
    };
  },
  methods: {
    onSubmit() {
      //axios.defaults.withCredentials = true;
      axios({
        baseURL: "/api",
        method: "post",
        url: "/login",
        timeout: 6000,
        data: {
          username: this.loginForm.name,
          password: this.loginForm.pass
        }
      })
        .then(res => {
          if (res.data.statusCode == 1) {
            this.$message("登录成功");
            window.localStorage.setItem("token", res.data.token);
            this.$router.replace("userHome");
          } else {
            this.$message("账号或者密码错误");
          }
        })
        .catch(err => {
          this.$message("登录失败");
        });
    },
    routerRegister() {
      this.$router.replace("register");
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
