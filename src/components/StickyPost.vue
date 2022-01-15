<script setup lang="ts">
  import { WPPost } from '../types/types';
  const props = defineProps<{
    post: WPPost
  }>()
</script>

<template>
  <section class="sticky-post">
    <div class="container">
      <a href="https://blog.hubstaff.com/" rel="noopener noreferrer" target="_blank">
        <div class="sticky-post-image">
          <img 
            :src="post.thumbnail" 
            :alt="post.title"
            :width="post.width"
            :height="post.height"
            loading="lazy"
          />
        </div>
        <div class="sticky-post-info">
          <h2>{{post.title}}</h2>
          <div class="sticky-post-info-content" v-html="post.excerpt"></div>
          <div class="sticky-post-info-author">
            <p><strong>by {{post.author.name}}</strong></p>
            <p>{{post.date}}</p>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped lang="sass">
  @import "../assets/css/global.sass"
  .sticky-post
    margin: 100px 0 50px
    .container
      width: min(calc(100% - 80px), 1480px)
      margin: 0 auto
      padding-bottom: 20px
      border-bottom: 1px solid #d5d5d6
    a
      display: flex
      text-decoration: none
      align-items: stretch
      align-content: center
      justify-content: space-between
      color: var(--black)
      flex-wrap: wrap
      &:hover
        .sticky-post-image img
          @include transitions(.2s, all, cubic-bezier(.13,.16,.13,.89))
          transform: scale(1.05)
        .sticky-post-info h2
          @include transitions(.2s, all, cubic-bezier(.13,.16,.13,.89))
          background-size: 100% 3px
  .sticky-post-info
    width: 500px
    display: flex
    align-items: center
    flex-wrap: wrap
    align-content: center 
    position: relative
    &:after
      content: ''
      height: 3px
      width: 100%
      left: 0
      bottom: -20px
      position: absolute
      border-bottom: 3px solid var(--black)
    h2
      margin: 0 0 20px
      color: var(--black)
      font-size: clamp(20px, calc(1.25rem + ((1vw - 3.4px) * 1.3953)), 32px)
      background-image: linear-gradient(currentColor, currentColor)
      background-repeat: no-repeat
      background-size: 0% 3px
      background-position: left bottom
      display: inline
      will-change: background-size
      line-height: 150%
      @include transitions(.2s, all, cubic-bezier(.13,.16,.13,.89))
  .sticky-post-info-content
    color: var(--black)
    margin: 0
    & :deep(p)
      margin: 0
      line-height: 150%
      font-size: clamp(14px, calc(0.875rem + ((1vw - 3.4px) * 0.7692)), 16px)
  .sticky-post-image
    width: 100%
    overflow: hidden
    max-width: calc(100% - 580px)
    img
      display: block
      object-fit: cover
      will-change: transform
      height: auto
      width: 100%
      @include transitions(.2s, all, cubic-bezier(.13,.16,.13,.89))
  .sticky-post-info-author
    display: flex
    width: 100%
    margin-top: 40px
    justify-content: space-between
    p
      margin: 0
      font-size: 14px
  @media all and (max-width: 1400px)
    .sticky-post-info
      width: 340px
    .sticky-post-image
      max-width: calc(100% - 400px)
  @media all and (max-width: 1200px)
    .sticky-post-info
      width: 300px
    .sticky-post-image
      max-width: calc(100% - 350px)
  @media all and (max-width: 1100px)
    .sticky-post
      margin: 80px 0 50px
      .container
        width: 100%
    .sticky-post-info
      width: 100%
      padding: 0 30px
      margin-top: 30px
    .sticky-post-image
      max-width: 100%
  @media all and (max-width: 600px)
    .sticky-post
      margin: 60px 0 0
      a:hover
        .sticky-post-image img
          transform: none
        .sticky-post-info h2
          background-size: 100% 1px
    .sticky-post-info
      padding: 0 20px
      h2
          background-size: 0 1px
</style>
