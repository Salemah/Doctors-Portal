import * as React from 'react';
import Grid from '@mui/material/Grid';
import Calendar from '../../Shared/Calender/Calender';
import Appointments from '../Appoinements/Appointments';

const Dashboardhoe = () => {
    const [date, setdate] = React.useState(new Date())
    return (
        <div>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <Calendar date={date}
               setdate={setdate}></Calendar>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Appointments date={date}></Appointments>
            </Grid>
            
          </Grid>
          
        </div>
    );
};

export default Dashboardhoe;