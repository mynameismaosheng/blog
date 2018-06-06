<template>
  <div>
    <el-button class="allStop" :class="none" type="primary" size="mini" @click="changCollapse">全部收起</el-button>
    <el-tabs tab-position="right" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="最新" name="bestNew">
        <span slot="label">
          <i class="el-icon-loading tabicon"></i> 最新
        </span>
        <el-collapse v-model="bestNew" @change="handleChange">
          <el-collapse-item v-for="item in lists" :key="item.id" :title="item.title" :name="item.id">
            <div v-html="item.content"></div>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane label="最热" name="bestHot">
        <span slot="label">
          <i class="el-icon-star-on tabicon"></i> 最新
        </span>
        <el-collapse v-model="bestHot" @change="handleChange">
          <el-collapse-item v-for="item in lists" :key="item.id" :title="item.title" :name="item.id">
            <div v-html="item.content"></div>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    name: "Home",
    data() {
      return {
        lists: [{
            title: "一致性1",
            id: 1,
            content: `
          <p>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p>
          <strong>加粗字体</strong>
          <p>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>`
          },
          {
            title: "一致性2",
            id: 2,
            content: `
          <p>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p>
          <strong>加粗字体</strong>
          <p>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>`
          }
        ],
        activeName: "bestNew",
        bestNew: ["1"],
        bestHot: ["6"],
        none: ""
      };
    },
    methods: {
      handleClick(tab, event) {
        this.none = this[tab.name].length ? "" : "none";
      },
      handleChange(val) {
        this.none = val.length ? "" : "none";
      },
      changCollapse() {
        this[this.activeName] = [];
        this.none = "none";
      }
    }
  };

</script>
<style>
  .tabicon {
    color: #e8ea78;
  }

  .is-active .tabicon {
    color: #409eff;
  }

  .allStop {
    position: fixed;
    right: 25px;
    bottom: 20px;
  }

  .none {
    display: none;
  }

</style>
