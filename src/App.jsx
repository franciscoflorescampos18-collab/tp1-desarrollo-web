import { useState } from "react";
import FormularioMascota from "./components/FormularioMascota";
import ResumenMascota from "./components/ResumenMascota";
import CambioContrasenia from "./componentes/punto_1/cambio_contrasenia";
import "./App.css";

function App() {
    const [mascotaRegistrada, setMascotaRegistrada] = useState(null);

    const handleMascotaRegistrada = (mascota) => {
        setMascotaRegistrada(mascota);
    };

    return (
        <main className="app">

        <header className="encabezado">
            <div className="logo">🐾</div>

            <div>
                <h1>PetCare</h1>
                <p>Gestión de peluquería canina</p>
            </div>
        </header>

        <section className="contenedor">

            <FormularioMascota
                onMascotaRegistrada={handleMascotaRegistrada}
            />

            <ResumenMascota
                mascota={mascotaRegistrada}
            />

            <CambioContrasenia />

        </section>

        </main>
    );
}

export default App;