import { Container, Grid } from '@mui/material';

import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctor,setDoctor] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/doctors')
        .then(res=>res.json())
        .then(data=>{setDoctor(data)})

    },[doctor])
    return (
        <div>
           <Container>
                <Grid container spacing={2}>
                    {
                        doctor.map(doctor => <Doctor
                            key={doctor._id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Doctors;