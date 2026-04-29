import SearchBar from '@/component/SearchBar';
import React from 'react';

const AllTiles = async() => {
    const res = await fetch("https://a8-ami-tiles-gallery.vercel.app/data.json")
    const tiles = await res.json();
    return (
        <div className='my-10'>
            <h1 className='text-3xl font-bold text-center'>The Tiles Gallery</h1>
            <SearchBar tiles={tiles}></SearchBar>
        </div>
    );
};

export default AllTiles;