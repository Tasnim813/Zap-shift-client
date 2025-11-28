import React from 'react';
import useAuth from '../../../Hook/useAuth';
import useAxiosServise from '../../../Hook/useAxiosServise';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const {user}=useAuth()
    const axiosSecure=useAxiosServise()
    const {data :payments =[]}=useQuery({
        queryKey:['payments', user.email],
        queryFn: async()=>{
            const res= await  axiosSecure.get(`payments?email=${user.email}`)
            return res.data;
        }
    })
    
    return (
        <div>
            <h1 className='text-5xl font-bold text-center'> Payment History :{payments.length} </h1>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Amount</th>
        <th>Paid Time</th>
        <th>Transaction Id</th>
      </tr>
    </thead>
    <tbody>
    {
        payments.map((payment,index)=> <tr  key={payment._id}>
        <th>{index+1}</th>
        <td>Cy Ganderton</td>
        <td>${payment.amount}</td>
        <td>{payment.paidAt}</td>
        <td>{payment.transactionId}</td>
      </tr>)
    }
     
     
     
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default PaymentHistory;