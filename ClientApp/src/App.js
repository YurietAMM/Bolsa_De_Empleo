import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import TablaCiudadanos from "./Components/TablaCiudadanos";

const App = () => {
    const [ciudadanos, setCiudadanos] = useState([]);

    const handleRegistrarCiudadano = () => {
        // abrir formulario de registro de ciudadano
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5 className="text-center">Lista de Ciudadanos</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success" onClick={handleRegistrarCiudadano}>Registrar Ciudadano</Button>
                            <hr></hr>
                            <TablaCiudadanos ciudadanos={ciudadanos} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default App;