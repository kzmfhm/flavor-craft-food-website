"use client";
import React, { useState, useRef } from 'react';
import './style.css';
import FastFood from './fastFood';
import Pizza from './pizza'
import Sweet from './sweet'

const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categoryRef = useRef(null);

  const handleItemClick = (category) => {
    setSelectedCategory(category);

    // Scroll to the selected category component
    if (categoryRef.current) {
      categoryRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
 
    <div id="categorySection" className="py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          <span>
            <b>CATEGORIES</b>
          </span>
        </h1>
        <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8">
       
          <div className='categories'>
            {/* Fastfood */}
            <div className="w-full sm:w-1/2 lg:w-1/4" onClick={() => handleItemClick('fastfood')}>
              <div className="product-box-layout4 fastfood">
                <div className="item-figure">
                  <img
                    src="./images/fastfood.webp"
                    alt="Category"
                    className="w-full h-full object-cover"
                    width={300}
                  />
                </div>
                <div className="item-content p-4">
                  <h3 className="card-title text-lg font-semibold mb-2">Fast Food</h3>
                </div>
              </div>
            </div>

            {/* Sweet */}
            <div className="w-full sm:w-1/2 lg:w-1/4" onClick={() => handleItemClick('sweet')}>
              <div className="product-box-layout4 sweet">
                <div className="item-figure">
                  <img
                    src="./images/sweet.webp"
                    alt="Category"
                    className="w-full h-full object-cover"
                    width={300}
                  />
                </div>
                <div className="item-content p-4">
                  <h3 className="card-title text-lg font-semibold mb-2">Sweet Backers</h3>
                </div>
              </div>
            </div>

            {/* Pizza */}
            <div className="w-full sm:w-1/2 lg:w-1/4" onClick={() => handleItemClick('pizza')}>
              <div className="product-box-layout4 pizza">
                <div className="item-figure">
                  <img
                    src="./images/pizza.webp"
                    alt="Category"
                    className="w-full h-full object-cover"
                    width={300}
                  />
                </div>
                <div className="item-content p-4">
                  <h3 className="card-title text-lg font-semibold mb-2">Pizza Shop</h3>
                </div>
              </div>
            </div>
           
          </div>
         
        </div>
       
      </div>
     
      <div ref={categoryRef}>
        {selectedCategory === 'fastfood' && <FastFood />}
        {selectedCategory === 'sweet' && <Sweet />}
        {selectedCategory === 'pizza' && <Pizza />}
       
      </div>
      
    </div>
  
  );
};

export default CategorySection;
