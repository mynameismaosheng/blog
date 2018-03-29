<template>
    <el-aside width="auto">
      <img class="user-face" :class="[isCollapse ? 'close' : '']" src="@/assets/face.jpg" />
      <el-button class="zoom" :class="[isCollapse ? 'close' : '']" type="primary" plain icon="el-icon-back" @click="menusStatus"></el-button>
      <el-button id="signout" :class="[isCollapse ? 'close' : '']" >退出</el-button>
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :default-active="$route.path"
        :collapse="isCollapse"
        :router=true>
        <el-menu-item index="/home">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/info">
          <i class="el-icon-menu"></i>
          <span slot="title">信息</span>
        </el-menu-item>
        <el-menu-item index="/infos">
          <i class="el-icon-menu"></i>
          <span slot="title">infos</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
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

<style>
.el-aside {
  position: relative;
  background-color: #fff;
  border-right: 1px solid #e6e6e6;
  padding: 0 5px;
}
.el-menu {
  border: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 190px;
  min-height: 400px;
}
.user-face {
  display: block;
  border-radius: 25%;
  width: 100px;
  height: 100px;
  margin: 20px auto;
  transition: width 0.6s;
  -moz-transition: width 0.6s;
  -webkit-transition: width 0.6s;
  -o-transition: width 0.6s;
}
.user-face.close {
  width: 65px;
  height: 65px;
}
#signout {
  position: absolute;
  bottom: 4px;
  width: 190px;
  margin: 0;
}
.close#signout {
  width: 66px;
}
.zoom {
  width: 100%;
  display: block;
}
.zoom.close {
  transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -o-transform: rotate(180deg);
}
</style>
