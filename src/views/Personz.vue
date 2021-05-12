<template>
  <div>
    <div class="pic">
        <el-upload 
        class="avatar-uploader"
        action=""
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        style=" display:inline-nblock; width:100px; height:100px; border: 1px solid #d9d9d9; border-radius:100%"
        >
        
            <img v-if="avatarUrl" :src="avatarUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        
        
        <div class="user">
          <ul>
            <li>用户名：{{getLen(user.username,)}}</li><br>
            <li>个　签：{{getLen(user.bio,25)}}</li>
          </ul>
        </div>
        <div class="b-user">
          <el-link href="/persion" :underline="false"> <div class="per-btn">个人主页></div></el-link>
          <!-- <el-divider direction="vertical"></el-divider>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <el-link href="" :underline="false"> <div class="per-btn">不知道去哪></div></el-link> -->

        </div>
    </div>
      
   <div class="per-info">
      <el-header>基本信息</el-header>
        <router-view></router-view>
   </div>

  </div>
</template>

<script>
import coomon from '../assets/coomon/common'
export default {
    data() {
        return {
          user:{
            username:'木球事事故大范甘迪发的高度鬼地方个地方',
            bio:'你这个人金黄色上岛咖啡就开始得荆防颗粒静安寺莲富大厦将符号据说看到和父接口撒旦法'
          },
          avatarUrl:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          hover:false,
          };
        
    },
    methods: {
      //省略内容
      getLen(con,num){
        return coomon.getStrLen(con,num)
      },
      handleAvatarSuccess(res, file) {
          this.imageUrl = URL.createObjectURL(file.raw);
          console.log(URL.createObjectURL(file.raw))
          console.log(this.imageUrl)
          console.log(res)
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg' || 'image/png';
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          //校验成功上传文件
          if(isJPG && isLt2M == true){
          console.log(file);

          //将文件转化为formdata数据上传
          let fd = new FormData()
          fd.append('file', file)
          console.log(fd)
        // post上传图片
           let that = this
            new Promise(function (resolve, reject) {
                that.$axios.post('/login/uploadPhtot', fd, 
                      {
                      headers: {
                       "token": window.localStorage.getItem("token")
                      }
                    }).then((response) => {
                      //  that.imgId = response.data.data
                       console.log(response,'1111111111111');     
                        // resolve(that.imgId);
                        const userInfo = response.data.data
                        that.$store.commit("SET_USERINFO", userInfo)
                        that.avatarUrl=response.data.data.avatarUrl
                        resolve(userInfo);

                    }).catch((error) =>{
                        this.$message.error('头像上传失败，请重新上传!');
                    })
                    }).then(function (id){
                   that.$axios.get('/file/view/'+id)
                    .then((response) => {
                         that.avatarUrl = response.data.data.avatarUrl
                     })
                    })
            }
            // that.$axios.post('/login/uploadPhtot', fd,{
            //   headers: {
            //            "token": window.localStorage.getItem("token")
            //           }
            //         }).then(res=>{
            //            console.log(res,'1111111111111');
            //            const userInfo = response.data.data.avatarUrl
            //             _this.$store.commit("SET_USERINFO", userInfo)
            //         }).catch((error) =>{
            //             this.$message.error('头像上传失败，请重新上传!');
            //         })
            // }
            return isJPG && isLt2M;
     
      
        },
       
    },
    beforeUpdate() {
      if(this.$store.getters.getUser.name) {
        // this.userInfo.avatarUrl=this.$store.getters.getUser.avatarUrl
        this.user.bio=this.$store.getters.getUser.bio
        // this.userInfo.email=this.$store.getters.getUser.email
        this.user.username=this.$store.getters.getUser.name
        // this.userInfo.gmtCreate=this.$store.getters.getUser.gmtCreate
        // this.avatarUrl=this.$store.getters.getUser.avatarUrl
        if(this.$store.getters.getUser.avatarUrl){
          this.avatarUrl=this.$store.getters.getUser.avatarUrl
        }else{
          this.userInfo.avatarUrl
        }   
      }
    },
    created() {
      if(this.$store.getters.getUser.name) {
        // this.userInfo.avatarUrl=this.$store.getters.getUser.avatarUrl
        this.user.bio=this.$store.getters.getUser.bio
        // this.userInfo.email=this.$store.getters.getUser.email
        this.user.username=this.$store.getters.getUser.name
        // this.userInfo.gmtCreate=this.$store.getters.getUser.gmtCreate
        // this.avatarUrl=this.$store.getters.getUser.avatarUrl
        if(this.$store.getters.getUser.avatarUrl){
          this.avatarUrl=this.$store.getters.getUser.avatarUrl
        }else{
          this.userInfo.avatarUrl
        }   
      }
    }
  
}
</script>

<style lang="less" scoped>

.pic{
    width:980px;
    height:145px;
    background-color: rgb(255, 255, 255);
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    
    img{
      width: 100px;
      height: 100px;
      margin: 0 auto;
      border-radius: 100%;
      margin-left: 0px;

      &:hover{
        border-radius:100% ;
        background-color: red;
      }   
    }

    
    
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 75px;
    height: 75px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 75px;
    height: 75px;
    display: block;
  }
  .user{
      width: 100px;
      height: 35px;
      // background-color: rgb(0, 17, 255);
      margin: -78px 125px;
      line-height: 20px;
      font-size: 20px;
      text-align: center;
      ul{
        li{
          text-align: left;
          min-width: 600px;
        }

      }
    }
    .b-user{
      width: 290px;
      height: 30px;
      // background-color: red;
      margin-top: 135px;
      .el-link{
        // display: block;
        position: relative;
        left: 21px;
        bottom: 71px;
        line-height: 30px;
        .per-btn{
          width: 100px;
          height: 30px;
          background-color: #ccc;
          border-radius: 50px;
          margin-left: 0px;
        }
      }
    }
}
.avatar-uploader{
  width: 100px;
    height: 100px;
    position: relative;
    left: 10px;
    top: 10px;
}
.per-info{
    width: 980px;
    height: 750px;
    background-color: #fff;
    margin-top: 40px;
    text-align: left;
    .info{
        width: 944px;
        height: 585px;
        // background-color: rgb(62, 173, 247);
        margin: 10px auto;
        cursor: pointer;
        // padding: 16px 112px 16px 0;
        // position: relative;
        border-top: 1px solid #ccc;
        position: relative;
        top: 0px;
        .el-link{
          position: absolute;
          top: -61px;
          right: 19px;
          display:none;
        }
        ul{
          &:hover{
            background-color: #ccc;
            &:hover .el-link{
             
            display: block;
          
            }
          }
          li{
            display: inline-block;
            width: 856px;
            height: 41px;
            // background-color: red;
            display: flex;
           -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            .content-show-l{
              width: 150px;
              height: 41px;
              line-height: 20px;
              padding-top: 10px;
              padding-left: 16px;
            }
            .content-show-r{
              color: #222226;
            line-height: 20px;
              line-height: 20px;
              padding-top: 10px;
              padding-left: 16px; 
                // word-break: break-all;
              // margin: -164px 116px;
              // width: 500px;
              width: 100%;
            height: 41px;
            }
          }
        }
    }
}


</style>