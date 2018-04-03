<template>
  <el-tabs tab-position="right" style="height: 200px;">
    <el-tab-pane label="最新">
      <span slot="label">
        <i class="el-icon-loading tabicon"></i> 最新
      </span>
      最新内容
    </el-tab-pane>
    <el-tab-pane label="最热">
      <span slot="label">
        <i class="el-icon-star-on tabicon"></i> 最新
      </span>
      最热内容
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  name: "Home"
};
</script>
<style>
.tabicon{
  color: #e8ea78;
}
.is-active .tabicon{
  color: #409EFF;
}
</style>
