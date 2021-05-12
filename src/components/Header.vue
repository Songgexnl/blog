<template>
  <div class="header">
    <div class="toolbar-container">
      <div class="toolbar-container-left">
        <div class="logo">
          <!-- <img class="imgg" src="" /> -->
          <a href="/" style="text-decoration: none;"> ____社区</a>
        </div>
<!-- <keep-alive> -->
        <div class="toolbar-menus">
          <ul>
            <li>
              <!-- <keep-alive> -->
              <router-link to="/recommend"  :class="[isClic == true ? 'clic' : '']">
              <span>推荐</span>
            </router-link>
              <!-- </keep-alive> -->
            
              <!-- <el-link
                  @click.native="getData()"
                  href="/recommend"
                  :class="[isClic == true ? 'clic' : '']"
                >
                  <span>推荐</span></el-link
                > -->
            </li>
            <el-divider direction="vertical"></el-divider>
            <li>
              <!-- <keep-alive> -->
              <router-link to="/blogs" 
                :class="[isClicc == true ? 'clic' : '']">
              <span>首页</span>
            </router-link>
              <!-- </keep-alive> -->
              
              <!-- <el-link
                href="/blogs"
                @click.native="getData1()"
                :class="[isClicc == true ? 'clic' : '']"
                ><span>首页</span></el-link
              > -->
            </li>
          </ul>
        </div>
        <!-- </keep-alive> -->
      </div>

      <div class="toolbar-container-middle">
        <input type="text" placeholder="输入内容" v-model="keyword"  @keyup="getKeyword" />
        <div :class="['tcm',hid == true ?'hid':'tcm']">
          <ul>
            <li v-for="(item,index) in list" :key="index">
              <el-link :underline="false">{{getLen(item,20)}}</el-link> 
            </li>
          </ul>
        </div>
        
      </div>

      <div class="toolbar-container-right">
        <!-- <el-divider direction="vertical"></el-divider> -->
        <span v-show="!hasLogin">
          <el-link  href="/login" :underline="false">登录</el-link>
          <el-divider direction="vertical"></el-divider>
          <el-link  href="/login/singon" :underline="false">注册</el-link>
          <el-divider direction="vertical"></el-divider>
        </span>
          

        
        <span v-show="hasLogin">
          <el-link type="danger" :underline='false' style="text-decoration:none">
            <el-dropdown>
              <span class="el-dropdown-link">
                <!-- 下拉菜单<i class="el-icon-arrow-down el-icon--right"></i> -->
                <el-avatar  :size="35" :src="user.avatarUrl"></el-avatar>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="" @click.native="toPersion()"
                  >个人中心</el-dropdown-item
                >
                <el-dropdown-item icon="" @click.native="logout()"
                  >退出博客</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </el-link>
        </span>
        <el-divider direction="vertical"></el-divider>
        <el-link :underline="false" href="/chatview" >消息</el-link>
        <el-divider direction="vertical"></el-divider>

        <!-- <el-divider ></el-divider> -->
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span
          class=""
          style="
            background-color: #11113a;
            display: inline-block;
            width: 90px;
            height: 40px;
            border-radius: 10px;
            margin-top: 3px;
          "
        >
          <el-link
            style="
              color: white;
              line-height: 40px;
              text-align: center;
              margin-bottom: 12px;
            "
            type="success"
            href="/blog/add"
            ><i class="iconfont">&#xe624;</i>写博客</el-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// import {getCookie} from '../cookie/cookies'
