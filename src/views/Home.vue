<template>
    <v-container>
        <v-row>
            <v-col>
                <CreatePost v-on:postCreated="forceRerender"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <ShowPosts :key="componentKey"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import ShowPosts from "@/components/ShowPosts";
import CreatePost from "@/components/CreatePost";

export default {
    name: 'Home',

    components: {
        ShowPosts,
        CreatePost
    },

    data: () => ({
        componentKey: 0
    }),

    methods: {
        forceRerender() {
            this.componentKey += 1;
        }
    }
}
</script>
