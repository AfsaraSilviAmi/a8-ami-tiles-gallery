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
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 my-5'>
                {
                    filteredTiles.map(tile =><TileCard key={tile.id} tile={tile}></TileCard>)
                }
            </div>
        </div>
    );
};

export default SearchBar;