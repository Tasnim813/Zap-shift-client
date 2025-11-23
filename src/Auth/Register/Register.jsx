import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hook/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { registerUser,updateUserProfile } = useAuth()
    const location=useLocation()
    const navigate=useNavigate()
    const handleRegister = (data) => {
        console.log('after register', data.photo[0])
        const profileImg=data.photo[0]
        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                // store the image and get the photo url
                const formData=new FormData()
                formData.append('image',profileImg)
                const image_API_URL=`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`
                axios.post(image_API_URL,formData)
                .then(res=>{
                    console.log('after image upload',res.data.data.url)
                    // update user profile
                    const userProfile={
                        displayName:data.name,
                        photoURL:res.data.data.url
                    }
                    updateUserProfile(userProfile)
                    .then(()=>{
                        console.log('user profile updated')
                        navigate(location.state|| '/')
                    })
                    .then(error=>{
                        console.log(error)
                    })
                })
                

            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div >
            <h1 className='text-4xl font-bold'>Create an Account</h1>
            <p className='text-xl '>Register with ZapShift</p>


            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <fieldset className="fieldset">
                            {/* Name */}
                            <label className="label">Name</label>
                            <input type="text" {...register('name', { required: true })} className="input" placeholder="Your Name" />
                            {
                                errors.name?.type === 'required' && <p className='text-red-500'>Name is required</p>
                            }
                            {/* PhotoURL */}
                            <label className="label">PhotoURL</label>
                            <input type="file" {...register('photo', { required: true })} className="file-input" placeholder="Your Photo" />
                            {
                                errors.file?.type === 'required' && <p className='text-red-500'>Photo is required</p>
                            }
                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                            {errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>}
                            {/* password */}
                            <label className="label">Password</label>
                            <input type="password" {...register('password', {
                                required: true,
                                minLength: 6,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\-=/\\]).{8,}$/
                            })} className="input" placeholder="Password" />
                            {
                                errors.password?.type === 'required' && <p className='text-red-500'>Password is required
                                </p>
                            }

                            {
                                errors.password?.type === 'minLength' && <p className='text-red-500'>Password is must 6 character or longer</p>
                            }
                            {
                                errors.password?.type === 'pattern' && <p className='text-red-500'>Password must at least one uppercase, at least one lowercase ,at least one number, and at least one special characters </p>
                            }
                            
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                        <p>Already have an account? <Link state={location.state} className='text-blue-300 underline' to='/login' >Login</Link></p>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>


        </div>
    );
};

export default Register;