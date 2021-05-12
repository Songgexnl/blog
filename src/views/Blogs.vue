<template>
  <div class="blogs">
    <el-backtop  :bottom="100">^</el-backtop>
    <Header :class="navBarFixed == true ? 'navBarWrap' :''"></Header>
 <!-- <h1> {{ screenWidth }} × {{ screenHeight }} </h1> -->
      <br> <br>

      <div class="block">
      <el-timeline>

        <el-timeline-item   placement="top" v-for="(blog,index) in blogs" :key="index">
          <el-card>
              <div class="con-card">
                <div class="con-content">
                  <div class="title"><h4>
                      <router-link :to="{name: 'BlogDetail', params: {blogId: blog.id}}">{{blog.title}}</router-link>   

                    </h4></div>
                  <div class="content">
                     <p>{{getLen(blog.essay,120)}}</p>
                      <img :src="blog.imgPath" alt="">
                  </div>
                </div>
                <div class="c-footer">
                  <div class="c-save"><span> <i class="iconfont">&#xe663;</i> （{{blog.viewCount}}）</span></div>
                  <div class="c-pinglun"><span><i class="iconfont">&#xe647;</i>（{{blog.version}}）</span></div>
                  <div class="c-dianzan"><span><i class="iconfont">&#xe601;</i></span>（{{blog.likeCount}}）</div>
                  <div class="c-time"><span><i class="iconfont">&#xe625;</i>{{blog.gmtModified}}</span></div>
                </div>
            </div>
          </el-card>
          <listBox :class="nav == true ? 'nav' :'na'"></listBox>
        </el-timeline-item>
        


        <!-- <el-timeline-item  placement="top">
          <el-card>
              <div class="con-card">
                <div class="con-content">
                  <div class="title"><h4>
                      <router-link to="{name: 'BlogDetail', params: {blogId: blog.id}}">roudsasasdas</router-link>   
                    </h4></div>
                  <div class="content"><p>我还是内容我还是内容我还是内容我我还是内容我还是内容我还是内容我我还是内容我还是内容我还是内容我我还是内容我还是内容我还是内容我我还是内容我还是内容我还是内容我我还是内容我还是内容我还是内容我还是内容我还是内容我还是内容我还是内容我还是内容我还是内容我还是内容我还是内容我还是内容我还是内容我还是内容</p></div>
                </div>
                <div class="c-footer">
                  <div class="c-save"><span> <i class="iconfont">&#xe663;</i> （123）</span></div>
                  <div class="c-author"><span>作者:我是大老板的</span></div> 
                   <div class="c-pinglun"><span><i class="iconfont">&#xe647;</i>（456）</span></div>
                  <div class="c-dianzan"><span><i class="iconfont">&#xe601;</i>（78）</span></div>
                  <div class="c-time"><span><i class="iconfont">&#xe625;</i>2021-4-15</span></div>
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
    
  </div>
</template>

<script>
import coomon from '../assets/coomon/common'
import Header from "../components/Header";
import listBox from '../components/List';
export default {
  components: {Header,listBox},
  data() {
      return {
        blogs: [],
        page: 1,
        total: 0,
        size: 10,
        navBarFixed: false,
        nav:false,
        screenWidth: '',
        screenHeight: ''
      }
    },
    mounted() {
    // 事件监听滚动条
    window.addEventListener("scroll", this.watchScroll);
    const that = this
    window.onresize = () => {
        return (() => {
            window.screenWidth = document.body.clientWidth
            that.screenWidth = window.screenWidth
        })()
    }
  },
watch:{
    screenWidth(val){
        // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
        if(!this.timer){
            // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
            this.screenWidth = val
            this.timer = true
            let that = this
            setTimeout(function(){
                // 打印screenWidth变化的值
                console.log(that.screenWidth)
                that.timer = false
            },400)
        }
        var asd = document.body.clientWidth;
        if(asd<1500){
          this.nav=true
        }else{
          this.nav=false
        }
    }
},


  methods: {
      //内容省略
       getLen(con,num){
        return coomon.getStrLen(con,num)
      },
      //获取滚动条
       watchScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //  当滚动超过 50 时，实现吸顶效果
        if (scrollTop > 49) {
          this.navBarFixed = true
        } else {
          this.navBarFixed = false
        }
  },
 // 点击之后回到顶部
    backTop () {
      if (document.body.scrollTop) {
        document.body.scrollTop = 0
      } else {
        document.documentElement.scrollTop = 0
      }
    },
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
    }
}
</script>

<style lang="less" scope>
.navBarWrap {
    position:fixed;
    top:0;
    z-index:999;
  }
.page-component__scroll{
        /*必须撑满整个屏幕 */
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow-x: hidden;
    }
.block{
  max-width: 760px;
  margin: 0 auto;
}
.mpage {
    margin: 0 auto;
    text-align: center;
  }
.con-card{
  .con-content{
    .title{
      max-width: 1000px;
      max-height: 53px;
      // background-color: red;
      h4{
          text-align: left;
          font-size: 20px;
          color: white;
          display: block;
          width: 494px;
          a{
            color: black;
          }
      }
    }
    .content{
      max-width: 669px;
      max-height:100px;
      // background-color: blue;
      margin-top: 9px;
      display: flex;
      justify-content: space-between;
      p{
        text-align: left;
        display: block;
        overflow: hidden;
        padding-right: 20px;
        line-height:2;
        height: 100%;
      }
      img{
          display: block;
          width: 150px;
          height: 100px;
        }
    }
  }
  .c-footer{
    width: 1140px;
    max-height: 30px;
    display: flex;
    justify-content: flex-start;
    .c-save{
      max-width: 200px;
      margin-top: 20px;
    }
    .c-author{
      max-width: 200px;
      margin-top: 20px;
      margin-left: 25px;

    }
    .c-pinglun{
      max-width: 200px;
      margin-top: 20px;
      margin-left: 35px;

    }
    .c-dianzan{
      max-width:200px;
      margin-top: 20px;
      margin-left: 25px;

    }
    .c-time{
      max-width: 450px;
      margin-top: 20px;
      margin-left: 210px;
      font-size: 10px;
      color: #ccc;
    }
  }
}
.nav{
  display: none;
}
.nv{
  background: #fff;
        // color:#ffffff;
        overflow: hidden;
        z-index: 9999;
        position: fixed;
        padding:5px;
        text-align:center;
        width: 70px;
        min-height: 270px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        right: 76%;
        top: 30%;
}
</style>