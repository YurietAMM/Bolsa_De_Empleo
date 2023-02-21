import { Button } from "bootstrap";
import { Table } from "reactstrap";

const TablaCiudadanos = ({ dataCiudadanos }) => {
    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tipo de Documento</th>
                    <th>Número de Documento</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Profesión</th>
                    <th>Aspiración Salarial</th>
                    <th>Correo Electrónico</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    (dataCiudadanos.length < 1) ? (
                        <tr>
                            <td colSpan="10">Sin registros</td>
                        </tr>
                    ) : (
                            dataCiudadanos.map((ciudadano, index) => (
                                <tr key={ciudadano.IdCiudadano}>
                                    <td>{ciudadano.IdCiudadano}</td>
                                    <td>{ciudadano.tipoDocumento}</td>
                                    <td>{ciudadano.numeroDocumento}</td>
                                    <td>{ciudadano.nombres}</td>
                                    <td>{ciudadano.apellidos}</td>
                                    <td>{ciudadano.fechaNacimiento}</td>
                                    <td>{ciudadano.profesion}</td>
                                    <td>{ciudadano.aspiracionSalarial}</td>
                                    <td>{ciudadano.correoElectronico}</td>
                                    <td>
                                        <Button color="primary" className="me-2">Editar</Button>
                                        <Button color="danger">Eliminar</Button>
                                    </td>
                                </tr>
                            ))
                            )
                }
            </tbody>
        </Table>
    );
}

export default TablaCiudadanos;