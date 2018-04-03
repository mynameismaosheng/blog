<template>
  <div class="static">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>来访统计</span>
        <el-button style="float: right; padding: 3px 0" type="text">重新获取</el-button>
      </div>
      <div class="item">
        <Bar height='100%' width='100%'></Bar>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>数据统计</span>
        <el-button style="float: right; padding: 3px 0" type="text">重新获取</el-button>
      </div>
      <div class="item">
        <Mix height='100%' width='100%'></Mix>
      </div>
    </el-card>
  </div>
</template>
<script>
import Bar from '@/components/Charts/Bar'
import Mix from '@/components/Charts/Mix'
import { debounce } from '@/utils'
export default {
  name: 'Home',
  components: { Mix, Bar }
}
</script>
<style>
.static .item{
  width: 100%;
  height: 36vh;
}
.el-card + .el-card{
  margin-top: 20px;
}
</style>
