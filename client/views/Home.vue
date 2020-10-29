<template>
    <div>
        <h2>Hello world!</h2>
        <p>{{user.nickname}}</p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {mapState} from "vuex";

    export default Vue.extend({
        name: "Home",
        data(){
            return {
                render: process.env.VUE_ENV
            };
        },
        asyncData({store, route}){
            return store.dispatch('FETCH_DATA');
        },
        head(){
            return {
                title: process.env.VUE_ENV === 'server'? 'server_t': 'client_t',
                meta: [
                    {
                        name: 'description',
                        content: 'ssr,koa,rpcagent',
                    }, {
                        name: 'keyword',
                        content: 'ssr,koa,rpcagent'
                    }
                ]
            }
        },
        computed: {
            ...mapState(['user'])
        },
    });
</script>

<style scoped>

</style>
