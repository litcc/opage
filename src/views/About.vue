<template>
    <q-page class="row items-start justify-evenly about">
        hello
    </q-page>
</template>
<script lang="ts">

    import {Component} from "vue-property-decorator";
    import VueBase from "@/VueBase";

    @Component({
        name: 'About',
    })
    export default class About extends VueBase{
        beforeCreate(){

        }

    }
</script>
<style scoped lang="stylus">
    .about{
        padding 1rem
        font-size 1rem
    }
</style>
