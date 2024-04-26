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
     <h1 className='text-lg font-bold text-center'>About</h1>
     <div className='text-base text-white mt-2 flex flex-col'>
        <button  className='hover:underline'>Contact us </button>
        <button  className='hover:underline'>About us </button>
        <button  className='hover:underline'> Careers</button>
        <button  className='hover:underline'> Flipkart stories</button>
        <button  className='hover:underline'> Press </button>
        <button  className='hover:underline'>Corporate information </button>
     </div>
    </div>
    <div className='max-sm:p-3'>
    <h1 className='text-lg font-bold '>Group companies</h1>
    <div className='text-base text-white mt-2 flex flex-col'>
        <button  className='hover:underline'>Myntra </button>
        <button  className='hover:underline'>Flipkart wholesale</button>
        <button  className='hover:underline'> ClearTrip</button> 
        <button  className='hover:underline'>Shopsy</button>

     </div>
    </div>
    <div className='max-sm:p-3'>
    <h1 className='text-lg font-bold text-center'>Help</h1>
    <div className='text-base text-white mt-2 flex flex-col'>
        <button  className='hover:underline'>Payments </button>
        <button  className='hover:underline'>Shipping</button>
        <button  className='hover:underline'> Cancellations and returns</button>
        <button  className='hover:underline'>FAQ</button>
        <button  className='hover:underline'>Report infringement</button>
      
     </div>
    </div>
    <div className='max-sm:p-3'>
    <h1 className='text-lg font-bold text-center'>Consumer policy</h1>
    <div className='text-base text-white mt-2 flex flex-col'>
        <button  className='hover:underline'>Cancellations and returns </button>
        <button  className='hover:underline'>Terms of use</button>
        <button  className='hover:underline'>Security</button>
        <button  className='hover:underline'>Privacy</button>
        <button  className='hover:underline'>Sitemap</button>
        <button  className='hover:underline'>Grievance redressal</button>
        <button  className='hover:underline'>EPR compliance</button>
      
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
          <button > <BiLogoFacebookSquare/></button> 
          <button>    <PiYoutubeLogo/></button> 
          <button>   <RiTwitterXFill/></button> 
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