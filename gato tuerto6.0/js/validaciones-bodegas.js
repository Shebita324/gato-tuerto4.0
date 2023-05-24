$(document).ready(function () {
    $("#formulario-bodegas").validate({
        rules: {
            categoria: {
                required: true,
            },
            nombre: {
                required: true,
            },
            cantidad: {
                required: true,
            },
        },
        messages: {
            categoria: {
                required: "Debe seleccionar una opcion",
            },
            nombre: {
                required: "Debe seleccionar una opcion",
            },
            cantidad: {
                required: "Debe dar una cantidad valida",
            },
        },
    });
});