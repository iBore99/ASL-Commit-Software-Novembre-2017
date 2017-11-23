window.onload = function() {

    const paginaModifica = { template: '#idFoo' }
    const paginaNuovoCliente = { template: '<p>pag nuovo cliente</p>' }
        //const cFoo = htmlFoo;

    const routes = [
        { path: '/foo', component: paginaModifica },
        { path: '/modifica', component: paginaModifica },
        { path: '/nuovoCliente', component: paginaNuovoCliente }
    ]


    const router = new VueRouter({
        routes: routes
    })


    const app = new Vue({
        el: '#app',
        router
    });

}