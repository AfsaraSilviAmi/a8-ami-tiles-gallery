import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className=' bg-pink-50 shadow-xs'>
        <div className='grid grid-cols-3 mt-5 w-11/12 mx-auto py-5'>
            <div className='space-y-1.5'>
                <Link href={"/"} className='flex gap-3'> <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-bold text-xl">Tiles <span className='text-pink-400'>gallery</span></h3></Link>
          <p className='text-gray-500'>Explore beautiful tiles collection that you thought was possible only in your dreams</p>
            </div>
            <div className='space-y-1.5'>
                <h3 className='font-bold text-lg'>Contact Us:</h3>
                <p className='text-gray-500'>Email: amitilesgallery@gmail.com</p>
                <p className='text-gray-500'>Phone: 01234567890</p>
                <p className='text-gray-500'>Location: Dhaka, Bangladesh</p>
            </div>
            <div className='space-y-2.5'>
                <h3 className='font-bold text-lg'>Follow Us On:</h3>
                <div className='flex gap-4'>
                    <Link href={"/"} className='text-blue-800'><FaFacebook></FaFacebook></Link>
                    <Link href={"/"} className='text-blue-400'> <FaTwitter></FaTwitter></Link>
                    <Link href={"/"} className='text-pink-500'>  <FaInstagram></FaInstagram></Link>
              
                </div>

            </div>
        </div>
        </div>
    );
};

export default Footer;