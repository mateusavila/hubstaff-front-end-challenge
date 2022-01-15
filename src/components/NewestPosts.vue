<script setup lang="ts">
  import { ref } from 'vue'
  import { WPPost } from '../types/types';
  const props = defineProps<{
    posts: WPPost[] | undefined,
    loaded: boolean
  }>()

  const emit = defineEmits<{
    (e: 'loadmore', page: number): void
  }>()

  let page = ref(0)
  const loadMore = () :void => {
    page.value++
    emit('loadmore', page.value)
  }
</script>

<template>
  <section class="newest-posts">
    <div class="container">
      <h2>Newest Posts</h2>
      <div class="newest-post-list">
        <a
          v-for="(post, index) in posts"
          :key="index" 
          href="https://blog.hubstaff.com/" 
          rel="noopener noreferrer" 
          target="_blank"
          >
          <div class="newest-post-image">
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
          <div class="newest-post-info">
            <p class="newest-post-category">{{post.category ? post.category[0].category_nicename : ''}}</p>
            <h3 v-html="post.title"></h3>
            <div class="newest-post-info-author">
              <p><strong>by {{post.author.name}}</strong></p>
              <p>{{post.date}}</p>
            </div>
          </div>
        </a>
      </div>
      <div class="newest-action">
        <button type="button" class="newest-action-btn" @click="loadMore">
          <span v-if="loaded">loading...</span>
          <span v-if="!loaded">See more recent articles</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
  @import "../assets/css/global.sass"
  .newest-posts
    margin: 50px 0
    padding: 0
    .container
      width: min(calc(100% - 80px), 1480px)
      margin: 0 auto
      padding-bottom: 20px
    h2
      text-transform: uppercase
      font-size: clamp(18px, calc(1.125rem + ((1vw - 3.4px) * 0.6977)), 24px)
      margin: 0 0 40px
  .newest-post-image
    width: 100%
    overflow: hidden
    margin-bottom: 10px
    figure
      width: 100%
      margin: 0
      padding: 0
    img
      width: 100%
      height: auto
      object-fit: cover
  .newest-post-list
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-gap: 40px
    a
      text-decoration: none
      color: var(--black)
      @include transitions(.2s, all, cubic-bezier(.13,.16,.13,.89))
      &:hover
        @include transitions(.2s, all, cubic-bezier(.13,.16,.13,.89))
        box-shadow: 0 10px 25px 0 rgba(0,0,0,.1)
        transform: translateY(-10px)
        .newest-post-info h3
          @include transitions(.2s, all, cubic-bezier(.13,.16,.13,.89))
          background-size: 100% 3px
  .newest-post-info
    padding: 0 20px
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
  .newest-post-category
    text-transform: uppercase
    font-size: 12px
  .newest-post-info-author
    display: flex
    margin: 50px 0 10px
    width: 100%
    justify-content: space-between
    p
      font-size: 12px
  .newest-action
    width: 100%
    margin-top: 50px
    display: flex
    justify-content: center
  .newest-action-btn
    cursor: pointer
    border-radius: 6px
    border-color: var(--blue)
    background: var(--blue)
    color: #fff
    font-size: clamp(14px, calc(0.875rem + ((1vw - 3.4px) * 0.4651)), 18px)
    padding: 15px 20px
    font-weight: bold
    @include transitions(.2s, all, cubic-bezier(.13,.16,.13,.89))
    &:hover
      @include transitions(.2s, all, cubic-bezier(.13,.16,.13,.89))
      border-color: var(--blue-hover)
      background: var(--blue-hover)
  @media all and (max-width: 600px)
    .newest-post-info-author
      margin-top: 20px
    .newest-post-info
      padding: 0
      h3
        background-size: 0% 1px
    .newest-post-list
      grid-template-columns: 1fr
      a:hover
        box-shadow: none
        transform: none
        .newest-post-info h3
          background-size: 100% 1px
    .newest-post-image
      max-height: 250px
    .newest-posts 
      .container
        width: min(100% - 40px, 1480px)
  
</style>
