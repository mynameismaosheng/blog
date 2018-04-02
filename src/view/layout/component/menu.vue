<template>
    <el-aside width="auto">
      <router-link to="/user">
        <img class="user-face" :class="[isCollapse ? 'close' : '']" src="@/assets/face.jpg" />
      </router-link>
      <el-button class="zoom" :class="[isCollapse ? 'close' : '']" type="info" icon="el-icon-back" @click="menusStatus"></el-button>
      <el-button id="signout" @click="signout" :class="[isCollapse ? 'close' : '']" type="info" ><i class="el-icon-caret-left"></i>退出</el-button>
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :default-active="$route.path"
        :collapse="isCollapse"
        :router="true">
        <el-menu-item index="/home">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article/write">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">文章</span>
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
    },
    signout () {
      this.$message('您点击了退出')
    }
  }
}
</script>

<style>
.el-aside {
  position: relative;
  background-color: #545c64;
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
  padding: 10px 0;
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
