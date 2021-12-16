<template>
    <div id="edit-post">
        <h1>Edit</h1>
        <div class="post">
            <v-text-field v-model="post.title" label="Title">{{ post.title }}</v-text-field>
            <v-textarea v-model="post.content">{{ post.content }}</v-textarea>
        </div>
        <button @click="savePost()">Save</button>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: "EditPost",
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
    },

    methods: {
        savePost() {
            try {
                axios.put('http://localhost:3001/blog-posts/' + this.$route.params.id, this.post)
                this.$router.push({name: 'Home'})
            } catch (e) {
                console.error(e)
            }

        }
    }
}
</script>

<style scoped>

</style>