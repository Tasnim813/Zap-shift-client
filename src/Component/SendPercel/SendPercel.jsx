import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosServise from '../../Hook/useAxiosServise';
import useAuth from '../../Hook/useAuth';

const SendPercel = () => {
    const { register, handleSubmit ,control} = useForm()
     const {user}=useAuth()
    const AxiosSecure=useAxiosServise()

    const ServiceCenter=useLoaderData()
    console.log(ServiceCenter)
    const regionsDuplicate=ServiceCenter.map(r=>r.region)
    const regions=[...new Set(regionsDuplicate)]
    console.log(regions)
    const senderRegion=useWatch({control,name:'senderRegion'})
    const receiverRegion=useWatch({control, name:'receiverRegion'})
    const DistrictByRegion=region=>{
        const regionsDistrict=ServiceCenter.filter(r=>r.region===region)
        const district=regionsDistrict.map(d=>d.district)
        return district;

    }
 
    const handleSendParcel = (data) => {
        console.log(data)
        const isDocument=data.parcelType==='document';
        const isSameDistrict=data.senderDistrict===data.receiverDistrict;
        const ParcelWeight=parseFloat(data.ParcelWeight)
        let cost=0;
        if(isDocument){
            cost=isSameDistrict? 60:80;
        }
        else{
            if(ParcelWeight <3){
                cost =isSameDistrict ? 110:150;

            }
            else{
                const minCharge=isSameDistrict? 110:150;
                const extraWight=ParcelWeight-3;
                const extraCharge= isSameDistrict? extraWight*40 : extraWight*40+40;
                cost =minCharge+extraCharge

            }
        }

        console.log('Cost',cost)
        data.cost=cost
        Swal.fire({
  title: "Are you sure?",
  text: `You will be Charger ${cost} taka `,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes"
}).then((result) => {
  if (result.isConfirmed) {
    AxiosSecure.post('/parcels',data)
    .then(res=>{
        console.log('After saving data',res.data)
    })
    Swal.fire({
      title: "Parcel Success",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
        

    }
    return (
        <div>
            <h1>Send A Parcel</h1>
            <form onSubmit={handleSubmit(handleSendParcel)}>
                {/* document */}
                <div>
                    <label className="label">
                        <input type="radio" value="document" {...register('parcelType')} className="radio" defaultChecked />
                        Document
                    </label>
                    <label className="label">
                        <input type="radio" value="non-document" {...register('parcelType')} className="radio" />
                        NON-Document
                    </label>

                </div>
                {/* Info */}
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <fieldset className="fieldset">
                        <label className="label">Parcel Name</label>
                        <input type="text" className="input" {...register('ParcelName')} placeholder="Parcel Name" />

                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Parcel Weight (KG)</label>
                        <input type="Number" className="input" {...register('ParcelWeight')} placeholder="Parcel Weight" />

                    </fieldset>

                </div>
                {/* two column */}
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    {/* sender Details */}
                    <div>

                        <fieldset className="fieldset">
                            {/* Sender Name */}
                            <label className="label">Sender Name</label>
                            <input type="text" className="input" {...register('SenderName')} defaultValue={user?.displayName} placeholder="Sender Name" />
                            {/* Sender Email */}
                            <label className="label">Sender Email</label>
                            <input type="email" className="input" {...register('SenderEmail')} defaultValue={user?.email} placeholder="Sender Email" />
                            {/* Sender Region */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Region</legend>
                                <select {...register('senderRegion')} defaultValue="Pick a Region" className="select">
                                    <option disabled={true}>Pick a Region</option>
    {
        regions.map((r,i)=><option key={i} value={r}>{r}</option>)
    }

                                  
                                   {/* <option>Safari</option> */}
                                </select>              
                            </fieldset>
                            {/* Sender district */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">District</legend>
                                <select {...register('senderDistrict')} defaultValue="Pick a district" className="select">
                                    <option disabled={true}>Pick a district</option>
    {
        DistrictByRegion(senderRegion).map((d,i)=><option key={i} value={d}>{d}</option>)
    }

                                  
                                   {/* <option>Safari</option> */}
                                </select>              
                            </fieldset>
                         

                            {/* Pickup Instruction */}

                            <label className="label">Pickup Instruction</label>
                            <input type="text" className="input" {...register('PickupInstruction')} placeholder="Pickup Instruction" />

                        </fieldset>
                    </div>
                    {/* Receiver Details */}
                    <div>
                        {/* Receiver Name */}
                        <fieldset className="fieldset">
                            <label className="label">Receiver Name</label>
                            <input type="text" className="input" {...register('ReceiverName')} placeholder="Receiver Name" />
                            {/* Receiver Email */}
                            <label className="label">Receiver Email</label>
                            <input type="email" className="input" {...register('ReceiverEmail')} placeholder="Receiver Email" />

              {/* Sender Region */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Region</legend>
                                <select {...register('receiverRegion')} defaultValue="Pick a Region" className="select">
                                    <option disabled={true}>Pick a Region</option>
    {
        regions.map((r,i)=><option key={i} value={r}>{r}</option>)
    }

                                  
                                   {/* <option>Safari</option> */}
                                </select>              
                            </fieldset>

                  {/* Sender district */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">District</legend>
                                <select {...register('receiverDistrict')} defaultValue="Pick a district" className="select">
                                    <option disabled={true}>Pick a district</option>
    {
        DistrictByRegion(receiverRegion).map((d,i)=><option key={i} value={d}>{d}</option>)
    }

                                  
                                   {/* <option>Safari</option> */}
                                </select>              
                            </fieldset>
             
                       

                            {/* Delivery Instruction */}

                            <label className="label">Delivery Instruction</label>
                            <input type="text" className="input" {...register('DeliveryInstruction')} placeholder="Delivery Instruction" />

                        </fieldset>




                    </div>
                </div>
                <input className='btn btn-primary' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SendPercel;