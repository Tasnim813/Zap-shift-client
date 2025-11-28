import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import useAuth from '../../Hook/useAuth';
import useAxiosServise from '../../Hook/useAxiosServise';
import Swal from 'sweetalert2';

const Rider = () => {
    const { register, handleSubmit, control } = useForm()
    const { user } = useAuth()
    const AxiosSecure = useAxiosServise()
    const ServiceCenter = useLoaderData()
    console.log(ServiceCenter)
    const regionsDuplicate = ServiceCenter.map(r => r.region)
    const regions = [...new Set(regionsDuplicate)]
    console.log(regions)
    const region = useWatch({ control, name: 'riderRegion' })

    const DistrictByRegion = region => {
        const regionsDistrict = ServiceCenter.filter(r => r.region === region)
        const district = regionsDistrict.map(d => d.district)
        return district;

    }

    const handleBeRider = (data) => {
        console.log(data)
        AxiosSecure.post('/riders', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Application has been Submitted",
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })


    }
    return (
        <div>
            <h1 className='text-4xl text-primary'>Be a rider</h1>
            <form onSubmit={handleSubmit(handleBeRider)}>


                {/* two column */}
                <div className=''>
                    {/* sender Details */}
                    <div>

                        <fieldset className="fieldset">
                            {/* Sender Name */}
                            <label className="label">Rider Name</label>
                            <input type="text" className="input" {...register('name')} defaultValue={user?.displayName} placeholder="Rider Name" />
                            {/* Sender Email */}
                            <label className="label">Rider Email</label>
                            <input type="email" className="input" {...register('RiderEmail')} defaultValue={user?.email} placeholder="Rider Email" />
                            {/* Sender Region */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Region</legend>
                                <select {...register('riderRegion')} defaultValue="Pick a Region" className="select">
                                    <option disabled={true}>Pick a Region</option>
                                    {
                                        regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                    }


                                    {/* <option>Safari</option> */}
                                </select>
                            </fieldset>
                            {/* Sender district */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">District</legend>
                                <select {...register('riderDistrict')} defaultValue="Pick a district" className="select">
                                    <option disabled={true}>Pick a district</option>
                                    {
                                        DistrictByRegion(region).map((d, i) => <option key={i} value={d}>{d}</option>)
                                    }


                                    {/* <option>Safari</option> */}
                                </select>

                                {/* rider NID */}
                                <label className="label">NID</label>
                                <input type="text" className="input" {...register('NID')} placeholder="NID" />
                                {/* rider license*/}
                                <label className="label">License</label>
                                <input type="text" className="input" {...register('License')} placeholder="License" />


                            </fieldset>
                        </fieldset>
                    </div>


                </div>
                <input className='btn btn-primary' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Rider;