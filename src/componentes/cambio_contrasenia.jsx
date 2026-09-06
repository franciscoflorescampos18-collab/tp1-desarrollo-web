import { useState } from "react"

function CambioContrasenia() {

    const [contraseniaActual, setContraseniaActual] = useState ("")
    const [nuevaContrasenia, setNuevaContrasenia] = useState ("")
    const [confirmarContrasenia, setConfirmarContrasenia] = useState ("")
    const manejarCambio = (e) => {
        e.preventDefault()
        if (
            contraseniaActual === "" ||
            nuevaContrasenia === "" ||
            confirmarContrasenia === ""
        ) {
            alert ("Todos los campos son obligatorios")
            return
        }

        if (nuevaContrasenia.length < 8) {
            alert("La contraseña debe tener al menos 8 caracteres")
        return
        }

        if (!/[A-Z]/.test (nuevaContrasenia)) {
            alert ("La contraseña debe contener mayúsculas")
        return
        }

        if (!/[a-z]/.test(nuevaContrasenia)) {
            alert ("La contraseña debe contener minúsculas")
        return
        }

        if (!/[0-9]/.test (nuevaContrasenia)) {
            alert ("La contraseña debe contener números")
        return
        }

        if (nuevaContrasenia !== confirmarContrasenia) {
            alert("Las contraseñas no coinciden")
        return
        }
    }
    return (
        <div>
            <h1>Cambio de contraseña</h1>

            <form onSubmit={manejarCambio}>
                <div className="mb-3">
                    <label>Ingrese su contraseña actual</label>
                    <input type="password"
                    className="form-control" 
                    value={contraseniaActual} 
                    onChange={(e)=> setContraseniaActual(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label>Ingrese su contraseña nueva</label>
                    <input type="password"  
                    className="form-control"
                    value={nuevaContrasenia}
                    onChange={(e)=> setNuevaContrasenia(e.target.value)}
                    />
                    
                </div>

                <div className="mb-3">
                    <label>Confirmar contraseña</label>
                    <input type="password"  className="form-control"
                    value={confirmarContrasenia}
                    onChange={(e)=> setConfirmarContrasenia(e.target.value)}
                    />
                </div>

                <button  type="submit" className="btn btn-primary">
                    Cambiar contraseña
                </button>
        </form>
        </div>
    )
}
export default CambioContrasenia