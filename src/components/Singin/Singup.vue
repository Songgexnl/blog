<template>
  <div>
      <!-- nihao -->
      <!-- <div class="sing">-->
            <el-form
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
                <el-button style="width:262px" type="primary" @click="submitForm('ruleForm')"
                  >登录</el-button
                >
                <br><br>
               <el-divider>欢迎登录</el-divider>

              </el-form-item>
            </el-form>
         <!-- </div> -->
  </div>
</template>

<script>
export default {
data() {
    return {
         ruleForm: {
        username: "1",
        password: "1",
        checked:true,
        // type:'1'
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          // { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
        ],
      },
    }
},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('出发')
          // const jwt = 'authorization'
          // const userInfo = this.ruleForm;
          // this.$store.commit("SET_TOKEN", jwt)
          // this.$store.commit("SET_USERINFO", userInfo)
          // console.log(this.$store.getters.getUser)
          // this.$router.push("/blogs")
          const _this = this;
          _this.$axios.post("/login/login", this.ruleForm).then((res) => {
            // _this.$axios.post('http://localhost:3000/users/login', this.ruleForm).then(res => {

            // console.log(res.data.data)
            // console.log("9999999999999");
            console.log(res);
            console.log(res.headers, "11111111111111112");
            // const jwt = res.data.['token']
            // console.log(res.data.data,'1111111111111');
            // console.log(res.data.data.token);
            console.log(res.data);
            const jwt = res.data.data.token;

            const userInfo = res.data.data;

            // 把数据共享出去
            _this.$store.commit("SET_TOKEN", jwt);
            _this.$store.commit("SET_USERINFO", userInfo);

            // 获取
            console.log(_this.$store.getters.getUser);

            _this.$router.push("/blogs");
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toReg() {
      this.$router.push("/register");
    },
  },
}
</script>

<style lang="less" scope>
// .sing {
//       width: 464px;
//       height: 473px;
//       background-color: #fff;
//       margin: 0 auto;
//       margin-left: 5px;
//       p {
//         display: block;
//         width: 100px;
//         height: 50px;
//       }
      .demo-ruleForm {
        width: 316px;
        margin: 97px -14px;
        // background-color: red;
        .el-form-item {
          margin: 0 auto;
        }
      }
    // }
</style>