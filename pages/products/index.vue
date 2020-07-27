<template>
    <div class="main">
        <div class="products" v-for="(product, index) in products" :key="index">
            <div class="product__item">
                <p class="product__id">{{product.id}}</p>
                <h2 class="product__name">{{ product.title }}</h2>
                <p class="product__description">{{ product.body }}</p>
                <nuxt-link :to="'/products/' + product.id">Check</nuxt-link>
            </div>
        </div>
        
    </div>
</template>

<script>

import axios from 'axios';


export default {
    data() {
        return {
            products: [],
        }
    },
    async asyncData ( {params, error} ) {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return {products: data}
    }, 
}
</script>

<style lang="scss" scoped>

</style>