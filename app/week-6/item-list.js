'use client';

import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const groupItemsByCategory = () => {
    return itemsData.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});
  };

  const sortedItems = sortBy === 'group'
    ? groupItemsByCategory()
    : [...itemsData].sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
          return a.category.localeCompare(b.category);
        }
        return 0;
      });

  return (
    <div className="p-4">
      {/* Sorting Buttons */}
      <div className="mb-4 flex space-x-2">
        <button
          className={`p-2 rounded-md text-white ${sortBy === 'name' ? 'bg-blue-500' : 'bg-blue-300'}`}
          onClick={() => setSortBy('name')}
        >
          Sort by Name
        </button>
        <button
          className={`p-2 rounded-md text-white ${sortBy === 'category' ? 'bg-blue-500' : 'bg-blue-300'}`}
          onClick={() => setSortBy('category')}
        >
          Sort by Category
        </button>
        <button
          className={`p-2 rounded-md text-white ${sortBy === 'group' ? 'bg-blue-500' : 'bg-blue-300'}`}
          onClick={() => setSortBy('group')}
        >
          Group by Category
        </button>
      </div>

      {/* Render Items */}
      {sortBy === 'group' ? (
        <div>
          {Object.entries(sortedItems).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-lg font-semibold capitalize mb-2">{category}</h2>
              <ul className="list-none mb-4">
                {items.sort((a, b) => a.name.localeCompare(b.name)).map(item => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="list-none">
          {sortedItems.map(item => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
