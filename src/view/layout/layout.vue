<template>
  <el-container>
    <Menu></Menu>
    <appMain></appMain>
  </el-container>
</template>

<script>
import { Menu, appMain } from './component'

export default {
  name: 'layout',
  components: {
    Menu,
    appMain
  }
}
</script>

<style>
    #app > .el-container {
        margin-bottom: 0;
        height: 100%;
    }
</style>