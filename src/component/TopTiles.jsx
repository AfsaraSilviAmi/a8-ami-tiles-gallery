import React from 'react';
import TileCard from './TileCard';

const TopTiles = async() => {
    const res = await fetch("https://a8-ami-tiles-gallery.vercel.app/data.json")
    const data = await res.json();
    const topTiles = data.slice(0,4)
    return (
        <div className='my-10'>
            <h1 className='text-3xl font-bold text-center'>Featured Tiles</h1>
           <div className='grid sm:grid-cols-2 md:grid-cols-4 my-5 gap-4'>
            {
                topTiles.map(tile => <TileCard key={tile.id} tile={tile}></TileCard>)
            }
           </div>
        </div>
    );
};

export default TopTiles;