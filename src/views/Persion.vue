<template>

  <div>
    <Header></Header>
   <div class="person">
      <img src="@/assets/person.jpg" alt="">
    </div>
        <el-container>
          <el-aside width="300px">
            <div class="peraside">
              <div class="arat">
                <div class="parat">
                  <el-link href="/persondit" :underline="false">
                  <img :src="userInfo.avatarUrl" >
                  </el-link>
                </div>
                
                
              </div>
              <div class="spa">
                  <div class="spa1">
                    <p>用户名:{{userInfo.username}}</p>
                  </div>
                  <div class="spa2">
                    <p>个　签：{{userInfo.bio}}</p>
                  </div>
              </div>
              <div class="c-footer">
                <!-- <ul>
                  <li>收藏</li>
                  <li>评论</li>
                  <li>点赞</li>
                </ul> -->
                  <div class="c-save">
                    <span class="span1">12</span>
                    <br>
                    <span class="span2">收藏</span>
                  </div> 
                  <div class="c-pinglun">
                    <span class="span1">182</span>
                    <br>
                    <span class="span2">评论</span>
                  </div>
                  <div class="c-dianzan">
                    <span class="span1">132</span>
                    <br>
                    <span class="span2">点赞</span>
                  </div>
              </div>
            </div>
            <div class="per-serach">
              <input type="text" placeholder="请输入搜索内容">
            </div>
            <div class="per-hot"></div>
          </el-aside>
          
          <el-main>
            <div class="per-header">
             <span>博客</span>
            </div>
    <div class="per-content">
      <el-timeline>

        <el-timeline-item   placement="top" v-for="(blog,index) in blogs" :key="index">
          <el-card>
              <div class="con-card">
                <div class="con-content" >
                  <div class="title"><h4>
                      <router-link :to="{name: 'BlogDetail', params: {blogId: blog.id}}">{{blog.title}}</router-link>   
                    </h4></div>
                  <div class="content" style=" max-width: 831px;">
                     <p>{{ getLen(blog.essay) }}</p>
                      <img :src="blog.imgPath" alt="">
                  </div>
                </div>
                <div class="c-footer">
                  <div class="c-save"><span> <i class="iconfont">&#xe663;</i> （123）</span></div>
                  <div class="c-pinglun"><span><i class="iconfont">&#xe647;</i>（456）</span></div>
                  <div class="c-dianzan"><span><i class="iconfont">&#xe601;</i>（78）</span></div>
                  <div class="c-time" ><span><i class="iconfont">&#xe625;</i>{{blog.gmtModified}}</span></div>
                </div>
            </div>
          </el-card>
        </el-timeline-item>

                <!-- <el-timeline-item  placement="top">
                <el-card>
                    <div class="con-card">
                      <div class="con-content">
                        <div class="title"><h4>
                            <router-link to="{name: 'BlogDetail', params: {blogId: blog.id}}">roudsasasdas</router-link>   
                          </h4></div>
                        <div class="content"><p>{{getLen(userInfo.con,120)}}</p></div>
                      </div>
                      <div class="c-footer">
                        <div class="c-save"><span> <i class="iconfont">&#xe663;</i> （123）</span></div>
                        <div class="c-pinglun"><span><i class="iconfont">&#xe647;</i>（456）</span></div>
                        <div class="c-dianzan"><span><i class="iconfont">&#xe601;</i>（78）</span></div>
                        <div class="c-time"><span><i class="iconfont">&#xe625;</i>2021-4-19</span></div>
                      </div>
                  </div>
                </el-card>
              </el-timeline-item> -->

      </el-timeline>

      <el-pagination class="mpage"
                     background
                     layout="prev, pager, next"
                     :current-page="page"
                     :page-size="size"
                     :total="total"
                     @current-change=toPage>
      </el-pagination>

    </div>
          </el-main>
        </el-container>
    
  </div>

</template>

