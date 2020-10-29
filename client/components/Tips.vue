<template>
    <transition name="el-message-fade">
        <div
            :class="['page_tips',type]"
            v-show="visible"
            @mouseenter="clearTimer"
            @mouseleave="startTimer"
            role="alert">
            <div class="inner">{{ message }}</div>
        </div>
    </transition>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                visible: false,
                message: '',
                duration: 2000,
                type: 'success',
                closed: false,
                timer: null,
            };
        },
        watch: {
            closed(newVal) {
                if (newVal) {
                    this.visible = false;
                    this.destroyElement();
                }
            }
        },
        methods: {
            destroyElement() {
                this.$destroy(true);
                this.$el.parentNode.removeChild(this.$el);
            },
            close() {
                this.closed = true;
            },
            clearTimer() {
                clearTimeout(this.timer);
            },

            startTimer() {
                if (this.duration > 0) {
                    this.timer = setTimeout(() => {
                        if (!this.closed) {
                            this.close();
                        }
                    }, this.duration);
                }
            },
        },
        mounted() {
            this.startTimer();
        }
    };
</script>

<style lang="less" scoped>
    .page_tips {
        position: fixed;
        top: 20px;
        left: 50%;
        -webkit-transition: translateX(-50%);
        -moz-transition: translateX(-50%);
        -o-transition: translateX(-50%);
        transform: translateX(-50%);
        text-align: center;
        z-index: 10000
    }

    .page_tips .inner {
        display: inline-block;
        *display: inline;
        *zoom:1;min-width: 280px;
        padding: 5px 30px;
        color: #fff;
        border-radius: 5px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px
    }

    .page_tips.success .inner {
        background-color: #1aad19
    }

    .page_tips.error .inner {
        background-color: #eaa000
    }
</style>
