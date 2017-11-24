window.onload = function() {

    const paginaModificaCliente = {
        template: ' '
    }
    const paginaNuovoCliente = {
        template: ' '
    }

    const paginaVistaClienti = {
        template: ' '
    }
    const paginaLogReg = {
        template: ' '
    }



    const routes = [
        { path: '/vistaClienti', component: paginaVistaClienti },
        { path: '/modificaCliente', component: paginaModificaCliente },
        { path: '/nuovoCliente', component: paginaNuovoCliente },
        { path: '/logReg', component: paginaLogReg }
    ]


    const router = new VueRouter({
        routes: routes
    })


    const app = new Vue({
        el: '#appGenerale',
        router
    });

}