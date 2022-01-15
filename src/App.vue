<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, onBeforeMount } from 'vue'
import Header from './components/Header.vue'
import Loading from './components/Loading.vue'
import StickyPost from './components/StickyPost.vue'
import { HomeWPPostsData, WPPost } from './types/types'
import FeaturedPosts from './components/FeaturedPosts.vue'
import NewestPosts from './components/NewestPosts.vue'

const stickyData = ref<WPPost[]>()
const newestData = ref<WPPost[]>()
const featuredData = ref<WPPost[]>()
const loaded = ref<boolean>(false)
const loadMoreItens = ref<boolean>(false)

onBeforeMount (async () => {
  const { VITE_APIURL: APIURL } = import.meta.env
  const posts: HomeWPPostsData = await fetch(`${APIURL}api/home`).then(response => response.json())
  const { data } = posts
  const { sticky, newest, featured } = data
  stickyData.value = sticky
  newestData.value = newest
  featuredData.value = featured 
  loaded.value = true
})

const loadMore = async (page: number) :Promise<void> => {
  loadMoreItens.value = true
  const { VITE_APIURL: APIURL } = import.meta.env
  const response: HomeWPPostsData = await fetch(`${APIURL}api/blog?page=${page}`).then(response => response.json())
  const { data: { newest } } = response
  newest.map((post: WPPost) => {
    newestData.value?.push(post)
  })
  loadMoreItens.value = false
}  
</script>

<template>
  <suspense>
    <div class="page">
      <Loading :loaded="loaded" />
      <Header />
      <StickyPost v-if="stickyData" :post="stickyData[0]" />
      <FeaturedPosts :posts="featuredData" />
      <NewestPosts 
        :loaded="loadMoreItens"
        :posts="newestData" 
        @loadmore="loadMore" />
    </div>
  </suspense>
</template>

<style lang="sass">
  @import "./assets/css/global.sass"
  html, body
    margin: 0
    padding: 0
  *, *:before, *:after
    box-sizing: border-box
  html
    font-family: 'Ubuntu', sans-serif
</style>
