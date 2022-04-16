import React, {useEffect} from 'react';
import { useState } from 'react';
import '../App.css'
import Dropdown from './Dropmenu';


function Tabs({fullMenu, setFiltered, activeCategory, setActiveCategory}) {

    useEffect(() => {
        const filtered = fullMenu.filter((food) => 
        food.category.includes(activeCategory)
        );
        
        setFiltered(filtered);
    }, [activeCategory]);

   
const [selected, setSelected] = useState('Select');

   

  return (
    <>
    <div className='bg-[#13161f] pt-32 pb-12 flex justify-center space-x-2'>
      
  
      <div className='hidden  tabs md:flex justify-center space-x-2 text-white '>

        <button className={activeCategory === 'Paghman Kabob Dinners' ? 'text-black bg-slate-300 opacity-90 px-4 py-2 rounded-md' : 'px-4 py-2 border-[2px] rounded border-blue-300 border-opacity-20'} onClick={() => setActiveCategory('Paghman Kabob Dinners')}>Paghman Kabob Dinners</button> 
        <button className={activeCategory === 'Safi Special' ? 'text-black bg-slate-300 px-4 py-2 rounded-md' : 'px-4 py-2 border-[2px] rounded border-blue-300 border-opacity-20'} onClick={() => setActiveCategory('Safi Special')}>Safi Special</button>
        <button className={activeCategory === '3 Skewers Special' ? 'text-black bg-slate-300 px-4 py-2 rounded-md' : 'px-4 py-2 border-[2px] rounded border-blue-300 border-opacity-20'} onClick={() => setActiveCategory('3 Skewers Special')}>3 Skewers Special</button>
        {/* <button className={activeCategory === 'Family Deal' ? 'text-black bg-slate-300 px-4 py-2 rounded-md' : 'px-4 py-2 '} onClick={() => setActiveCategory('Family Deal')}>Family Deal</button> */}
        <button className={activeCategory === 'Kabob With Salad' ? 'text-black bg-slate-300 px-4 py-2 rounded-md mr-2' : 'px-4 py-2 border-[2px] rounded border-blue-300 border-opacity-20'} onClick={() => setActiveCategory('Kabob With Salad')}>Kabob With Salad</button>
        
       

      </div>
      <Dropdown selected={selected} setSelected={setSelected} setActiveCategory={setActiveCategory}/>
      
    </div>
    <hr className='mb-10'/>
    </>
  )
}

export default Tabs

// click on button --> fxn --> setActiveTab()