export interface HomeWPPostsData {
  data: HomeWPPosts
}

export interface HomeWPPosts {
  sticky: WPPost[]
  featured: WPPost[]
  newest: WPPost[]
}

export interface WPPost {
  id: number
  title: string
  date: string
  content: string
  excerpt: string
  category: CategoryWP[] | null
  slug: string
  thumbnail: string
  updated_date: string
  views: number
  author: AuthorWP
  width: number
  height: number
}

export interface CategoryWP {
  term_id: number
  name: string
  slug: string
  term_group: number
  term_taxonomy_id: number
  taxonomy: string
  description: string
  parent: number
  count: number
  filter: string
  cat_ID: number
  category_count: number
  category_description: string
  cat_name: string
  category_nicename: string
  category_parent: number
}

export interface AuthorWP {
  name: string
  email: string
  photo: string
  first_name: string
  last_name: string
}