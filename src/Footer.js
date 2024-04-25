import React from 'react'
import { BiLogoFacebookSquare } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { PiYoutubeLogo } from "react-icons/pi";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FiCreditCard } from "react-icons/fi";





const Footer = () => {
  return (
    <div className='container min-h-full min-w-full bg-slate-500 absolute mt-80 mb-0'> 
    <div className=' container min-w-full flex justify-around p-4 flex-wrap max-sm:flex max-sm:flex-col'>
    
    <div className='max-sm:p-3'>
     <h1 className='text-lg font-bold '>About</h1>
     <div className='text-base text-white mt-2 flex flex-col'>
        <a  className='hover:underline'>Contact us </a>
        <a  className='hover:underline'>About us </a>
        <a  className='hover:underline'> Careers</a>
        <a  className='hover:underline'> Flipkart stories</a>
        <a  className='hover:underline'> Press </a>
        <a  className='hover:underline'>Corporate information </a>
     </div>
    </div>
    <div className='max-sm:p-3'>
    <h1 className='text-lg font-bold '>Group companies</h1>
    <div className='text-base text-white mt-2 flex flex-col'>
        <a  className='hover:underline'>Myntra </a>
        <a  className='hover:underline'>Flipkart wholesale</a>
        <a  className='hover:underline'> ClearTrip</a> 
        <a  className='hover:underline'>Shopsy</a>

     </div>
    </div>
    <div className='max-sm:p-3'>
    <h1 className='text-lg font-bold '>Help</h1>
    <div className='text-base text-white mt-2 flex flex-col'>
        <a  className='hover:underline'>Payments </a>
        <a  className='hover:underline'>Shipping</a>
        <a  className='hover:underline'> Cancellations and returns</a>
        <a  className='hover:underline'>FAQ</a>
        <a  className='hover:underline'>Report infringement</a>
      
     </div>
    </div>
    <div className='max-sm:p-3'>
    <h1 className='text-lg font-bold '>Consumer policy</h1>
    <div className='text-base text-white mt-2 flex flex-col'>
        <a  className='hover:underline'>Cancellations and returns </a>
        <a  className='hover:underline'>Terms of use</a>
        <a  className='hover:underline'>Security</a>
        <a  className='hover:underline'>Privacy</a>
        <a  className='hover:underline'>Sitemap</a>
        <a  className='hover:underline'>Grievance redressal</a>
        <a  className='hover:underline'>EPR compliance</a>
      
     </div>
    </div>
    <div className='flex justify-around gap-10 border-l-2 px-2 flex-wrap max-sm:flex max-sm:flex-col max-sm:border-none'>
    <div className='max-w-60'>
    <h1 className='text-lg font-bold '>Mail us</h1>
    <h1 className='text-white mt-2'>
        Flipkart internet private limited, buildings Alyssa, Begonia & Clove emabssy tech village outer ring road Devarabisanahalli village Bengaluru 580103 Karnataka India,

    </h1>
    <div className='mt-2'>
        <h1 className='text-2xl'>Socials</h1>
        <div className='flex justify-between mt-1 text-2xl'>
          <a > <BiLogoFacebookSquare/></a> 
          <a>    <PiYoutubeLogo/></a> 
          <a>   <RiTwitterXFill/></a> 
        </div>
    </div>
    </div>
    <div className='max-w-60'> 
        <h1 className='text-lg font-bold '>Registered email address</h1>
        <h1 className='text-white mt-2'>
            Flipkart internet private limited, Buildings Alyssa, Begonia & Clove embassy tech village Outer ring road Devarabisanahalli village Bengaluru 580103 Karnataka India,<br/> CIN: U51109KA2012PTCO66107 <br/>Telephone : <a className='text-blue-400' href='#'>044-45614700</a>
        </h1>
        </div>
    </div>
    </div>
   <div className='mt-2 flex justify-between  p-4 border-t-2'>
    <div className=' w-4/5 flex justify-center gap-7 text-lg flex-wrap text-slate-100 '>
    <button>Become a seller</button>
    <button>Advertise</button>
    <button>Gift cards</button>
    <button>Help center </button>
    <button>&copy 2007-2024 flipkart.com</button>
    <button>Become a seller</button>
    </div>
    <div className='text-2xl w-1/2 flex justify-center gap-9'>
        <FaCcMastercard/>
        <FaCcVisa/>
        <FiCreditCard/>
    </div>
   </div>
    </div>
  )
}

export default Footer