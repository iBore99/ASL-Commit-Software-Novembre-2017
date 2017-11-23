function serializzaObjInJson(obj) { //creazione stringa json
    return JSON.stringify(obj);
}

function deserializzaObjDaJson(stringa_json) { //ricavo oggetto da stringa json
    return eval(stringa_json);
}

function getJsonFromLocalStorage(nome_obj) {
    return localStorage.getItem(nome_obj);

}

function setObjToLocalStorage(nome_obj, stringaJson) {
    localStorage.setItem(nome_obj, stringaJson);
}