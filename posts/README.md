# Hello
<script lang="ts">
// docs/README.md
import Vue from 'vue';
import Component from 'vue-class-component';

import HelloWorld from '@/components/HelloWorld.vue';

@Component({
    components: {
        HelloWorld,
    },
})
export default class extends Vue {}
</script> 

# Sample docs

<HelloWorld />
https://www.karltarvas.com/2020/05/12/adding-vuepress-to-a-vue-cli-project-with-typescript.html