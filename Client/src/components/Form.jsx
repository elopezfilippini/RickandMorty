import validate     from './Validation';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Form(props){
const login = props.login
console.log(login)
const navigate =useNavigate()
const [userData,SetUserData] = useState({email:"",password:""})
const [error,setErrors] = useState({})
function HandleOnChange (e){
    console.log(e.target.name)
    const nombre = e.target.name;
    SetUserData({...userData,[nombre]: e.target.value});
    console.log (userData)
    setErrors(validate({...userData,[nombre]: e.target.value}))
}
function Handleclick(){
    navigate('/inicio')
}

const handleSubmit = event => {
    console.log("estoyclickeando")
    event.preventDefault();
    props.login(userData);
  }


return (
<form
>
<label style={{color:"black",fontSize:"1em"}}>Email : </label> <input style={{fontSize:"1em"}} name="email" onChange={HandleOnChange}></input>
<label style={{color:"black",fontSize:"1em"}} >    Password: </label> <input name="password"  type  ="password"onChange={HandleOnChange}></input>
<hr style={{margin:"15px"}}></hr>   
<a1 style={{color:"red"}}>{error.email ? error.email: null} </a1>
<a1 style={{color:"red"}}>{error.password ? error.password: null} </a1>
<br></br>
<button type="submit" style={{margin:"5px"}} onClick={handleSubmit}> Enviar </button>
</form>


)
}

/*En este ejercicio controlaremos y gestionaremos la información que ingrese el usuario en nuestro formulario. Para esto:
DONE : Crea un estado local llamado userData. Este debe inicializarse como un objeto con las propiedades email y password iguales a un string vacío.
Conecta tu estado local con los inputs correspondientes utilizando la propiedad value.
Crea una función llamada handleChange que nos permita reflejar el texto ingresado de los inputs en nuestro estado local.
*/