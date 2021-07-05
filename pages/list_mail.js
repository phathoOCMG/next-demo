import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import PersistentDrawerLeft from '../components/PersistentDrawerLeft';

import Axios from "axios";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
}
const rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
    createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];


export async function getStaticProps() {

    let res = await Axios.get('http://192.168.30.107/mail_ebay/Thongke/get_list/2021-07-02');
    let data = await res.data
    return {
        props: {
            Orders: data
        }
    }
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Orders({ Orders }) {
    const classes = useStyles();
    console.log(Orders);
    return (
        <React.Fragment>
            <PersistentDrawerLeft />
            <Container maxWidth="sm">
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Ship To</TableCell>
                            <TableCell>Payment Method</TableCell>
                            <TableCell >Sale Amount</TableCell>
                            <TableCell align="right">Sale Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Orders.map((row) => (
                            <TableRow key={row.acc_id}>
                                <TableCell>{row.acc_name}</TableCell>
                                <TableCell>{row.code_status}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.mess}</TableCell>
                                <TableCell>{row.other}</TableCell>
                                <TableCell>{row.save}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>
        </React.Fragment>
    );
}
