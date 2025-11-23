import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const SendPercel = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm()
    const Servicecenter = useLoaderData()
    // console.log(Servicecenter)
    const RegionsDuplicate = Servicecenter.map(c => c.region)
    const Regions = [...new Set(RegionsDuplicate)]
    const SenderRegion = useWatch({ control, name: 'senderRegion' })
    const ReceiverRegion = useWatch({ control, name: 'ReceiverRegion' })


    const districtByRegion = Region => {
        const regionDistrict = Servicecenter.filter(c => c.region === Region)

        const district = regionDistrict.map(d => d.district)
        return district;
    }

    const handleSendPercel = data => {
        console.log(data)
        const isDocument = data.parcelType === 'document'
        const issameDistrict = data.SenderDistrict === data.ReceiverDistrict;
        const ParcelWeight = parseInt(data.ParcelWeight)

        let cost = 0;
        if (isDocument) {
            cost = issameDistrict ? 60 : 80;
        }
        else{
            if(ParcelWeight <3){
                cost=issameDistrict?110:150;

            }
            else{
                const minCharge=issameDistrict?110:150;
                const extraWeight=ParcelWeight -3;
                const extraCharge=issameDistrict? extraWeight*40:extraWeight*40+40;
                cost=minCharge+extraCharge;

            }
        }

        console.log('cost',cost)
        Swal.fire({
  title: "Agree with the cost",
  text: `You will be charged ${cost} TK`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, take it!"
}).then((result) => {
  if (result.isConfirmed) {
    // Swal.fire({
    //   title: "Deleted!",
    //   text: "Your file has been deleted.",
    //   icon: "success"
    // });
  }
});


    }
    return (
        <div>
            <h1 className='text-5xl font-bold'>Send A Parcel</h1>
            <form onSubmit={handleSubmit(handleSendPercel)} className='mt-10 p-4 text-black' >
                {/* percel Type */}
                <div >
                    <label className="label">
                        <input type="radio" {...register('parcelType')} value="document" className="radio" defaultChecked />
                        Document</label>

                    <label className="label ml-4">
                        <input type="radio" {...register('parcelType')} value="non-document" className="radio" />
                        NoN-Document</label>

                </div>
                {/* parcel Info :name;height */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <fieldset className="fieldset ">
                        <label className="label">Parcel Name</label>
                        <input type="text" {...register('ParcelName')} className="input w-full" placeholder="Parcel Name" />

                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Parcel Weight (Kg)</label>
                        <input type="number" {...register('ParcelWeight')} className="input w-full" placeholder="Parcel Weight" />

                    </fieldset>

                </div>
                {/* two column */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    {/* Sender Info */}

                    <fieldset className="fieldset mt-10">
                        <h1 className='text-2xl font-bold'>Sender Details</h1>
                        {/* Sender Name */}
                        <label className="label ">Sender Name</label>
                        <input type="text" {...register('SenderName')} className="input w-full" placeholder="Sender Name" />
                        {/* Sender email */}
                        <label className="label ">Sender Email</label>
                        <input type="email" {...register('SenderEmail')} className="input w-full" placeholder="Sender Email" />
                        {/* Sender Region */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Sender Regions</legend>
                            <select {...register('senderRegion')} defaultValue="Pick a region" className="select">
                                <option disabled={true}>Pick a browser</option>

                                {
                                    Regions.map((r, i) => <option key={i} value={r} >{r}</option>)
                                }
                            </select>

                        </fieldset>
                        {/* Sender Dictrict */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Sender District</legend>
                            <select {...register('SenderDistrict')} defaultValue="Pick a district" className="select">
                                <option disabled={true}>Pick a district</option>

                                {
                                    districtByRegion(SenderRegion).map((r, i) => <option key={i} value={r} >{r}</option>)
                                }
                            </select>

                        </fieldset>


                        {/* Sender Address */}
                        <label className="label mt-5">Address</label>
                        <input type="text" {...register('Address')} className="input w-full" placeholder="Address" />

                        {/* Sender Phone No */}
                        <label className="label mt-5">Sender Phone No</label>
                        <input type="text" {...register('SenderPhoneNo')} className="input w-full" placeholder="Sender Phone No" />

                        {/* Pickup Instruction */}
                        <label className="label mt-5">Pickup Instruction</label>
                        <input type="text" {...register('PickupInstruction')} className="input w-full" placeholder="Pickup Instruction" />

                    </fieldset>
                    {/* Receiver Info */}
                    <fieldset className="fieldset mt-10">
                        <h1 className='text-2xl font-bold'>Receiver Details</h1>
                        {/* Sender Name */}
                        <label className="label ">Receiver Name</label>
                        <input type="text" {...register('ReceiverName')} className="input w-full" placeholder="Receiver Name" />
                        {/*Receiver email */}
                        <label className="label ">Receiver Email</label>
                        <input type="email" {...register('ReceiverEmail')} className="input w-full" placeholder="Receiver Email" />

                        {/* Receiver Region */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Receiver Regions</legend>
                            <select {...register('ReceiverRegion')} defaultValue="Pick a region" className="select">
                                <option disabled={true}>Pick a browser</option>

                                {
                                    Regions.map((r, i) => <option key={i} value={r} >{r}</option>)
                                }
                            </select>

                        </fieldset>
                        {/* Receiver district*/}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Receiver District</legend>
                            <select {...register('ReceiverDistrict')} defaultValue="Pick a district" className="select">
                                <option disabled={true}>Pick a district</option>

                                {
                                    districtByRegion(ReceiverRegion).map((d, i) => <option key={i} value={d}>{d}</option>)
                                }
                            </select>

                        </fieldset>
                        {/* Sender Address */}
                        <label className="label mt-5">Receiver Address</label>
                        <input type="text" {...register('Address')} className="input w-full" placeholder="Address" />

                        {/* Sender Phone No */}
                        <label className="label mt-5">Receiver Contact No</label>
                        <input type="text" {...register('ReceiverContactNo')} className="input w-full" placeholder="Receiver Contact No" />

                        {/* Pickup Instruction */}
                        <label className="label mt-5">Delivery Instruction</label>
                        <input type="text" {...register('DeliveryInstruction')} className="input w-full" placeholder="Delivery Instruction" />

                    </fieldset>
                </div>
                <input className='btn btn-primary text-black' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SendPercel;