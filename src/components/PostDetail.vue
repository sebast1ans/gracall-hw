<template>
<div id="post-detail">
    <router-link to='/'>Home</router-link>
    <h1> {{ post.title }}</h1>
    <p>{{ post.content }}</p>

</div>
</template>

<script>

import axios from 'axios'

export default {
    name: "PostDetail",
    data: () => ({
        post: {}
    }),

    async created() {
        try {
            const res = await axios.get('http://localhost:3001/blog-posts/' + this.$route.params.id)
            this.post = res.data
        } catch (e) {
            console.error(e)
        }
    }
}
</script>

<style scoped>

</style>