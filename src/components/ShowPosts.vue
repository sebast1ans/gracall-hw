<template>
    <div id="show-posts">
        <v-container>
            <v-row>
                <v-col>
                    <h1>Blog Posts</h1>
                    <p v-if="posts.length === 0">There are no posts :(</p>
                    <div class="post" v-for="post in postsReversed" :key="post.id">
                        <v-card class="my-5">
                            <v-card-title>{{ post.title }}</v-card-title>
                            <v-card-subtitle>{{ formattedDate(post.timestamp) }}</v-card-subtitle>
                            <v-card-text>{{ post.content | snippet }}</v-card-text>
                            <v-card-actions>
                                <v-btn text :to="{name: 'PostDetail', params: {id: post.id}}">Show Details</v-btn>
                                <v-btn text color="warning" :to="{name: 'EditPost', params: {id: post.id}}">Edit
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                    </div>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>

import axios from 'axios'
import {dbBaseURL} from "@/dbBaseURL";

export default {
    name: "ShowPosts",
    components: {},
    data: () => ({
        dialog: false,
        posts: []
    }),

    computed: {
        postsReversed: function () {
            return this.posts.reverse()
        }
    },

    async created() {
        try {
            const res = await axios.get(dbBaseURL)
            this.posts = res.data
        } catch (e) {
            console.error(e)
        }
    }
}
</script>

<style lang="scss" scoped>
#show-posts {
  .col {
    max-width: 700px;
  }
}
</style>