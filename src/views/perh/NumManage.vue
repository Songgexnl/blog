<template>
  <div>
      <el-header>账号管理</el-header>
      <div class="per-info">
  <div class="info">
      <ul>
          <el-link href="" icon="el-icon-edit"  :underline="false">编辑</el-link>
          <li>
            <div class="content-show-l">密码</div>
            <div class="content-show-r">修改密码</div>          
          </li>
          <li>
            <div class="content-show-l">手机</div>
            <div class="content-show-r">15923467952</div>          
          </li>
          <li>
            <div class="content-show-l">邮箱</div>
            <div class="content-show-r">{{userInfo.email}}</div>          
          </li>
          <li>
            <div class="content-show-l">三方账号</div>
            <div class="content-show-r">微信</div>          
          </li>
          <li>
            <div class="content-show-l">登录记录</div>
            <div class="content-show-r">查看记录</div>          
          </li>
        </ul>
  </div>
</div>
  </div>
</template>

<script>
export default {
 data() {
    return {
      userInfo:{
        username:'',
        bio:'',
        email:'',
        accountId:''
      }
    }
  },
created() {
      if(this.$store.getters.getUser.name) {
        this.userInfo.accountId=this.$store.getters.getUser.accountId
        this.userInfo.bio=this.$store.getters.getUser.bio
        this.userInfo.email=this.$store.getters.getUser.email
        this.userInfo.username=this.$store.getters.getUser.name
        // this.userInfo.gmtCreate=this.$store.getters.getUser.gmtCreate
        // this.avatarUrl=this.$store.getters.getUser.avatarUrl
       
      }
    }
}
</script>

<style lang="less" scope>
.per-info{
    width: 980px;
    height: 750px;
    background-color: #fff;
    margin-top: 20px;
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