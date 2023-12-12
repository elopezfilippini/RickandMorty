import React from "react";
export default function validate(input){

    console.log("input en validate", input)
const validacionMail= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const contienenumero=  /\d/

const errors = {}
if (!input.email)  errors.email = "Debe Ingresar un mail"     
else if  (!validacionMail.test(input.email))  errors.email = "Por favor, ingrese un mail correcto."     
else if (!contienenumero.test(input.password))  errors.password = "La contraseña debe tener al menos un número"     
else if (input.password.length <6)  errors.password = "La contraseña debe tener mas de 6 Caracteres"     
else if (input.password.length >13)  errors.password = "La contraseña debe tener menos de 13 Caracteres"     
return errors
}