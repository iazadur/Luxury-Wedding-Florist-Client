import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../Shared/Title/Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits({orders}) {
  

const completeOrders = orders?.filter(o=>o.status === 'Delivered')
const totalAmmount = completeOrders?.map(c=>parseFloat(c.ammount)).reduce((a, b) => a + b, 0)
  return (
    <React.Fragment>
      
      <Title>All Complete Orders</Title> {/* //Recent Deposits */}
      <Typography component="p" variant="h4">
        ${totalAmmount}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1,mt:3 }}>
        {new Date().toLocaleString()}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}