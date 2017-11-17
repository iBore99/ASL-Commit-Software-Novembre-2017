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




/*------------------------------------------FILE JS---------------------------------------------------------------------*/
module.exports = {
    miaFunzione: function() {
        //mio codice
    },

    altraMiaFunzione: function() {
        //altro mio codice
    }
}

/*------------------------------------------FILE VUE--------------------------------------------------------------*/

//Mentre nel file .Vue bisogna importare il file .js nel tag <script>:

var myJsFile = require("./pathDelFileJs");

//A questo punto, attraverso la variabile myJsFile, potrò accedere a qualsiasi metodo del file js nell'app Vue. 

export default {
    methods: {
        funzioneVue() {

            myJsFile.miafunzione();

            //è possibile anche assegnare un metodo del file javascript ad una variabile nell'app Vue:
            var mioMetodoInVue = myJsFile.altraMiaFunzione;

            //così da poter richiamare quella funzione semplicemente cosi:
            mioMetodoInVue();

        }
    }

}

v