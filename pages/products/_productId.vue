<template>
    <main class="main">
        <h1 class="header">{{ product.title }}</h1>
    </main>
</template>

<script>
import Axios from 'axios'
export default {
    name: 'product',
    data() {
        return {
            product: '',
        }
    },

    async asyncData({params}) {
        const {data} = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${params.productId}`)
       
        console.log(data)

        return {product: data}
    },

}
</script>

<style lang="sass" scoped>

</style>