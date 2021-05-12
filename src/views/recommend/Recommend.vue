<template>
  <div class="recommend">
    <Header :class="navBarFixed == true ? 'navBarWrap' :''"></Header>
    <div class="swiper">
      <template>
        <el-carousel :interval="4000" type="card" height="200px" :loop="true">
          <el-carousel-item v-for="(item, index) in swiper" :key="index">
            <h3 class="medium"><img :src="item.image" /></h3>
          </el-carousel-item>
        </el-carousel>
      </template>

      <div class="reco">
        <!-- <div class="csdn">
          <span
            style="
              padding-left: 20px;
              display: block;
              width: 100%;
              font-size: 20px;
              text-align: left;
            "
            >CSDN精选</span
          >
          <el-row>
            <el-col :span="8" v-for="(item,index) in list" :key="index">
              <el-link :underline="false" href="">
                <div class="grid-content bg-purple1">
                  <div class="csdn-img"><img :src="item.imags" alt="" /></div>
                  <div class="csdn-title">
                    <p>啊实打实大师大</p>
                  </div>
                  <div class="csdn-logo">
                    <img :src="item.userimg" alt="" />
                    <p>asdasdasd </p>
                  </div>
                </div>
              </el-link>
            </el-col>

            <el-col :span="8">
              <div class="grid-content bg-purple-light">
                <ul>
                  <li>
                    <el-link :underline="false" href="">
                      <div class="csd-img">
                        <img src="@/assets/01.png" alt="" />
                        <p>啊实打实大</p>
                      </div>
                      <div class="csd-log">
                        <img src="@/assets/01.png" alt="" />
                        <p>sdfdsfsdf</p>
                      </div>
                    </el-link>
                  </li>
                  <li>
                    <el-link :underline="false" href="">
                      <div class="csd-img">
                        <img src="@/assets/01.png" alt="">
                        <p>为了写论文给Linux“脱毒”，Linux内核维护者封杀明尼苏达大学</p>
                      </div> 
                      <div class="csd-log">
                        <img src="@/assets/01.png" alt="">
                        <p>即可日报</p>
                      </div>
                    </el-link>
                  </li>
                  <li>
                    <el-link :underline="false" href="">
                      <div class="csd-img">
                        <img src="@/assets/01.png" alt="">
                        <p>为了写论文给Linux“脱毒”，Linux内核维护者封杀明尼苏达大学</p>
                      </div> 
                      <div class="csd-log">
                        <img src="@/assets/01.png" alt="">
                        <p>即可日报</p>
                      </div>
                    </el-link>
                  </li>
                </ul>
              </div>
            </el-col>

            <el-col :span="8">
              <div class="grid-content bg-purple2">
                <ul>
                  <li>
                    <el-link :underline="false" href="">
                      <div class="csd-img">
                        <img src="@/assets/01.png" alt="" />
                        <p>申达股份是的鬼地方个</p>
                      </div>
                      <div class="csd-log">
                        <img src="@/assets/01.png" alt="" />
                        <p>水电费打广告</p>
                      </div>
                    </el-link>
                  </li>
                  <li>
                    <el-link :underline="false" href="">
                      <div class="csd-img">
                        <img src="@/assets/01.png" alt="">
                        <p>为了写论文给Linux“脱毒”，Linux内核维护者封杀明尼苏达大学</p>
                      </div> 
                      <div class="csd-log">
                        <img src="@/assets/01.png" alt="">
                        <p>即可日报</p>
                      </div>
                    </el-link>
                  </li>
                  <li>
                    <el-link :underline="false" href="">
                      <div class="csd-img">
                        <img src="@/assets/01.png" alt="">
                        <p>为了写论文给Linux“脱毒”，Linux内核维护者封杀明尼苏达大学</p>
                      </div> 
                      <div class="csd-log">
                        <img src="@/assets/01.png" alt="">
                        <p>即可日报</p>
                      </div>
                    </el-link>
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>
          
        </div> -->
        <div><span
            style="
              padding-left: 20px;
              display: block;
              width: 100%;
              font-size: 25px;
              text-align: left;
            "
            >CSDN精选</span
          ></div><hr>
        <div class="csdn">
          <ul  >
            <!-- <li >
              <el-link :underline="false" href="">
                <div class="grid-content bg-purple1">
                  <div class="csdn-img"><img :src="item.imags" alt="" /></div>
                  <div class="csdn-title">
                    <p>{{item.title}}</p>
                  </div>
                  <div class="csdn-logo">
                    <img :src="item.userimg" alt="" />
                    <p>{{item.user}} </p>
                  </div>
                </div>
              </el-link>
            </li> -->
            <li v-for="(item,index) in list" :key="index">
                <!-- <p>{{item.type}}</p> -->
                    <el-link :underline="false" :href="item.path" target="_blank">
                      <div class="csd-img">
                        <img :src="item.imags" alt="" />
                        <p>{{item.title}}</p>
                      </div>
                      <div class="csd-log">
                        <img :src="item.userimg" alt="" />
                        <p>{{item.user}}</p>
                      </div>
                    </el-link>
