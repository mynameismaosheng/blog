<template>
  <div class="components-container">
    <div class="coninlineBlock">
      <div class="item">
        <el-input v-model="title" placeholder="请输入标题"></el-input>
      </div>
      <div class="item">
        <el-input v-model="sideTitle" type="textarea" :rows="2" placeholder="请输入描述"></el-input>
      </div>
      <div class="editor-container">
        <markdown-editor id="contentEditor" ref="contentEditor" v-model="MarkdownText" height="500" :zIndex="20"></markdown-editor>
      </div>
      <!-- <el-button @click="markdown2Html" style="margin-top:20px;" type="primary" icon="el-icon-view">预览</el-button> -->
      <el-button @click="publish" style="margin-top:20px;" type="primary" icon="el-icon-upload2">发布</el-button>
    </div>
    <div class="coninlineBlock preview">
      <div v-html="html"></div>
    </div>
  </div>
</template>

<script>
// import Tinymce from '@/components/Tinymce'
import MarkdownEditor from "@/components/MarkdownEditor";
import { createArticle } from "@/api/artice";

export default {
  name: "markdown",
  components: { MarkdownEditor },
  data() {
    return {
      title:'',
      sideTitle:'',
      MarkdownText:`## Hello World!`,
      html: ""
    };
  },
  mounted(){
    this.markdown2Html()
  },
  methods: {
    markdown2Html() {
      import("showdown").then(showdown => {
        const converter = new showdown.Converter();
        this.html = converter.makeHtml(this.MarkdownText);
      });
    },
    publish() {
      import("showdown").then(showdown => {
        const converter = new showdown.Converter();
        let params = {
          title:this.title,
          sideTitle:this.sideTitle,
          content:converter.makeHtml(this.MarkdownText),
        }
        if(!params.title || !params.sideTitle || !params.content){
          this.$message({
            message: '发布信息不能为空哦~',
            type: 'warning'
          });
          return
        }
        createArticle(params).then(res => {
          if(res.data.data){
            this.$alert('发布成功', '提示', {
              confirmButtonText: '确定',
              callback: action => {
                this.$router.replace('/home')
              }
            });
          }
        });
      });
    }
  },
  watch:{
    MarkdownText(val){
      this.markdown2Html()
    }
  }
};
</script>

<style scoped>
  .item{
    margin-bottom: 10px;
  }
  .coninlineBlock{
    width: 50%;
    float: left;
  }
  .preview{
    padding: 0 20px;
    box-sizing: border-box;
    height: 600px;
    overflow-y: auto; 
  }
</style>
