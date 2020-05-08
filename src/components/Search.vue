<template>
    <!--搜索框-->
    <q-toolbar inset class="bg-white no-padding shadow-1 items-start justify-evenly">
        <q-input dark borderless v-model="searchText" placeholder="Search"
                 class="col-xs-10 col-sm-8 col-md-8 col-lg-6 col-xl-6"
                 input-class="text-left text-black ">
            <template v-slot:prepend>

                <q-btn flat round color="primary"
                       icon="img:data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzQyODVGNDt9Cgkuc3Qxe2ZpbGw6IzM0QTg1Mzt9Cgkuc3Qye2ZpbGw6I0ZCQkMwNTt9Cgkuc3Qze2ZpbGw6I0VBNDMzNTt9Cgkuc3Q0e2ZpbGw6bm9uZTt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ4Mi4yLDI2MS42YzAtMTYuNy0xLjUtMzIuOC00LjMtNDguM0gyNTUuN3Y5MS4zaDEyN2MtNS41LDI5LjUtMjIuMSw1NC41LTQ3LjEsNzEuMnY1OS4yaDc2LjMKCQlDNDU2LjUsMzk0LDQ4Mi4yLDMzMy41LDQ4Mi4yLDI2MS42eiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTI1NS43LDQ5Mi4zYzYzLjcsMCwxMTcuMS0yMS4xLDE1Ni4yLTU3LjJsLTc2LjMtNTkuMmMtMjEuMSwxNC4yLTQ4LjIsMjIuNS03OS45LDIyLjUKCQljLTYxLjUsMC0xMTMuNS00MS41LTEzMi4xLTk3LjNINDQuOHY2MS4xQzgzLjYsNDM5LjQsMTYzLjQsNDkyLjMsMjU1LjcsNDkyLjN6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTIzLjYsMzAxLjFjLTQuNy0xNC4yLTcuNC0yOS4zLTcuNC00NC44czIuNy0zMC43LDcuNC00NC44di02MS4ySDQ0LjhjLTE2LDMxLjktMjUuMSw2Ny45LTI1LjEsMTA2CgkJczkuMSw3NC4xLDI1LjEsMTA2TDEyMy42LDMwMS4xeiIvPgoJPHBhdGggY2xhc3M9InN0MyIgZD0iTTI1NS43LDExNC4xYzM0LjcsMCw2NS44LDExLjksOTAuMiwzNS4zbDY3LjctNjcuN2MtNDAuOS0zOC4xLTk0LjMtNjEuNS0xNTcuOS02MS41CgkJYy05Mi4yLDAtMTcyLjEsNTIuOS0yMTAuOSwxMzBsNzguOCw2MS4yQzE0Mi4yLDE1NS43LDE5NC4yLDExNC4xLDI1NS43LDExNC4xeiIvPgoJPHBhdGggY2xhc3M9InN0NCIgZD0iTTE5LjcsMjAuM2g0NzJ2NDcyaC00NzJWMjAuM3oiLz4KPC9nPgo8L3N2Zz4K">
                    <q-menu>
                        <q-list style="min-width: 100px">
                            <q-item clickable v-close-popup>
                                <q-item-section avatar>
                                    <q-icon name="search"/>
                                </q-item-section>
                                <q-item-section>New tab</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                                <q-item-section>New incognito tab</q-item-section>
                            </q-item>
                            <q-separator/>
                            <q-item clickable v-close-popup>
                                <q-item-section>Recent tabs</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                                <q-item-section>History</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                                <q-item-section>Downloads</q-item-section>
                            </q-item>
                            <q-separator/>
                            <q-item clickable v-close-popup>
                                <q-item-section>Settings</q-item-section>
                            </q-item>
                            <q-separator/>
                            <q-item clickable v-close-popup>
                                <q-item-section>Help &amp; Feedback</q-item-section>
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-btn>

            </template>
            <template v-slot:append>
                <q-icon v-if="searchText!==''" name="clear" class="text-black cursor-pointer" @click="searchText = ''"/>
                <q-btn flat round color="primary" class="text-black" icon="search" @click="toSearch()"/>
            </template>
        </q-input>
    </q-toolbar>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";


    @Component({
        name: 'Search',
        components: {},
    })
    export default class SearchComponents extends Vue {
        searchText = ""; // 搜索文本

        /**
         * 切换搜索引擎
         */
        switchSearchChannel() {

        }

        /**
         * 点击搜索事件
         */
        toSearch() {

        }

    }
</script>

<style scoped lang="stylus">
    * {
        transition: all 1.5s
    }
</style>
