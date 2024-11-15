"use client";

import { FormEvent, useState } from 'react';
import axios from "axios";
import toast from 'react-hot-toast';
import { useSearchParams } from 'next/navigation';
import { subscribe } from '@/actions/add-subscribe';
import { PacmanLoader } from 'react-spinners';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams()
  const userId = searchParams.get("userId") as string

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
   

    try {
      await subscribe({email, userId}).then((res)=> {
       if(res.error){
toast.error(res.error)
       }else {
         toast.success(res?.success as string);
       }
      })
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
      setEmail("")
    }
  }

  if (loading) {
    
    return (
      <div className="flex justify-center items-center h-screen">
       <PacmanLoader
        color={"#36d7b7"}  
        loading={loading}
        size={25}
       margin={2}
      />
      </div>
    )
  }

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center h-screen">
        <div>
          <h1 className="text-7xl pb-8 capitalize">NewsLetter</h1>
        </div>
        <form
          className="flex w-full max-w-md border rounded overflow-hidden"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-4 w-full text-gray-700 leading-tight focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-8 bg-blue-500 text-white font-bold py-4 rounded-r hover:bg-blue-600 focus:outline-none"
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
}
