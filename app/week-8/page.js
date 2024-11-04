"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  
  const handleItemSelect = (itemName) => {
  
    const cleanedName = itemName
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '') 
      .replace(/[^a-zA-Z\s]/g, '') 
      .trim() 
      .split(' ')[0];
  
    
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="flex items-start justify-between min-h-screen bg-gray-900 p-6">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold mb-4 text-white">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-full max-w-lg ml-8">
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
      </div>
    </main>
  );
}
