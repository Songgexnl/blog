<template>
  <div>
    <Header></Header>
    <div class="edit">
      <br>
    <el-container>
      <el-aside width="100px">
        <el-row class="tac">
        <el-col :span="3">
            <br>
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <el-menu-item index="1">
                <!-- <span slot="title">个人资料</span> -->
                <el-link href="/persondit/personz" :underline="false">个人资料</el-link>
              </el-menu-item>
              <el-menu-item index="2">
                <!-- <span slot="title">账号管理</span> -->
                <el-link href="/persondit/nummanage" :underline="false">账号管理</el-link>
              </el-menu-item>
              <el-menu-item index="3">
                <!-- <span slot="title">我的收藏</span> -->
                <el-link href="/persondit/save" :underline="false">我的收藏</el-link>
              </el-menu-item>
              <el-menu-item index="4">
                <!-- <span slot="title">博客管理</span> -->
                <el-link href="/persondit/blogmag" :underline="false">博客管理</el-link>
              </el-menu-item>
            </el-menu>
          </el-col>
      </el-row>  
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
components:{Header},
}
</script>

<style lang="less" scoped>
.edit{
  // margin-top: 60px;
}


.el-menu{
    position: relative;
    left: 0px;
    top: -200px;
    width: 100px;
}
.el-menu-item{
  margin-top: 5px;
}
.el-aside {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 200px;
    margin-left: 200px;
  }
  
  .el-main {
    // background-color: rgb(67, 171, 255);
    color: #333;
    // text-align: center;
    // line-height: 160px;
     margin-right: 200px;
     overflow: hidden;
     margin-top: -18px;
  }

</style>