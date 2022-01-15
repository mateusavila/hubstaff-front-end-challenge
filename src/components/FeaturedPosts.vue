<script setup lang="ts">
  import { WPPost } from '../types/types';
  const props = defineProps<{
    posts: WPPost[] | undefined
  }>()
</script>

<template>
  <section class="featured-posts">
    <div class="container">
      <h2>Featured Posts</h2>
      <div class="featured-post-list">
        <a
          v-for="(post, index) in posts"
          :key="index" 
          href="https://blog.hubstaff.com/" 
          rel="noopener noreferrer" 
          target="_blank"
          >
          <div class="featured-post-image">
            <figure>
              <img 
              :src="post.thumbnail" 
              :alt="post.title"
              :width="post.width"
              :height="post.height"
              loading="lazy"
            />
            </figure>
          </div>
          <div class="featured-post-info">
            <p class="featured-post-category">{{post.category ? post.category[0].category_nicename : ''}}</p>
            <h3 v-html="post.title"></h3>
            <div class="featured-post-info-author">
              <p><strong>by {{post.author.name}}</strong></p>
              <p>{{post.date}}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
  @import "../assets/css/global.sass"
  .featured-posts
    margin: 50px 0
    padding: 50px 0
    background: #fafafa
    .container
      width: min(calc(100% - 80px), 1480px)
      margin: 0 auto
    h2
      text-transform: uppercase
      font-size: clamp(18px, calc(1.125rem + ((1vw - 3.4px) * 0.6977)), 24px)
      margin: 0 0 40px
  .featured-post-image
    width: 100%
    overflow: hidden
    max-height: 145px
    margin-bottom: 10px
    figure
      width: 100%
      margin: 0
      padding: 0
    img
      width: 100%
      height: auto
      object-fit: cover
      will-change: transform
      @include transitions(.2s, all, cubic-bezier(.13,.16,.13,.89))
  .featured-post-list
    display: grid
    grid-template-columns: repeat(4, 1fr)
    grid-gap: 40px
    a
      text-decoration: none
      color: var(--black)
      &:hover
        .featured-post-image img
          @include transitions(.2s, all, cubic-bezier(.13,.16,.13,.89))
          transform: scale(1.05)
        .featured-post-info h3
          @include transitions(.2s, all, cubic-bezier(.13,.16,.13,.89))
          background-size: 100% 3px
  .featured-post-info
    h3
      line-height: 150%
      font-size: clamp(18px, calc(1.125rem + ((1vw - 3.4px) * 0.6977)), 24px)
      background-image: linear-gradient(currentColor, currentColor)
      background-repeat: no-repeat
      background-size: 0% 3px
      background-position: left bottom
      display: inline
      @include transitions(.2s, all, cubic-bezier(.13,.16,.13,.89))
      will-change: background-size
  .featured-post-category
    text-transform: uppercase
    font-size: 12px
  .featured-post-info-author
    display: flex
    margin-top: 20px
    width: 100%
    justify-content: space-between
    p
      font-size: 12px
  @media all and (max-width: 1200px)
    .featured-post-list
      grid-gap: 25px
      grid-template-columns: repeat(3, 1fr)
  @media all and (max-width: 900px)
    .featured-post-list
      grid-template-columns: repeat(2, 1fr)
  @media all and (max-width: 600px)
    .featured-post-list
      grid-template-columns: 1fr
      a:hover
        .featured-post-image img
          transform: none
        .featured-post-info h3
          background-size: 100% 1px
    .featured-post-info
      h3
        background-size: 0 1px
    .featured-post-image
      max-height: 250px
    .featured-posts 
      margin-top: 0
      .container
        width: min(100% - 40px, 1480px)
  
</style>
