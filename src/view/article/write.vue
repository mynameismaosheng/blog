<template>
  <div class="components-container">
    <div class="editor-content" v-html="content"></div>
    <div>
      <Tinymce :height="300" v-model="content"></Tinymce>
    </div>
    <el-card class="box-card">
      <div class="text item">
        <span>富文本   <a target='_blank' class='link-type' href='https://www.tinymce.com/'>Tinymce</a></span>
      </div>
    </el-card>
    <div class="editor-container">
      <markdown-editor id="contentEditor" ref="contentEditor" v-model="content2" :height="300" :zIndex="20"></markdown-editor>
    </div>
    <el-button @click="markdown2Html" style="margin-top:80px;" type="primary" icon="el-icon-document">To HTML</el-button>
    <div v-html="html"></div>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import MarkdownEditor from '@/components/MarkdownEditor'

export default {
  components: { Tinymce, MarkdownEditor },
  data () {
    return {
      content: `<h1 style="text-align: center;">Hello, I Love You!</h1><p>where there is a wall, there is a way</p>`,
      content2: `
                **this is test**

                * vue
                * element
                * webpack

                ## Simplemde
                `,
      html: ''
    }
  },
  methods: {
    markdown2Html () {
      import('showdown').then(showdown => {
        const converter = new showdown.Converter()
        this.html = converter.makeHtml(this.content2)
      })
    }
  }
}
</script>

<style scoped>
.editor-content {
  margin-top: 20px;
}
iframe body{
  margin: 0;
}
</style>
