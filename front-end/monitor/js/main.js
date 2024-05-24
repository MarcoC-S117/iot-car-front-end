let respuesta=document.getElementById("respuesta");

function callApiRequest() {
  // Hacer una petición para un usuario con ID especifico
  axios.get(
      "https://52.201.255.184/iot-car-control/back-end/apis/getRegistro.php"
    )
    .then(function (response) {
      // manejar respuesta exitosa
      console.log(response);

      let respuestaServidor = response.data=='f'?"ADELANTE":
                              response.data=='b'?"ATRAS":
                              response.data=='i'?"IZQUIERDA":
                              response.data=='d'?"DERECHA":
                              "DETENER";

      respuesta.innerHTML="respuesta " + response.data;
    })
    .catch(function (error) {
      // manejar error
      console.log(error);
    })
    .finally(function () {
      // siempre sera executado
    });
}
setInterval(callApiRequest,2000)
