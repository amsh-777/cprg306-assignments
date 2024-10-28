import ItemList from './item-list';

export default function Page() {
  return (
    <main className="flex items-start justify-start min-h-screen bg-gray-900 text-white">
      
      <div className="w-full max-w-md p-6 ml-8 space-y-6">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <ItemList />
      </div>
    </main>
  );
}