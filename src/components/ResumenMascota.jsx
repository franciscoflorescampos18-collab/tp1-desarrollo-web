function ResumenMascota({ mascota }) {
  if (!mascota) {
    return (
      <div className="resumen vacio">
        <h2>Resumen</h2>
        <p>
          Todavía no se registró ninguna mascota.
        </p>
      </div>
    );
  }

  return (
    <div className="resumen">
      <div className="resumen-header">
        <span className="icono">🐶</span>

        <div>
          <h2>{mascota.nombre}</h2>
          <p>Registro realizado correctamente</p>
        </div>
      </div>

      <div className="datos">
        <div className="dato">
          <span>Raza</span>
          <strong>{mascota.raza}</strong>
        </div>

        <div className="dato">
          <span>Edad</span>
          <strong>{mascota.edad} años</strong>
        </div>

        <div className="dato">
          <span>Teléfono</span>
          <strong>{mascota.telefono}</strong>
        </div>

        <div className="dato">
          <span>Bozal</span>
          <strong>
            {mascota.bozal ? "Sí" : "No"}
          </strong>
        </div>

        <div className="dato">
          <span>Golosinas</span>
          <strong>
            {mascota.golosinas ? "Sí" : "No"}
          </strong>
        </div>

        <div className="dato">
          <span>Foto</span>
          <strong>
            {mascota.foto || "No seleccionada"}
          </strong>
        </div>
      </div>
    </div>
  );
}

export default ResumenMascota;