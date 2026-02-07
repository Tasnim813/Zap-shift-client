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
            <form onSubmit={handleSubmit(handleSendParcel)} className='mt-12 p-4'>
            
            {/* parcel type */}
            <div>
                <label className="label mr-4">
                    <input type="radio" {...register('parcelType')} value="document" className="radio" defaultChecked />
                    Document</label>
                <label className="label">
                    <input type="radio" {...register('parcelType')} value="non-document" className="radio"  />
                    Not-Document</label>

            </div>
            {/* parcel Info name weight */}
            <div>

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