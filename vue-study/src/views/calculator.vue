<template>
  <div class="home">
    <jsq msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import jsq from '@/Business/jsq.vue'

export default {
    name: 'home',
    components: {
        jsq
    },
}
</script>
