<template>
  <div class="cinfo">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户昵称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
           
          <el-form-item label="个人简介" prop="bio">
            <el-input v-model="ruleForm.bio"></el-input>
          </el-form-item>
          <!-- <el-form-item label="所在地区" prop="area">
            <el-input v-model="ruleForm.area"></el-input>
          </el-form-item> -->
            <el-form-item prop="email" label="邮箱">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <!-- <el-form-item label="开始工作" prop="work">
            <el-input v-model="ruleForm.work"></el-input>
          </el-form-item> -->
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
            <!-- <el-button @click="resetForm('ruleForm')">取消</el-button> -->
            <el-button @click="resetForm()">取消</el-button>

          </el-form-item>
        </el-form>  
  </div>
</template>

<script>
export default {
data() {
      return {
        ruleForm: {
          name: '',
          bio: '',
          email: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          nameid: [
            { required: true, message: '输入用户ID', trigger: 'blur' }
          ],
          // zsname: [
          //   { required: true, message: '输入真实姓名', trigger: 'blur' }
          // ],
          
          bio: [
            { required: true, message: '个人简介', trigger: 'blur' }
          ],
          // area: [
          //   { required: true, message: '所在地区', trigger: 'blur' }
          // ],
          email:[
             { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ],
                
          // work: [
          //   { required: true, message: '开始工作', trigger: 'blur' }
          // ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            const _this = this
            this.$axios.post('/login/edit',  this.ruleForm,         
            {
              headers: {
                "token": window.localStorage.getItem("token")
              }
            }).then(res => {
              console.log('1234568');
              // console.log(res.data.data)
              const userInfo = res.data.data
              _this.$store.commit("SET_USERINFO", userInfo)
              _this.$alert('操作成功', '提示', {
                confirmButtonText: '确定',
                callback: action => {
              _this.$router.push('/persondit/personz/pinfo')
                }
              });
              this.$store.getters.getUser.name
            })

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // resetForm(formName) {
      resetForm() {
        // this.$refs[formName].resetFields();

        this.$router.push('/persondit/personz/pinfo')

      }
    }
}
</script>

<style>
.cinfo{
  margin-top: 10px;
}
</style>