import { Table } from "reactstrap";

const TablaCiudadanos = ({ ciudadanos }) => {
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
                </tr>
            </thead>
            <tbody>
                {ciudadanos.map((ciudadano, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{ciudadano.tipoDocumento}</td>
                        <td>{ciudadano.numeroDocumento}</td>
                        <td>{ciudadano.nombres}</td>
                        <td>{ciudadano.apellidos}</td>
                        <td>{ciudadano.fechaNacimiento}</td>
                        <td>{ciudadano.profesion}</td>
                        <td>{ciudadano.aspiracionSalarial}</td>
                        <td>{ciudadano.correoElectronico}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default TablaCiudadanos;