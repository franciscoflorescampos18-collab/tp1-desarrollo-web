import { useState } from "react"
import EncabezadoContrasenia from "./encabezados"
import CampoContrasenia from "./campoContraseña"
import BotonCambio from "./botonCambio"

function CambioContrasenia() {

    const [contraseniaActual, setContraseniaActual] = useState("")
    const [nuevaContrasenia, setNuevaContrasenia] = useState("")
    const [confirmarContrasenia, setConfirmarContrasenia] = useState("")

    const [errorActual, setErrorActual] = useState("")
    const [errorNueva, setErrorNueva] = useState("")
    const [errorConfirmar, setErrorConfirmar] = useState("")

    const [verActual, setVerActual] = useState(false)
    const [verNueva, setVerNueva] = useState(false)
    const [verConfirmar, setVerConfirmar] = useState(false)


    const manejarCambio = (e) => {

        e.preventDefault()

        setErrorActual("")
        setErrorNueva("")
        setErrorConfirmar("")

        if (contraseniaActual === "") {
            setErrorActual("Este campo es obligatorio")
        }

        if (nuevaContrasenia === "") {
            setErrorNueva("Este campo es obligatorio")
        }

        if (confirmarContrasenia === "") {
            setErrorConfirmar("Este campo es obligatorio")
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

        if (!/[A-Z]/.test(nuevaContrasenia)) {
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

        alert("Contraseña cambiada correctamente")
    }


    return (
        <div
            className="min-vh-100 w-100 d-flex align-items-center justify-content-center p-3"
            style={{
                backgroundColor: "#0a111e",
                minWidth: "100vw"
            }}
        >

            <div
                className="card shadow-lg text-white border-0"
                style={{
                    maxWidth: "450px",
                    width: "100%",
                    backgroundColor: "#182232",
                    borderRadius: "12px",
                    boxShadow: "0 0 20px rgba(0, 210, 255, 0.15)"
                }}
            >

                <div className="card-body p-4">

                    <EncabezadoContrasenia />

                    <form onSubmit={manejarCambio}>

                        <CampoContrasenia
                            label="Ingrese su contraseña actual"
                            valor={contraseniaActual}
                            setValor={setContraseniaActual}
                            error={errorActual}
                            setError={setErrorActual}
                            ver={verActual}
                            setVer={setVerActual}
                        />

                        <CampoContrasenia
                            label="Ingrese su contraseña nueva"
                            valor={nuevaContrasenia}
                            setValor={setNuevaContrasenia}
                            error={errorNueva}
                            setError={setErrorNueva}
                            ver={verNueva}
                            setVer={setVerNueva}
                        />

                        <CampoContrasenia
                            label="Confirmar contraseña"
                            valor={confirmarContrasenia}
                            setValor={setConfirmarContrasenia}
                            error={errorConfirmar}
                            setError={setErrorConfirmar}
                            ver={verConfirmar}
                            setVer={setVerConfirmar}
                        />

                        <BotonCambio />

                    </form>

                </div>

            </div>

        </div>
    )
}

export default CambioContrasenia

