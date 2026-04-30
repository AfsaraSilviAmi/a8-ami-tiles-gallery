import { Card, Chip } from '@heroui/react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

const TileDetails = async({params}) => {
    const {id} = await params;
    const res = await fetch("https://a8-ami-tiles-gallery.vercel.app/data.json")
    const tiles = await res.json();
    const tile = tiles.find(item => item.id === id)

    if(!tile){
        notFound();
    }
    return (
        <div>
            <h1 className='font-bold text-3xl text-center my-5'>Details page</h1>
           <Card className='my-10 p-4'>
             <div className='grid md:grid-cols-2'>
                <div>
                <Image src={tile.image} alt={tile.title} width={400} height={200} className='rounded-lg'></Image>
            </div>
            <div className='space-y-8'>
                <p className='text-3xl font-semibold'>{tile.title}</p>
               <div className='flex gap-4'><p className='text-xl font-semibold'>Creator:  <Chip className='text-[15px]'>{tile.creator}</Chip></p></div>
                <p className='text-gray-700 font-semibold'>{tile.styleDescription}</p>
                <div className='flex gap-5'>
                    <Chip color='success' variant="primary" className='text-lg p-2 px-3'>{tile.material}</Chip>
                    <Chip color='warning' variant="primary" className='text-lg p-2 px-3'>{tile.dimensions}</Chip>
                    <Chip color='danger' variant="primary" className='text-lg p-2 px-3 animate__animated animate__pulse animate__infinite animate__slow'>${tile.price}</Chip>
                </div>
                <div className='flex gap-4'>
                    {
                        tile.tags.map((tag, index)=> {
                            return <Chip color="accent" key={index} className='text-lg p-2 px-3'>{tag}</Chip>
                        })
                    }
                </div>
            </div>
            </div>
           </Card>
        </div>
    );
};

export default TileDetails;