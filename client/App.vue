<template>
    <div id="app">
        <div id="body" class="body page_simple">
            <div class="container_box">
                zxcvzxv
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {createDefaultApi} from '../client/api/index';
    import to from 'await-to-js'
    const api = createDefaultApi();
    export default Vue.extend({
        components: {
        },
        mounted(){
           
        },
        methods:{
            
            async test(){
              const [err, res] = await  to((api.get('/test')));
            }
        }
    });
</script>

<style lang="less">
    ::-ms-clear,::-ms-reveal{display:none;}
</style>
