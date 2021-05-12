<template>

  <div class="list-box" ref="orll">
      
        
      <div>
        <div class="item" >
              <div class="item1">热门标签</div>
              <ul >
                  <li v-for="(iteem,index) in taglist" :key="index">
                    <div class="item"><el-link :underline="false" target="_blank">{{iteem.tag}}</el-link></div>
                </li>
              </ul>
        </div>
          <!-- <div class="item"><el-link  target="_blank">Python</el-link></div>
          <div class="item"><el-link  target="_blank">大前端</el-link></div>
          <div class="item"><el-link  target="_blank">Java</el-link></div>
          <div class="item"><el-link  target="_blank">人工智能</el-link></div>
          <div class="item"><el-link  target="_blank">Vue</el-link></div>
          <div class="item"><el-link  target="_blank">React</el-link></div>
          <div class="item"><el-link  target="_blank">HTML</el-link></div> -->
      </div>
      
  </div>

</template>

<script>
export default {
data() {
    return {
        taglist:[]
    }
},
methods: {
    orll(){
        
    },
    tagList(){
        const _this =this
        this.$axios.get('/tag/list').then(res=>{
        // console.log(res.data.data,'列表');
       
        _this.taglist=res.data.data
        })
    }
},
created() {
    this.tagList()
},
}
</script>

<style lang="less" scoped>
.page-component__scroll{
        /*必须撑满整个屏幕 */
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow-x: hidden;
    }
.list-box{
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
        top: 25%;
        
    .item{
        display: block;
        margin-bottom: 10px;
        text-align: center;
        font-size: 12px;
        line-height: 24px;
        font-weight: 400;
        color: #000;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        -webkit-transition: all .3s;
        transition: all .3s;
        -webkit-transition-duration: .3s;
        transition-duration: .3s;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        margin-top: 10px;
        border-bottom: 1px solid #ccc;
        .item1{
        border-bottom: 1px solid #ccc;

        }
        ul{
            li{
                .item{
                    &:hover{
                    background-color: #ccc;
                    }
                }
            }
        }
        
        
    
    }
    
}

</style>