<template>
  <div class="artice_detail">
    <h3>{{title}}</h3>
    <p>{{sideTitle}}</p>
    <span>{{datetime}}</span>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
  import { fetchArticleDetail } from "@/api/artice";
  export default{
    data(){
      return{
       id:this.$route.query.id,
       title:this.$route.query.title,
       sideTitle:this.$route.query.sideTitle,
       datetime:this.$route.query.datetime,
       content:''
      }
    },
    mounted(){
      this.getDetailData()
    },
    methods:{
      getDetailData(){
        fetchArticleDetail(this.id).then(res => {
          this.content = res.data
        });
      }
    }
  }
</script>

<style lang="less" scoped>
  .artice_detail{
    >h3{
      text-align: center;
      font-size: 20px;
      line-height: 2;
      color:#333;
      font-weight: normal;
    }
    >p{
      text-align: center;
      font-size: 14px;
      line-height: 1.5;
      color:#666;
    }
    >span{
      text-align: center;
      display: block;
      font-size: 12px;
      line-height: 1.5;
      color:#999;
    }
    .content{
      padding-top: 20px;
    }
  }
</style>