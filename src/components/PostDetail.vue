<template>
<div id="post-detail">
    <v-container>

        <h1 class="my-3"> {{ post.title }}</h1>
        <p class="mt-12">{{ post.content }}</p>
        <v-btn :to="{name: 'EditPost', params: {id: post.id} }">Edit Article</v-btn>
    </v-container>

</div>
</template>

<script>

import axios from 'axios'
import {dbBaseURL} from "@/dbBaseURL";

export default {
    name: "PostDetail",
    data: () => ({
        post: {}
    }),

    async created() {
        try {
            const res = await axios.get(dbBaseURL + this.$route.params.id)
            this.post = res.data
        } catch (e) {
            console.error(e)
        }
    }
}
</script>

<style scoped>

</style>