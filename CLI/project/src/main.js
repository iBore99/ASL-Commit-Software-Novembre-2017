// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})