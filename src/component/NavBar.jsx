'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import 'animate.css';

const NavBar = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const pathname = usePathname()
     const userData = authClient.useSession();
     const user = userData.data?.user;

     const handleLogOut = async() =>{
      await authClient.signOut()
     }

    return (
        <div>
           <div className="shadow-2xs relative">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
            <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
           
         <Link href={"/"} className='flex gap-3'> <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-bold text-xl">Tiles <span className='text-pink-400'>gallery</span></h3></Link>
        </div>

        <ul className="hidden md:flex items-center gap-5 text-sm">
          <li>
            <Link className={`${pathname === '/' ? 'text-purple-500 border-b-purple-500 border-b' : ''}`} href={"/"}>Home</Link>
          </li>
          <li>
            <Link className={`${pathname === '/all-tiles' ? 'text-purple-500 border-b-purple-500 border-b' : ''}`} href={"/all-tiles"}>All Tiles</Link>
          </li>
          <li>
            <Link className={`${pathname === '/profile' ? 'text-purple-500 border-b-purple-500 border-b' : ''}`} href={"/profile"}>My Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          {
            !user && (<ul className="flex items-center  text-sm">
            <li>
              <Link href={"/signin"}><Button className="bg-linear-to-r from-pink-500 via-purple-500 to-yellow-300 transition-all duration-300 hover:scale-110 hover:from-blue-600 hover:via-blue-400 hover:to-blue-200 hover:border-blue-500 animate__animated animate__pulse animate__infinite animate__slow">Login</Button></Link>
            </li>
          </ul>)
          }
          {
            user && (
      <div className='flex items-center gap-2'>
        <Avatar>
        <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy='no-referrer' />
        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
      </Avatar>
      <Button onClick={handleLogOut} className="bg-linear-to-r from-pink-500 via-purple-500 to-yellow-300 transition-all duration-300 hover:scale-110 hover:from-blue-600 hover:via-blue-400 hover:to-blue-200 hover:border-blue-500">Logout</Button>
      </div>)
          }
        </div>
      
      </nav>
       {isMenuOpen && (
        <div className="absolute left-0 top-full bg-white border-t shadow-md md:hidden z-50">
          <ul className="flex flex-col gap-2 p-4 text-sm">
            <li>
            <Link className={`${pathname === '/' ? 'text-purple-500 border-b-purple-500 border-b' : ''}`} href={"/"}>Home</Link>
          </li>
          <li>
            <Link className={`${pathname === '/all-tiles' ? 'text-purple-500 border-b-purple-500 border-b' : ''}`} href={"/all-tiles"}>All Tiles</Link>
          </li>
          <li>
            <Link className={`${pathname === '/profile' ? 'text-purple-500 border-b-purple-500 border-b' : ''}`} href={"/profile"}>My Profile</Link>
          </li>
          </ul>
        </div>
      )}
    </div>
        </div>
    );
};

export default NavBar;