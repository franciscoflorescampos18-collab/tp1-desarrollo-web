function CampoContrasenia({
    label,
    valor,
    setValor,
    error,
    setError,
    ver,
    setVer
}) {
    return (
        <div className="mb-3">

            <label className="form-label text-light">
                {label}
            </label>

            <div className="position-relative">

                <input
                    type={ver ? "text" : "password"}
                    className={`form-control bg-dark text-white border-secondary pe-5 ${
                        error ? "is-invalid" : ""
                    }`}
                    value={valor}
                    onChange={(e) => {
                        setValor(e.target.value)
                        setError("")
                    }}
                    style={{
                        backgroundColor: "#0f172a",
                        borderColor: "#334155",
                        backgroundImage: "none"
                    }}
                />

                <button
                    type="button"
                    className="btn border-0 p-0 position-absolute top-50 end-0 translate-middle-y me-3 bg-transparent text-secondary z-3"
                    onClick={() => setVer(!ver)}
                >
                    {ver ? (
                        <i className="bi bi-eye-slash"></i>
                    ) : (
                        <i className="bi bi-eye"></i>
                    )}
                </button>

            </div>

            {error && (
                <div className="text-danger small mt-1">
                    {error}
                </div>
            )}

        </div>
    )
}

export default CampoContrasenia