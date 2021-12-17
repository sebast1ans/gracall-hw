<template>
    <div id="create-post">
        <v-container>
            <v-row>
                <v-col>
                    <v-btn color="green" @click="show = true">Create New Post</v-btn>
                    <v-expand-transition>
                        <div v-show="show">
                            <v-card class="mt-10">
                                <v-card-title>
                                    <v-text-field
                                            v-model="post.title"
                                            label="Title"
                                    >
                                    </v-text-field>
                                </v-card-title>
                                <v-card-text>
                                    <v-textarea
                                            v-model="post.content"
                                            label="Content"
                                    >
                                    </v-textarea>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn text @click="createPost()">Add post</v-btn>
                                    <v-btn text @click="cancel()">Cancel</v-btn>
                                </v-card-actions>
                            </v-card>
                        </div>
                    </v-expand-transition>
                </v-col>
            </v-row>

        </v-container>
    </div>
</template>

<script>

import axios from 'axios'
import {dbBaseURL} from "@/dbBaseURL";

export default {
    name: "CreatePost",
    data: () => ({
        show: false,
        post: {
            id: null,
            title: '',
            content: ''
        }
    }),
    methods: {
        async createPost() {
            try {
                await axios.post(dbBaseURL, this.post)
            } catch (e) {
                console.error(e)
            }
            this.$emit('postCreated')
            this.cancel()
        },

        cancel() {
            this.post = {}
            this.show = false
        }
    }
}
</script>

<style scoped>

</style>