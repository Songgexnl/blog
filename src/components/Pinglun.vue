<template>
  <div>
    <!--  @keyup.enter.native="plun"按键回车事件 -->
    <div>
      <!-- 发布内容 -->
      <div>
        <el-input
          type="textarea"
          :autosize="{ minRows: 7, maxRows: 4 }"
          placeholder="写下你的评论...（字数在200以内）"
          v-model="textarea"
          resize="none"
          @click.native="plun"
        >
        </el-input>
      </div>
      <!-- 发布按钮和取消 -->
      <div :class="['regfa', regfa == true ? 'regf' : 'regfa']">
        <div class="fa-left">
          <!-- 表情 -->
          <emoji-icon @select="selectIcon" :iconConfig="iconConfig"></emoji-icon>
        </div>
        <div class="fa-right">
          <el-button type="primary" plain @click="fabu">发布</el-button>
          <el-button plain @click="quxiao">取消</el-button>
        </div>
      </div>
    </div>

    <!-- <div class="allPlun">
      <div class="onePlun">
        <div>
          <img src="@/assets/01.png" alt="" />
          <p class="sp1" ref="huifu1">用户名称</p>
          <p class="sp2">2021-4-26</p>
        </div>
        <div class="cont">
          <p class="sp3">
            评论的内评论的内容评论的内容评论的内容评论的内容评论的内容评论的内容评论的内容评论的内容评论的内容容评论的内容评论的内容评论的内容评论的内容评论的内容评论的内容评论的内容评论的内容
          </p>
        </div>
        <div class="f-con">
          <span><i class="iconfont">&#xe601;</i>赞</span>
          <span @click="huifu"><i class="iconfont">回复</i></span>
        </div>
      </div>
    </div> -->

    <!-- <div class="onePlun1">
      <div>
        <img src="@/assets/01.png" alt="" />
        <p class="sp1" ref="huifu2">用户名称12</p>
        <p class="sp2">2021-4-26</p>
      </div>

      <div class="cont">
        <p class="sp3">
          评评论的内容评论的内容评论的内容评论的内容评论的内容评论的内容评论的内容评论的内容评论的内容
        </p>
      </div>

      <div class="f-con">
        <span><i class="iconfont">&#xe601;</i>赞</span>
        <span style="font-size:9px" @click="huifu1"><i class="iconfont">回复</i></span>
      </div>
    </div> -->


<!-- 
        <el-collapse accordion  @change="handleChange">
   
          <el-collapse-item :name="index"  class="" v-for="(item,index) in listNam" :key="index" @click.native="accli(index)" > 
            <template slot="title" >
                      <div class="allPlun"   >
                       <div class="onePlun">
                      <div>
                        <img :src="item.avatarUrl" alt="" />
                        <p class="sp1" ref="huifu1">{{item.name}}</p>
                        <p class="sp2">{{item.gmtCreate}}</p>
                      </div>
                      <div class="cont" v-if='!isShow' >
                        <p class="sp3">
                          {{item.content}}
                        </p>
                      </div>
                      <div class="f-con" v-if='!isShow'>
                        <span><i class="iconfont">&#xe601;</i>赞（）</span>
                        <span @click="huifu(item.username)"><i class="iconfont">回复</i></span>
                      </div>
                    </div>
                  </div> 
              <i class="header-icon "></i>
            </template>
            <div> <ul>
              <li v-for="(item1,inde) in listHui" :key="inde">
                <div class="onePlun1">
                    <div>
                      <img :src="item1.avatarUrl" alt="" />
                      <p class="sp1" ref="huifu2">{{item1.name}}</p>
                      <p class="sp2">{{item1.gmtCreate}}</p>
                    </div>

                    <div class="cont" >
                      <p class="sp3">
                        {{item1.content}}
                      </p>
                    </div>

                    <div class="f-con">
                      <span><i class="iconfont">&#xe601;</i>赞</span>
                      <span style="font-size:9px" @click="huifu1(item1.username)">回复</span>
                    </div>
                </div>
              </li>
            </ul></div>  
          </el-collapse-item>
    
        </el-collapse> -->
  <div class="wyt">

    <ul>
      <li v-for="(item,index) in listNam" :key="index">
        <div class="allPlun">
          <div class="onePlun">
            <div>
              <img :src="item.avatarUrl" alt="" />
              <p class="sp1" ref="huifu1">{{item.name}}</p>
              <p class="sp2">{{item.gmtCreate}}</p>
            </div>
            <div class="cont">
              <p class="sp3">
              {{item.content}}
              </p>
            </div>
            <div class="f-con">
              <span><i class="iconfont">&#xe601;</i>赞</span>
              <span @click="huifu"><i class="iconfont">回复</i></span>
            </div>
          </div>
        </div> 
          
        
      <ul v-for="(item1,inde) in listHui" :key="inde">
          <li>
                <div class="onePlun1">
                    <div>
                      <img :src="item1.avatarUrl" alt="" />
                      <p class="sp1" ref="huifu2">{{item1.name}}</p>
                      <p class="sp2">{{item1.gmtCreate}}</p>
                    </div>

                    <div class="cont" >
                      <p class="sp3">
                        {{item1.content}}
                      </p>
                    </div>

                    <div class="f-con">
                      <span><i class="iconfont">&#xe601;</i>赞</span>
                      <span style="font-size:9px" @click="huifu1(item1.username)">回复</span>
                    </div>
                </div>
          </li>
      </ul>
      <!-- <Huifu v-if="reg" :reg.sync="reg" ref="regf" v-model="cont"></Huifu>  -->
      </li>

    </ul>
  </div>

    <!-- <Huifu v-if="reg" :reg.sync="reg" ref="regf" v-model="cont"></Huifu> -->
  </div>
