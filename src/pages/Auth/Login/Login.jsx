import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useLocation } from 'react-router';

const Login = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const {signInUser}=useAuth()
    const location=useLocation()
    const navigate=useNavigate()
    console.log('In the login page',location)

    const handleLogin=(data)=>{
        console.log(data)
        signInUser(data.email,data.password)
        .then(result=>{
            console.log(result)
            navigate(location?.state|| '/')
        })
        .catch(error=>{
            console.log(error)
        })

    }
    return (
        <div>
          <h1 className='text-4xl font-bold text-center mt-5 '>Welcome Back</h1>
          <p className='text-xl font-bold text-center mb-2'>Login with ZapShift</p>
          <div className="card mx-auto text-center pb-5 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(handleLogin)} className="card-body">
        <fieldset className="fieldset">
            {/* email */}
          <label className="label">Email</label>
          <input type="email" {...register('email',{required:true})} className="input" placeholder="Email" />
          {
            errors.email?.type==='required' && <p className='text-red-500'>Email is required</p>
          }
            {/* password */}
          <label className="label">Password</label>
          <input type="password" {...register('password', {required:true, minLength:6})} className="input" placeholder="Password" />
          {
            errors.password?.type==='required' && <p className='text-red-500'>Password is required</p>
          }
          {
            errors.password?.type==='minLength' && <p className='text-red-500'>Password must be 6 character or longer</p>
          }
         
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>New to Zap shift <Link className='text-red-500 underline' state={location.state} to='/register'>Register</Link> </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
        </div>
    );
};

export default Login;