
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosServise from '../../../Hook/useAxiosServise';
import { FaTrash, FaUserCheck } from 'react-icons/fa';
import { MdPersonRemoveAlt1 } from 'react-icons/md';
import { IoPersonRemove } from 'react-icons/io5';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const ApproveRider = () => {
   
    const axiosSecure = useAxiosServise()
    const { refetch, data: riders = [] } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders')
            return res.data;

        }
    })
    const updateRiderStatus=(rider,status)=>{
         const updateInfo = { status: status,email:rider.email }
        axiosSecure.patch(`/riders/${rider._id}`, updateInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Ridder has been Approved",
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })

    }

    const handleApproval =rider => {
        updateRiderStatus(rider,'approved')
    }

    const handleRejection=rider=>{
        updateRiderStatus(rider,'rejected')

    }

    return (
        <div>
            <h1 className='text-5xl font-bold text-center'>Approve here:{riders.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>

                            <th>District</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            riders.map((rider, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{rider.name}</td>
                                <td>{rider.RiderEmail}</td>
                                <td>{rider.riderDistrict}</td>
                                <td><p className={`${rider.status==='approved' ? 'text-green-500': 'text-red-500'}`}>{rider.status}</p></td>
                                <td>
                                    <button onClick={() => handleApproval(rider)} className='btn'>
                                        <FaUserCheck />

                                    </button>
                                    <button onClick={()=>handleRejection(rider)} className='btn'>
                                        <IoPersonRemove />

                                    </button>
                                    <button className='btn'>
                                        <FaTrash />

                                    </button>
                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApproveRider;