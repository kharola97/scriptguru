import React ,{useState} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";
import { FaPerson } from "react-icons/fa6";




const Navbar = () => {
    const [showdropdown, setShowDropdown] = useState(false)
    const [showMenu, setShowMenu] = useState(true)
    const [showSearch, setShowSearch] = useState(false)
    const handleDropDown = () =>{
        setShowDropdown(!showdropdown)
    }
    const handleMenu = ()=>{
        setShowMenu(!showMenu)
    }

    const handleSearch = () =>{
        setShowSearch(!showSearch)
    }
    return (
      <div className='container flex justify-around gap-5 items-center mt-2 min-w-full p-4'>
        <h1 className='font-bold text-lg text-blue-700 mt-3'>Flipkart</h1>
        <div className='relative '  onClick={handleSearch}>
        <input
          type='search'
          placeholder='...Search for products brand and more'
          className='p-4 px-9 bg-slate-100 font-semibold rounded-lg max-sm:hidden '
        />
        <div className={`absolute z-20 right-0 left-0 w-48 bg-white rounded-md shadow-lg origin-top-right divide-y divide-gray-100 focus:outline-none ${showSearch ? "block" : "hidden"} max-sm:hidden`}
  onMouseOut={handleSearch}>
     <h1 className='font-bold'>Discover more</h1>
    <button  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Mobiles </button>
    <button  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Shoes</button>
    <button  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >T shirts</button>
    <button  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Laptops</button>
    <button  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Watches</button>
    <button  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Tv</button>
  </div>
        </div>
        <div className='flex  gap-4 max-[910px]:text-sm'>
        
          <div className="relative flex justify-center items-center  hover:bg-blue-600 rounded-md">
            <div className='text-2xl  max-sm:hidden hover:text-white'>
            <CgProfile/>
            </div>
  <button
    type='submit'
    onMouseOver={handleDropDown}
    
    className='p-4 text-xl font-semibold rounded-md focus:outline-none focus:ring focus:ring-violet-300 hover:text-white  max-sm:hidden'
  >
    Login
  </button>
  <div className={`absolute z-20 right-0 top-14 sm:top-24 mt-2 min-w-96 grid grid-cols-3 bg-white rounded-md shadow-lg origin-top-right divide-y divide-gray-100 focus:outline-none ${showdropdown ? "block" : "hidden"} max-sm:hidden`}
  onMouseOut={handleDropDown}>
  
    <button  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >My Profile</button>
    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Flipkart plus zone</button>
    <button  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Orders</button>
    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Wishlist</button>
    <button  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Rewards</button>
    <button  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Giftcard</button>
    <button  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >settings</button>
    <button  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >recomandation</button>
    <button  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Best selling items</button>
    <button  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Most selling items</button>
    <button  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Order for your friend</button>
    <button  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Redeem coupan codes</button>
    <button  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Discounts</button>
  </div>
</div>
      <div className='flex justify-center items-center  hover:bg-blue-600'>
        <div className='max-sm:hidden text-2xl '>
       <BsCart3/>
       </div>
          <button
            type='submit'
            className='p-4 rounded-md text-xl font-semibold  hover:text-white max-sm:hidden md:text-sm'
          >
            My cart
          </button>
          </div>
          <div className='flex justify-center items-center hover:bg-blue-600'> 
            <div className='text-2xl  max-sm:hidden'> 
                <FaPerson/>
            </div>
          <button
            type='submit'
            className='p-4 rounded-md text-xl font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:ring-violet-300 hover:text-white max-sm:hidden md:text-sm'
          >
            Become a seller
          </button>
          </div>
        </div>
        
        <div className='sm:hidden max-w-[867px]:text-8xl text-4xl' onClick={handleMenu}>
        {showMenu ? <RxHamburgerMenu/> : <RxCross1/>}
        <div className={`absolute right-0 z-30 mt-2 w-48 bg-white rounded-md shadow-lg origin-top-right divide-y divide-gray-100 focus:outline-none ${showMenu ? "hidden" : "block"}`}>
        <button  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >My Profile</button>
    <button  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Flipkart plus zone</button>
    <button  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Orders</button>
        </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;