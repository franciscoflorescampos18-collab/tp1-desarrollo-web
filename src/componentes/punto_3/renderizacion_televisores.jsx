import { useState } from "react";

    const televisores = [
        { id: 1, marca: "Samsung", pulgadas: 55, sistema_operativo: "Tizen", wifi: false },
        { id: 2, marca: "LG", pulgadas: 65, sistema_operativo: "webOS", wifi: false },
        { id: 3, marca: "Sony", pulgadas: 50, sistema_operativo: "Google TV", wifi: false },
        { id: 4, marca: "TCL", pulgadas: 43, sistema_operativo: "Android TV", wifi: false },
        { id: 5, marca: "Hisense", pulgadas: 32, sistema_operativo: "VIDAA", wifi: false },
        { id: 6, marca: "Philips", pulgadas: 58, sistema_operativo: "SAPHI", wifi: false },
        { id: 7, marca: "Xiaomi", pulgadas: 43, sistema_operativo: "Android TV", wifi: false },
        { id: 8, marca: "Samsung", pulgadas: 75, sistema_operativo: "Tizen", wifi: true },
        { id: 9, marca: "LG", pulgadas: 32, sistema_operativo: "webOS", wifi: true },
        { id: 10, marca: "Panasonic", pulgadas: 55, sistema_operativo: "My Home Screen", wifi: false },
        { id: 11, marca: "TCL", pulgadas: 65, sistema_operativo: "Roku TV", wifi: true },
        { id: 12, marca: "Sony", pulgadas: 85, sistema_operativo: "Google TV", wifi: true },
        { id: 13, marca: "Hisense", pulgadas: 50, sistema_operativo: "Google TV", wifi: true },
        { id: 14, marca: "Philips", pulgadas: 65, sistema_operativo: "Android TV", wifi: true },
        { id: 15, marca: "BGH", pulgadas: 43, sistema_operativo: "Android TV", wifi: false },
        { id: 16, marca: "Noblex", pulgadas: 32, sistema_operativo: "VIDAA", wifi: false },
        { id: 17, marca: "RCA", pulgadas: 40, sistema_operativo: "Android TV", wifi: false },
        { id: 18, marca: "Samsung", pulgadas: 43, sistema_operativo: "Tizen", wifi: true },
        { id: 19, marca: "LG", pulgadas: 55, sistema_operativo: "webOS", wifi: true },
        { id: 20, marca: "Xiaomi", pulgadas: 55, sistema_operativo: "Google TV", wifi: true },
        { id: 21, marca: "Sony", pulgadas: 65, sistema_operativo: "Google TV", wifi: true },
        { id: 22, marca: "TCL", pulgadas: 50, sistema_operativo: "Google TV", wifi: true },
        { id: 23, marca: "Hisense", pulgadas: 43, sistema_operativo: "VIDAA", wifi: true },
        { id: 24, marca: "Panasonic", pulgadas: 43, sistema_operativo: "Android TV", wifi: true },
        { id: 25, marca: "Hitachi", pulgadas: 32, sistema_operativo: "Android TV", wifi: false },
        { id: 26, marca: "Samsung", pulgadas: 50, sistema_operativo: "Tizen", wifi: true },
        { id: 27, marca: "LG", pulgadas: 77, sistema_operativo: "webOS", wifi: true },
        { id: 28, marca: "Philips", pulgadas: 50, sistema_operativo: "Google TV", wifi: true },
        { id: 29, marca: "TCL", pulgadas: 32, sistema_operativo: "Android TV", wifi: true },
        { id: 30, marca: "Sony", pulgadas: 55, sistema_operativo: "Google TV", wifi: true },
        { id: 31, marca: "Hisense", pulgadas: 75, sistema_operativo: "VIDAA", wifi: true },
        { id: 32, marca: "Noblex", pulgadas: 50, sistema_operativo: "Google TV", wifi: true },
        { id: 33, marca: "BGH", pulgadas: 55, sistema_operativo: "Android TV", wifi: true },
        { id: 34, marca: "RCA", pulgadas: 32, sistema_operativo: "Roku TV", wifi: true },
        { id: 35, marca: "Xiaomi", pulgadas: 65, sistema_operativo: "Google TV", wifi: true },
        { id: 36, marca: "Samsung", pulgadas: 65, sistema_operativo: "Tizen", wifi: true },
        { id: 37, marca: "LG", pulgadas: 43, sistema_operativo: "webOS", wifi: true },
        { id: 38, marca: "Sharp", pulgadas: 50, sistema_operativo: "Android TV", wifi: false },
        { id: 39, marca: "JVC", pulgadas: 32, sistema_operativo: "Linux OS", wifi: false },
        { id: 40, marca: "TCL", pulgadas: 75, sistema_operativo: "Google TV", wifi: true },
        { id: 41, marca: "Hisense", pulgadas: 65, sistema_operativo: "Google TV", wifi: true },
        { id: 42, marca: "Philips", pulgadas: 75, sistema_operativo: "Android TV", wifi: true },
        { id: 43, marca: "Sony", pulgadas: 75, sistema_operativo: "Google TV", wifi: true },
        { id: 44, marca: "Samsung", pulgadas: 85, sistema_operativo: "Tizen", wifi: true },
        { id: 45, marca: "LG", pulgadas: 83, sistema_operativo: "webOS", wifi: true },
        { id: 46, marca: "Noblex", pulgadas: 43, sistema_operativo: "Android TV", wifi: true },
        { id: 47, marca: "BGH", pulgadas: 65, sistema_operativo: "Google TV", wifi: true },
        { id: 48, marca: "Hitachi", pulgadas: 50, sistema_operativo: "Android TV", wifi: true },
        { id: 49, marca: "Xiaomi", pulgadas: 75, sistema_operativo: "Google TV", wifi: true },
        { id: 50, marca: "Hyundai", pulgadas: 40, sistema_operativo: "Android TV", wifi: false },
    ];

