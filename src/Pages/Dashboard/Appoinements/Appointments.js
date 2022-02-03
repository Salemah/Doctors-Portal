import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UseAuth from '../../../Hook/UseAuth';
const Appointments = ({date}) => {
    const { user } = UseAuth();
    const [appointments, setAppointments] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/appointments?email=${user.email}&date=${date}`)
        .then(res=>res.json())
        .then(data =>setAppointments(data))
    },[date]);
        console.log(date);



    return (
        <div>
             <h2>Appointments: {appointments.length}</h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Action</TableCell>
           
          </TableRow>
        </TableHead>
      <TableBody>
          {appointments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientName}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.time}</TableCell>

            </TableRow>
          ))}
        </TableBody> 
      </Table>
    </TableContainer>
        </div>
    );
};

export default Appointments;