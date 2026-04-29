import { Card, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const TileDetails = async({params}) => {
    const {id} = await params;
    const res = await fetch("https://a8-ami-tiles-gallery.vercel.app/data.json")
    const tiles = await res.json();
    const tile = tiles.find(item => item.id === id)
    return (
        <div>
            <h1 className='font-bold text-3xl text-center my-5'>Details page</h1>
           <Card className='my-10 p-4'>
             <div className='grid grid-cols-2'>
                <div>
                <Image src={tile.image} alt={tile.title} width={400} height={200}></Image>
            </div>
            <div>
                <p>{tile.title}</p>
                <p>{tile.description}</p>
                <div>
                    <Chip color='success'>{tile.material}</Chip>
                    <Chip color='accent'>{tile.dimensions}</Chip>
                </div>
            </div>
            </div>
           </Card>
        </div>
    );
};

export default TileDetails;