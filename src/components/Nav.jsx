import React from 'react'
import { NavLink } from 'react-router'


const Nav = () => {
    return (
        <div>
            <div class="border-b-2  border-gray-100 p-5">
                <nav id="bar" class="flex justify-center ">
                    <div class=" flex  justify-center items-center text-center text-gray-500">
                        <NavLink to="/" end className={({isActive})=>
                            isActive? "text-white text-2xl py-2 px-6 bg-blue-400 rounded" :"text-black text-2xl py-3 px-6"
                        }>Home</NavLink>
                        <NavLink to="/about" end className={({isActive})=>
                            isActive? "text-white text-2xl py-2 px-6 bg-blue-400 rounded" :"text-black text-2xl py-3 px-6"
                        }>About</NavLink>
                        <NavLink to="/blog" end className={({isActive})=>
                            isActive? "text-white text-2xl py-2 px-6 bg-blue-400 rounded" :"text-black text-2xl py-3 px-6"
                        }>Blog</NavLink>
                        <NavLink to="/contact" end className={({isActive})=>
                            isActive? "text-white text-2xl py-2 px-6 bg-blue-400 rounded" :"text-black text-2xl py-3 px-6" 
                        }>Contact</NavLink>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav
