<template>
    <el-aside width="auto">
      <router-link to="/user">
        <img class="user-face" :class="[isCollapse ? 'close' : '']" src="@/assets/face.jpg" />
      </router-link>
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
          <span slot="title">文章列表</span>
        </el-menu-item>
        <el-menu-item index="/article/write">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">写文章</span>
        </el-menu-item>
        <!-- <el-menu-item index="/static">
          <i class="el-icon-menu"></i>
          <span slot="title">统计</span>
        </el-menu-item> -->
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
  }
}
</script>

<style>
.el-aside {
  position: relative;
  background-color: #545c64;
  padding: 0;
  box-shadow: 1px 0px 10px #948787;
}
.el-menu {
  border: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 130px;
}
.user-face {
  display: block;
  border-radius: 10px;
  width: 100px;
  margin: 20px auto;
  transition: width 0.6s;
  -moz-transition: width 0.6s;
  -webkit-transition: width 0.6s;
  -o-transition: width 0.6s;
  box-shadow: 0 0 10px 2px #312020;
}
.user-face.close {
  width: 65px;
  height: 65px;
}
</style>
