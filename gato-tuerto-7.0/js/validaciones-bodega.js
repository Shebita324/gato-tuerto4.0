$(document).ready(function () {
    $("#formulario-bodega").validate({
        rules: {
            id: {
                required: true,
            },
            categoria: {
                required: true,
            },
            nombre: {
                required: true,
            },
            descripcion: {
                required: true,
            },
            precio: {
                required: true,
            },
            descuento: {
                required: false,
            },
            descuentooferta: {
                required: false,
            },
        },
        messages: {
            id: {
                required: "El campo de id debe tener un dato",
            },
            categoria: {
                required: "El campo de categoria debe tener un dato",
            },
            nombre: {
                required: "Debe asignarle un nombre al producto",
            },
            descripcion: {
                required: "Debe asignarle una descripcion al producto",
            },
            precio: {
                required: "Debe asignarle un valor al producto",
            },
            descuento: {
                required: "Asignele un descuento",
            },
            descuentooferta: {
                required: "Asignele un descuento",
            }
        },
    });
});