<template>
  <div>
      <!-- 注册 -->
      <el-form :model="regForm" :rules="rules" ref="regForm" label-width="65px" class="demo-ruleForm">
          <el-form-item  prop="accountId">
            <el-input v-model="regForm.accountId" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item  prop="password">
            <el-input type="password" v-model="regForm.password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item prop="email" >
                <el-input v-model="regForm.email" placeholder="邮箱"></el-input>
            </el-form-item>

          <el-form-item>
            <el-button style="width:256px" type="primary" @click="submitForm('regForm')">注册</el-button>
            <!-- <el-button ><el-link @click="toLogin">去登录</el-link></el-button> -->
            <!-- @click="resetForm('ruleForm')" -->
          </el-form-item>
          <el-form-item>
        <!-- <el-divider direction="vertical"></el-divider> -->
        <p class="tongyi" >点击“注册”即表示您同意并愿意遵守社区<a href="">用户协议</a>和<a href="">隐私政策</a>。</p>
        <el-divider >欢迎注册</el-divider>
          </el-form-item>
        </el-form>
               

  </div>
</template>

<script>
export default {
 data() {
      return {
        regForm: {
            accountId: '',
            password: '',
            email: ''
        },
        rules: {
          accountId: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
            // { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请选择密码', trigger: 'change' }
          ],
          email:[
                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
           ],
          //  bio:[
          //      { required: true, message: '请输入个性签名', trigger: 'blur' }
          //  ]
        }
      };
    },
    methods: {
        // toLogin(){
        //     this.$router.push('/login')
        // },
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            // this.$router.push("/login")
            const _this=this
            this.$axios.post('/login/register', this.regForm,).then(res => {
                console.log(res);

                // const userInfo = res.data.data.user
                // _this.$store.commit("SET_USERINFO", userInfo)

                // 获取
                console.log(_this.$store.getters.getUser)

                _this.$router.push("/login")
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },
}
</script>

<style lang="less" scope>
.demo-ruleForm {
        width: 336px;
        margin: 65px -28px;
        // background-color: red;
        .el-form-item {
          margin: 0 auto;
        }
      }
.el-divider{
    p{
        display: block;
    }
}
.tongyi{
  display:block; 
  font-size:14px;
   line-height:0px;
   a{
     color:red
   }
}
</style>