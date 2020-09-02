import React, {useContext} from 'react';
import {useRouter} from 'next/router'

//Components
import AuthContext from '../../context/autenticacion/authContext'

const Header = () => {
    const router = useRouter();

    //Importar context
    const authContext = useContext(AuthContext);
    const { usuario, cerrarSesion } = authContext;

    return (  
        <header className="app-header">
            {usuario? <p className="nombre-usuario">Hola <span>{usuario.nombre}</span></p> : null }
            <nav className="nav-principal">
                <button className="btn btn-blank cerrar-sesion" onClick={()=>{
                    cerrarSesion();
                    router.push('/login');
                    }}>Cerrar sesión</button>
            </nav>
        </header>
    );
}
 
export default Header;