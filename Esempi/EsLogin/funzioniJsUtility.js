function serializzaObjInJson(obj) { //creazione stringa json
    return JSON.stringify(obj);
}

function deserializzaObjDaJson(stringa_json) { //ricavo oggetto da stringa json
    return eval(stringa_json);
}

function getJsonFromLocalStorage(nome_obj) {
    return localStorage.getItem(nome_obj);

}

function setObjToLocalStorage(nome_obj, obj) {

    localStorage.setItem(nome_obj, serializzaObjInJson(obj));
}


function cambioURLCorrente(nuovoLink) {
    window.location.href = nuovoLink;
}