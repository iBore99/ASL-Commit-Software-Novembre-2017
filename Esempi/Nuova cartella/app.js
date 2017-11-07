window.onload = function() {
    new Vue({
        el: '#app',

        data: {

            eta: 0,
            sitoPorno: "www.youporn.com"
        },
        computed: {
            isMaggiorenne: function() {
                console.log(this.eta >= 18);
                return this.eta >= 18
            }
        }

    })
}