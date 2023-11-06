import React from 'react';
import user from '../img/usuario.png'
import pass from '../img/contraseña.png'
import "../styles/init.css"

function SignIn() {
    return (
            <><div className="App">
            <div className='container'>
                <form>
                    <h1>Inicia Sesión</h1>
                    <div className="input-field">
                        <img className="icon" alt='userImg' src={user}></img>
                        <input type="text" placeholder="Usuario"></input>
                    </div>
                    <div className="input-field">
                        <img className="icon" alt='PassImg' src={pass}></img>
                        <input type="password" placeholder="Contraseña"></input>
                    </div>
                    <div className="check-field">
                        <input type='checkbox'></input>
                        <p style={{ color: "black" }}>Recuerdame</p>
                    </div>
                    <button type='submit' className='btn'>Iniciar Sesión</button>
                    <div >
                        <a href="#" className="forgotpass">¿Olvidaste la constraseña?</a>
                    </div>
                </form>
            </div>
            <p className='pcopy' style={{ textAlign: "center", fontSize: "small" }}>&copy; 2023 Todos los derechos reservados. A3 SERVICIOS DE TECNOLOGIA SA DE C.V.</p>
        </div><div>
            </div></>
    );
}

export default SignIn;