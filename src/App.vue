<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <img src="../public/img/icons/android-chrome-192x192.png" height="120px" alt="">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/assets/sass/main.scss';

#app {
  text-align: center;
  height: 100vh;
  width: 100%;
  @include flex(center, center, column)
}
</style>
