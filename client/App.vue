<template>
    <div id="app">
        <div id="body" class="body page_simple" :class="pageName">
            <div class="container_box" v-bind:class="{full_container_box:isPersonalPage}">
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
        },
        computed: {
            ...mapState(['pageName']),
            isPersonalPage(){

                return false;
            }
        },
        mounted() {
            console.log(1233)
            //footer始终贴底显示
            document.getElementById('body').style.minHeight = document.documentElement.clientHeight-142+"px";
            window.onresize = function() {
                document.getElementById('body').style.minHeight = document.documentElement.clientHeight-142+"px";
            };
            this.$store.dispatch('FETCH_USER_STATE');
            this.$store.commit('SET_TOKEN', {token: this.$store.token});

        },
    });
</script>

<style lang="less">
    ::-ms-clear,::-ms-reveal{display:none;}
</style>
