import React from 'react';
import { useForm } from 'react-hook-form';

const SendParcel = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()

    const handleSendParcel=(data)=>{
        console.log(data)

    }
    return (
        <div>
            <h1>Send A Parcel</h1>
            <p>Enter your parcel details</p>
            <form onSubmit={handleSubmit(handleSendParcel)} className='mt-12 p-4 text-black'>
            
            {/* parcel type */}
            <div >
                <label className="label mr-4">
                    <input type="radio" value='document' {...register('parcelType')} className="radio" defaultChecked />
                    Document</label>
                <label className="label">
                    <input type="radio" value='Not-document' {...register('parcelType')} className="radio"  />
                    Not-Document</label>
            </div>
            {/* parcel Info name weight */}
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-8'>
                <fieldset className="fieldset">
          <label className="label">ParcelName</label>
          <input type="text" {...register('parcelName')} className="input w-full" placeholder="Parcel Name" />
           </fieldset>
                <fieldset className="fieldset">
          <label className="label">Parcel Weight (KG)</label>
          <input type="Number" {...register('parcelWeight')} className="input w-full" placeholder="Parcel Weight (KG)" />
           </fieldset>

            </div>
            {/* two column */}
            <div  className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                {/* Sender Info */}
                
                   <div>
                     <h4 className='text-3xl font-bold'>Sender Details</h4>
                     <fieldset className="fieldset">
                        {/* sender Name */}
          <label className="label">Sender Name</label>
          <input type="text" {...register('senderName')} className="input w-full" placeholder="Sender Name" />
          {/* sender address */}
          <label className="label">Sender Address</label>
          <input type="text" {...register('senderAddress')} className="input w-full" placeholder="Sender Address" />
          {/* sender districts */}
          <label className="label">Sender District</label>
          <input type="text" {...register('senderDistrict')} className="input w-full" placeholder="Sender District" />
          {/* sender NUmber */}
          <label className="label">Sender Phone No</label>
          <input type="text" {...register('senderPhoneNo')} className="input w-full" placeholder="Sender Phone No" />
          {/* Pickup Instruction*/}
          <label className="label">Pickup Instruction</label>
          <input type="text" {...register('PickupInstruction')} className="input w-full" placeholder="Pickup Instruction" />
           </fieldset> 
                    </div>  
                {/* receiver Info */}
                   <div>
                    <h4 className='text-3xl font-bold'>Receiver Details</h4>
                    <fieldset className="fieldset">
                        {/* sender Name */}
          <label className="label">Sender Name</label>
          <input type="text" {...register('senderName')} className="input w-full" placeholder="Sender Name" />
          {/* sender address */}
          <label className="label">Sender Address</label>
          <input type="text" {...register('senderAddress')} className="input w-full" placeholder="Sender Address" />
          {/* sender districts */}
          <label className="label">Sender District</label>
          <input type="text" {...register('senderDistrict')} className="input w-full" placeholder="Sender District" />
          {/* sender NUmber */}
          <label className="label">Sender Phone No</label>
          <input type="text" {...register('senderPhoneNo')} className="input w-full" placeholder="Sender Phone No" />
          {/* Pickup Instruction*/}
          <label className="label">Pickup Instruction</label>
          <input type="text" {...register('PickupInstruction')} className="input w-full" placeholder="Pickup Instruction" />
           </fieldset>
                   </div>
                
            </div>
            <input type="submit" className='btn btn-primary text-secondary' value="Submit" />
        </form>
        </div>
    );
};

export default SendParcel;