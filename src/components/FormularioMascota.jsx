import { useState } from "react";

function FormularioMascota({ onMascotaRegistrada }) {
  const [mascota, setMascota] = useState({
    nombre: "",
    fechaNacimiento: "",
    raza: "",
    foto: "",
    telefono: "",
    bozal: false,
    golosinas: false,
  });

  const [mensaje, setMensaje] = useState("");

  const calcularEdad = (fechaNacimiento) => {
    if (!fechaNacimiento) return "";

    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (
      mes < 0 ||
      (mes === 0 && hoy.getDate() < nacimiento.getDate())
    ) {
      edad--;
    }

    return edad;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setMascota({
        ...mascota,
        [name]: checked,
      });
    } else if (type === "file") {
      const archivo = files[0];

      setMascota({
        ...mascota,
        foto: archivo ? archivo.name : "",
      });
    } else {
      setMascota({
        ...mascota,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !mascota.nombre ||
      !mascota.fechaNacimiento ||
      !mascota.raza ||
      !mascota.telefono
    ) {
      setMensaje("Completá todos los campos obligatorios.");
      return;
    }

    const mascotaCompleta = {
      ...mascota,
      edad: calcularEdad(mascota.fechaNacimiento),
    };

    onMascotaRegistrada(mascotaCompleta);

    setMensaje("Mascota registrada correctamente.");

    setMascota({
      nombre: "",
      fechaNacimiento: "",
      raza: "",
      foto: "",
      telefono: "",
      bozal: false,
      golosinas: false,
    });
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2>Alta de mascota</h2>
        <p>Registrá los datos de la mascota</p>
      </div>

      <div className="campo">
        <label htmlFor="nombre">Nombre</label>

        <input
          type="text"
          id="nombre"
          name="nombre"
          value={mascota.nombre}
          onChange={handleChange}
          placeholder="Ej: Toby"
        />
      </div>

      <div className="fila">
        <div className="campo">
          <label htmlFor="fechaNacimiento">
            Fecha de nacimiento
          </label>

          <input
            type="date"
            id="fechaNacimiento"
            name="fechaNacimiento"
            value={mascota.fechaNacimiento}
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label htmlFor="edad">Edad</label>

          <input
            type="text"
            id="edad"
            value={
              mascota.fechaNacimiento
                ? `${calcularEdad(mascota.fechaNacimiento)} años`
                : ""
            }
            placeholder="Se calcula automáticamente"
            readOnly
          />
        </div>
      </div>

      <div className="campo">
        <label htmlFor="raza">Raza</label>

        <input
          type="text"
          id="raza"
          name="raza"
          value={mascota.raza}
          onChange={handleChange}
          placeholder="Ej: Caniche"
        />
      </div>

      <div className="campo">
        <label htmlFor="foto">Foto</label>

        <input
          type="file"
          id="foto"
          name="foto"
          accept="image/*"
          onChange={handleChange}
        />

        {mascota.foto && (
          <small>Archivo seleccionado: {mascota.foto}</small>
        )}
      </div>

      <div className="campo">
        <label htmlFor="telefono">Teléfono de contacto</label>

        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={mascota.telefono}
          onChange={handleChange}
          placeholder="Ej: 387 555 1234"
        />
      </div>

      <div className="opciones">
        <label className="checkbox">
          <input
            type="checkbox"
            name="bozal"
            checked={mascota.bozal}
            onChange={handleChange}
          />

          <span>Necesita bozal</span>
        </label>

        <label className="checkbox">
          <input
            type="checkbox"
            name="golosinas"
            checked={mascota.golosinas}
            onChange={handleChange}
          />

          <span>Puede consumir golosinas</span>
        </label>
      </div>

      <button type="submit" className="btn-registrar">
        Registrar mascota
      </button>

      {mensaje && (
        <p className="mensaje">{mensaje}</p>
      )}
    </form>
  );
}

export default FormularioMascota;