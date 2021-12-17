<template>
    <div id="show-posts">
        <v-container>
            <v-row>
                <v-col>
                    <h1>Blog Posts</h1>
                    <div class="post" v-for="post in postsReversed" :key="post.id">
                        <v-card class="my-5">
                            <v-card-title>{{ post.title }}</v-card-title>
                            <v-card-text>{{ post.content }}</v-card-text>
                            <v-card-actions>
                                <v-btn text :to="{name: 'PostDetail', params: {id: post.id}}">Show Details</v-btn>
                                <v-btn text color="warning" :to="{name: 'EditPost', params: {id: post.id} }">Edit
                                </v-btn>
                                <v-btn text color="error" @click="deletePost(post.id)">Delete Post</v-btn>
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
    components: {

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
                axios.delete(dbBaseURL + id)
            } catch (e) {
                console.error(e)
            }
            let postToRemoveId = this.posts.map((item) => item.id).indexOf(id)
            this.posts.splice(postToRemoveId, 1)
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

<style scoped>

</style>