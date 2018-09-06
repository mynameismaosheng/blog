<template>
  <div class="writeList">
    <ul>
      <li v-for="(item,index) in lists" :key="index">
        <router-link :to="{path:'/Article/detail',query:{id:item.id,title:item.title,datetime:item.datetime,sideTitle:item.sideTitle}}">
          <div class="title">
            <h3>{{item.title}}<span>{{item.datetime}}</span></h3>
          </div>
          <div class="synopsis">
            <p>{{item.sideTitle}}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { fetchArticle } from "@/api/artice";
export default {
  data() {
    return {
      lists: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      fetchArticle().then(res => {
        this.lists = res.data.list
      })
    }
  }
};
</script>
<style scoped lang="less">
.writeList{
  li{
    border-top: 1px solid #e8e8e8;
    padding: 12px 0;
    &:first-child{
      border-top: 0;
    }
    .title{
      h3{
        font-size: 16px;
        color: #333;
        line-height: 1.5;
        font-weight: normal;
      }
      span{
        font-size: 12px;
        color: #999;
        line-height: 1.5;
        float: right;
      }
    }
    .synopsis{
      font-size: 14px;
      color: #666;
    }
    a{
      display: block;
    }
  }
}
</style>
