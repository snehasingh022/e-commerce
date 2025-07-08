import React from 'react'
import { useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const Login = () => {
  const [currentState,setCurrentState] = useState('Login');
  const {setToken,backendUrl,token,navigate} = useContext(ShopContext);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');


  const onSubmitHandler = async () => {
    event.preventDefault();
    try {
      if(currentState === 'Sign Up'){
        const response = await axios.post(backendUrl + "/api/user/register", {name,email,password});
        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem('token',response.data.token);
          
        }else{
          toast.error(response.data.message);
        }
      }else{
        const response = await axios.post(backendUrl + "/api/user/login", {email,password});
        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem('token',response.data.token);
          navigate('/');
        }else{
          toast.error(response.data.message);
        }
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

 useEffect(() => {
  if(token){
    navigate('/');
  }
 },[token]);


  return (
    <form onSubmit={onSubmitHandler}  className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800' action="">
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />

      </div>
      {currentState === 'Login' ? '' : <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Name' required /> }
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Email' required />
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Password' required />
      <div className='flex justify-between w-full text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot Password?</p>
        {
          currentState === 'Login' ? <p className='text-sm text-gray-500'>Don't have an account? <span className='text-rose-400 cursor-pointer' onClick={()=>setCurrentState('Sign Up')}>Sign Up</span></p> : <p className='text-sm text-gray-500'>Already have an account? <span className='text-rose-400 cursor-pointer' onClick={()=>setCurrentState('Login')}>Login</span></p>
        }
      </div>
      <button type='submit' className='w-full bg-rose-400 text-white px-3 py-2 rounded-md'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>

    </form>
  )
}

export default Login