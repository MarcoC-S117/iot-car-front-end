//alert("Hola mundo");
let adelante =document.getElementById("adelante");
let atras =document.getElementById("atras");
let izquierda =document.getElementById("izquierda");
let derecha =document.getElementById("derecha");
let stop =document.getElementById("stop");
let mensaje=document.getElementById("mensaje");

function callApi(estatus) {
  // Hacer una petición para un usuario con ID especifico
  axios.get(
      "http://localhost/iot-car-control/back-end/apis/setRegistro.php?valorEstatus=" +
        estatus
    )
    .then(function (response) {
      // manejar respuesta exitosa
      console.log(response);
      mensaje.innerHTML="respuesta " + response.data;
    })
    .catch(function (error) {
      // manejar error
      console.log(error);
    })
    .finally(function () {
      // siempre sera executado
    });
}

adelante.addEventListener("click", function () {
    callApi('f');
});
atras.addEventListener("click", function () {
    callApi('b');
});
izquierda.addEventListener("click", function () {
    callApi('l');
});
derecha.addEventListener("click", function () {
    callApi('r');
});
stop.addEventListener("click", function () {
    callApi('s');
});
