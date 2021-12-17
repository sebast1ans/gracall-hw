<template>
    <div id="create-post">
        <v-container>
            <v-row>
                <v-col>
                    <v-btn color="green" @click="show = true">
                        <v-icon>mdi-pencil</v-icon>
                        Create New Post
                    </v-btn>
                    <v-expand-transition>
                        <div v-show="show">
                            <h2 class="mt-7 mb-5">New Post</h2>
                            <v-card elevation="8">
                                <v-card-title>
                                    <v-text-field v-model="post.title" label="Title">
                                    </v-text-field>
                                </v-card-title>
                                <v-card-text>
                                    <v-textarea v-model="post.content" label="Content">
                                    </v-textarea>
                                </v-card-text>
                                <v-card-actions>

                                    <v-dialog v-model="dialogCreate" max-width="290">
                                        <template v-slot:activator="{on, attrs}">
                                            <v-btn :disabled="post.title === '' || post.content === ''" text
                                                   color="success" v-bind="attrs" v-on="on">Save
                                            </v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title>Save New Post</v-card-title>
                                            <v-card-text>Are you sure to create and save the new post?</v-card-text>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn text @click="dialogCreate = false">
                                                    Cancel
                                                </v-btn>
                                                <v-btn text color="success" @click="createPost(); dialogCreate = false">
                                                    Create post
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>

                                    <v-dialog v-model="dialogCancel" max-width="290">
                                        <template v-slot:activator="{on, attrs}">
                                            <v-btn text v-bind="attrs" v-on="on">Cancel</v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title>Cancel New Post</v-card-title>
                                            <v-card-text>Are you sure to leave creating a new post? This will delete all
                                                content already written!
                                            </v-card-text>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn text color="warning" @click="dialogCancel = false">
                                                    Back to writing
                                                </v-btn>
                                                <v-btn text color="error" @click="cancel(); dialogCancel = false">
                                                    Leave
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>

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
        dialogCreate: false,
        dialogCancel: false,
        show: false,
        post: {
            id: null,
            timestamp: null,
            title: '',
            content: ''
        }
    }),

    methods: {
        async createPost() {
            this.post.timestamp = Date.now()
            try {
                await axios.post(dbBaseURL, this.post)
            } catch (e) {
                console.error(e)
            }
            this.$emit('postCreated')
            this.cancel()
        },

        cancel() {
            this.post = {
                id: null,
                timestamp: null,
                title: '',
                content: ''
            }
            this.show = false
        }
    },

}
</script>

<style lang="scss" scoped>
#create-post {
  .col {
    max-width: 700px;
  }
}
</style>