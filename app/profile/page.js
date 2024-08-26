"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
const Profile = () => {
  const { data: session } = useSession()
    if(!session) {
        const router=useRouter()
        router.push('/login')
    }
  return (
    <>
    
    <form className="max-w-lg mx-auto p-7 bg-white shadow-md rounded-lg mt-8 ">
    <div className="mb-4 ">
      <h1 className='text-gray-700 text-xl font-bold mb-2 text-center pb-2'>Welcome to Profile</h1>
      <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your username"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="profile-pic">
        Profile Pic
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="profile-pic" type="text" placeholder="Enter your Profile Pic"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="cover-pic">
        Cover Pic
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cover-pic" type="text" placeholder="Enter your Cover Pic"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="paypal-id">
        Paypal Id
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="paypal-id" type="text" placeholder="Enter your Paypal Id"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="Paypal-key">
        Paypal Secret
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Paypal-key" type="text" placeholder="Enter your Paypal Secret"/>
    </div>
  
    <div className="flex items-center justify-between">
      <button className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto" type="button">
        Save
      </button>
    </div>
  </form>
    </>
    
  

   
  )
}

export default Profile

