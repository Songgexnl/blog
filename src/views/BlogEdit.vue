<template>
  <div>
    <Header></Header>

    <div class="m-content">
      <div class="m-con">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          style="min-width: 500px"
        >
          <el-form-item label="标题" prop="title">
            <el-input v-model="ruleForm.title"></el-input>
          </el-form-item>

          <el-form-item label="博客封面" prop="picture">
            <el-upload
              class="avatar-uploader"
              action=""
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
              style="
                display: inline-nblock;
                width: 100px;
                height: 100px;
                border: 1px solid #d9d9d9;
                border-radius: 10px;
                margin-left:0px;
              "
            >
              <img v-if="avatarUrl" :src="avatarUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              <p>点击方可上传</p>
            </el-upload>

            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
          </el-form-item>

          <el-form-item label="标签">
            <!-- <div class="iptBox">
                <select v-model="ruleForm.tag">
                  <option v-for="(item,index) in tag" :key="index" >{{item.classname}}</option>
                </select>
              </div> -->
            <el-checkbox-group v-model="ruleForm.tag">
              <el-checkbox-button label="JAVA" name="type"></el-checkbox-button>
              <el-checkbox-button
                label="大前端"
                name="type"
              ></el-checkbox-button>
              <el-checkbox-button
                label="大后台"
                name="type"
              ></el-checkbox-button>
              <el-checkbox-button
                label="数据结构"
                name="type"
              ></el-checkbox-button>
              <el-checkbox-button label="VUE" name="type"></el-checkbox-button>
              <el-checkbox-button
                label="React"
                name="type"
              ></el-checkbox-button>
              <el-checkbox-button
                label="JavaScript"
                name="type"
              ></el-checkbox-button>
              <el-checkbox-button label="HTML" name="type"></el-checkbox-button>
              <el-checkbox-button label="Php" name="type"></el-checkbox-button>
              <el-checkbox-button
                label="Linux"
                name="type"
              ></el-checkbox-button>
            </el-checkbox-group>
            <!-- {{ruleForm.tag}} -->
          </el-form-item>

          <el-form-item label="内容" prop="essay">
            <mavon-editor v-model="ruleForm.essay"></mavon-editor>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >发表博客</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import axios from "axios";
export default {
  name: "BlogEdit.vue",
  components: { Header },
  data() {
    return {
      ruleForm: {
        essay: "",
        tag: [],
        title: "",
        file: "",
      },
      avatarUrl:
        "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png",
      rules: {
        title: [
          { required: true, message: "请输入标题", trigger: "blur" },
          {
            min: 3,
            max: 25,
            message: "长度在 3 到 25 个字符",
            trigger: "blur",
          },
        ],

        essay: [{ trequired: true, message: "请输入内容", trigger: "blur" }],
      },
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(URL.createObjectURL(file.raw));
      console.log(this.imageUrl);
      console.log(res);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传封面图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传封面图片大小不能超过 2MB!");
      }
      //校验成功上传文件
      if (isJPG && isLt2M == true) {
        console.log(file);

        //将文件转化为formdata数据上传
        let fd = new FormData();
        fd.append("file", file);
        console.log(fd);
      }
    },
    //获取标签
    tagList() {
      const _this = this;
      this.$axios.get("/tag/list").then((res) => {
        // console.log(res.data.data,'列表');

        _this.tag = res.data.data;
      });
    },
    //文章请求
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // const _this = this
          //   _this.$axios({
          //     method: 'post',
          //     url: '/blog/edit',
          //     params: {
          //         title:_this.ruleForm.title,
          //         tag:_this.ruleForm.description,
          //         essay:_this.ruleForm.content,
          //         creator:_this.$store.getters.getUser.name,
          //     },
          //     headers: {
          //         "token": localStorage.getItem("token")
          //         // "token": "asd1as321df3as21f32sad1f3sd"

          //       }
          //     // setCookie : {'setCookie': `user.name`}
          //   }).then((res)=>{

          //       console.log(res);
          //       console.log(this.$store.getters.getUser.name);
          //       const userInfo = res.data.data
          //        _this.$store.commit("SET_USERINFO", userInfo)

          //         console.log(_this.$store.getters.getUser)
          //       // alert(res.data.message)
          //       // this.$router.push({ path: '/blogs' })
          // })

          const _this = this;
          this.$axios
            .post("/blog/edit", this.ruleForm, {
              headers: {
                token: window.localStorage.getItem("token"),
              },
            })
            .then((res) => {
              console.log("1234568");
              console.log(res);
              _this.$alert("操作成功", "提示", {
                confirmButtonText: "确定",
                callback: (action) => {
                  _this.$router.push("/blogs");
                },
              });
              this.$store.getters.getUser.name;
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
  },
  created() {
    this.tagList();

    const _this = this;
    if (this.$route.params.blogId) {
      this.$axios
        .get("/system/?page=" + this.$route.params.blogId)
        .then((res) => {
          const blog = res.data.data.records[blogId - 1];
          console.log(blod, "是这么");
          _this.ruleForm.id = blog.id;
          _this.ruleForm.title = blog.title;
          _this.ruleForm.description = blog.tag;
          _this.ruleForm.content = blog.essay;
        });
    }
  },
};
</script>

<style lang="less" scoped>
.m-content {
  text-align: center;
  width: 1140px;
  margin: 0 auto;
  margin-top: 50px;
  .m-con {
    width: 1140px;
    // margin: 0 auto;

    .el-form {
      display: block;
      margin: 0 auto;
      width: 1140px;
      // background-color: red;
      height: 500px;
    }
  }
}
.iptBox {
  width: 80%;
}
select {
  width: 125%;
  height: 38px;
  border: 1px solid #008cff;
  border-radius: 3px;
  padding: 0 10px;
  font-size: 16px;
  color: #333;
}
.el-form-item {
  line-height: 40px;
  // position: relative;
  font-size: 14px;
  width: 922px;
  display: block;
  margin: 50px auto;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  img {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    // border-radius: 100%;
    &:hover {
      // border-radius:100% ;
      box-shadow: 2px 2px 2px #ccc;
      border-radius: 10px;

      // background-color: red;
    }
  }
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 75px;
  height: 75px;
  line-height: 100px;
  text-align: center;
}
</style>