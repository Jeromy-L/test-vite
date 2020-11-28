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
    import { mapState } from 'vuex';

    export default Vue.extend({
        components: {
        }
    });
</script>

<style lang="less">
    ::-ms-clear,::-ms-reveal{display:none;}
</style>
