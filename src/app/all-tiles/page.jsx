import TileCard from '@/component/TileCard';
import React from 'react';

const AllTiles = async() => {
    const res = await fetch("https://a8-ami-tiles-gallery.vercel.app/data.json")
    const tiles = await res.json();
    return (
        <div className='my-10'>
            <h1 className='text-3xl font-bold text-center'>The Tiles Gallery</h1>
            <div className='grid md:grid-cols-4 gap-4 my-5'>
                {
                    tiles.map(tile =><TileCard key={tile.id} tile={tile}></TileCard>)
                }
            </div>
        </div>
    );
};

export default AllTiles;