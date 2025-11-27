import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hook/useAuth';
import useAxiosServise from '../../../Hook/useAxiosServise';

const MyParcel = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosServise();

    // const { data: parcels = [] } = useQuery({
    //     queryKey: ['myParcel', user?.email],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
    //         return res.data;
    //     },
       
    // });

    const {data : parcels=[]}=useQuery({
        queryKey:['my-parcels', user?.email ],
        queryFn: async ()=>{
            const res= await axiosSecure.get(`/parcels?email=${user.email}`)
            return res.data;

        }
    })

    return (
        <div>
            <h1>My parcel here: {parcels.length}</h1>
        </div>
    );
};

export default MyParcel