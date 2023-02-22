import React, { useEffect, useState } from 'react';
import { Input, Button, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Form } from "reactstrap";

const modeloCiudadano = {
    idCiudadano: 0,
    idTipoDocumento: 0,
    numeroDocumento: 0,
    nombres: "",
    apellidos: "",
    fechaNacimiento: new Date(),
    profesion: "",
    aspiracionSalarial: 0,
    correoElectronico: ""
};

const ModalCiudadano = ({ mostrarModal, setMostrarModal, guardarCiudadano, dataTD, editar, setEditar, editarCiudadano }) => {

    const [ciudadano, setCiudadano] = useState(modeloCiudadano);

    const actualizardatos = (e) => {
        console.log(e.target.name + " : " + e.target.value);
        setCiudadano(
            {
                ...ciudadano,
                [e.target.name] : e.target.value
            }
            )
    }

    const enviarDatos = () => {
        if (ciudadano.idCiudadano === 0) {
            guardarCiudadano(ciudadano);
        } else {
            editarCiudadano(ciudadano);
        }
        setCiudadano(modeloCiudadano);
    }

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal);
        setEditar(null);
    }

    useEffect(() => {
        if (editar != null) {
            setCiudadano(editar);
        } else {
            setCiudadano(modeloCiudadano);
        }
    }, [editar]);
    
    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader> {ciudadano.idCiudadano == 0 ? "Registrar Ciudadano" : "Editar Ciudadano"} </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Tipo de Documento</Label>
                        <select name="idTipoDocumento" className="form-select" onChange={(e) => actualizardatos(e)} value={ ciudadano.idTipoDocumento }>
                            {dataTD.map((tipoDocumento, index) => (
                                <option key={index} value={tipoDocumento.idTipoDocumento}>{tipoDocumento.nombre}</option>
                            ))}
                        </select>
                    </FormGroup>

                    <FormGroup>
                        <Label>Número de Documento</Label>
                        <Input name="numeroDocumento"onChange={(e) => actualizardatos(e)} value={ciudadano.numeroDocumento} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Nombres</Label>
                        <Input name="nombres" onChange={(e) => actualizardatos(e)} value={ciudadano.nombres} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Apellidos</Label>
                        <Input name="apellidos" onChange={(e) => actualizardatos(e)} value={ciudadano.apellidos} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Fecha de Nacimiento</Label>
                        <Input name="fechaNacimiento" onChange={(e) => actualizardatos(e)} value={ciudadano.fechaNacimiento} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Profesión</Label>
                        <Input name="profesion" onChange={(e) => actualizardatos(e)} value={ciudadano.profesion} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Aspiración Salarial COP</Label>
                        <Input name="aspiracionSalarial" onChange={(e) => actualizardatos(e)} value={ciudadano.aspiracionSalarial} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Correo Electrónico</Label>
                        <Input name="correoElectronico" onChange={(e) => actualizardatos(e)} value={ciudadano.correoElectronico} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" className="me-2" onClick={cerrarModal}>Cerrar</Button>
                <Button color="primary" onClick={ enviarDatos }>Guardar</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalCiudadano;
