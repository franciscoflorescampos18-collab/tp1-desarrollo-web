import { useState } from "react"

function CambioContrasenia() {

    const [contraseniaActual, setContraseniaActual] = useState ("")
    const [nuevaContrasenia, setNuevaContrasenia] = useState ("")
    const [confirmarContrasenia, setConfirmarContrasenia] = useState ("")

    const [errorActual, setErrorActual] = useState("")
    const [errorNueva, setErrorNueva] = useState ("")
    const [errorConfirmar, setErrorConfirmar] = useState ("")

    const [verActual, setVerActual] = useState (false)
    const [verNueva, setVerNueva] = useState (false)
    const [verConfirmar, setVerConfirmar] = useState (false)
    

    const manejarCambio = (e) => {
        e.preventDefault()

        setErrorActual("")
        setErrorNueva("")
        setErrorConfirmar("")

        if (contraseniaActual === ""){
            setErrorActual("Este campo es obligatorio")
        }
        if (nuevaContrasenia === "") {
            setErrorNueva("Este campo es obligatorio")
        }
        if (confirmarContrasenia === "") {
            setErrorConfirmar ("Este campo es obligatorio")
        }
        if (
            contraseniaActual === "" ||
            nuevaContrasenia === "" ||
            confirmarContrasenia === ""
        ) {
            return
        }


        if (nuevaContrasenia.length < 8) {
            setErrorNueva("La contraseña debe tener al menos 8 caracteres")
            return
        }

        if (!/[A-Z]/.test (nuevaContrasenia)) {
            setErrorNueva("La contraseña debe contener mayúsculas")
            return
        }

        if (!/[a-z]/.test(nuevaContrasenia)) {
            setErrorNueva("La contraseña debe contener minúsculas")
            return
        }

        if (!/[0-9]/.test(nuevaContrasenia)) {
            setErrorNueva("La contraseña debe contener números")
            return
        }

        if (!/[!@#$%^&*]/.test(nuevaContrasenia)) {
            setErrorNueva("La contraseña debe contener al menos un símbolo")
            return
        }

        if (nuevaContrasenia !== confirmarContrasenia) {
            setErrorConfirmar("Las contraseñas no coinciden")
            return
        }

        alert ("Contraseña cambiada correctamente")
    }

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center p-3"
        style={{ backgroundColor: "#0a111e" }}>

            <div className="card mx-auto" style={{ maxWidth: "500px" }}>

                <div className="card-body">

                    <h1 className="card-title text-center mb-4">
                        Cambiar contraseña
                    </h1>

                    <form onSubmit={manejarCambio}>

                        <div className="mb-3">

                            <label className="form-label">
                                Ingrese su contraseña actual
                            </label>

                            <div className="position-relative">

                                <input
                                    type={verActual ? "text" : "password"}
                                    className={`form-control pe-5 ${errorActual ? "is-invalid" : ""}`}
                                    value={contraseniaActual}
                                    onChange={(e)=> {setContraseniaActual(e.target.value)
                                    setErrorActual("")
                                    } }
                                />
                                
                                <button
                                    type="button"
                                    className="btn border-0 p-0 position-absolute top-50 end-0 translate-middle-y me-3 bg-transparent"
                                    onClick={() => setVerActual(!verActual)}
                                >
                                    {verActual ? (
                                        <i className="bi bi-eye-slash"></i>
                                    ) : (
                                        <i className="bi bi-eye"></i>
                                    )}
                                </button>

                            </div>
                            {errorActual && (
                                    <div className="text-danger">
                                        {errorActual}
                                    </div>
                            )}
                        </div>

                        <div className="mb-3">

                            <label className="form-label">
                                Ingrese su contraseña nueva
                            </label>

                            <div className="position-relative">

                                <input
                                    type={verNueva ? "text" : "password"}
                                    className={`form-control pe-5 ${errorActual ? "is-invalid" : ""}`}
                                    value={nuevaContrasenia}
                                    onChange={(e)=> {setNuevaContrasenia(e.target.value)
                                        setErrorNueva("")
                                    } }
                                    
                                />

                                <button
                                    type="button"
                                    className="btn border-0 p-0 position-absolute top-50 end-0 translate-middle-y me-3 bg-transparent"
                                    onClick={() => setVerNueva(!verNueva)}
                                >
                                    {verNueva ? (
                                        <i className="bi bi-eye-slash"></i>
                                    ) : (
                                        <i className="bi bi-eye"></i>
                                    )}
                                </button>

                            </div>

                            {errorNueva && (
                                <div className="text-danger">
                                    {errorNueva}
                                </div>
                            )}

                        </div>

                        <div className="mb-3">

                            <label className="form-label">
                                Confirmar contraseña
                            </label>

                            <div className="position-relative">

                                <input
                                    type={verConfirmar ? "text" : "password"}
                                    className={`form-control pe-5 ${errorActual ? "is-invalid" : ""}`}
                                    value={confirmarContrasenia}
                                    onChange={(e)=> { 
                                        setConfirmarContrasenia(e.target.value)
                                        setErrorConfirmar("")
                                    }}
                                />

                                <button
                                    type="button"
                                    className="btn border-0 p-0 position-absolute top-50 end-0 translate-middle-y me-3 bg-transparent z-3"
                                    onClick={() => setVerConfirmar(!verConfirmar)}
                                >
                                    {verConfirmar ? (
                                        <i className="bi bi-eye-slash"></i>
                                    ) : (
                                        <i className="bi bi-eye"></i>
                                    )}
                                </button>

                            </div>

                            {errorConfirmar && (
                                <div className="text-danger">
                                    {errorConfirmar}
                                </div>
                            )}

                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Cambiar contraseña
                        </button>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default CambioContrasenia

