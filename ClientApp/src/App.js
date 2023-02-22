import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import TablaCiudadanos from "./Components/TablaCiudadanos";
import ModalCiudadano from './Components/ModalCiudadano';
import TablaVacantes from './Components/TablaVacantes';
import ModalAplicacion from './Components/ModalAplicacion';
import TablaAplicaciones from './Components/TablaAplicaciones';

const App = () => {
    const [ciudadanos, setCiudadanos] = useState([]);
    const [tiposDocumento, setTiposDocumento] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [editar, setEditar] = useState(null);

    const [vacantes, setVacantes] = useState([]);
    const [aplicar, setAplicar] = useState(null);
    const [mostrarModalVacantes, setmostrarModalVacantes] = useState(false);

    const [aplicaciones, setAplicaciones] = useState([]);
    const [idVacante, setIdVacante] = useState();

    const mostrarAplicaciones = async () => {
        const respuesta = await fetch("api/aplicacion/ListarAplicaciones");

        if (respuesta.ok) {
            const data = await respuesta.json();
            setAplicaciones(data);
        }
        else {
            console.error("error en la lista de aplicaciones");
        }
    }

    useEffect(() => {
        mostrarAplicaciones();
    }, []);

    const mostrarCiudadanos = async () => {
        const respuesta = await fetch("api/ciudadano/ListarCiudadanos");

        if (respuesta.ok) {
            const data = await respuesta.json();
            setCiudadanos(data);
        }
        else { 
            console.error("error en la lista de ciudadanos");
        }
    }

    useEffect(() => {
        mostrarCiudadanos();
    }, []);

    const mostrarVacantes = async () => {
        const respuesta = await fetch("api/vacante/ListarVacantes");

        if (respuesta.ok) {
            const data = await respuesta.json();
            setVacantes(data);
        }
        else {
            console.error("error en la lista de vacantes ofertadas");
        }
    }

    useEffect(() => {
        mostrarVacantes();
    }, []);

    useEffect(() => {
        fetch('/api/tipodocumento/ListarTipoDocumento')
            .then(response => response.json())
            .then(data => {
                setTiposDocumento(data);
            });
    }, []);

    const guardarAplicacion = async (aplicacion) => {
        try {
            const respuesta = await fetch("api/aplicacion/GuardarAplicacion", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(aplicacion)
            })

            if (respuesta.ok) {
                setMostrarModal(!mostrarModalVacantes);
                mostrarCiudadanos();
            }
        }
        catch (e) { console.error(e); }
    }
    const guardaCiudadano = async (ciudadano) => {
        try {
            const respuesta = await fetch("api/ciudadano/GuardarCiudadano", { method: 'POST', headers: {'Content-Type': 'application/json;charset=utf-8'},
                body: JSON.stringify(ciudadano)
            })

            if (respuesta.ok) {
                setMostrarModal(!mostrarModal);
                mostrarCiudadanos();
            }
        }
        catch (e) { console.error(e); }
    }

    const editaCiudadano = async (ciudadano) => {
        try {
            const respuesta = await fetch("api/ciudadano/EditarCiudadano", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(ciudadano)
            })

            if (respuesta.ok) {
                setMostrarModal(!mostrarModal);
                mostrarCiudadanos();
            }
        }
        catch (e) { console.error(e); }
    }

    const eliminaCiudadano = async (idCiudadano) => {

        try {
            var response = window.confirm("desea eliminar el ciudadano");

            if (!response) {
                return;
            }

            const respuesta = await fetch("api/ciudadano/EliminarCiudadano/" + idCiudadano, {
                method: 'DELETE',

            })

            if (respuesta.ok) {
                setMostrarModal(!mostrarModal);
                mostrarCiudadanos();
            }
        }
        catch (e) { console.error(e); }
    }

    return (
        <div className="container-fluid">
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5 className="text-center">Lista de Ciudadanos</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success"
                                onClick={() => setMostrarModal(!mostrarModal)}
                            >Registrar Ciudadano</Button>
                            <hr></hr>
                            <TablaCiudadanos
                                setEditar={setEditar}
                                mostrarModal={mostrarModal}
                                setMostrarModal={setMostrarModal}
                                dataCiudadanos={ciudadanos}
                                eliminaCiudadano={eliminaCiudadano}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5 className="text-center">Lista de Vacantes Ofertadas</h5>
                        </CardHeader>
                        <CardBody>
                            <TablaVacantes
                                setIdVacante={setIdVacante}
                                dataVacantes={vacantes}
                                setAplicar={setAplicar}
                                mostrarModalVacantes={mostrarModalVacantes}
                                setmostrarModalVacantes={setmostrarModalVacantes} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5 className="text-center">Lista de Vacantes Aplicadas</h5>
                        </CardHeader>
                        <CardBody>
                            <TablaAplicaciones dataAplicaciones={aplicaciones} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <ModalCiudadano dataTD={tiposDocumento} mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                guardarCiudadano={guardaCiudadano}
                editar={editar}
                setEditar={setEditar}
                editarCiudadano={editaCiudadano}
            />
            <ModalAplicacion IdVacante={idVacante} dataCiudadano={ciudadanos} mostrarModalVacantes={mostrarModalVacantes} setmostrarModalVacantes={setmostrarModalVacantes} guardarAplicacion={guardarAplicacion} />
        </div>
        
    );
}

export default App;