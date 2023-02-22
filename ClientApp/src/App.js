import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import TablaCiudadanos from "./Components/TablaCiudadanos";
import ModalCiudadano from './Components/ModalCiudadano';
import TablaVacantes from './Components/TablaVacantes';

const App = () => {
    const [ciudadanos, setCiudadanos] = useState([]);
    const [tiposDocumento, setTiposDocumento] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [editar, setEditar] = useState(null);
    const [vacantes, setVacantes] = useState([]);
    const [aplicar, setAplicar] = useState(null);
    const [mostrarModalVacantes, setmostrarModalVacantes] = useState(false);

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
            console.log(data);
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


    const guardaCiudadano = async (ciudadano) => {
        try {
            const respuesta = await fetch("api/ciudadano/GuardarCiudadano", {
                method: 'POST',
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
                                dataVacantes={vacantes}
                                setAplicar={setAplicar}
                                mostrarModalVacantes={mostrarModalVacantes}
                                setmostrarModalVacantes={setmostrarModalVacantes} />
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
        </div>
        
    );
}

export default App;