<template>
<div id="post-detail">
    <v-container>
        <v-row>
            <v-col>
                <router-link :to="{name: 'Home'}">Back to All Posts</router-link>
                <h1 class="my-3"> {{ post.title }}
                    <v-btn text color="warning" :to="{name: 'EditPost', params: {id: post.id} }">Edit Article</v-btn>
                </h1>
                <p>{{ formattedDate(post.timestamp) }}</p>
                <p class="mt-12">{{ post.content }}</p>

            </v-col>
        </v-row>

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

<style lang="scss" scoped>
#post-detail {
  .col {
    max-width: 700px;
  }
}
</style>