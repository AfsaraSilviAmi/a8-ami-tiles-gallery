'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Card} from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { BiEdit } from 'react-icons/bi';

const ProfilePage = () => {
     const userData = authClient.useSession();
         const user = userData.data?.user;
         console.log(user);
    
    return (
        <div className='my-10'>
           
                <p className='font-bold text-3xl text-center text-pink-500 mb-5'>Welcome, <span className='text-black'>{user?.name}</span></p>
                 <Card className='flex flex-col justify-center items-center h-[60vh] shadow-2xl md:w-[40%] mx-auto'>
                <Avatar className='w-40 h-40'>
                        <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy='no-referrer' />
                        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                      </Avatar>
                      <p className='font-semibold text-2xl'>{user?.name}</p>
                      <p className='text-lg text-gray-600'>{user?.email}</p>
                     
     <Link href={"/update-profile"}> <Button className="bg-linear-to-r from-pink-500 via-purple-500 to-yellow-300 transition-all duration-300 hover:scale-110 hover:from-blue-600 hover:via-blue-400 hover:to-blue-200 hover:border-blue-500 text-lg border border-purple-400"><BiEdit></BiEdit>Edit Profile</Button></Link>
     
   
            </Card>
        </div>
    );
};

export default ProfilePage;