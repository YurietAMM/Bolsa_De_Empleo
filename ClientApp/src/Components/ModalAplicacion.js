import React, { useState } from 'react';
import { Button, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input } from "reactstrap";

const modeloAplicacion = {
    idAplicacion: 0,
    idVacante: 0,
    idCiudadano: 0
};

const ModalAplicacion = ({ mostrarModalVacantes, setmostrarModalVacantes, guardarAplicacion, IdVacante, dataCiudadano }) => {

    const [aplicacion, setAplicacion] = useState(modeloAplicacion);

    const actualizardatos = (e) => {
        console.log(e.target.name + " : " + e.target.value);
        setAplicacion(
            {
                ...aplicacion,
                [e.target.name]: e.target.value
            }
        )
    }

    const enviarDatos = () => {
        guardarAplicacion(aplicacion);
        setAplicacion(modeloAplicacion);
    }

    const cerrarModal = () => {
        setAplicacion(modeloAplicacion);
        setmostrarModalVacantes(!mostrarModalVacantes);
    }

    return (
        <Modal isOpen={mostrarModalVacantes}>
            <ModalHeader> Aplicar a Cargo </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Id Vacante</Label>
                        <Input name='idVacante' value={IdVacante} readOnly/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Nombre del Ciudadano</Label>
                        <select name="idCiudadano" className="form-select" onChange={(e) => actualizardatos(e)} value={aplicacion.idCiudadano}>
                            <option value="">Seleccione un Ciudadano</option>
                            {dataCiudadano.map((ciudadano, index) => (
                                <option key={index} value={ciudadano.idCiudadano}>{ciudadano.nombres}</option>
                            ))}
                        </select>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" className="me-2" onClick={cerrarModal}>Cerrar</Button>
                <Button color="primary" onClick={enviarDatos}>Guardar</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalAplicacion;