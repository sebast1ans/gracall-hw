<template>
    <div id="edit-post">
        <v-container>
            <v-row>
                <v-col>
                    <h1>Edit Post</h1>
                    <v-card class="mt-10">
                        <v-card-title>
                            <v-text-field v-model="post.title" label="Title">{{ post.title }}</v-text-field>
                        </v-card-title>
                        <v-card-text>
                            <v-textarea v-model="post.content">{{ post.content }}</v-textarea>
                        </v-card-text>
                        <v-card-actions>
                            <v-dialog v-model="dialogSave" max-width="290">
                                <template v-slot:activator="{on, attrs}">
                                    <v-btn text color="green" v-bind="attrs" v-on="on">Save</v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>Save Post</v-card-title>
                                    <v-card-text>Are you sure to save this post?</v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="success" @click="savePost(); dialogSave = false">Save</v-btn>
                                        <v-btn text @click="dialogSave = false">Cancel</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>

                            <v-dialog v-model="dialogDelete" max-width="290">
                                <template v-slot:activator="{on, attrs}">
                                    <v-btn text color="error" v-bind="attrs" v-on="on">Delete Post</v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>Delete</v-card-title>
                                    <v-card-text>Do you really want to delete this post?</v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="error" @click="deletePost(post.id); dialogDelete = false">
                                            Delete Post
                                        </v-btn>
                                        <v-btn text @click="dialogDelete = false">Cancel</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>

                            <v-dialog v-model="dialogCancel" max-width="290">
                                <template v-slot:activator="{on, attrs}">
                                    <v-btn text v-bind="attrs" v-on="on">Cancel</v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>Cancel Editing</v-card-title>
                                    <v-card-text>Are you sure to leave editing the post without saving?</v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="warning" @click="dialogCancel = false">
                                            Back to editing
                                        </v-btn>
                                        <v-btn text color="error" @click="cancel(); dialogCancel= false">Leave</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>

                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>
    </div>
</template>

<script>

import axios from 'axios'
import {dbBaseURL} from "@/dbBaseURL";

export default {
    name: "EditPost",
    data: () => ({
        dialogDelete: false,
        dialogSave: false,
        dialogCancel: false,
        post: {}
    }),

    async created() {
        try {
            const res = await axios.get(dbBaseURL + this.$route.params.id)
            this.post = res.data
        } catch (e) {
            console.error(e)
        }
    },

    methods: {
        savePost() {
            try {
                axios.put(dbBaseURL + this.$route.params.id, this.post)
                this.$router.push({name: 'Home'})
            } catch (e) {
                console.error(e)
            }
        },
        deletePost(id) {
            try {
                axios.delete(dbBaseURL + id)
                this.$router.push({name: 'Home'})
            } catch (e) {
                console.error(e)
            }
            // let postToRemoveId = this.posts.map((item) => item.id).indexOf(id)
            // this.posts.splice(postToRemoveId, 1)
        },

        cancel() {
            this.post = {}
            this.$router.push({name: 'Home'})
        }
    }
}
</script>

<style lang="scss" scoped>
#edit-post {
  .col {
    max-width: 700px;
  }
}
</style>