import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Select, Option, Input, Button } from "reactstrap";

const ModalCiudadano = ({ dataTD }) => {
    return (
        <Modal isOpen={true}>
            <ModalHeader>Reagistrar Ciudadano</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Tipo de Documento</Label>
                        <select className="form-select">
                            {dataTD.map((tipoDocumento, index) => (
                                <option key={index} value={tipoDocumento.IdTipoDocumento}>{tipoDocumento.Nombre}</option>
                            ))}
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <Label>Número de Documento</Label>
                        <Input type="number" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Nombres</Label>
                        <Input type="text" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Apellidos</Label>
                        <Input type="text" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Fecha de Nacimiento</Label>
                        <Input type="text" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Profesión</Label>
                        <Input type="text" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Aspiración Salarial COP</Label>
                        <Input type="number" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Correo Electronico</Label>
                        <Input type="email" />
                    </FormGroup>
                    <ModalFooter>
                        <Button color="danger" className="me-2">Cerrar</Button>
                        <Button color="primary">Guardar</Button>
                    </ModalFooter>
                </Form>
            </ModalBody>
        </Modal>
    );
}

export default ModalCiudadano;
