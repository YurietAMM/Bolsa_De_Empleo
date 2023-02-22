import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import TablaCiudadanos from "./Components/TablaCiudadanos";
import ModalCiudadano from './Components/ModalCiudadano';

const App = () => {
    const [ciudadanos, setCiudadanos] = useState([]);
    const [tiposDocumento, setTiposDocumento] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [editar, setEditar] = useState(null);

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

    //const mostrarTiposDocumento = async () => {
    //    const respuesta = await fetch("api/tipodocumento/ListarTipoDocumento");

    //    if (respuesta.ok) {
    //        const data = await respuesta.json();
    //        setTiposDocumento(data);
    //    }
    //    else {
    //        console.error("error en la lista de tipos de documentos");
    //    }
    //}

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