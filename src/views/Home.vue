<template>
    <q-page class="home-page row items-start justify-center q-pa-auto q-pt-xl">
        <WebSites></WebSites>
    </q-page>
</template>

<script lang="ts">

    import HelloWorld from '@/components/HelloWorld.vue'
    import {Component} from "vue-property-decorator";
    import VueBase from "@/VueBase";
    import WebSites from "@/components/WebSites.vue";


    @Component({
        name: 'Home',
        components: {HelloWorld, WebSites},
    })
    export default class HomeView extends VueBase {

    }
</script>
<style lang="stylus">
    .home-page {

    }
</style>
