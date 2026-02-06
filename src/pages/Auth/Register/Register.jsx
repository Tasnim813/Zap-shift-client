import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';



const Register = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
  const {registerUser}=useAuth()

    const handleRegister=(data)=>{
        console.log(data)
        registerUser(data.email,data.password)
        .then(result=>{
          console.log(result.user)
        })
        .catch(error=>{
          console.log(error)
        })
        
    }

   
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl text-center pb-5">
      <form onSubmit={handleSubmit(handleRegister)} className="card-body">
        <fieldset className="fieldset">
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
          
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p>Already hve an account <Link className='text-red-500 underline' to='/login'>Login</Link> </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
    );
};

export default Register;