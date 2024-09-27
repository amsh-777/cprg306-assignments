// /app/week-3/item-list.js
import Item from './item';

export default function ItemList() {

  const item1 = {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  };
   
  const item2 = {
    name: "bread 🍞",
    quantity: 2,
    category: "bakery",
  };
   
  const item3 = {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
  };
   
  const item4 = {
    name: "bananas 🍌",
    quantity: 6,
    category: "produce",
  };
   
  const item5 = {
    name: "broccoli 🥦",
    quantity: 3,
    category: "produce",
  };
   
  const item6 = {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
  };
   
  const item7 = {
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "canned goods",
  };
   
  const item8 = {
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
  };
   
  const item9 = {
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
  };
   
  const item10 = {
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "household",
  };
   
  const item11 = {
    name: "dish soap 🍽️",
    quantity: 1,
    category: "household",
  };
   
  const item12 = {
    name: "hand soap 🧼",
    quantity: 4,
    category: "household",
  };

  // Destructure each item individually
  const { name: name1, quantity: quantity1, category: category1 } = item1;
  const { name: name2, quantity: quantity2, category: category2 } = item2;
  const { name: name3, quantity: quantity3, category: category3 } = item3;
  const { name: name4, quantity: quantity4, category: category4 } = item4;
  const { name: name5, quantity: quantity5, category: category5 } = item5;
  const { name: name6, quantity: quantity6, category: category6 } = item6;
  const { name: name7, quantity: quantity7, category: category7 } = item7;
  const { name: name8, quantity: quantity8, category: category8 } = item8;
  const { name: name9, quantity: quantity9, category: category9 } = item9;
  const { name: name10, quantity: quantity10, category: category10 } = item10;
  const { name: name11, quantity: quantity11, category: category11 } = item11;
  const { name: name12, quantity: quantity12, category: category12 } = item12;

  // Render each Item component manually using destructured variables
  return (
    <ul className="bg-white shadow-md rounded-lg divide-y divide-gray-200">
      <Item name={name1} quantity={quantity1} category={category1} />
      <Item name={name2} quantity={quantity2} category={category2} />
      <Item name={name3} quantity={quantity3} category={category3} />
      <Item name={name4} quantity={quantity4} category={category4} />
      <Item name={name5} quantity={quantity5} category={category5} />
      <Item name={name6} quantity={quantity6} category={category6} />
      <Item name={name7} quantity={quantity7} category={category7} />
      <Item name={name8} quantity={quantity8} category={category8} />
      <Item name={name9} quantity={quantity9} category={category9} />
      <Item name={name10} quantity={quantity10} category={category10} />
      <Item name={name11} quantity={quantity11} category={category11} />
      <Item name={name12} quantity={quantity12} category={category12} />
    </ul>
  );
}
