<template>
  <div class="home">
    <HelloWorld msg="Welcome to Vue Starter with Scss and 7-1 architecture"/>
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

