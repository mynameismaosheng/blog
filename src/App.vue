<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'APP'
}

</script>
<style>
* {
  padding: 0;
  margin: 0;
}

html,
body {
  height: 100%;
}

#app {
  height: 100%;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
