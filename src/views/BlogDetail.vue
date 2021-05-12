<template>
  <div class="blogd">
    <Header></Header>

<el-container>
  <el-aside width="300px"><Percont></Percont></el-aside>
  <el-main>
    <div class="mblog">
      <h2>{{ blog.title }}</h2>
      <el-link icon="el-icon-edit" v-if="ownBlog">
        <router-link :to="{ name: 'BlogEdit', params: { blogId: blog.id } }">
          <!-- <p>{{blog.id}}</p> -->编辑
        </router-link>
      </el-link>
      <!-- <el-divider></el-divider> -->

      <div class="c-footer">
        <div class="c-save" @click="save()">
          <span> <i class="iconfont">&#xe663;</i>（{{blog.viewCount}}）</span>
        </div>
        <div class="c-pinglun" @click="pinglun()">
          <span><a style="color:#000" href="#plun"><i class="iconfont">&#xe647;</i></a>（）</span>
        </div>
        <div class="c-dianzan" @click="dainzan()">
          <span><fragment v-html="icon"></fragment>（{{blog.likeCount}}）</span>
        </div>
        <!-- <div class="c-time">（{{blog.likeCount}}）
          <span><i class="iconfont">&#xe625;</i>{{ blog.gmtModified }}</span>
        </div> -->
      </div>

      <div class="markdown-body" v-html="blog.content">

      </div>
      <div class="foo-ping" id="plun">
         <!-- <comment></comment> -->
      <pinglun ></pinglun>
      <!-- <comment :comments="commentData"></comment> -->
    </div>
    </div>

    

  </el-main>
</el-container>

    
  </div>
</template>

<script>
// import * as CommentData from '../mockdata'
//   import comment from '../components/Comment'
// import comment from 'bright-comment'
import "github-markdown-css";
import Header from "../components/Header";
import Percont from "../components/Percont"
import pinglun from "../components/Pinglun"
export default {
  name: "BlogDetail.vue",
  components: { Header,Percont ,pinglun },
  data() {
    return {
      blog: {
        id: "",
        title: "",
        content: "",
        viewCount:'',
        likeCount:'',
        // commentData: []
      },
      // data:'0',
      ownBlog: false,
      icon: `<i class="iconfont">&#xe601;</i>`,
    };
  },
  methods: {
    save(){
      alert("来观看了啊")
    },
    pinglun(){
      // alert("要去评论~")
    },
    dainzan(){
      const _this =this
      var paramdata ={
            id:''
        };
        // {data:{
      //         blogid
      // }}
      paramdata = JSON.stringify(paramdata);
      var blogid = JSON.stringify(this.$route.params.blogId)
      console.log(blogid,'111111111111');
      this.$axios.get('/like?blogid='+this.$route.params.blogId,{
        headers: {
                "token": window.localStorage.getItem("token")
              }
      }).then(res=>{
        console.log(res);
        console.log(res.data.data.size);
        _this.blog.likeCount=res.data.data.size

        var sta = res.data.data.status
          console.log(sta);
        if(sta){
          this.icon=`<i class="iconfont">&#xe60e;</i>`
        }else{
          this.icon= `<i class="iconfont">&#xe601;</i>`
        }

      })
    }
  },
  created() {
    //  this.commentData = CommentData.comment.data;
    const _this = this;
    console.log(this.$route.params.blogId,'你好');
    this.$axios
      .get("/blog/blogId?blogId=" + this.$route.params.blogId,{
        headers: {
                "token": window.localStorage.getItem("token")
              }
      })
      .then((res) => {
        console.log(res,'你好');
        // console.log("jinlaile");
        const blogId = _this.$route.params.blogId;
        _this.blog.title=res.data.data.title

        var MardownIt = require("markdown-it");
        var md = new MardownIt();

        var result = md.render(res.data.data.essay);
        _this.blog.content = result;

        _this.blog.viewCount=res.data.data.viewCount
        _this.blog.likeCount=res.data.data.likeCount
        // console.log(res.data.data.status,'ni你');
        var status = res.data.data.status
        if(status){
          this.icon=`<i class="iconfont">&#xe60e;</i>`
        }else{
          this.icon= `<i class="iconfont">&#xe601;</i>`
        }

        // console.log(_this.$route,'77777777777777777777');
        // console.log(blogId, "-----------------"); //1
        // // console.log(res.data.data.records);
        // const blog = res.data.data.records[blogId - 1];
        // console.log(blog, "编辑页面 ");
        // // console.log(res.data.data.records[blogId],'111111111111')
        // _this.blog.id = blog.id; //2
        // console.log(_this.blog.id, "博客id");
        // _this.blog.title = blog.title;
        // console.log(_this.blog.title, "博客标题");
        // var MardownIt = require("markdown-it");
        // var md = new MardownIt();

        // var result = md.render(blog.essay);
        // _this.blog.content = result;
        // _this.ownBlog = blog.id === _this.$store.getters.getUser.id;
      });
  },
};
</script>

<style lang="less" scoped>
.blogd{
  background-color: rgb(231, 231, 231);
}

//浮动的点赞及回复
.c-footer{
  width: 90px;
  // height: 100%;
  // background-color: red;
  // border: 1px solid #000;
  position: fixed;
  margin-left: 87rem;
  top: 23rem;
  display: flex;
  flex-direction:column ;
  justify-content: flex-start;
  .c-save{
        min-width: 116px;
    height: 20px;
    margin-top: 10px;
    cursor: pointer;
    line-height: 0;
  }
  .c-pinglun{
        min-width: 116px;
    height: 20px;
    margin-top: 10px;
    cursor: pointer;
     line-height: 0;
    //  text-align: left;
  }
  .c-dianzan{
        min-width: 116px;
    height: 20px;
    margin-top: 10px;
    cursor: pointer;
    line-height: 0;
    
  }
}

  .el-aside {
    background-color: rgb(231, 231, 231);
    // color: #333;
    // text-align: center;
    // line-height: 200px;
     color: rgb(0, 0, 0);
    // text-align: center;
    // line-height: 200px;
    margin-left: 100px;
    width: 400px;
    min-height: 500px;
    margin-top: 20px;
  }
  
  .el-main {
    background-color: rgb(231, 231, 231);
    color: #333;
    text-align: center;
    line-height: 160px;
    margin-right: 166px;
    .mblog {
    // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    width: 915px;
    min-height: 700px;
    padding: 20px 15px;
    h2{
      display: block;
      width: 100%;
      height: 50px;
      margin: 0 auto;
      line-height: 50px;
      margin-top: -19px;
      margin-bottom: 20px;
      text-align: left;
      padding-left: 21px;
    }
    .markdown-body {
        width:100%;
        min-height: 500px;
        margin: 0 auto;
        text-align: left;
        background-color: #fff;
        padding: 20px;
      }
    }
    // 下面的评论框
   .foo-ping{
    width: 100%;//！！！
    min-height: 200em;
    padding: 20px 15px;
    margin-top: 2px;
    background-color: #fff;
    }
      
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }


</style>