</template>

<script>
import Huifu from "../components/Huifu";
export default {
  // props:[textarea],
  data() {
    return {
      textarea: "",
      regfa: false,
      reg: false,
      bokeId:'',
      cont:'asdsad',
      listNam:[],
      listHui:[],
      isShow:true
    };
  },
  components: { Huifu },
  methods: {
    handleChange(val) {
      console.log(val);
      const nih = typeof val === 'number'

      if(nih){

        this.isShow=false
      }else{
        this.isShow=true
        }
    },

    // accli(val){
    accli(){

      // alert(val,'获得到了')
      // let valv = val
      const _this =this
        this.$axios.get('/comment/get/id=1',{
          headers: {
           "token": window.localStorage.getItem("token")
            }
        }).then(res=>{
          console.log(res,'评论');
          console.log(res.data.data);
          _this.listHui = res.data.data
        })

    },
    pinlunone(){
      const _this =this
      this.$axios.get("/blog/blogId?blogId=" + this.$route.params.blogId,{
        headers: {
                "token": window.localStorage.getItem("token")
              }
      }).then(res=>{
        console.log(res,'评论2');
        console.log(res.data.data.commentDtoList);
        _this.listNam = res.data.data.commentDtoList
      })
    },
    huifu(value) {
      // alert(value)
      const _this = this;
      _this.reg = true;
      console.log(this.$refs);
      let hui = this.$refs.huifu1.innerHTML;

      // let place = _this.$refs.regf.$children[0].$attrs.placeholder
      // let place = _this.$refs.regf.$children[0].$refs.input.placeholder

      if (hui) {
        console.log(hui);
        // _this.$refs.regf.$children[0].$refs.input.placeholder = '@'+hui
        // this.reg=true
        this.$refs.regf.textarea = "@" + hui + "   ";
        console.log(place);
      }

      // else if(hui2){
      //     console.log(hui2);
      //     _this.$refs.regf.$children[0].$refs.input.placeholder = '@'+hui2
      // }
      // console.log(this.$refs.regf.textarea);//获取input中text中得内容
      // console.log(_this.$refs.regf.$children[0].$refs.input.placeholder)
    },
    huifu1() {
      // console.log("4568/");
      const _this = this;
      _this.reg = true;
      let hui2 = this.$refs.huifu2.innerHTML;

      if (hui2) {
        console.log(hui2);
        this.$refs.regf.$children[0].$refs.input.placeholder = "@" + hui2;
      }
    },
    plun() {
      const _this = this;
      setTimeout(function () {
        _this.regfa = true;
      }, 100);
    },
    quxiao() {
      this.regfa = false;
    },
    fabu() {
      let id =  this.bokeId
      const token = window.localStorage.getItem("token");
      const _this = this;
      
      this.$axios.post('/comment/add',{
        data:{
          id
        }
        }).then(res=>{
        console.log(res);
      })
      if (!token) {
        this.$router.push("/login");
      }
    },
    handleNodeClick(data) {
      console.log(data);
    },
    zishu(){
      const _this =this
      let len = this.textarea
      console.log(len.length,'内容');
      if(len.length>=10){
        console.log(发布吧帖子);
      }

      
    }
  },
  created() {
    this.accli()
    this.pinlunone()
    this.zishu()
    //  this.commentData = CommentData.comment.data;
    const _this = this;
    console.log(this.$route.params.blogId,'555555555555');
    _this.bokeId = this.$route.params.blogId
  }
};
</script>

<style lang="less" scope>

