import React from 'react'
import Link from 'next/link';
import { UserAuth } from '../context/AuthContext';
import { FiLogOut } from 'react-icons/fi'
import { toast } from 'react-toastify';

const Navbar = () => {
    const {user, googleSignIn, logOut} = UserAuth();
    const handleSignIn = async()=>{
        try {
         await googleSignIn()
         toast.success("Logged in Succesfull", {position: "top-center", autoClose: 3000})
        } catch (error) {
            console.log(error)
        }
    }
    const handleSignOut = async()=>{
        try {
            await logOut();
        } catch (error) {
            console.log(error)
        }
    }
    console.log(user);
  return (
    <main >
            <div className='bg-white min-h-[8vh] md:min-h-[10vh] px-4 w-full border-b-2 flex items-center justify-between'>
        <Link href='/'>
        <img style={{backgroundColor: "white", height: "50px"}} src="https://leetcode.com/static/webpack_bundles/images/logo.c36eaf5e6.svg" alt="" />
        </Link>
        {!user ? (<ul className='flex items-center justify-between'>
            <li onClick={handleSignIn} className='p-2 cursor-pointer'>
                SignUp
            </li>
            <li onClick={handleSignIn} className='p-2 cursor-pointer'>
                Login
            </li>
        </ul>) : (
            <div className='flex gap-8'>
                <div className='cursor-pointer group relative hover:bg-gray-300/25 p-2 rounded-full shadow-lg'>
                    👤
                    <div className='absolute top-10 left-2/4 -translate-x-2/4 mx-auto bg-black/50 text-amber-400 p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out'>
                        <p className='text-sm'>{user.displayName}</p>
                    </div>
                </div>
                <button className='hover:bg-gray-300/25 p-2' onClick={handleSignOut}>
                    <FiLogOut />
                </button>
            </div>
        )}
    </div>
    {!user && (<div className="flex justify-center items-center p-4 text-center">
        <div className="my-[20vh] flex flex-col justify-center items-center max-w-[800px] gap-6">
          <h1 className="text-3xl font-medium">A New Way to Learn</h1>
          <p>LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.</p>
          <button onClick={handleSignIn} className="bg-cyan-400 p-4 rounded-xl py-2 active:scale-[0.94] duration-200">Create Account &rarr;</button>
        </div>
    </div>)}
    </main>
    
  )
}

export default Navbar;