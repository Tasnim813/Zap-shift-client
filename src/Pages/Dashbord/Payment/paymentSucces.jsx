import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosServise from '../../../Hook/useAxiosServise';

const paymentSucces = () => {
    const [searchParams]=useSearchParams()
    const [paymentInfo,setPaymentInfo]=useState({})
    const sessionId= searchParams.get('session_id')
    console.log(sessionId)
    const axiosSecure=useAxiosServise()

    useEffect(()=>{
        if(sessionId){
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
            .then(res=>{
                console.log(res.data)
                setPaymentInfo({
                    transactionId:res.data.transactionId,
                    trackingId:res.data.trackingId,
                })
            })

        }

    },[sessionId,axiosSecure])
    return (
        <div>
            <h1>Payment succes here</h1> 
            <p>Your Transaction ID : {paymentInfo.transactionId}</p>
            <p>Your parcel Tracking Id:{paymentInfo.trackingId}</p>

                </div>
    );
};

export default paymentSucces;