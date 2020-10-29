import Vue from 'vue';
import Tips from '../components/Tips.vue';
const tips: any = Tips;
const MessageConstructor = Vue.extend(tips);

let instance;
const instances = [];
let seed = 1;
let zIndex = 9999;

const Message = function(options) {
    if (Vue.prototype.$isServer) return;
    options = options || {};
    if (typeof options === 'string') {
        options = {
            message: options,
        };
    }
    const id = 'tips_' + seed++;

    instance = new MessageConstructor({
        data: options,
    });
    instance.id = id;
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
    instance.vm.visible = true;
    instance.dom = instance.vm.$el;
    instance.dom.style.zIndex = zIndex++;
    instances.push(instance);
    return instance.vm;
};

['suc', 'err'].forEach(type => {
    Message[type] = options => {
        if (typeof options === 'string') {
            options = {
                message: options,
            };
        }
        options.type =  type === 'suc' ? 'success' : 'error';
        return Message(options);
    };
});


export default {
    install: function(Vue, opts = {}) {
        Vue.prototype.$tips = Message;
    },

};

