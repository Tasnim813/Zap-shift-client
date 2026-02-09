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
          <input type="text" {...register('parcelWeight')} className="input w-full" placeholder="Parcel Weight (KG)" />
           </fieldset>

            </div>
            {/* two column */}
            <div>
                {/* Sender Info */}
                <div>
    
                </div>
                {/* receiver Info */}
                <div>

                </div>
            </div>
            <input type="submit" className='btn btn-primary text-secondary' value="Submit" />
        </form>
        </div>
    );
};

export default SendParcel;