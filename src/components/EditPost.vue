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
                            <v-btn text @click="savePost()">Save</v-btn>
                            <v-btn text @click="cancel()">Cancel</v-btn>
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

        cancel() {
            this.post = {}
            this.$router.push({name: 'Home'})
        }
    }
}
</script>

<style scoped>

</style>