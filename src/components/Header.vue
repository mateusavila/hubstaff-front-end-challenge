<script setup lang="ts">
// import { ref } from 'vue'
import Logo from './Logo.vue'
</script>

<template>
  <header>
    <div class="container">
      <Logo />
    </div>
  </header>
</template>

<style scoped lang="sass">
  header
    display: flex
    position: fixed
    width: 100%
    top: 0
    left: 0
    height: 80px
    background: #fff
    z-index: 100
    border-bottom: 1px solid #e9e9e9
    .container
      width: min(calc(100% - 80px), 1480px)
      margin: 0 auto
      height: 100%
      display: flex
      align-items: center
  @media all and (max-width: 600px)
    header
      height: 60px
      .container
        width: calc(100% - 30px)
</style>
