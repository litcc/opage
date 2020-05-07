<template>
    <q-layout view="hHh Lpr lFf">
        <q-header elevated class="page-header">
            <q-toolbar class="bg-white page-toolbar">
                <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen"
                       aria-label="Menu" icon="menu"/>
                <q-toolbar-title>
                    {{title}}
                </q-toolbar-title>

                <div>{{subtitle}}</div>
            </q-toolbar>
            <!--搜索框-->
            <q-toolbar  inset v-if="$route.name==='Home'" class="no-padding shadow-1  bg-white items-start justify-evenly">
                <q-input dark borderless v-model="text" class="col-xs-10 col-sm-10 col-md-8 col-lg-6 col-xl-6" input-class="text-left text-black ">
                    <template v-slot:prepend>
                        <q-icon name="place" class="text-black" v-ripple />
                    </template>
                    <template v-slot:append>

                        <q-icon v-if="text!==''" name="clear" class="text-black cursor-pointer" @click="text = ''"/>
                        <q-icon name="search" class="text-black"/>
                    </template>
                </q-input>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" overlay
                  bordered content-class="bg-grey-1">
            <q-list bordered padding class="text-grey-8">
                <q-item-label header>菜单</q-item-label>
                <q-item clickable v-ripple exact :to="{name:'Home'}">
                    <q-item-section avatar>
                        <q-icon name="home"/>
                    </q-item-section>
                    <q-item-section>首页</q-item-section>
                </q-item>
                <q-item clickable v-ripple exact :to="{name:'DentalShoppingCart'}">
                    <q-item-section avatar>
                        <q-icon name="shopping_cart"/>
                    </q-item-section>
                    <q-item-section>牙科购物车</q-item-section>
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
    import {Component, Vue, Watch} from "vue-property-decorator";

    const config = require("../package.json");

    @Component({
        name: 'App',
        components: {
            HelloWorld
        },
    })
    export default class App extends Vue {
        title = "Opage";
        subtitle = `by litcc V${config.version}`;
        leftDrawerOpen = false;
        text = "";

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        created() {

        }

        @Watch("$route", {deep: true})
        routerHook(newVal: any, oldVal: any) {

        }

    }
</script>

<style lang="stylus">

    .page-header{
        background: white
    }

    .page-toolbar{
        color black
    }
    .page-toolbar-inset{
        color black
    }



</style>
