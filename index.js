function ajustaTelefone(v) {
    v.value = v.value.replace(/\D/g, "");
}

function ajustaTelefone(v) {
    v.value = v.value.replace(/\D/g, "");

    v.value = v.value.replace(/^(\d\d)(\d)/g, "($1) $2");

    v.value = v.value.replace(/(\d{4})(\d)/, "$1-$2");
}

//const telefone= document.getElementById('idTelefone');
//const mascaraTelefone = IMask(telefone, {

