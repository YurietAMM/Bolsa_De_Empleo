import { Table, Button } from "reactstrap";

const TablaAplicaciones = ({ dataAplicaciones }) => {

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Vacante</th>
                    <th>Ciudadano</th>
                </tr>
            </thead>
            <tbody>
                {
                    (dataAplicaciones.length < 1) ? (
                        <tr>
                            <td colSpan="10">Sin registros</td>
                        </tr>
                    ) : (
                            dataAplicaciones.sort((a, b) => a.idAplicacion - b.idCiudadano),
                            dataAplicaciones.map((aplicacion, index) => (
                            <tr key={index}>
                                    <td>{aplicacion.idAplicacion}</td>
                                    <td>{aplicacion.idVacante}</td>
                                    <td>{aplicacion.idCiudadano}</td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </Table>
    );
}

export default TablaAplicaciones;