function CatalogoTelevisores() {
    const [seccionActiva, setSeccionActiva] = useState("sin_wifi");

    return (
        <div className="w-100 py-5" style={{ backgroundColor: "#0f172a", minHeight: "100vh" }}>
            <div className="container">
            
            <div className="text-center mb-5">
                <span className="badge px-3 py-2 rounded-pill text-uppercase mb-2" style={{ backgroundColor: "#0369a1", color: "#e0f2fe", fontWeight: "600" }}>
                Smart TV Store
                </span>
                    <h1 className="fw-bold display-5 text-white">Catálogo de Smart TVs</h1>
            </div>

            <div className="d-flex justify-content-center mb-5">
                <div className="p-1 rounded-4 d-inline-flex flex-wrap justify-content-center gap-1 shadow" style={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}>
                    <button
                        className={`btn btn-sm px-4 py-2 rounded-3 fw-semibold border-0 ${
                            seccionActiva === "sin_wifi" ? "text-white shadow-sm" : "text-secondary"
                    }`}
                        style={{
                            backgroundColor: seccionActiva === "sin_wifi" ? "#0284c7" : "transparent", transition: "all 0.2s ease"
                    }}
                        onClick={() => setSeccionActiva("sin_wifi")}
                    >
                        Sin WiFi
                    </button>

                    <button
                        className={`btn btn-sm px-4 py-2 rounded-3 fw-semibold border-0 ${
                            seccionActiva === "google_tv" ? "text-white shadow-sm" : "text-secondary"
                    }`}
                        style={{
                            backgroundColor: seccionActiva === "google_tv" ? "#0284c7" : "transparent", transition: "all 0.2s ease"
                    }}
                        onClick={() => setSeccionActiva("google_tv")}
                    >
                        Google TV
                    </button>

                    <button
                    className={`btn btn-sm px-4 py-2 rounded-3 fw-semibold border-0 ${
                        seccionActiva === "samsung_wifi" ? "text-white shadow-sm" : "text-secondary"
                }`}
                style={{
                    backgroundColor: seccionActiva === "samsung_wifi" ? "#0284c7" : "transparent", transition: "all 0.2s ease"
                }}
                onClick={() => setSeccionActiva("samsung_wifi")}
                >
                    Samsung + WiFi
                </button>
            </div>
            </div>

            <div className="row g-4">
                {televisores.map((tv) => {


                    if (seccionActiva === "sin_wifi" && tv.wifi === true) {
                    return null;
                }

                    if (seccionActiva === "google_tv" && tv.sistema_operativo !== "Google TV") {
                    return null;
                }

                    if (seccionActiva === "samsung_wifi" && (tv.marca !== "Samsung" || tv.wifi === false)) {
                    return null;
                }

                return (
                    <div key={tv.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100 rounded-4 overflow-hidden shadow" style={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}>
                    
                    <div className="px-4 pt-4 pb-3 d-flex justify-content-between align-items-center" style={{ backgroundColor: "#0f172a", borderBottom: "1px solid #334155" }}>
                        <span className="fw-bold fs-5 text-white">{tv.marca}</span>
                        <span className="badge rounded-pill fs-6 px-3 py-1" style={{ backgroundColor: "#312e81", color: "#e0e7ff", fontWeight: "600" }}>
                            {tv.pulgadas}"
                        </span>
                    </div>

                    <div className="card-body p-4 d-flex flex-column justify-content-between">
                        <div className="mb-3">
                            <div className="d-flex align-items-center mb-2">
                                <span className="text-secondary small me-2">Sistema:</span>
                                <span className="fw-semibold text-light">{tv.sistema_operativo}</span>
                            </div>
                        </div>

                        <div className="pt-3 border-top d-flex justify-content-between align-items-center" style={{ borderColor: "#334155" }}>
                            <span className="small text-secondary">Conectividad:</span>
                                {tv.wifi ? (
                            <span className="badge rounded-pill px-3 py-1" style={{ backgroundColor: "#14532d", color: "#bbf7d0", border: "1px solid #166534" }}>
                                Con WiFi
                            </span>
                        ) : (
                                <span className="badge rounded-pill px-3 py-1" style={{ backgroundColor: "#7f1d1d", color: "#fecaca", border: "1px solid #991b1b" }}>
                                    Sin WiFi
                                </span>
                        )}
                        </div>
                    </div>

                    </div>
                </div>
                );
            })}
            </div>

        </div>
        </div>
    );
}

export default CatalogoTelevisores;