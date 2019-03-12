import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Tabla extends Component {
    constructor(props) {
        super(props);
        this.rows = props.rows;
    }

    render() {
        return(

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre de Clase</TableCell>
                            <TableCell align="right">Parcial I</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.nombreClase}
                                </TableCell>
                                <TableCell align="right">
                                    {row.nota}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
        );
    }
}

export default Tabla;