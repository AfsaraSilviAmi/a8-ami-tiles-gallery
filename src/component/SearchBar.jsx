'use client'
import TileCard from '@/component/TileCard';
import { Description, Label, SearchField } from '@heroui/react';
import React, { useState } from 'react';

const SearchBar = ({tiles}) => {
    const [search, setSearch] = useState('')
    const filteredTiles = tiles.filter(tile => tile.title.toLowerCase().includes(search.toLowerCase()))
    return (
        <div>
            <div>
                <SearchField name="search">
        <Label>Search Tiles</Label>
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input className="w-[280px]" placeholder="Search tiles..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
          <SearchField.ClearButton />
        </SearchField.Group>
        <Description>Enter the tile name to search for the tile</Description>
      </SearchField>
            </div>
            {
                filteredTiles.length > 0 ? (<div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 my-5'>
                {
                  filteredTiles.map(tile =><TileCard key={tile.id} tile={tile}></TileCard>)
                }
            </div>) : (<div className='flex justify-center items-center h-[80vh]'>
                <div className='font-bold text-4xl text-gray-600'><span className='text-red-400'>NO</span> Tiles of such name is Found! Seach for another tile!</div>
            </div>)
            }
        </div>
    );
};

export default SearchBar;