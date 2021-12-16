<template>
    <div id="create-post">
        <h3>New Post</h3>
        <v-text-field
                v-model="post.title"
                label="Title"
        ></v-text-field>
        <v-textarea
                v-model="post.content"
        >
        </v-textarea>
        <button @click="createPost()">Add post</button>
    </div>
</template>

<script>

import axios from 'axios'

const baseURL = 'http://localhost:3001/blog-posts'

export default {
    name: "CreatePost",
    data: () => ({
        post: {
            id: null,
            title: '',
            content: ''
        }
    }),
    methods: {
        async createPost() {
            try {
                await axios.post(baseURL, this.post)
            } catch (e) {
                console.error(e)
            }
            this.$emit('postCreated')
        }
    }
}
</script>

<style scoped>

</style>