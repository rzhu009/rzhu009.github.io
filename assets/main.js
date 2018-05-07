import Vue from 'vue';

import MainComponent from './vue/Main.vue';

new Vue({
    el: '#vue-target',
    render: h => h(MainComponent)
});