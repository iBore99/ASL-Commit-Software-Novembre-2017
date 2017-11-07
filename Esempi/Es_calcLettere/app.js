window.onload = function() {
    new Vue({
        el: '#app',

        data: {
            num_lettere: 0,
            testo: ""
        },

        methods: {
            calcLettere: function() {
                this.num_lettere = this.testo.length;
            }
        }

    })
}