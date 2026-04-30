import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';


const Banner = () => {
    return (
        <div className='my-10 '>
           <div>
             <section
      className="relative h-[70vh] flex items-center justify-center text-center text-white rounded-lg"
      style={{
        backgroundImage: "url('/banner4.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
       
        <div className="max-w-9xl mx-auto px-5">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 max-w-2xl text-white"
           style={{
      WebkitTextStroke: "2px purple"
    }}>
           Discover Your Perfect <span className="text-4xl md:text-7xl font-bold mb-4 max-w-2xl text-white"
           style={{
      WebkitTextStroke: "2px gold"
    }}>Aesthetic</span>
          </h1>
           <Link href={"/all-tiles"}>
            <Button className="bg-linear-to-r from-pink-500 via-purple-500 to-yellow-300 text-lg py-5 px-6 border-purple-400 border-2 mt-10 transition-all duration-300 hover:scale-110 hover:from-blue-600 hover:via-blue-400 hover:to-blue-200 hover:border-blue-500 animate__animated animate__pulse animate__infinite animate__slow">Browse Now</Button>
          </Link>
          </div>
         
      </section>
    
           </div>
     
        </div>
    );
};

export default Banner;