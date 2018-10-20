<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo/Logo.svg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    item
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss" scoped>

</style>

