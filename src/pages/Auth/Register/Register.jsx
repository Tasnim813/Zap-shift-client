import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';



const Register = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const location=useLocation()
    console.log('register location',location)   
        const navigate=useNavigate()
  const {registerUser,updateUserProfile}=useAuth()

    const handleRegister=(data)=>{
        console.log('after register', data.photo[0])
      const profileImg=data.photo[0]
        registerUser(data.email,data.password)
        .then(result=>{
          console.log(result.user)
          // store the img and get url
          const formData=new FormData()
          formData.append('image',profileImg)
          const API_IMG_URL=`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_HOST}`
          axios.post(API_IMG_URL,formData)
          .then(res=>{
            console.log('After img upload',res.data.data.url)
            // update use profile
            const userProfile={
              displayName:data.name,
              photoURL:res.data.data.url
            }
            updateUserProfile(userProfile)
            .then(()=>{
              console.log('profile updated done')
              navigate(location?.state || '/')
            })
            .catch(error=>{
              console.log(error)
            })
            
          })

          
        })
        .catch(error=>{
          console.log(error)
        })
        
    }

   
    return (
        <div>
          <h1 className='text-4xl font-bold text-center mt-5'>Create an Account</h1>
          <p className='tex-xl font-bold text-center'>Register with ZapShift</p>
          <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl text-center pb-5">
      <form onSubmit={handleSubmit(handleRegister)} className="card-body">
        <fieldset className="fieldset">
          {/* Name */}
          <label className="label">Name</label>
          <input type="text" {...register('name',{required:true})} className="input" placeholder="Email" />
          {
            errors.name?.type==='required' && <p className='text-red-500'>Name is required</p>
          }
          {/* Photo Image */}
          <label className="label">photo</label>
        
          <input type="file" {...register('photo',{required:true})} className="file-input" placeholder="Your photo" />
          {
            errors.photo?.type==='required' && <p className='text-red-500'>Photo is required</p>
          }
            {/* email */}
          <label className="label">Email</label>
          <input type="email" {...register('email',{required:true})} className="input" placeholder="Email" />
          {
            errors.email?.type==='required' && <p className='text-red-500'>Email is required</p> 
          } 
          {/* password */}
          <label className="label">Password</label>
          <input type="password" {...register('password',{required:true, minLength:6})} className="input" placeholder="Password" />
          {
            errors.password?.type==='required' && <p className='text-red-500'>Password is required</p>
          }
          {
            errors.password?.type==='minLength' && <p className='text-red-500'>Password must be 6 characters and longer</p>
          }
          
          <button  className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p>Already hve an account  <Link className='text-red-500 underline' state={location.state} to='/login'>Login</Link> </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
        </div>
    );
};

export default Register;