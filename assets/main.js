import Vue from 'vue';

import MainComponent from './vue/Main.vue';

window.eventBus = new Vue();

new Vue({
    el: '#vue-target',
    render: h => h(MainComponent)
});