<template>
    <q-layout view="hHh Lpr lFf">
        <q-header :elevated="$route.name!=='Home'" class="bg-white page-header">
            <q-toolbar class="bg-white page-toolbar q-py-md">
                <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen"
                       aria-label="Menu" icon="menu"/>
                <q-toolbar-title>
                    {{title}}
                </q-toolbar-title>

                <div>{{subtitle}}</div>
            </q-toolbar>
            <!--搜索框-->
            <transition name="search">
                <Search v-show="$route.name==='Home'"></Search>
            </transition>


        </q-header>

        <q-drawer v-model="leftDrawerOpen"
                  bordered content-class="bg-grey-1">
            <q-list bordered padding class="text-grey-8">
                <q-item-label header>菜单</q-item-label>
                <q-item clickable v-ripple exact :to="{name:'Home'}">
                    <q-item-section avatar>
                        <q-icon name="search"/>
                    </q-item-section>
                    <q-item-section>导航</q-item-section>
                </q-item>
                <q-item clickable v-ripple exact :to="{name:'About'}">
                    <q-item-section avatar>
                        <q-icon name="perm_media"/>
                    </q-item-section>
                    <q-item-section>图片</q-item-section>
                </q-item>

            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view></router-view>
            <!--:key="this.$route.name !== undefined? this.$route.name +new Date().getTime(): this.$route +new Date().getTime()"-->
        </q-page-container>
    </q-layout>
</template>

<script lang="ts">
    import HelloWorld from './components/HelloWorld.vue'
    import {Component, Watch} from "vue-property-decorator";
    import Search from "@/components/Search.vue";
    import VueBase from "@/VueBase";

    @Component({
        name: 'App',
        components: {
            Search,
            HelloWorld
        },
    })
    export default class App extends VueBase {
        title = "Opage";
        subtitle = `by litcc V${this.$store.getters.getVersion}`;
        leftDrawerOpen = false;


        created() {



            // // eslint-disable-next-line no-unexpected-multiline
            // const a = async () => {
            //     const oneTime = new Date().getTime()
            //     const ecc = require('eosjs-ecc')
            //     await ecc.initialize()
            //     const twoTime = new Date().getTime()
            //     console.log(`ecc ready ,Time out ${twoTime - oneTime}`)
            //
            // }
            // a();
            // console.log("Hellp")


        }

        // @Watch("$route", {deep: true})
        // routerHook(newVal: any, oldVal: any) {
        //
        // }

    }
</script>

<style lang="stylus">

    .page-header {
        background: white
    }

    .page-toolbar {
        color black
    }

    .page-toolbar-inset {
        color black
    }


    .search-enter-active {
        transition: opacity .5s;
    }

    .search-leave-active {
        transition: opacity .0s;
    }

    .search-enter, .search-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

</style>