.wyt{
  width: 100%;
  height: 70em;
  background-color: rgb(255, 255, 255);
  ul{
    display: block;
    li{
      display: block;
      width: 100%;
      min-height: 13em;
      background-color: rgb(255, 255, 255); 
      line-height: 10em;
    }
    ul{
        display: flex;
        justify-content: flex-end;
        li{
          display: block;
          
          width: 90%;
          height: 10em;
          background-color: rgb(0, 110, 255);
          line-height: 10em;
          .onePlun1 {
            width: 100%;
            min-height: 13em;
            border-bottom: 1px solid #ccc;
            background-color: rgb(238, 238, 238);
          
            div {
              display: flex;
              // justify-content: space-around;
              img {
                width: 32px;
                height: 32px;
                border-radius: 100%;
                display: block;
                margin-top: 15px;
                margin-left: 16px;
              }
              .sp1 {
                display: block;
                width: 81px;
                height: 26px;
                line-height: 26px;
                // background-color: red;
                // margin-left: -72px;
                // margin-top: 20px;
                font-size: 15px;
                color: rgb(0, 0, 0);
                position: relative;
                right: 0px;
                top: 11px;
                font-size: 10px;
              }
              .sp2 {
                display: block;
                width: 212px;
                height: 26px;
                line-height: 26px;
                // background-color: red;
                position: relative;
                right: 81px;
                top: 31px;
                font-size: 10px;
                color: rgb(0, 0, 0);
              }
            }
            .cont {
              width: 100%;
              min-height: 33px;
              // background-color: red;
              position: relative;
              /* right: 203px; */
              top: 10px;
              .sp3 {
                line-height: 33px;
                padding-left: 43px;
                padding-right: 25px;
                text-align: left;
                font-size: 13.5px;

              }
            }
            .f-con {
              width: 100%;
              height: 33px;
              // background-color: #fff;
              margin-top: 56px;
              font-size: 10px;
              span {
                line-height: 33px;
                display: block;
                margin-left: 45px;
                cursor: pointer;
                font-size: 10px;

              }
            }
          }
        }
      } 
  }
}


.regfa {
  width: 100%;
  height: 50px;
  // background-color: red;
  display: flex;
  justify-content: space-between;
  line-height: 50px;
  display: none;
  .fa-left {
    margin-left: 15px;
  }
  .fa-right {
    margin-right: 15px;
  }
}
.regf {
  display: flex;
}
.allPlun {
  width: 100%;
  // min-height: 375px;
  // background-color: rgb(32, 92, 255);
  margin-top: 90px;
  .onePlun {
    width: 100%;
    min-height: 162px;
    border-bottom: 1px solid #ccc;
    // background-color: rgb(159, 240, 84);
    div {
      display: flex;
      // justify-content: space-around;
      img {
        width: 32px;
        height: 32px;
        border-radius: 100%;
        display: block;
        margin-top: 15px;
        margin-left: 16px;
      }
      .sp1 {
        display: block;
        width: 81px;
        height: 26px;
        line-height: 26px;
        // background-color: red;
        // margin-left: -72px;
        // margin-top: 20px;
        font-size: 15px;
        color: rgb(0, 0, 0);
        position: relative;
        right: 0px;
        top: 11px;
      }
      .sp2 {
        display: block;
        width: 212px;
        height: 26px;
        line-height: 26px;
        // background-color: red;
        position: relative;
        right: 81px;
        top: 31px;
        font-size: 10px;
        color: rgb(0, 0, 0);
      }
    }
    .cont {
      width: 100%;
      min-height: 33px;
      // background-color: red;
      position: relative;
      /* right: 203px; */
      top: 10px;
      .sp3 {
        line-height: 33px;
        padding-left: 64px;
        padding-right: 25px;
        margin-top: 10px;
        text-align: left;
      }
    }
    .f-con {
      width: 100%;
      height: 33px;
      // background-color: #fff;
      margin-top: 15px;
      span {
        line-height: 33px;
        display: block;
        margin-left: 45px;
        cursor: pointer;
      }
    }
  }
}
.rega {
  display: none;
}
.regb {
  display: flex;
}
.el-textarea__inner {
  width: 106%;
}
.el-input {
  resize: none;
}
.el-button {
  width: 100px;
}
//缩进的评论
// .onePlun1 {
//   width: 94%;
//   min-height: 118px;
//   border-bottom: 1px solid #ccc;
//   background-color: oldlace;
//   margin-left: 34px;
//   margin-top: 102px;
//   div {
//     display: flex;
//     // justify-content: space-around;
//     img {
//       width: 32px;
//       height: 32px;
//       border-radius: 100%;
//       display: block;
//       margin-top: 15px;
//       margin-left: 16px;
//     }
//     .sp1 {
//       display: block;
//       width: 81px;
//       height: 26px;
//       line-height: 26px;
//       // background-color: red;
//       // margin-left: -72px;
//       // margin-top: 20px;
//       font-size: 15px;
//       color: rgb(0, 0, 0);
//       position: relative;
//       right: 0px;
//       top: 11px;
//       font-size: 10px;
//     }
//     .sp2 {
//       display: block;
//       width: 212px;
//       height: 26px;
//       line-height: 26px;
//       // background-color: red;
//       position: relative;
//       right: 81px;
//       top: 31px;
//       font-size: 10px;
//       color: rgb(0, 0, 0);
//     }
//   }
//   .cont {
//     width: 100%;
//     min-height: 33px;
//     // background-color: red;
//     position: relative;
//     /* right: 203px; */
//     top: 10px;
//     .sp3 {
//       line-height: 33px;
//       padding-left: 43px;
//       padding-right: 25px;
//       text-align: left;
//       font-size: 13.5px;

//     }
//   }
//   .f-con {
//     width: 100%;
//     height: 33px;
//     // background-color: #fff;
//     margin-top: 15px;
//     font-size: 10px;
//     span {
//       line-height: 33px;
//       display: block;
//       margin-left: 45px;
//       cursor: pointer;
//       font-size: 10px;

//     }
//   }
// }

.pingl{
  margin-top: 50px;
  height: 122px;
}
</style>