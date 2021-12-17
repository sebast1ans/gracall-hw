<template>
    <div>
        <CreatePost v-on:postCreated="forceRerender"/>
        <ShowPosts :key="componentKey"/>
    </div>
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
