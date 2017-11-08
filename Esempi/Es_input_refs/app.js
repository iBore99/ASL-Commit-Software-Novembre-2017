window.onload = function() {
    new Vue({
        el: '#app',
        data: {

        },

        methods: {
            prendiElemento: function() {

                this.$refs.pTag.innerText = "hai inserito " + this.$refs.inputText1.value;


            }
        }
    })
}