<template>
  <div class="components-container">
    <el-card class="box-card">
      <div class="text item">
        <span>富文本   <a target='_blank' class='link-type' href='https://www.tinymce.com/'>Tinymce</a></span>
      </div>
    </el-card>
    <div>
      <Tinymce :height="300" v-model="content"></Tinymce>
    </div>
    <div class="editor-content" v-html="content"></div>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'

export default {
  components: { Tinymce },
  data () {
    return {
      content: `<h1 style="text-align: center;">Hello, I Love You!</h1>`
    }
  }
}
</script>

<style scoped>
.editor-content {
  margin-top: 20px;
}
</style>