<script>
import coomon from '../assets/coomon/common'
import Header from "../components/Header";
export default {
  components:{Header},
  data() {
    return {
      page: 1,
      total: 0,
      size: 10,
      userInfo:{
        avatarUrl:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        bio:'',
        username:'',
       con:'我还是内容我还是内容我还是内容我我还是内容我还是内容我还是内容我我还是内容我还是内容我还是内容我我还是内容我还是内容我还是内容我我还是内容我还是内容我还是内容我我还是内容我还是内容我还是内容我还是内容我还是内容我还是内容我还是内容我还是内容我还是内容我还是内容我还是内容我还是内容我还是内容我还是内容'
      },
       blogs: [],
      activeName: 'first'
    }
  },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      //内容省略
       getLen(con){
        return coomon.getStrLen(con,100)
      },
      had(){
        const _this=this
        this.$axios.get("/blog/bloguser",{
          
              headers: {
                "token": window.localStorage.getItem("token")
              }
        }).then(res => {
          // console.log(res,'111111')
          console.log(res.data.data.records,'22222222222222')
          // console.log(res.data.data.records[1])
          // // console.log("你好");
          _this.blogs = res.data.data.records
          // console.log('2222');
         
        })
      },
      // 页码
      toPage(page) {
        // alert('电解了')
        const _this = this
        
        this.$axios.get("/system/?page="+page).then(res => {
          // console.log(res,'111111')
          console.log(res.data.data.records,'22222222222222')
          // console.log(res.data.data.records[1])
          // // console.log("你好");
          _this.blogs = res.data.data.records
          // console.log('2222');
          _this.page = res.data.data.current
          _this.total = res.data.data.total
          _this.size = res.data.data.size
          this.backTop()
        })
      }
    },
    created() {
      this.toPage(1)
      this.had()
      if(this.$store.getters.getUser.name) {
        this.userInfo.bio=this.$store.getters.getUser.bio
        this.userInfo.username=this.$store.getters.getUser.name
        if(this.$store.getters.getUser.avatarUrl){
          this.userInfo.avatarUrl=this.$store.getters.getUser.avatarUrl
        }else{
          this.userInfo.avatarUrl
        }
      }
    }
}
</script>

<style lang="less" scoped>

  .home{
    width: 50px;
    height: 50px;
    display: inline-block;
    position: absolute;
    left: 250px;
    top: 15px;
}
.person{
  width: 100%;
  max-height: 80px;
  img{
    width: 100%;
    height: 74px;
  }
}
.avaturl{
  width: 1471px;
  height: 300px;
  background-color: red;
  margin: 0 auto;
  .avat-logo{
    width: 100%;
    height: 165px;
    background-color: #fff;
    .avatarUrl{
      width: 100px;
      height: 100px;
      border: 1px solid #fff;
      background-color: #fff;
      border-radius: 50%;
      margin-top: -30px;
      box-shadow: rgb(17 18 19 / 6%) 0px 0px 10px 2px;
      position: relative; 
      left: 50%;
      right: 0;
      bottom: 0;
      top: 0;
      z-index: 9999;
    img{
      width: 96px;
      height: 96px;
    }
    }
  }
}

.el-aside {
    // background-color: green;
    color: rgb(0, 0, 0);
    // text-align: center;
    // line-height: 200px;
    margin-left: 100px;
    width: 400px;
    min-height: 500px;
    
  }
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
      height: 70px;
      background-color: #fff;
      margin: 0 auto;
      .spa1{
        // background-color: #ccc;
        width: 280px;
        height: 30px;
        margin: 5px auto;
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
.el-input__inner {
      background-color: #9b9b9b;
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

.el-main {
    // background-color: #c00;
    color: rgb(0, 0, 0);
    text-align: center;
    line-height: 19px;
    margin-right: 100px;
    .per-header{
      width: 979px;
      height: 65px;
      background-color: #fff;
      span{
        text-align: center;
        line-height: 65px;
        font-size: 25px;
      }
      
    }
}
</style>>
