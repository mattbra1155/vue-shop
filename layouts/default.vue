<template>
    <div class="layout">
        <topNav />
        <nuxt />
    </div>
</template>

<script>
    import topNav from '../components/top-nav.vue';

    export default {
       components: {
           topNav
       }
           
       
    }
</script>