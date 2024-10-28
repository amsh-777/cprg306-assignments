export default function Item({ name, quantity, category }) {
    return (
        <li className="bg-yellow-400 p-4 my-2 rounded-md shadow-sm text-lg">
        <div className="font-bold capitalize">{name}</div>
        <div className="text-sm italic">Buy {quantity} in {category}</div>
      </li>
    );
  }