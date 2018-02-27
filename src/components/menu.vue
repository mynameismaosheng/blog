<template>
  <el-container>
    <el-aside width="auto">
      <img class="user-face"  :class="[isCollapse ? 'close' : '']" src="../assets/face.jpg" />
      <el-button class="zoom" :class="[isCollapse ? 'close' : '']" type="primary" plain icon="el-icon-back" @click="menusStatus"></el-button>
      <el-menu default-active="home" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :router=true>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home">默认页</el-menu-item>
            <el-menu-item index="/info">信息</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/infos">
          <i class="el-icon-menu"></i>
          <span slot="title">infos</span>
        </el-menu-item>
        <el-menu-item index="/" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="/" disabled>
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<style>
  body > .el-container{
    margin-bottom: 0;
    height: 100%;
  }
  .el-aside{
    background-color: #fff;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .user-face{
    display: block;
    border-radius: 25%;
    width: 180px;
    margin: 0 auto;
    transition: width 0.6s;
    -moz-transition: width 0.6s;
    -webkit-transition: width 0.6s;
    -o-transition: width 0.6s;
  }
  .user-face.close{
    width: 65px;
  }
  .zoom{
    width: 100%;
    display: block;
  }
  .zoom.close{
    transform:rotate(180deg);
    -ms-transform:rotate(180deg);
    -moz-transform:rotate(180deg);
    -webkit-transform:rotate(180deg);
    -o-transform:rotate(180deg);
  }
</style>

<script>
export default {
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    menusStatus (event) {
      if (this.isCollapse) {
        this.isCollapse = false
      } else {
        this.isCollapse = true
      }
    }
  }
}
</script>
