import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [toggle, setToggle] = useState(true)
    const handleNav = () => {
        setToggle(!toggle);
    }
    return (
        <>
            <div className='bg-[#191A19] max-w-[1500px] flex justify-between items-center px-16 py-[12px] text-white fixed top-0 left-0 right-0 z-10'>
                <NavLink to='/'><h1 className='text-2xl text-white'><span className='font-bold text-[#84CDEE]'>News</span>bay</h1></NavLink>
                <ul className='hidden lg:flex gap-8'>
                    <NavLink to="/"><li className='hover:scale-[1.25] duration-500'>Home</li></NavLink>
                    <NavLink to="/general"><li className='hover:scale-[1.25] duration-500'>General</li></NavLink>
                    <NavLink to="/business"><li className='hover:scale-[1.25] duration-500'>Business</li></NavLink>
                    <NavLink to="/entertainment"><li className='hover:scale-[1.25] duration-500'>Entertainment</li></NavLink>
                    <NavLink to="/health"><li className='hover:scale-[1.25] duration-500'>Health</li></NavLink>
                    <NavLink to="/science"><li className='hover:scale-[1.25] duration-500'>Science</li></NavLink>
                    <NavLink to="/sports"><li className='hover:scale-[1.25] duration-500'>Sports</li></NavLink>
                    <NavLink to="/technology"><li className='hover:scale-[1.25] duration-500'>Technology</li></NavLink>
                </ul>

               {/* ---------------------------Mobile Menu------------------------------------ */}
                <div onClick={handleNav} className='block lg:hidden'>
                    {toggle ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
                </div>
                <ul className={toggle ? 'ease-in-out duration-500 fixed left-[-100%]' : 'fixed left-0 top-0 w-[60%] h-full bg-[#191A19] ease-in-out duration-500'} >
                    <NavLink onClick={handleNav} to="/"><li className='m-8'>Home</li></NavLink>
                    <NavLink onClick={handleNav} to="/general"><li className='m-8 '>General</li></NavLink>
                    <NavLink onClick={handleNav} to="/business"><li className='m-8 '>Business</li></NavLink>
                    <NavLink onClick={handleNav} to="/entertainment"><li className='m-8 '>Entertainment</li></NavLink>
                    <NavLink onClick={handleNav} to="/health"><li className='m-8 '>Health</li></NavLink>
                    <NavLink onClick={handleNav} to="/science"><li className='m-8 '>Science</li></NavLink>
                    <NavLink onClick={handleNav} to="/sports"><li className='m-8 '>Sports</li></NavLink>
                    <NavLink onClick={handleNav} to="/technology"><li className='m-8 '>Technology</li></NavLink>
                </ul>
            </div >
        </>
    )
}

export default Navbar
