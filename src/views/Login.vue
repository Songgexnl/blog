<template>
  <div class="login">
    <!-- <el-container>
      <el-header>
        <div class="toolbar-container">
          <div class="logo">__-社区</div>
          <div class="toolbar-menus">
            <ul>
              <li>
                <span><el-link style="font-size:25px ; color:black; " href="/blogs">首页</el-link></span>
              </li>
            </ul>
          </div>
        </div>
      </el-header>
      <el-main>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button ><el-link @click="toReg">注册</el-link></el-button>
          </el-form-item>
        </el-form>

      </el-main>
    </el-container> -->

    <el-container>
      <el-aside width="300px" style="height: 700px">
        <el-link style="font-size: 40px; color: rgb(255, 75, 4); text-decoration: none;" :underline="false" href="/">___社区</el-link>
      </el-aside>
      <el-main>
        <div class="main-l">
          <div class="login-lo">
            <img src="@/assets/login.png" alt="" srcset="" />
            <div>下载不了</div>
          </div>

          <router-link class="dl" to="/login/singup" style="feadIn">登录</router-link>
          <p style="display:block;  position: relative; left:251px;bottom:28px">|</p>
          <router-link class="zc" to="/login/singon">注册</router-link>

          <div class="sing">
            <!-- <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="65px"
              class="demo-ruleForm"
            >
              <el-form-item prop="username">
                <el-input
                  prop="username"
                  v-model="ruleForm.username"
                  placeholder="输入账号"
                ></el-input>
              </el-form-item>

              <el-form-item prop="password">
                <el-input
                  prop="password"
                  type="password"
                  v-model="ruleForm.password"
                  placeholder="输入密码"
                ></el-input>
              </el-form-item>

              <el-form-item style="margin-right: 165px;" >
                <el-checkbox v-model="ruleForm.checked">记住我</el-checkbox>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')"
                  >登录</el-button
                >
                
                <br><br>
               <el-divider>欢迎登录</el-divider>

              </el-form-item>
            </el-form> -->
          <router-view></router-view>
          </div>

<!-- <el-button><el-link @click="toReg">注册</el-link></el-button> -->
          
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      // ruleForm: {
      //   username: "1",
      //   password: "1",
      //   checked:true
      //   // type:'2'
      // },
      // rules: {
      //   username: [
      //     { required: true, message: "请输入用户名", trigger: "blur" },
      //     // { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
      //   ],
      //   password: [
      //     { required: true, message: "请输入密码", trigger: "change" },
      //   ],
      // },
    };
  },
  // methods: {
  //   submitForm(formName) {
  //     this.$refs[formName].validate((valid) => {
  //       if (valid) {
  //         // alert('出发')
  //         // const jwt = 'authorization'
  //         // const userInfo = this.ruleForm;
  //         // this.$store.commit("SET_TOKEN", jwt)
  //         // this.$store.commit("SET_USERINFO", userInfo)
  //         // console.log(this.$store.getters.getUser)
  //         // this.$router.push("/blogs")
  //         const _this = this;
  //         _this.$axios.post("/login/login", this.ruleForm).then((res) => {
  //           // _this.$axios.post('http://localhost:3000/users/login', this.ruleForm).then(res => {

  //           // console.log(res.data.data)
  //           // console.log("9999999999999");
  //           console.log(res);
  //           console.log(res.headers, "11111111111111112");
  //           // const jwt = res.data.['token']
  //           // console.log(res.data.data,'1111111111111');
  //           // console.log(res.data.data.token);
  //           console.log(res.data);
  //           const jwt = res.data.data.token;

  //           const userInfo = res.data.data;

  //           // 把数据共享出去
  //           _this.$store.commit("SET_TOKEN", jwt);
  //           _this.$store.commit("SET_USERINFO", userInfo);

  //           // 获取
  //           console.log(_this.$store.getters.getUser);

  //           _this.$router.push("/blogs");
  //         });
  //       } else {
  //         console.log("error submit!!");
  //         return false;
  //       }
  //     });
  //   },
  //   resetForm(formName) {
  //     this.$refs[formName].resetFields();
  //   },
  //   toReg() {
  //     this.$router.push("/register");
  //   },
  // },
};
</script>

<style lang='less' scope>
.lofin {
  overflow-y: hidden;
}
.el-container {
  height: 100%;
}
.el-aside {
  color: #333;
  text-align: center;
  line-height: 200px;
  background-color: rgb(241, 241, 241);
}
.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
  // width: 500px;
  // height: 500px;
  margin: 0 auto;
  background-color: #f1f1f1;
  // border: 1px solid #cfcf;
  // box-shadow: 3px 3px 2px #cfcf;
  .main-l {
    width: 900px;
    height: 473px;
    // background-color: red;
    margin: 50px auto;
    padding: 30px;
    position: relative;
    top: 25px;
    display: flex;
    // justify-content: flex-start;
    a {
          color: #000;
          line-height: 40px;
          text-decoration: none;
          padding: 20px 10px;
          &.router-link-exact-active {
            color: #0051a6;
            // font-size: 15px;
          }
    }
    .dl{
      width: 100px;
      display: block;
      position: relative;
      left: 243px;
      top: 28px;
      height: 50px;
      line-height: 7px;
    }
    .zc{
      width: 100px;
      display: block;
      position: relative;
      left: 260px;
      top: 28px;
      height: 50px;
      line-height: 7px;
    }
    .login-lo {
      width: 476px;
      height: 473px;
      // background-color: #fff;
      margin: 0 auto;
      position: relative;
      left: 85px;
      img {
        width: 100%;
        height: 420px;
      }
      div{
        width: 246px;
        height: 42px;
        background-color: rgb(255, 75, 4);
        border-radius: 20px;
        position: relative;
        left: 46px;
        bottom: -11px;
        line-height: 42px;
        color: #fff;
      }
    }
    .sing {
      width: 464px;
      height: 473px;
      background-color: #fff;
      margin: 0 auto;
      margin-left: 5px;
      margin-top: 5px;
      // .demo-ruleForm {
      //   width: 316px;
      //       margin: 97px -14px;
      //   // background-color: red;
      //   .el-form-item {
      //     margin: 0 auto;
      //   }
      // }
    }
  }
}
.el-form-item__content{
  margin-top: 20px;
}
.el-button{
  width: 235px;
}
</style>