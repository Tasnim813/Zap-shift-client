import React from 'react';
import { Link } from 'react-router';

const paymentCancelled = () => {
    return (
        <div>
            <h1>Payment Cancelled Please try again</h1>
            <Link to={'/dashboard/my-parcels'} className='btn btn-primary text-black'>Try Again</Link>
        </div>
    );
};

export default paymentCancelled;