<!--                   
                    <el-link :underline="false" href="">
                      <div class="csd-img">
                        <img src="@/assets/01.png" alt="">
                        <p>为了写论文给Linux“脱毒”，Linux内核维护者封杀明尼苏达大学</p>
                      </div> 
                      <div class="csd-log">
                        <img src="@/assets/01.png" alt="">
                        <p>即可日报</p>
                      </div>
                    </el-link>
                  
                    <el-link :underline="false" href="">
                      <div class="csd-img">
                        <img src="@/assets/01.png" alt="">
                        <p>为了写论文给Linux“脱毒”，Linux内核维护者封杀明尼苏达大学</p>
                      </div> 
                      <div class="csd-log">
                        <img src="@/assets/01.png" alt="">
                        <p>即可日报</p>
                      </div>
                    </el-link>
                   -->
            </li>
          </ul>
         
          <div ><span
            style="
              padding-left: 20px;
              display: block;
              width: 100%;
              font-size: 25px;
              text-align: left;
            "
            >简书精选</span
          ></div> <hr>
          <ul>
            <li v-for="(item,index) in list" :key="index">
                <!-- <p>{{item.type}}</p> -->
                    <el-link :underline="false" :href="item.path" target="_blank">
                      <div class="csd-img">
                        <img :src="item.imags" alt="" />
                        <p>{{item.title}}</p>
                      </div>
                      <div class="csd-log">
                        <img :src="item.userimg" alt="" />
                        <p>{{item.user}}</p>
                      </div>
                    </el-link>
            </li>
          </ul>
         
          <div class="footer">
          <div>&copy;版权所有：<a href="/blogs" target="_blank">SSY VYPS VYPS </a></div>
        </div>
        </div>

       
      </div>
      
    </div>
    
  </div>
</template>

<script>
import Header from "../../components/Header";
export default {
  data() {
    return {
      swiper: [
        { image: require("@/assets/01.jpg") },
        { image: require("@/assets/02.jpg") },
        { image: require("@/assets/03.jpg") },
        { image: require("@/assets/04.jpg") },
        { image: require("@/assets/05.jpg") },
      ],
      list:[],
      navBarFixed:false
    };
  },
  components: { Header },
  mounted () {
      // 事件监听滚动条
      window.addEventListener('scroll', this.watchScroll)
    },
  methods: {
     watchScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //  当滚动超过 50 时，实现吸顶效果
        if (scrollTop > 49) {
          this.navBarFixed = true
        } else {
          this.navBarFixed = false
        }
        },
    reco() {
      const _this = this
      // console.log(_this);
      this.$axios.get("/system/jing").then((res) => {
        console.log(res);
        console.log(res.data.data);
       _this.list=res.data.data
      //  for(var i=0;i<3;i++){
      //     _this.list1 = res.data.data[i]
      //     console.log(_this.list1);
      //  }
      //  var a = _this.list1
      //  console.log(a);
      });
    },
  },
  created() {
    this.reco();
  },
};
</script>

<style lang="less" scope>
//设置导航栏
.navBarWrap {
    position:fixed;
    top:0;
    z-index:999;
}


