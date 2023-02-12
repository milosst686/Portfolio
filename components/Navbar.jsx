import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';

export const Navbar = () => {
    const [nav,setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }
    
    const homeButtons = ['Home', 'About', 'Projects', 'Contacts'];

  return (
    <div className='fixed w-full  shadow-xl z-[100] '>
        <div className='flex justify-left items-center w-full h-full pl-2'>
        <Image src="/../public/assets/logo.png" alt="/" width='130'height='130' />
        </div>
        <div className='hidden md:flex justify-end mr-10 mb-5' >
        <ul className='uppercase flex'>
            {homeButtons.map((homeButton, index ) =>{
            return(
                <div key={index}>
                    <Link href='/'>
                    <p className='ml-10 text-sm uppercase hover:border-b'>{homeButton}</p>
                    </Link>  
                </div>
            );})}
        </ul>
        </div>
            <div onClick={handleNav} className='flex md:hidden cursor-pointer justify-end mr-10 mb-5'>
                <AiOutlineMenu size={25}/>
            </div>

        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div className='flex w-full items-center justify-between'>
                    <div >
                        <Image src="/../public/assets/logo.png" alt="/" width='100'height='100' />
                        </div>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer'>
                            <AiOutlineClose size={25} />
                        </div>
                </div>
                <div className='border-b border-gray-300 my-5'>
                        <p className='w-[85%] md:w-[90%] py-4'>Let's build some epic game together</p>
                </div>
                <div className='py-4 flex flex-col '>
                    <ul className='uppercase'>
                    {homeButtons.map((homeButton, index) =>{
                    return(
                        <div key={index}>
                            <Link href='/'>
                            <p className='py-4 text-sm'>{homeButton}</p>
                            </Link>  
                        </div>
                    );})}
                    </ul>
                    <div className='pt-20'>
                        <p className='uppercase tracking-widest text-[#5651e5]'> Let's Connect</p>
                        <div className='flex items-center  justify-center my-4 w-full sm:w-[80%]'>
                           <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 mx-5'>
                            <FaLinkedinIn size={20}/>
                           </div>
                           <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 mx-5'>
                            <FaGithub size={20}/>
                           </div>
                           <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 mx-5'>
                            <AiOutlineMail size={20}/>
                           </div>
                           <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 mx-5'>
                            <SiLinktree size={20}/>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
