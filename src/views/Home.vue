<template>
    <q-page class="row items-start justify-evenly q-pa-auto">

    </q-page>
</template>

<script lang="ts">

import HelloWorld from '@/components/HelloWorld.vue'
import {Component, Vue} from "vue-property-decorator";


@Component({
    name: 'Home',
    components: {HelloWorld},
})
export default class HomeView extends Vue {

}
</script>
