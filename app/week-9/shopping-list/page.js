
"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

const ShoppingListPage = () => {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  
  useEffect(() => {
    if (!user) {
      router.push("/week-9"); 
    }
  }, [user, router]);

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
      router.push("/week-9"); 
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, "")
      .replace(/[^a-zA-Z\s]/g, "")
      .trim()
      .split(" ")[0];

    setSelectedItemName(cleanedName);
  };


  if (!user) return null;

  return (
    <main className="flex items-start justify-between min-h-screen bg-gray-900 p-6">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold mb-4 text-white">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 mt-4 rounded">
          Logout
        </button>
      </div>
      <div className="w-full max-w-lg ml-8">
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
      </div>
    </main>
  );
};

export default ShoppingListPage;
