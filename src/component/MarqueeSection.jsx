import { Button } from '@heroui/react';
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeSection = () => {
    const tilesNews = [
  {
    "id": 1,
    "text": "New Arrivals: Marble Elegance Tiles ✨"
  },
  {
    "id": 2,
    "text": "New Arrivals: Ocean Blue Ceramic Collection ✨"
  },
  {
    "id": 3,
    "text": "Weekly Feature: Modern Geometric Patterns"
  },
  {
    "id": 4,
    "text": "Weekly Feature: Minimalist White Stone Series"
  },
  {
    "id": 5,
    "text": "Join the Community: Share your interior designs 💖"
  },
  {
    "id": 6,
    "text": "Trending: Luxury Matte Finish Tiles"
  },
  {
    "id": 7,
    "text": "Limited Offer: Premium Kitchen Wall Tiles"
  }
]
    return (
        <div className='flex bg-gray-200 py-4 rounded-lg'>
           <Button className="rounded-lg bg-linear-to-r from-yellow-300 via-purple-500 to-pink-600">New Tiles</Button>
            <Marquee>
             {
                tilesNews.map(item => <span key={item.id} className='mx-8'>{item.text}</span>)
             }
            </Marquee>
        </div>
    );
};

export default MarqueeSection;