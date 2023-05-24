$(document).ready(function () {
  $("#formulario-registro").validate({
    rules: {
      rut: {
        required: true,
      },
      nombres: {
        required: true,
      },
      apellidos: {
        required: true,
      },
      correo: {
        required: true,
        email: true,
      },
      direccion: {
        required: true,
      },
      password: {
        required: true,
        minlength: 5,
      },
      password2: {
        required: true,
        minlength: 5,
        equalTo: "#password",
      },
    }, // --> Fin de reglas
    messages: {
      rut: {
        required: "El campo rut debe tener un valor",
      },
      nombres: {
        required: "El nombre debe tener un valor valido",
      },
      apellidos: {
        required: "El apellido debe tener un valor valido",
      },
      correo: {
        required: "El email es un campo requerido",
        email: "El email no cumple el formato de un correo",
      },
      direccion: {
        required: "La direccion debe ser valida"
      },
      password: {
        required: "La contraseña es una campo obligatorio",
        minlength: "Mínimo 5 caracteres",
      },
      password2: {
        required: "Repita la contraseña anterior",
        equalTo: "Debe ser igual al campo contraseña",
      },
    },
  });
});