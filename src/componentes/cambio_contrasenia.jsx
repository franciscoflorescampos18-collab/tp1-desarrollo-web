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
        <div className="min-vh-100 w-100 d-flex align-items-center justify-content-center p-3"
        style={{ backgroundColor: "#0a111e", minWidth: "100vw"}}>

            <div className="card shadow-lg text-white border-0" 
            style={{ 
                maxWidth: "450px", 
                width: "100%", 
                backgroundColor: "#182232", 
                borderRadius: "12px",
                boxShadow: "0 0 20px rgba(0, 210, 255, 0.15)" 
            }}>

                <div className="card-body p-4">

                    <div className="text-center mb-4">
                        <h2 className="fw-bold" style={{ color: "#00d2ff", letterSpacing: "1px"}}>
                            V-MAX
                        </h2>
                        <h5 className= "text-light">Cambio de contraseña</h5>
                    </div>

                    <form onSubmit={manejarCambio}>

                        <div className="mb-3">

                            <label className="form-label text-light">
                                Ingrese su contraseña actual
                            </label>

                            <div className="position-relative">

                                <input
                                    type={verActual ? "text" : "password"}
                                    className={`form-control pe-5 bg-dark text-white border-secondary pe-5 ${errorActual ? "is-invalid" : ""}`}
                                    value={contraseniaActual}
                                    onChange={(e)=> {setContraseniaActual(e.target.value)
                                    setErrorActual("")
                                    } }
                                    style={{ backgroundColor: "#0f172a", borderColor: "#334155", backgroundImage: 'none'}}
                                />
                                
                                <button
                                    type="button"
                                    className="btn border-0 p-0 position-absolute top-50 end-0 translate-middle-y me-3 bg-transparent text-secondary z-3"
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
                                    <div className="text-danger small mt-1">
                                        {errorActual}
                                    </div>
                            )}
                        </div>

                        <div className="mb-3">

                            <label className="form-label text-light">
                                Ingrese su contraseña nueva
                            </label>

                            <div className="position-relative">

                                <input
                                    type={verNueva ? "text" : "password"}
                                    className={`form-control bg-dark text-white border-secondary pe-5 ${errorNueva ? "is-invalid" : ""}`}
                                    value={nuevaContrasenia}
                                    onChange={(e)=> {setNuevaContrasenia(e.target.value)
                                        setErrorNueva("")
                                    } }
                                    style={{ backgroundColor: "#0f172a", borderColor: "#334155", backgroundImage: 'none'}}
                                    
                                />

                                <button
                                    type="button"
                                    className="btn border-0 p-0 position-absolute top-50 end-0 translate-middle-y me-3 bg-transparent text-secondary z-3"
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
                                <div className="text-danger small mt-1">
                                    {errorNueva}
                                </div>
                            )}

                        </div>

                        <div className="mb-3">

                            <label className="form-label text-light">
                                Confirmar contraseña
                            </label>

                            <div className="position-relative">

                                <input
                                    type={verConfirmar ? "text" : "password"}
                                    className={`form-control bg-dark text-white border-secondary pe-5 ${errorConfirmar ? "is-invalid" : ""}`}
                                    value={confirmarContrasenia}
                                    onChange={(e)=> { 
                                        setConfirmarContrasenia(e.target.value)
                                        setErrorConfirmar("")
                                    }}
                                    style={{ backgroundColor: "#0f172a", borderColor: "#334155", backgroundImage: 'none' }}
                                />

                                <button
                                    type="button"
                                    className="btn border-0 p-0 position-absolute top-50 end-0 translate-middle-y me-3 bg-transparent text-secondary z-3"
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
                                <div className="text-danger small mt-1">
                                    {errorConfirmar}
                                </div>
                            )}

                        </div>

                        <button type="submit" className="btn w-100 fw-bold mt-3 text-dark"
                        style={{
                            backgroundColor: "#00d2ff", 
                            borderColor: "#00d2ff",
                            boxShadow: "0 0 10px rgba(0, 210, 255, 0.4)"
                        }}      
                        >
                            Cambiar contraseña
                        </button>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default CambioContrasenia

