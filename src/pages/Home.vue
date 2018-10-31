<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo/Logo.svg" height="40px">
    <HelloWorld msg="Welcome to Vue Starter with all styles and responsivness"/>
    
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

