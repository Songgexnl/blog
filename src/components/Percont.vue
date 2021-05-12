<template>
  <div>
       <!-- <div class="person">
      <img src="@/assets/person.jpg" alt="">
    </div> -->
       
          <!-- /persondit -->
            <div class="peraside">
              <div class="arat">
                <div class="parat">
                  <el-link href="" :underline="false">
                  <img :src="userInfo.avatarUrl" >
                  </el-link>
                </div>
                
                
              </div>
              <div class="spa">
                <div class="spa1">
                    <p>用户账号:{{userInfo.accountId}}</p>
                    
                  </div>
                  <div class="spa1">
                    <p>用  户  名:{{userInfo.username}}</p>
                  </div>
                  <div class="spa1">
                    <p>个　签：{{userInfo.bio}}</p>
                  </div>
                  <div class="spa1">
                    <p>邮　箱：{{userInfo.email}}</p>
                  </div>
              </div>
              <div class="c-footer">
                  <div class="c-save">
                    <span class="span1">{{userInfo.viewCount}}</span>
                    <br>
                    <span class="span2">浏览</span>
                  </div> 
                  <div class="c-pinglun">
                    <span class="span1">182</span>
                    <br>
                    <span class="span2">评论</span>
                  </div>
                  <div class="c-dianzan">
                    <span class="span1">{{userInfo.likeCount}}</span>
                    <br>
                    <span class="span2">点赞</span>
                  </div>
              </div>
            </div>
            <div class="per-serach">
              <input type="text" placeholder="请输入搜索内容">
            </div>
            <div class="per-hot"></div>
          
        
  </div>
</template>

<script>
export default {
data() {
    return {
        userInfo:{
        avatarUrl:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        bio:'',
        username:'',
        viewCount:'',
        likeCount:'',
        accountId:'',
        email:''
      },
    }
},
methods: {
    
},
created() {
    const _this = this;
    this.$axios
      .get("/blog/blogId?blogId=" + this.$route.params.blogId,{
        headers: {
          "token": window.localStorage.getItem("token")
        }
      })
      .then((res) => {
        console.log(res,'4565465');
        _this.userInfo.avatarUrl = res.data.data.avatarUrl
        _this.userInfo.username = res.data.data.name
        _this.userInfo.bio =res.data.data.bio
        _this.userInfo.likeCount = res.data.data.likeCount
        _this.userInfo.viewCount =res.data.data.viewCount
        _this.userInfo.accountId = res.data.data.accountId
        _this.userInfo.email = res.data.data.email
      });
},
}
</script>

<style lang="less" scoped>

  .peraside{
    .arat{
      width: 290px;
      height: 70px;
      background-color: #fff;
      margin: 5px auto;  
      .parat{
         width: 65px;
          height: 65px;
          margin: 0px auto;
          padding-top:2px ;
          
          .el-link{
          display: block;
          img{
          display: block;
          width: 65px;
          height: 65px;
          border-radius:100% ;
          transition: transform 1s ease-out;
          &:hover{
            transform: rotate(360deg);
            transition: transform 1s ease-out;
          }

      }
      }
      
      }
        
        
    }
    .spa{
      width: 290px;
      height: 150px;
      background-color: #fff;
      margin: 0 auto;
      .spa1{
        // background-color: #ccc;
        width: 280px;
        height: 30px;
        margin: 5px auto;
        border-bottom: 1px solid #ccc;
        p{
          line-height: 20px;
          text-align: left;
          padding-top: 5px;
        }
      }
      .spa2{
        // background-color: #ccc;
        width: 280px;
        height: 30px;
        margin: 0px auto;
        p{
          line-height: 20px;
          text-align: left;
          padding-top: 5px;
          font-size: 13px;
        }
      }
    }
    .c-footer{
    width: 290px;
    min-height: 60px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;

    margin: 5px auto;
    .c-save{
      // margin-top: -60px;
      // margin-left: 10px;
      height: 60px;
      width: 50px;
      // background-color: red;
    .span1{
      position: relative;
      left: 0;
      bottom: 87px;
        // display: block;
        // width: 20px;
        // height: 50px;
        // margin-top: -20px;
      }
      .span2{
        // display: block;
        // width: 32px;
        // height: 50px;
        // margin-top: -20px;

        position: relative;
        left: 0;
        bottom: 255px;
        color: rgb(54, 52, 52);
      }
      
    }
    .c-pinglun{
       height: 60px;
      width: 50px;
      // background-color: red;
     .span1{
      position: relative;
      left: 0;
      bottom: 87px;
      }
      .span2{
        position: relative;
        left: 0;
        bottom: 255px;
        color: rgb(54, 52, 52);
      }
      }
      .c-dianzan{
        height: 60px;
        width: 50px;
        // background-color: red;
     .span1{
      position: relative;
      left: 0;
      bottom: 87px;
      }
      .span2{
        position: relative;
        left: 0;
        bottom: 255px;
        color: rgb(54, 52, 52);
      }
      
      }
  }
  
}
.per-serach{
    width: 290px;
    height: 45px;
    background-color: #fff;
    margin: 0px auto;
    padding-top: 3px;
    input{
      display: block;
      width: 250px;
      height: 38px;
      margin: 0px auto;
      padding-top: 10px;
      font-size: 17px;
      text-align: left;
      border-radius: 20px;
      padding-left: 11px;
      padding-bottom: 8px;
      border: 1px solid #ccc;
      // vertical-align: middle;
      &:focus{
        outline: none;
      }
    }
  }
</style>