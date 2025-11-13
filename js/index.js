$(document).ready(() => {
    console.log("JQuery Cargado");
    $("#formulario").on("submit", (e) => {
        e.preventDefault();
        abrirFeedback();
        trasladarDatosDelFormCompletoAFeedback();
    });
});

function abrirFeedback() {
    $("#Formulario").addClass("oculto");
    $(".formulario-completo").removeClass("oculto");
}

function trasladarDatosDelFormCompletoAFeedback() {
    const inputNombre = $("#nombre");
    const inputCelular = $("#telefono");
    const inputUbicacion = $("#ubi");

    const nombre = inputNombre.val();
    const telefono = inputCelular.val();
    const ubi = inputUbicacion.val();

    const spanNombre = $("#dato-nombre");

    spanNombre.html(nombre);
}