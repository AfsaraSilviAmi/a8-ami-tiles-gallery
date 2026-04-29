import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const TileCard = ({tile}) => {
    return (
        <div>
            <Card>
                <div className='relative w-full aspect-square'>
                    <Image src={tile.image} alt={tile.title} fill className='rounded-xl object-cover'></Image>
                    <Chip className='absolute right-2 top-2'>{tile.category}</Chip>
                </div>
                <p className='font-semibold text-lg'>{tile.title}</p>
                <p className='text-purple-700 font-bold'>${tile.price}</p>
                <Button className="w-full bg-linear-to-r from-pink-500 via-purple-500 to-yellow-300 transition-all duration-300 hover:scale-110 hover:from-blue-600 hover:via-blue-400 hover:to-blue-200 hover:border-blue-500">View Details</Button>
            </Card>
        </div>
    );
};

export default TileCard;