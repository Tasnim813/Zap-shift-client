import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosServise from '../../../Hook/useAxiosServise';

const paymentSucces = () => {
    const [searchParams]=useSearchParams()
    const sessionId= searchParams.get('session_id')
    console.log(sessionId)
    const axiosSecure=useAxiosServise()

    useEffect(()=>{
        if(sessionId){
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
            .then(res=>{
                console.log(res.data)
            })

        }

    },[sessionId,axiosSecure])
    return (
        <div>
            <h1>Payment succes here</h1>        </div>
    );
};

export default paymentSucces;