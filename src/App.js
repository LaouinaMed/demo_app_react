import React, { useState } from 'react';
import SkipCard from './SkipCard';
import './App.css'; 

const App = () => {
  const [selectedSkip, setSelectedSkip] = useState(null);


  const handleSelect = (skip) => {
    
    if (selectedSkip?.size === skip.size) {
      setSelectedSkip(null);  
    } else {
      setSelectedSkip(skip);  
    }
  };

 
  const skips = [
    { size: 4, price: 211, imageSrc: 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg' },
    { size: 5, price: 241, imageSrc: 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg' },
    { size: 6, price: 264, imageSrc: 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/6-yarder-skip.jpg' },
    { size: 8, price: 295, imageSrc: 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/8-yarder-skip.jpg' },
    { size: 10, price: 356, imageSrc: 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/10-yarder-skip.jpg' },
    { size: 12, price: 390, imageSrc: 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/12-yarder-skip.jpg' },
    { size: 14, price: 434, imageSrc: 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/14-yarder-skip.jpg' },
    { size: 16, price: 510, imageSrc: 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/16-yarder-skip.jpg' },
    { size: 20, price: 802, imageSrc: 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg' },
    { size: 40, price: 877, imageSrc: 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/40-yarder-skip.jpg' },
  ];

  return (
    <div className="app">
      <h1>Choose Your Skip Size</h1>
      <div className="skip-selector">
        {}
        {skips.map((skip) => (
          <SkipCard
            key={skip.size}  
            size={skip.size}
            price={skip.price}
            imageSrc={skip.imageSrc}
            onSelect={() => handleSelect(skip)} 
            isSelected={selectedSkip?.size === skip.size} 
          />
        ))}
      </div>

      {}
      {selectedSkip && (
        <div className="selected-skip">
          <h2>Selected Skip: {selectedSkip.size} Yard</h2>
          <p>Price: £{selectedSkip.price}</p>
        </div>
      )}
    </div>
  );
};

export default App;
