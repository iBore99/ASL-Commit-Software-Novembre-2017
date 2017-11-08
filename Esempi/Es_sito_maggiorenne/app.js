window.onload = function() {
    new Vue({
        el: '#app',

        data: {

            eta: 0,
            sitoPorno: "www.youporn.com"
        },
        computed: {
            isMaggiorenne: function() {
                return this.eta >= 18
            }
        }

    })
}