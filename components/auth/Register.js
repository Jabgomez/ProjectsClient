import React, { useState, useEffect, useContext, use } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext'

const Register = () => {
    const router = useRouter();

    //Importar Context
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, registrarUsuario } = authContext;

    useEffect(()=>{
        if(autenticado){
            router.push('/proyectos')
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }

    },[mensaje, autenticado]);

    //State
    const [user, setUser] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    })

    //Extraer state
    const {email, password, nombre, confirmar} = user;

    const HandleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        //Validar campos vacios
        if (nombre.trim()==='' || email.trim()==='' || password.trim()==='' || confirmar.trim()==='') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        //Password de 8 caracteres
        if (password.length < 8) {
            mostrarAlerta('La contraseña debe ser de al menos 8 caracteres', 'alerta-error');
            return;
        }

        //Password iguales
        if(password !== confirmar) {
            mostrarAlerta('La contraseña no coincide', 'alerta-error');
            return;
        }
        
        //Pasarlo al action
        registrarUsuario({
            nombre,
            email,
            password
        })
    }

    return (  
        <div className="form-usuario">
            { alerta ? (<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Registro</h1> <br/>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" placeholder="ex: Jhon Doe" onChange={HandleChange} value={nombre}/>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="ex: correo@email.com" onChange={HandleChange} value={email}/>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" id="password" placeholder="*******" onChange={HandleChange} value={password}/>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar contraseña</label>
                        <input type="password" name="confirmar" id="confirmar" placeholder="*******" onChange={HandleChange} value={confirmar}/>
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrarme"/>
                    </div>
                </form>
                <Link href="/login"><a className="enlace-cuenta">Volver a iniciar sesión</a></Link>
            </div>
        </div>
    );
}
 
export default Register;