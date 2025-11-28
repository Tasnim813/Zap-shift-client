import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosServise from '../../../Hook/useAxiosServise';
import Loading from '../../Loading/Loading';
import { useParams } from 'react-router';
import useAuth from '../../../Hook/useAuth';

const Payment = () => {
    const { parcelId } = useParams();
    const axiosSecure = useAxiosServise();
    const {user}=useAuth()

    const { isLoading, data: parcel } = useQuery({
        queryKey: ['parcels', parcelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${parcelId}`);
            return res.data;
        }
    });
    const handlePayment =async () => {
        const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            senderEmail: parcel.SenderEmail || parcel.senderEmail|| user.email,
            parcelName: parcel.ParcelName,
        }

        const res=await axiosSecure.post('/create-checkout-session',paymentInfo);
        console.log(res.data)
        window.location.href=res.data.url;

    }

    if (isLoading) return <Loading />;

    return (
        <div>
            <h1>Please pay ${parcel.cost} for: {parcel?.ParcelName}</h1>
            <button onClick={handlePayment} className='btn btn-primary text-black'>Pay</button>
        </div>
    );
};

export default Payment;
