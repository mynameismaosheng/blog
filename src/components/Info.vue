<template>
  <div>
    <h1>{{info}}</h1>
    <p>this is {{info}} html</p>
    <p v-once>no:{{num}}</p>
    <input v-model="num">
    <button @click="num+=1">add</button>
    <router-link to="/">return</router-link>
  </div>
</template>
<script>
export default {
  name: 'Info',
  data () {
    return {
      info: 'infos',
      num: 0
    }
  }
}

</script>
