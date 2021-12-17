<template>
    <v-app>
        <v-app-bar app dark>
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-light">Blog </span>
                <span>Admin</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn :to="{name: 'Home'}">
                <v-icon>mdi-home</v-icon>
                Go Home
            </v-btn>
        </v-app-bar>
        <v-main>
            <router-view/>
        </v-main>
    </v-app>

</template>

<script>

export default {
    name: 'App',

    data: () => ({
        //
    }),
};
</script>
