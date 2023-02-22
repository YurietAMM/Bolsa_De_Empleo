﻿import { Table, Button } from "reactstrap";

const TablaVacantes = ({ dataVacantes, setAplicar, mostrarModal, setMostrarModal }) => {

    const enviarDatos = (vacante) => {
        setAplicar(vacante);
        setMostrarModal(!mostrarModal);
    };

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Cargo</th>
                    <th>Descripción</th>
                    <th>Empresa</th>
                    <th>Salario</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    (dataVacantes.length < 1) ? (
                        <tr>
                            <td colSpan="6">Sin registros</td>
                        </tr>
                    ) : (
                            dataVacantes.sort((a, b) => a.codigo - b.codigo),
                        dataVacantes.map((vacante, index) => (
                            <tr key={index}>
                                <td>{vacante.codigo}</td>
                                <td>{vacante.cargo}</td>
                                <td>{vacante.descripcion}</td>
                                <td>{vacante.empresa}</td>
                                <td>{vacante.salario}</td>
                                <td>
                                    <Button color="primary" className="me-2" onClick={() => enviarDatos(vacante)}>Aplicar</Button>
                                </td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </Table>
    );
}

export default TablaVacantes;
