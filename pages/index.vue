<template>
    <div>
        <h1>Hello World</h1>
        <nuxt-link to="/about">Link</nuxt-link>
        <h2>{{ title }}</h2>
        <p>{{ subtitle }}</p>
        <button v-tooltip="{
            content: msg,
            placement: 'top-center',
            classes: ['info'],
            targetClasses: ['it-has-a-tooltip'],
            offset: 10,
            delay: {
                show: 500,
                hide: 300,
            },
        }">Hover me</button>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    layout: 'default',
    data() {
        return {
            title: '',
            subtitle: '',
            posts: [],
            msg: 'test'

        }
    },

    head() {
        metaInfo: {
            meta: [
                { name: 'description', content: 'test'},
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ]
        }
    }
}

</script>

<style scoped>

</style>