window.onload = function() {
    (function() {
        localStorage.setItem('username', 'pippo');
        localStorage.setItem('password', '123');
    });

    new Vue({

        el: '#app',

        data: {
            username: "",
            password: "",
        },

        methods: {

        }

    })

}