.recommend{
  min-height: 1000px;
}
.swiper {
  width: 1020px;
  height: 960px;
  background-color: #fff;
  margin: 20px auto;
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel {
    img {
      width: 100%;
      box-sizing: border-box;
    }
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}

.reco {
  width: 1020px;
  height: 900px;
  // background-color: red;
  margin-top: 50px;
  position: absolute;
  .csdn{
    width: 1020px;
    height: 500px;
    // background-color: yellow;
    // margin: 10px auto;
  position: absolute;

    ul{
      display: flex;
      display: -webkit-flex;
      width: 1020px;
      // height: 450px;
      background-color: #fff;
      margin: 20px auto;
      flex-direction:  row ;
      flex-wrap: wrap;
      justify-content: flex-start;
      li{
        display: flex;
        width: calc(1020px / 3);
        // height: 400px;
        // background-color: #fff;
        &:nth-child(1){
          // background-color: red;
          flex-basis:1020px;
          .csd-img {
          position: relative;
          width: 1020px;
          // min-width: 376px;
          height: 195px;
          margin: 20px auto;
          img {
            width: 808px;
            min-height: 180px;
            border-radius: 4px;
          }
          p{
            display: block;
            font-size: 30px;
          }
        }
        .csd-log {
            position: relative;
            bottom: 50px;
            left: 520px;
            margin-top: 8px;
            font-size: 16px;
            font-weight: 400;
            color: #878787;
            display: flex;
            img {
              width: 24px;
              height: 24px;
              border-radius: 50%;
              margin-right: 8px;
              border: 1px solid #f2f2f2;
            }
            p {
              display: block;
            }
          }
      }

      .bg-purple1 {
      background: #fff;
      // margin-top: 10px;
      .csdn-img {
        position: relative;
        width: 376px;
        min-width: 376px;
        height: 195px;
        margin: 20px auto;
        img {
          width: 376px;
          max-height: 180px;
          border-radius: 4px;
          // margin-left: 20px;
        }
      }
      .csdn-title {
        position: relative;
        left: 0;
        bottom: 20px;
        p {
          display: block;
          text-align: left;
          font-weight: 600;
          padding-left: 10px;
        }
      }
      .csdn-logo {
        position: relative;
        bottom: 17px;
        left: 10px;
        margin-top: 8px;
        font-size: 16px;
        font-weight: 400;
        color: #878787;
        display: flex;
        img {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          margin-right: 8px;
          border: 1px solid #f2f2f2;
        }
        p {
          display: block;
        }
      }
      }
      .csd-img {
            position: relative;
            top: 15px;
            margin-top: 8px;
            font-size: 16px;
            font-weight: 400;
            color: #878787;
            display: flex;
            margin: 10px auto;
            &:hover{
                box-shadow: 1px 2px 1px #ccc ;
              }
            img {
              width: 78px;
              height: 78px;
              border-radius: 10px;
              margin-right: 8px;
              border: 1px solid #f2f2f2;
              margin-left: 10px;
              
            }
            p {
              display: block;
              text-align: left;
              font-weight: 600;
              &:hover {
                color: rgb(70, 172, 255);
              }
            }
          }
          .csd-log {
            position: relative;
            bottom: 20px;
            left: 100px;
            margin-top: 8px;
            font-size: 16px;
            font-weight: 400;
            color: #878787;
            display: flex;
            img {
              width: 24px;
              height: 24px;
              border-radius: 50%;
              margin-right: 8px;
              border: 1px solid #f2f2f2;
            }
            p {
              display: block;
            }
          }
      }
    }
  }
 }
.footer{
        height: 70px;
        background: #ccc;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;

        div{
          opacity: 0.7;
           a{
            color: #fff;
            &:hover{
              text-decoration: underline;
            }
           }
        }

    }
// .reco {
//   width: 1140px;
//   height: 900px;
//   background-color: #fff;
//   margin-top: 10px;
//   .csdn {
//     width: 1140px;
//     max-height: 500px;

//     // background-color: yellow;
//     margin-top: 20px;
//     .el-row {
//       margin-bottom: 20px;
//       margin: 0 auto;
//       &:last-child {
//         margin-bottom: 0;
//       }
//     }
//     .el-col {
//       border-radius: 4px;
//     }
//     //左边的额
//     .bg-purple1 {
//       background: #fff;
//       // margin-top: 10px;
//       .csdn-img {
//         position: relative;
//         width: 376px;
//         min-width: 376px;
//         height: 195px;
//         margin: 20px auto;
//         img {
//           width: 100%;
//           max-height: 180px;
//           border-radius: 4px;
//         }
//       }
//       .csdn-title {
//         position: relative;
//         left: 0;
//         bottom: 20px;
//         p {
//           display: block;
//           text-align: left;
//           font-weight: 600;
//           padding-left: 10px;
//         }
//       }
//       .csdn-logo {
//         position: relative;
//         bottom: 17px;
//         left: 10px;
//         margin-top: 8px;
//         font-size: 16px;
//         font-weight: 400;
//         color: #878787;
//         display: flex;
//         img {
//           width: 24px;
//           height: 24px;
//           border-radius: 50%;
//           margin-right: 8px;
//           border: 1px solid #f2f2f2;
//         }
//         p {
//           display: block;
//         }
//       }
//     }
//     //右边的额
//     .bg-purple2 {
//       background: #fff;
//       margin: 10px 10px;
//       ul {
//         display: block;
//         width: 376px;
//         min-width: 376px;
//         height: 275px;
//         li {
//           display: block;
//           width: 350px;
//           height: 90px;
//           display: flex;
//           .csd-img {
//             position: relative;
//             top: 15px;
//             margin-top: 8px;
//             font-size: 16px;
//             font-weight: 400;
//             color: #878787;
//             display: flex;
//             margin: 10px auto;
//             img {
//               width: 78px;
//               height: 78px;
//               border-radius: 10px;
//               margin-right: 8px;
//               border: 1px solid #f2f2f2;
//             }
//             p {
//               display: block;
//               text-align: left;
//               font-weight: 600;
//               &:hover {
//                 color: rgb(70, 172, 255);
//               }
//             }
//           }
//           .csd-log {
//             position: relative;
//             bottom: 20px;
//             left: 100px;
//             margin-top: 8px;
//             font-size: 16px;
//             font-weight: 400;
//             color: #878787;
//             display: flex;
//             img {
//               width: 24px;
//               height: 24px;
//               border-radius: 50%;
//               margin-right: 8px;
//               border: 1px solid #f2f2f2;
//             }
//             p {
//               display: block;
//             }
//           }
//         }
//       }
//     }
//     //中间的额
//     .bg-purple-light {
//       background: #fff;
//       margin: 10px 10px;
//       ul {
//         display: block;
//         width: 376px;
//         min-width: 376px;
//         height: 275px;
//         li {
//           display: block;
//           width: 350px;
//           height: 90px;
//           display: flex;
//           .csd-img {
//             position: relative;
//             top: 15px;
//             margin-top: 8px;
//             font-size: 16px;
//             font-weight: 400;
//             color: #878787;
//             display: flex;
//             margin: 10px auto;
//             img {
//               width: 78px;
//               height: 78px;
//               border-radius: 10px;
//               margin-right: 8px;
//               border: 1px solid #f2f2f2;
//             }
//             p {
//               display: block;
//               text-align: left;
//               font-weight: 600;
//               &:hover {
//                 color: rgb(70, 172, 255);
//               }
//             }
//           }
//           .csd-log {
//             position: relative;
//             bottom: 20px;
//             left: 100px;
//             margin-top: 8px;
//             font-size: 16px;
//             font-weight: 400;
//             color: #878787;
//             display: flex;
//             img {
//               width: 24px;
//               height: 24px;
//               border-radius: 50%;
//               margin-right: 8px;
//               border: 1px solid #f2f2f2;
//             }
//             p {
//               display: block;
//             }
//           }
//         }
//       }
//     }
//     .grid-content {
//       border-radius: 4px;
//       min-height: 36px;
//     }
//     .row-bg {
//       padding: 10px 0;
//       background-color: #f9fafc;
//     }
//   }
// }
</style>