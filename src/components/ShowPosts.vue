<template>
    <div id="show-posts">
        <h1>Blog Posts</h1>
        <div class="post" v-for="post in postsReversed" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p>{{ post.content }}</p>
            <router-link :to="{name: 'PostDetail', params: {id: post.id}}">Show Details</router-link>
            <router-link :to="{name: 'EditPost', params: {id: post.id} }">Edit</router-link>
            <button @click="deletePost(post.id)">Delete Post</button>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import PostDetail from "@/components/PostDetail";

export default {
    name: "ShowPosts",
    components: {
        PostDetail
    },
    data: () => ({
        posts: []
    }),

    computed: {
        postsReversed: function () {
            return this.posts.reverse()
        }
    },

    methods: {
        deletePost(id) {
            try {
                axios.delete('http://localhost:3001/blog-posts/' + id)
            } catch (e) {
                console.error(e)
            }
            let postToRemoveId = this.posts.map((item) => item.id).indexOf(id)
            this.posts.splice(postToRemoveId, 1)
        }
    },

    async created() {
        try {
            const res = await axios.get('http://localhost:3001/blog-posts')
            this.posts = res.data
        } catch (e) {
            console.error(e)
        }
    }
}
</script>

<style scoped>

</style>