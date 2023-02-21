import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import TablaCiudadanos from "./Components/TablaCiudadanos";
import ModalCiudadano from './Components/ModalCiudadano';

const App = () => {
    const [ciudadanos, setCiudadanos] = useState([]);
    const [tiposDocumento, setTiposDocumento] = useState([]);

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

    const mostrarTiposDocumento = async () => {
        const respuesta = await fetch("api/tipodocumento/ListarTipoDocumento");

        if (respuesta.ok) {
            const data = await respuesta.json();
            setTiposDocumento(data);
        }
        else {
            console.error("error en la lista de tipos de documentos");
        }
    }

    useEffect(() => {
        fetch('/api/tipodocumento/ListarTipoDocumento')
            .then(response => response.json())
            .then(data => setTiposDocumento(data));
    }, []);

    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5 className="text-center">Lista de Ciudadanos</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success">Registrar Ciudadano</Button>
                            <hr></hr>
                            <TablaCiudadanos dataCiudadanos={ciudadanos} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <ModalCiudadano dataTD={tiposDocumento} />
        </Container>
    );
}

export default App;