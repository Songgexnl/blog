<template>
  <div>
      <div class="huifu" v-if="reg">
            <el-input 
                type="text"
                :autosize="{ minRows: 5, maxRows: 4}"
                placeholder="写下你的评论..."
                resize='none'
                v-model="texta">
            </el-input>
        <!-- <div :class="['regfa',regfa==true?'regf':'regfa']"> -->
        
        <div class="regfa" >
            <div class="fa-left">
                 <!-- 表情 -->
          <emoji-icon @select="selectIcon" :iconConfig="iconConfig"></emoji-icon>
            </div>
            <div class="fa-right">
                <el-button type="primary" plain @click="huifu">发布</el-button>
                <el-button plain @click="quxiao">取消</el-button>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
data() {
    return {
        texta:'',
        reg:true,
      };
},
methods: {
    quxiao(){
        const _this=this
        // alert('你好')
        _this.reg=false
        // console.log(this.$parent.reg);
        this.$parent.reg=false
    },
    huifu(){
        const token = window.localStorage.getItem("token")
        const _this = this
        if(!token){
            this.$router.push('/login')
        }
    },
    handleNodeClick(data) {
        console.log(data);
    }
},
created() {
},
}
</script>

<style lang="less" scoped>
.huifu{
.regfa{
    width: 100%;
    height: 50px;
    // background-color: red;
    display: flex;
    justify-content: space-between;
    line-height: 50px;
    margin-top: -26px;
    // display: none;
    .fa-left{
        margin-left: 15px;
    }
    .fa-right{
        margin-right: 15px;
    }
}
}
.rega{
    display: none;
}
.regb{
    display: flex;
}
.huifu{
    width: 100%;
    height: 200px;
    // background-color: #fff;
    margin-left: 7px;
    margin-top: 49px;
}
</style>