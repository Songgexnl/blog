<template>
   <!-- <div>
    <el-container>
      <el-header>
        <div class="toolbar-container">
          <div class="logo"><img class="imgg" src="@/assets/csdn.png" /></div>
          <div class="toolbar-menus">
            <ul>
              <li>
                <span ><el-link style="font-size:25px ; color:black; " href="/blogs">首页</el-link></span>
              </li>
            </ul>
          </div>
        </div>
      </el-header>
      <el-main>
        <el-form :model="regForm" :rules="rules" ref="regForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="accountId">
            <el-input v-model="regForm.accountId"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="regForm.password"></el-input>
          </el-form-item>
          <el-form-item prop="email" label="邮箱">
                <el-input v-model="regForm.email"></el-input>
            </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('regForm')">注册</el-button>
            <el-button ><el-link @click="toLogin">去登录</el-link></el-button>
          </el-form-item>
        </el-form>

      </el-main>
    </el-container>
    <pre>
        {{regForm}}
    </pre>
  </div> -->
  
<div>
  <comment></comment>
</div>
</template>

<script>
import comment from 'bright-comment'
export default {
  components:{comment},
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
        toLogin(){
            this.$router.push('/login')
        },
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

<style lang="less" scoped>
span{
  color:black;
}
</style>>
