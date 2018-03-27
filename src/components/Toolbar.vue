<template>
    <div>
        <v-toolbar>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>Title</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn id="login" flat v-on:click="changeState('/')">Home</v-btn>
                <v-btn id="login" flat v-on:click="changeState('About')">About</v-btn>
                <v-btn flat>Link Three</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'toolbar' })
export default class Toolbar extends Vue {
    public changeState(name: string) {
        this.$router.push(name);
    }
}
</script>