import fetchJsonp from 'fetch-jsonp'
import coomon from '../assets/coomon/common'
export default {
  name:'Header',
  data() {
    return {
      hid:false,
      keyword:'',
      list:[],
      timer:'',
      user: {
        username: "请先登录",
        avatarUrl:
          "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        bio: "",
      },
      hasLogin: false,
      input: "",
      // navBarFixed: false
      // baseClass: "base",
      // clicClass: "clic",
      isClic: false,
      isClicc: false,
    };
  },
  methods: {
    //内容省略
       getLen(con,num){
        return coomon.getStrLen(con,num)
      },
    getKeyword(){
      if(this.keyword!=""){
        this.hid=true
        clearTimeout(this.timer)
        this.timer=setTimeout(()=>{
          var api="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+this.keyword
          fetchJsonp(api,{
            jsonpCallback:'cb',
          })
          .then((res)=>{
            return res.json()
          }).then(data=>{
            console.log(data);
            this.list=data.s
          }).catch((error)=>{
            console.log(error);
          })
        })
      
    }else{
      this.list=[]
      this.hid=false

    }
    },
    getData() {
      const _this = this;
      // alert('dianle')
      _this.isClic = false;
      _this.isClicc = true;
    },
    getData1() {
      const _this = this;
      // alert('dianle')
      _this.isClicc = false;
      _this.isClic = true;
    },
    logout() {
      // this.$store.commit("REMOVE_INFO")
      // this.$router.push("/login")
      // alert('dainjile')
      const _this = this;
      _this.$axios
        .get("/login/logout", {
          headers: {
            Token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res);
          _this.$store.commit("REMOVE_INFO");
          _this.$router.push("/login");
          // _this.$router.push("/blogs");
        });
    },
    toPersion() {
      if (!this.hasLogin) {
        this.$router.push("/login");
      } else {
        this.$router.push("/persion");
      }
    },
  },

  created() {
    // const cook =document.cookie
    // const coo = getCookie('userInfo')
    // var obb=JSON.parse(coo)
    // // console.log(obb,'12312132132132');
    // if(cook!='') {

    //   this.user.name = obb.name
    //   this.user.bio = obb.bio

    //   this.user.avatarUrl = obb.avatarUrl

    //   this.hasLogin = true
    // }

    if (this.$store.getters.getUser.name) {
      this.user.username = this.$store.getters.getUser.name;
      this.user.bio = this.$store.getters.getUser.bio;

      this.hasLogin = true;
      if (this.$store.getters.getUser.avatarUrl) {
        this.user.avatarUrl = this.$store.getters.getUser.avatarUrl;
      } else {
        this.user.avatarUrl;
      }
    }
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  min-width: 1280px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 24px;
  height: 48px;
  line-height: 48px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background-color: #fff;
  // margin-top: -51px;
  // position: fixed;
  // top: 0;
  // left: 0;
}
.toolbar-container {
  // width: 100%;
  min-width: 1280px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 24px;
  height: 48px;
  line-height: 48px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-around;
  .toolbar-container-left{
    width: 266px;
    display: flex;
    justify-content: space-between;
  .logo {
    // display: flex;
    // justify-content: flex-start;
    a {
      display: block;
      cursor: pointer;
      color: #000;
    }
    // img {
    //   display: block;
    //   width: 80px;
    //   min-width: 80px;
    //   height: 44px;
    //   margin-left: 95px;
    //   margin-top: calc((48px - 44px) / 2);
    // }
  }
  .toolbar-menus {
    // margin: -48px 330px;
    height: 40px;
    ul {
      list-style: none;
      margin-left: 0px;

      li {
        display: inline;
        a {
          color: #000;
          line-height: 40px;
          text-decoration: none;
          padding: 20px 10px;
          &.router-link-exact-active {
            color: rgb(64, 158, 255);
            font-size: 22px;
          }
          &:hover {
            color: rgb(51, 156, 255);
            // background-color: rgb(141, 141, 141);
          }
        }
      }
    }
    }
  }
  .toolbar-container-middle {
    width: 353px;
    input {
      width: 350px;
      height: 35px;
      border: 1px solid #ccc;
      border-radius: 20px;
      padding-left: 20px;
      &:focus {
        outline: none;
      }
    }
  }
  .toolbar-container-right {
    width: 371px;
    margin-right: -154px;
    el-link {
      margin-left: 60px;
      color: #2c3e50;
      cursor: pointer;
    }
    //el-linke的位置
    .el-link.el-link--primary {
      color: rgb(70, 172, 255);
      margin-bottom: 10px;
      line-height: 10px;
    }
    //el-link之间的 |
    .el-divider {
      background-color: rgb(41, 44, 46);
      margin-bottom: 10px;
    }
  }
}

.el-link.el-link--danger {
  margin-top: 6px;
}
.el-link:hover {
  // color: rgb(70, 172, 255);
  font-size: 15px;
}
.clic {
  font-style: rgb(64, 158, 255);
  color: rgb(64, 158, 255);
  font-size: 20px;
}
.tcm{
  position:absolute;
  width: 353px;
  max-height: 250px;
  background-color: #fff;
  overflow-y: hidden;
  z-index: 9999;
  text-align: left;
  padding-left: 20px;
  border-radius: 20px;
  display: none;
}
.hid{
  display: block;
}
.el-divider--vertical{
  margin: 8px 8px;
}
.el-link.el-link--default{
  color: #000;
}
</style>