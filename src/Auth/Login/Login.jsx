import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hook/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const {register,handleSubmit, formState:{errors}}=useForm()

    const {SignInUser,resetPassword}=useAuth()
    const location=useLocation()
    const navigate=useNavigate()
    

    const handleLogin=(data)=>{
        console.log(data)
        SignInUser(data.email,data.password)
        .then(result=>{
            console.log(result.user)
            navigate(location.state || '/')
        })
        .catch(error=>{
            console.log(error)
        })

        

    }
   
    return (
         <div>
            <h1 className='text-4xl font-bold'>Welcome Back</h1>
            <p className='text-xl '>Login with ZapShift</p>
            
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">
            {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email"  {...register('email',{required:true})}/>
          {
            errors.email?.type==='required' && <p className='text-red-500'>Email is required</p>
          }
          {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" {...register('password',{required:true,
            minLength:6
             
          })} />
          {
            errors.password?.type==='required' && <p className='text-red-500'>Password is requires</p>
          }
          {
            errors.password?.type==='minLength' && <p>Password must be 6 Character</p>
          }
         
          <div><a  className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
        <p>Don’t have any account? <Link state={location.state} className='text-blue-300 underline' to='/register' >Register</Link></p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
    
    
         </div>
    );
};

export default Login;