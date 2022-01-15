<script setup lang="ts">
defineProps<{ loaded: boolean }>()
</script>
<template>
  <div class="loading" :class="{active: loaded}">
    <div class="container">
      <img 
        src="/loading.svg" 
        alt="Hubstaff Blog" 
        width="48" 
        height="48" 
        loading="lazy"
        class="loading-image">
      <p>loading...</p>
    </div>
  </div>
</template>

<style scoped lang="sass">
  @import "../assets/css/global.sass"
  .loading
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: #fafafa
    z-index: 10000
    display: flex
    justify-content: center
    align-items: center
    flex-wrap: wrap
    align-content: center
    opacity: 1
    visibility: visible
    will-change: visibility, opacity
    @include transitions
    &.active
      @include transitions
      visibility: hidden
      opacity: 0
    .container
      text-align: center
    p
      width: 100%
      text-align: center
      font-size: 14px
      font-weight: bold
      color: var(--blue)
      
</style>
