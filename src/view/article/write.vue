<template>
  <div class="components-container">
    <div class="editor-container">
      <markdown-editor id="contentEditor" ref="contentEditor" v-model="MarkdownText" height="auto" :zIndex="20"></markdown-editor>
    </div>
    <el-button @click="markdown2Html" style="margin-top:20px;" type="primary" icon="el-icon-view">预览</el-button>
    <el-button @click="publish" style="margin-top:20px;" type="primary" icon="el-icon-upload2">发布</el-button>
    <div v-html="html"></div>
  </div>
</template>

<script>
// import Tinymce from '@/components/Tinymce'
import MarkdownEditor from "@/components/MarkdownEditor";
import { createArticle } from "@/api/artice";
const txt = `
**this is test markdown**
* vue
* element
* webpack
## Simplemde
`;

export default {
  name: "markdown",
  components: { MarkdownEditor },
  data() {
    return {
      MarkdownText: txt,
      html: ""
    };
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
        createArticle(converter.makeHtml(this.MarkdownText)).then(response => {
          console.log(this);
        });
        this.$alert(converter.makeHtml(this.MarkdownText), "目前不支持发布~~", {
          confirmButtonText: "确定",
          dangerouslyUseHTMLString: true,
          callback: action => {
            // this.$message({
            //   type: 'info',
            //   message: `action: ${ action }`
            // });
          }
        });
      });
    }
  }
};
</script>

<style scoped></style>
